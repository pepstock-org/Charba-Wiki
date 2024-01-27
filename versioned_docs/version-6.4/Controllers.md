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

:::caution
[Chart.JS controller](https://www.chartjs.org/docs/latest/developers/charts.html) provides as set of hooks to create an own controller but you should implement all internal structure which is not fully documented and depends on each implementation.<br/>
For this reason, **Charba** provides the interfaces to create controllers **ONLY** extending existing chart types.
:::

## Creating a controller

To create own chart type, you need to perform some specific and mandatory steps:

 1. create a [controller type](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/controllers/ControllerType.html)
 2. implement the [controller](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/Controller.html) interface where all hooks are defined
 3. extend the [dataset](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/data/Dataset.html) class of the original chart type
 4. extend the [chart](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/IsChart.html) class of the original chart type

### Creating a controller type

Controllers must define a unique id in order to be configurable.

This id should follow the name convention  (otherwise an [illegal argument](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/IllegalArgumentException.html) exception will be thrown):

 * can not start with a dot or an underscore
 * can not contain any non-URL-safe characters
 
The [controller type](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/controllers/ControllerType.html) is an entity which must be implemented for every controller you want to implement. A controller type implements [Type](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/Type.html) interface like all other chart types available out-of-the-box. 

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

The controller type constructor is getting a [controller provider](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/controllers/ControllerProvider.html) instance as argument in order to provide the controller during the registration.

The controller is usually automatically registered in [Chart.JS](http://www.chartjs.org/) when used. Anyway the controller type object is providing the method to **register** the controller programmatically in [Chart.JS](http://www.chartjs.org/):

```java
// registers the controller in CHART.JS
myControllerType.register();
```

You can also be notified when and if the registration of the controller ended correctly. This is done by the implementation of [ControllerRegistrationHandler](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/controllers/ControllerRegistrationHandler.html) interface to set during the controller type creation.

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

### Hooks

A controller must implement the [Controller](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/Controller.html) interface which is containing all hooks which will be invoked during the whole chart life cycle.

The interface provides **before** and **after** hooks for each phases exposes by [Chart.JS controller](https://www.chartjs.org/docs/4.3.0/developers/charts.html):

#### Initialization

Every controller is initialized every time new chart instance is creating.

The following hooks (the following ones are the methods definitions in the [Controller](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/Controller.html)) can be used to initialize the chart:
 
```java
/**
 * Called before it initializes the controller.
 * 
 * @param context context of controller
 * @param chart chart instance
 */
default void onBeforeInitialize(ControllerContext context, IsChart chart) {
	// do nothing
}

/**
 * Called after it initializes the controller.
 * 
 * @param context context of controller
 * @param chart chart instance
 */
default void onAfterInitialize(ControllerContext context, IsChart chart) {
	// do nothing
}
```

The initialization process is documented in the flowchart below.

```mermaid
flowchart TD
    A((Begin init)) --> B(Notify onBeforeInitialize)
    B --> C[Initialize new Chart]
    C --> D(Notify onAfterInitialize)
    D --> E((End init))
    style A fill:#FFF2CC,stroke:#D6B656
    style B fill:#D5E8D4,stroke:#82B366
    style C fill:#FFFFFF,stroke:#000000
    style D fill:#D5E8D4,stroke:#82B366
    style E fill:#FFF2CC,stroke:#D6B656
    click B href "https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/Controller.html#onBeforeInitialize(org.pepstock.charba.client.controllers.ControllerContext,org.pepstock.charba.client.IsChart)" "onBeforeInitialize" _blank
    click D href "https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/Controller.html#onAfterInitialize(org.pepstock.charba.client.controllers.ControllerContext,org.pepstock.charba.client.IsChart)" "onAfterInitialize" _blank
```

#### Rendering

Every controller can be rendered after [initialization](#initialization) and every time that the chart instance will be updated or rendered.

They are 4 main phases:

 * Linking of scale ensures that the data set represented by a controller is linked to a scale.

```java
/**
 * Called before it ensures that the data set represented by a controller is linked to a scale.
 * 
 * @param context context of controller
 * @param chart chart instance
 */
default void onBeforeLinkScales(ControllerContext context, IsChart chart) {
	// do nothing
}

/**
 * Called after it ensures that the data set represented by a controller is linked to a scale.
 * 
 * @param context context of controller
 * @param chart chart instance
 */
default void onAfterLinkScales(ControllerContext context, IsChart chart) {
	// do nothing
}
```
 
 * Parsing the data into the controller meta data.

```java
/**
 * Called before it invokes to parse the data into the controller meta data.
 * 
 * @param context context of controller
 * @param chart chart instance
 * @param start start index of metadata
 * @param count count of metadata
 */
default void onBeforeParse(ControllerContext context, IsChart chart, int start, int count) {
	// do nothing
}

/**
 * Called after it invokes to parse the data into the controller meta data.
 * 
 * @param context context of controller
 * @param chart chart instance
 * @param start start index of metadata
 * @param count count of metadata
 */
default void onAfterParse(ControllerContext context, IsChart chart, int start, int count) {
	// do nothing
}
```

 * Updating the elements in response to new data.

```java
/**
 * Called before it updates the elements in response to new data.
 * 
 * @param context context of controller
 * @param chart chart instance
 * @param mode update mode
 */
default void onBeforeUpdate(ControllerContext context, IsChart chart, TransitionMode mode) {
	// do nothing
}

/**
 * Called after it updates the elements in response to new data.
 * 
 * @param context context of controller
 * @param chart chart instance
 * @param mode update mode
 */
default void onAfterUpdate(ControllerContext context, IsChart chart, TransitionMode mode) {
	// do nothing
}
```

 * Drawing the representation of the data set.

```java
/**
 * Called before it draws the representation of the data set.
 * 
 * @param context context of controller
 * @param chart chart instance
 */
default void onBeforeDraw(ControllerContext context, IsChart chart) {
	// do nothing
}

/**
 * Called after it draws the representation of the data set.
 * 
 * @param context context of controller
 * @param chart chart instance
 */
default void onAfterDraw(ControllerContext context, IsChart chart) {
	// do nothing
}
```

The rendering process is documented in the flowchart below.

```mermaid
flowchart TD
    A((Begin render)) --> B{Has<br/>scales?}
    B --> |yes| C(Notify onBeforeLinkScales)
    B --> |no| G{Has<br/>datasets?}
    C --> D[Links scale]
    D --> E(Notify onAfterLinkScales)
    E --> F{Scales<br/>remaining?}
    F --> |yes| B
    F --> |no| G
    G --> |yes|H(Notify onBeforeParse) 
    G --> |no| O(Notify onBeforeUpdate)
    H --> I[Parse metadata]
    I --> L(Notify onAfterParse)
    L --> M{Datasets<br/>remaining?}
    M --> |yes| H
    M --> |no| O
    O --> P[Update chart]
    P --> Q(Notify onAfterUpdate)
    Q --> R(Notify onBeforeDraw)
    R --> S[Render chart]
    S --> T(Notify onAfterDraw)
    T --> U{Frames<br/>remaining?}
    U --> |yes| R
    U --> |no| V((End render))
    style A fill:#FFF2CC,stroke:#D6B656
    style B fill:#FFFFFF,stroke:#000000
    style C fill:#D5E8D4,stroke:#82B366
    style D fill:#FFFFFF,stroke:#000000
    style E fill:#D5E8D4,stroke:#82B366
    style F fill:#FFFFFF,stroke:#000000
    style G fill:#FFFFFF,stroke:#000000
    style H fill:#D5E8D4,stroke:#82B366
    style I fill:#FFFFFF,stroke:#000000
    style L fill:#D5E8D4,stroke:#82B366
    style M fill:#FFFFFF,stroke:#000000
    style P fill:#FFFFFF,stroke:#000000
    style Q fill:#D5E8D4,stroke:#82B366
    style O fill:#D5E8D4,stroke:#82B366
    style R fill:#D5E8D4,stroke:#82B366
    style S fill:#FFFFFF,stroke:#000000
    style T fill:#D5E8D4,stroke:#82B366
    style U fill:#FFFFFF,stroke:#000000
    style V fill:#FFF2CC,stroke:#D6B656
	click C href "https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/Controller.html#onBeforeLinkScales(org.pepstock.charba.client.controllers.ControllerContext,org.pepstock.charba.client.IsChart)" "onBeforeLinkScales" _blank
	click E href "https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/Controller.html#onAfterLinkScales(org.pepstock.charba.client.controllers.ControllerContext,org.pepstock.charba.client.IsChart)" "onAfterLinkScales" _blank
	click H href "https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/Controller.html#onBeforeParse(org.pepstock.charba.client.controllers.ControllerContext,org.pepstock.charba.client.IsChart,int,int)" "onBeforeParse" _blank
	click O href "https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/Controller.html#onBeforeUpdate(org.pepstock.charba.client.controllers.ControllerContext,org.pepstock.charba.client.IsChart,org.pepstock.charba.client.options.TransitionMode)" "onBeforeUpdate" _blank
	click L href "https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/Controller.html#onAfterParse(org.pepstock.charba.client.controllers.ControllerContext,org.pepstock.charba.client.IsChart,int,int)" "onAfterParse" _blank
	click Q href "https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/Controller.html#onAfterUpdate(org.pepstock.charba.client.controllers.ControllerContext,org.pepstock.charba.client.IsChart,org.pepstock.charba.client.options.TransitionMode)" "onAfterUpdate" _blank
	click R href "https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/Controller.html#onBeforeDraw(org.pepstock.charba.client.controllers.ControllerContext,org.pepstock.charba.client.IsChart)" "onBeforeDraw" _blank
	click T href "https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/Controller.html#onAfterDraw(org.pepstock.charba.client.controllers.ControllerContext,org.pepstock.charba.client.IsChart)" "onAfterDraw" _blank
```

### Implementing a controller

The easy way to implement a controller is to extends the [AbstractController](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/controllers/AbstractController.html) class and pass the controller type by the constructor.

```java
// new controller
public class MyHorizontalBarController extends AbstractController {

	// controller type
	public static final ControllerType TYPE = new ControllerType("myHorizontalBar", 
                                                  ChartType.BAR, 
                                                  controllerType) -> new MyHorizontalBarController()); 

	// constructor
	public MyHorizontalBarController() {
		super(TYPE);
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

    // extends the constructor of the horizontal bar chart
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

:::caution
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
						
						List<ChartElement> elements = item.getElements();
						for (ChartElement elem : elements){
							if (elem instanceof PointElement) {
								PointElement pointElement = (PointElement) elem;
								Context2dItem ctx = chart.getCanvas().getContext2d();
								ctx.save();
								ctx.setStrokeColor(pointElement.getOptions().getBorderColorAsString());
								ctx.setLineWidth(1D);
								ctx.strokeRect(elem.getX() - 10, elem.getY() - 10, 20, 20);
								ctx.restore();
							}
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