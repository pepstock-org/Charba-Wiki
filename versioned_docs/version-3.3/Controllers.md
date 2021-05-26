---
id: Controllers
title: Controllers
hide_title: true
sidebar_label: Controllers
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Controllers

Controllers are able to extend existing chart types or creating new one implementing a specific interface. Leveraging on [Chart.JS](http://www.chartjs.org/) implementation, **Charba** provides the features to set a controller.

<img src={useBaseUrl('/img/controller.png')} />

A controller must implement the [Controller](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/Controller.html) interface:

```java
public interface Controller {

   /**
    * Controller must define a unique id in order to be configurable
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
    * @param datasetIndex dataset index
    */
   void initialize(ControllerContext context, IsChart chart, int datasetIndex);

   /**
    * Create elements for each piece of data in the dataset. Store elements in an array on the dataset.
    * 
    * @param context context of controller
    * @param chart chart instance
    */
   void addElements(ControllerContext context, IsChart chart);

   /**
    * Create a single element for the data at the given index and reset its state.
    * 
    * @param context context of controller
    * @param chart chart instance
    * @param index dataset index
    */
   void addElementAndReset(ControllerContext context, IsChart chart, int index);

   /**
    * Draw the representation of the dataset.
    * 
    * @param context context of controller
    * @param chart chart instance
    * @param ease if specified, this number represents how far to transition elements.
    */
   void draw(ControllerContext context, IsChart chart, double ease);

   /**
    * Remove hover styling from the given element.
    * 
    * @param context context of controller
    * @param chart chart instance
    * @param element element to be removed.
    */
   void removeHoverStyle(ControllerContext context, IsChart chart, StyleElement element);

   /**
    * Add hover styling to the given element.
    * 
    * @param context context of controller
    * @param chart chart instance
    * @param element element to be set.
    */
   void setHoverStyle(ControllerContext context, IsChart chart, StyleElement element);

   /**
    * Update the elements in response to new data.
    * 
    * @param context context of controller
    * @param chart chart instance
    * @param reset if `true`, put the elements into a reset state so they can animate to their final values
    */
   void update(ControllerContext context, IsChart chart, boolean reset);
}
```

:::note PAY ATTENTION
Not all methods of [Chart.JS controller](https://www.chartjs.org/docs/2.9.4/developers/charts.html) are implemented and furthermore the few documentation about what every method should do for enabling new chart, is suggesting to implement controllers ONLY extending existing chart types. 
:::

The easy way to implement a controller is to extends the [AbstractController](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/controllers/AbstractController.html) class and implement `getType` which returns the new chart type to register.

A controller must be registered at global level as following:

```java
// REGISTER
Defaults.get().getControllers().extend(new MyController());
```

## Controller type

Controllers must define a unique id in order to be configurable.

This id should follow the name convention  (otherwise an [illegal argument](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalArgumentException.html) exception will be thrown):

 * can not start with a dot or an underscore
 * can not contain any non-URL-safe characters
 
The [ControllerType](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/controllers/ControllerType.html) is an entity which must be implemented for every controller you want to implement. A controller type implements [Type](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/Type.html) interface like all other chart types available out-of-the-box. 

Here are the way how to create a controller type:

```java
// in this case the scale type of chart is MULTI scale by default
ControllerType chartFromScratch = new ControllerType("completelynew");

// in this case is creating a chart with single scale
ControllerType chartFromScratchWithScale = new ControllerType("completelynewwithscale", ScaleType.SINGLE);

// in this case is creating a chart extending the existing chart LINE
ControllerType chartExtendLine = new ControllerType("extendedline", ChartType.LINE);
```

## Extending 

The usual usage of a controller is to extend an existing chart and change the behavior of it.

The controller is implementing the behavior but you should extend the current chart (for instance line) extending LineChart and its options and datasets (if needed). 

Here is an example.

First of all, creates and registers a controller:

```java
Defaults.get().getControllers().extend(new AbstractController() {

   @Override
   public ControllerType getType() {
      return LineMyChart.TYPE;
   }

   @Override
   public void draw(ControllerContext jsThis, IsChart chart, double ease) {
      super.draw(jsThis, chart, ease);
      // Now we can do some custom drawing for this dataset. Here we'll draw a red box around the first point in each dataset
         
      DatasetMetaItem metaItem = chart.getDatasetMeta(jsThis.getIndex());
      List<DatasetItem> items = metaItem.getDatasets();
      for (DatasetItem item : items) {
         DatasetViewItem view = item.getView();
         Context2dItem ctx = chart.getCanvas().getContext2d();
         ctx.save();
         ctx.setStrokeStyle(view.getBorderColorAsString());
         ctx.setLineWidth(1D);
         ctx.strokeRect(view.getX() - 10, view.getY() - 10,  20, 20);
         ctx.restore();
      }
   }
});
```

The best practice, extending existing chart, is to call `super.draw(jsThis, chart, ease);` (or whatever other method) in order that the parent chart can do own work.

Then you can extend the chart with your chart type, as following:

```java
public class LineMyChart extends LineChart {
   
   public static final ControllerType TYPE = new ControllerType("myline", ChartType.LINE);

   public LineMyChart() {
      super(TYPE);
   }

}
```

Now you have a chart with type `myline` that you can use into your project. 
