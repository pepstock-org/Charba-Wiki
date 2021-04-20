---
id: Controllers
title: Controllers
hide_title: true
sidebar_label: Controllers
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Controllers

Controllers are able to extend existing chart types or creating new one implementing a specific interface. Leveraging on [Chart.JS](http://www.chartjs.org/) implementation, **Charba** provides the features to extend a controller.

<img src={useBaseUrl('/img/controller.png')} />

:::note limitations
[Chart.JS controller](https://www.chartjs.org/docs/latest/developers/charts.html) provides as set of hooks to create an own controller but you should implement all internal structure which is not fully documented and depends on each implementation.<br/>
For this reason, **Charba** provides the interfaces to create controllers **ONLY** extending existing chart types.
:::

## Creating a controller

To create own chart type, you need to perform some specific and mandatory steps:

 1. create a [controller type](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/controllers/ControllerType.html)
 2. implement the [controller](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Controller.html) interface where all hooks are defined
 3. extend the [dataset](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/Dataset.html) class of the original chart type
 4. extend the [chart](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/IsChart.html) class of the original chart type

### Creating a controller type

Controllers must define a unique id in order to be configurable.

This id should follow the name convention  (otherwise an [illegal argument](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalArgumentException.html) exception will be thrown):

 * can not start with a dot or an underscore
 * can not contain any non-URL-safe characters
 
The [controller type](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/controllers/ControllerType.html) is an entity which must be implemented for every controller you want to implement. A controller type implements [Type](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Type.html) interface like all other chart types available out-of-the-box. 

Here are the way how to create a controller type:

```java
// creates a chart extending the existing chart LINE
ControllerType myLine = new ControllerType("myline", ChartType.LINE, new ControllerProvider(){

	@Override
	public Controller provide(ControllerType controllerType){
		// creates an instance of my controller
		return myController;
	}

});
```

The controller type constructor is getting a [controller provider](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/controllers/ControllerProvider.html) instance as argument in order to provide the controller during the registration.

The controller is usually automatically registered in [Chart.JS](http://www.chartjs.org/) when used. Anyway the controller type object is providing the method to **register** the controller programmatically in [Chart.JS](http://www.chartjs.org/):

```java
// registers the controller in CHART.JS
myControllerType.register();
```

You can also be notified when and if the registration of the controller ended correctly. This is done by the implementation of [ControllerRegistrationHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/controllers/ControllerRegistrationHandler.html) interface to set during the controller type creation.

```java
// creates a chart extending the existing chart LINE
ControllerType myLine = new ControllerType("myline", ChartType.LINE, myControllerProvider,
    
    new ControllerRegistrationHandler {
    	/**
		 * Invoked before the controller will be register to CHART.JS.
		 * 
		 * @param controllerType the controller type which is registering
		 */
		@Override
		public void onBeforeRegister(ControllerType controllerType) {
			// invoked before registration 
		}
	
		/**
		 * Invoked after the controller is registered to CHART.JS.
		 * 
		 * @param controllerType the controller type which is registering
		 * @param registered true if the controller has been registered otherwise false
		 */
		@Override 
		public void onAfterRegister(ControllerType controllerType, boolean registered) {
			// invoked after registration 
			// with the status, if was registered or not.
		}
    }
});
```




### Implementing a controller

A controller must implement the [Controller](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Controller.html) interface which is containing all hooks which will be invoked during the whole chart life cycle:

```java
/**
 * Controller must define a unique id in order to be configurable.
 * Returns the controller id.
 * 
 * @return the controller id.
 */
ControllerType getType();

/**
 * Initializes the controller.
 * 
 * @param context context of controller
 * @param chart chart instance
 */
void initialize(ControllerContext context, IsChart chart);

/**
 * Create elements for each piece of data in the dataset. 
 * Store elements in an array on the dataset.
 * 
 * @param context context of controller
 * @param chart chart instance
 */
void addElements(ControllerContext context, IsChart chart);

/**
 * Draw the representation of the dataset.
 * 
 * @param context context of controller
 * @param chart chart instance
 */
void draw(ControllerContext context, IsChart chart);

/**
 * Remove hover styling from the given element.
 * 
 * @param context context of controller
 * @param chart chart instance
 * @param element element to be removed.
 * @param datasetIndex dataset index
 * @param index data index
 */
void removeHoverStyle(ControllerContext context, IsChart chart, ControllerDatasetElement element, int datasetIndex, int index);

/**
 * Add hover styling to the given element.
 * 
 * @param context context of controller
 * @param chart chart instance
 * @param element element to be set.
 * @param datasetIndex dataset index
 * @param index data index
 */
void setHoverStyle(ControllerContext context, IsChart chart, ControllerDatasetElement element, int datasetIndex, int index);

/**
 * Update the elements in response to new data.
 * 
 * @param context context of controller
 * @param chart chart instance
 * @param mode update mode, 
 *        core calls this method using any of 'active', 'hide', 'reset', 'resize', 'show' or undefined
 */
void update(ControllerContext context, IsChart chart, IsTransitionKey mode);

/**
 * Ensures that the dataset represented by this controller is linked to a scale.
 * Overridden to helpers.noop in the polar area and doughnut controllers as these
 * chart types using a single scale.
 * 
 * @param context context of controller
 * @param chart chart instance
 */
void linkScales(ControllerContext context, IsChart chart);

/**
 * Called by the main chart controller when an update is triggered.
 * The default implementation handles the number of data points changing and creating
 * elements appropriately.
 * 
 * @param context context of controller
 * @param chart chart instance
 * @param resetNewElements true if the new elements must be reset
 */
void buildOrUpdateElements(ControllerContext context, IsChart chart, boolean resetNewElements);
}
```

The easy way to implement a controller is to extends the [AbstractController](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/controllers/AbstractController.html) class and implement `getType` which returns the new chart type to register.

```java
public class MyHorizontalBarController extends AbstractController {

	public static final ControllerType TYPE = new ControllerType("myHorizontalBar", ChartType.BAR, (controllerType) -> new MyHorizontalBarController()); 

	@Override
	public ControllerType getType(){
		return TYPE;
	}

}
```

### Extending existing dataset

To use new controller in **Charba**, you need to implement a dataset object extending the dataset class of your original chart type of the controller.

This is mandatory because [Chart.JS](http://www.chartjs.org/) needs to manage the different types of datasets.

See the following example:

```java
// extends the horizontal bar dataset
public final class MyHorizontalBarDataset extends HorizontalBarDataset {

	// extends the constructor of the horizontal bar dataset
	public MyHorizontalBarDataset(){
		super(MyHorizontalBarController.TYPE, Dataset.DEFAULT_HIDDEN);
	}

}
```

### Extending existing chart

To use new controller in **Charba**, you need to implement a chart object extending the chart class of your original chart type of the controller.

See the following example:

```java
// extends the horizontal bar chart
public class MyHorizontalBarChart extends HorizontalBarChart{

	public MyHorizontalBarChart(){
		super(MyHorizontalBarController.TYPE);
	}

	@Override
	public MyHorizontalBarDataset newDataset(){
		return new MyHorizontalBarDataset();
	}
	
	@Override
	public MyHorizontalBarDataset newDataset(boolean hidden){
		return new MyHorizontalBarDataset();
	}

}
```

:::note limitations
You can not set new properties for the controller options in the global or chart type default, only at chart instance.
:::


## A simple example 

The usage of a controller is to extend an existing chart and change the behavior of it.

The controller is implementing the behavior but you should extend the current chart (for instance line) extending line chart. 

<img src={useBaseUrl('/img/controllerSample.png')} />

Here is an example.

```java
// -----------------------------------------
// Creates the chart class of "myLine" chart
// -----------------------------------------
// extends the line chart
public class MyLineChart extends LineChart {

	// -----------------------------------------
	// Creates the "myLine" controller type
	// -----------------------------------------
	public static final ControllerType TYPE = new ControllerType("myLine", ChartType.LINE, 
		new ControllerProvider(){
		
			@Override
			public Controller provide(ControllerType controllerType){
				// -----------------------------------------
				// Creates the "myLine" controller 
				// -----------------------------------------
				return new AbstractController(){
	
					@Override
					public ControllerType getType(){
						return MyLineChart.TYPE;
					}
	
					@Override
					public void draw(ControllerContext jsThis, IsChart chart){
						super.draw(jsThis, chart);
	
						DatasetItem item = chart.getDatasetItem(jsThis.getIndex());
						
						List<DatasetElement> elements = item.getElements();
						for (DatasetElement elem : elements){
							Context2dItem ctx = chart.getCanvas().getContext2d();
							ctx.save();
							ctx.setStrokeColor(elem.getOptions().getBorderColorAsString());
							ctx.setLineWidth(1D);
							ctx.strokeRect(elem.getX() - 10, elem.getY() - 10, 20, 20);
							ctx.restore();
						}
					}
				};
			}
		}
	);

	public MyLineChart(){
		super(TYPE);
	}

	@Override
	public MyLineDataset newDataset(){
		return newDataset(false);
	}

	@Override
	public MyLineDataset newDataset(boolean hidden){
		return new MyLineDataset();
	}
}
// -----------------------------------------
// Creates the dataset class of "myLine" chart
// -----------------------------------------
public final class MyLineDataset extends LineDataset {

	public MyLineDataset(){
		super(MyLineChart.TYPE, Dataset.DEFAULT_HIDDEN);
	}

}
// -----------------------------------------
// Registers "myLine" controller
// -----------------------------------------
MyLineChart.TYPE.register();
// -----------------------------------------
// Creates "myLine" chart 
// -----------------------------------------
// creates the chart
MyLineChart chart = new MyLineChart();
// creates the dataset
MyLineDataset dataset = chart.newDataset();
dataset.setLabel("dataset 1");
...
chart.getData().setDatasets(dataset);
// add to DOM by Elemental 2
DomGlobal.document.body.appendChild(chart.getChartElement().as());
```
