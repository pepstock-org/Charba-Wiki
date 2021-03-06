---
id: ChartPie
title: Pie chart
hide_title: true
sidebar_label: Pie
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Pie chart

(quoted from [Pie chart](https://en.wikipedia.org/wiki/Pie_chart) definition in Wikipedia)

A pie chart is a circular statistical graphic, which is divided in the slices to illustrate numerical proportion. In a pie chart, the arc length of each slice (and consequently its central angle and area), is proportional to the quantity it represents.

A pie charts are divided in the segments, the arc of each segment shows the proportional value of each piece of data.

They are excellent at showing the relational proportions between data.

<img src={useBaseUrl('/img/pie.png')} />

Programmatically, you could use a pie chart as following:

```java
// creates the chart	
PieChart chart = new PieChart();
// adds to DOM
component.add(chart);
...
// example for Elemental2
// gets the chart instance as DOM element
Element element = chart.getChartElement().as();
// adds to DOM
DomGlobal.document.body.appendChild(element);
```

By [UIBinder](http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html) (**ONLY for GWT**), you could use a pie chart as following:

```xml
<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"
   xmlns:g="urn:import:com.google.gwt.user.client.ui"
   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">

   <g:HTMLPanel  width="100%">
      ....
      <c:PieChartWidget ui:field="chart"/>
      ...
   </g:HTMLPanel>
</ui:UiBinder> 
```

## Dataset

The pie chart allows to define the data and a number of properties, used to display the data, by a [pie dataset](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/PieDataset.html).

Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor.

```java
// creates the chart
PieChart chart = new PieChart();
// creates the dataset
PieDataset dataset = chart.newDataset();
// sets the option
dataset.setBackgroundColor(HtmlColor.RED);
...
// creates the dataset
PieDataset datasetNew = new PieDataset();
// sets the option
datasetNew.setBackgroundColor(HtmlColor.RED);
...
// sets the datasets to the chart
chart.getData().setDatasets(dataset, datasetNew);
```

The following are the attributes that you can set:

| Name | Type | Scriptable | Description
| :- | :- | :- | :-
| backgroundColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Pattern](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | [Yes](#scriptable) | The fill color/pattern of the arcs in the dataset.
| borderAlign | [BorderAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/BorderAlign.html) | [Yes](#scriptable) | The borders alignment of arcs.
| borderColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | [Yes](#scriptable) | The border color of the arcs in the dataset. 
| borderWidth | int[] | [Yes](#scriptable) | The border width of the arcs in the dataset.
| clip | double - [Clip](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/Clip.html) | - | How to clip relative to chart area. Positive value allows overflow, negative value clips that many pixels inside chart area.
| hoverBackgroundColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Pattern](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | [Yes](#scriptable) | The fill color/pattern of the arcs when hovered. 
| hoverBorderColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | [Yes](#scriptable) | The stroke color of the arcs when hovered.
| hoverBorderWidth | int[] | [Yes](#scriptable) | The stroke width of the arcs when hovered.
| hoverOffset | int | [Yes](#scriptable) | The offset of the arc (in pixels) when hovered.
| label | String | - | The label for the dataset.
| offset | int | [Yes](#scriptable) | The offset of the arc (in pixels).
| weight | double | - | The relative thickness of the dataset. Providing a value for weight will cause the pie dataset to be drawn with a thickness relative to the sum of all the dataset weight values.

### General

The general options for a pie dataset can control behaviors not related to styling or interactions and they are the following:

| Name | Defaults | Description |
| :- | :- | :-
| clip | UndefinedValues.DOUBLE | How to clip relative to chart area. 
| label | `null` | The label for the dataset.

:::note PAY ATTENTION
**label** options is just a pure label to add to the dataset and is **NOT** the label for the dataset which appears in the legend and tooltips.
:::

### Styling

The style of each arc of the dataset can be configured by the following properties:

| Name | Defaults | Description |
| :- | :- | :-
| backgroundColor | _element.getArc().getBackgroundColorAsString()_ | The fill color of the arcs in the dataset.
| borderAlign | _element.getArc().getBorderAlign()_ | The borders alignment of arcs.
| borderColor | _element.getArc().getBorderColorAsString()_ | The border color for arcs.
| borderWidth | _element.getArc().getBorderWidth()_ | The width of the arc border in pixels.
| offset | _element.getArc().getOffset()_ | The offset of the arc (in pixels).
| weight | _element.getArc().getWeight()_ | The relative thickness of the dataset.

All above options have got the fallback to the associated [Arc](../configuration/Elements#arc) elements, retrievable by the following statements:

```java
// from chart instance
Arc arc = chart.getOptions().getElements().getArc();
// sets options for all pie datasets of the chart
arc.setOffset(6);
...
// from defaults
Arc defaultArc  = Defaults.get().getGlobal().getElements().getArc();
// sets options for all pie datasets of all charts
defaultArc.setOffset(6);
```

### Interactions

The interaction with each arc can be controlled with the following properties:

| Name | Defaults | Description |
| :- | :- | :-
| hoverBackgroundColor | _element.getArc().getBackgroundColorAsString()_ | The fill color of the arcs in the dataset when hovered.
| hoverBorderColor | _element.getArc().getBorderColorAsString()_ | The border color for arcs when hovered.
| hoverBorderWidth | _element.getArc().getBorderWidth()_ | The width of the arc border in pixels when hovered. 
| hoverOffset | _element.getArc().getOffset()_ | The offset of the arc (in pixels) when hovered.

All above options have got the fallback to the associated [Arc](../configuration/Elements#arc) elements, retrievable by the following statements:

```java
// from chart instance
Arc arc = chart.getOptions().getElements().getArc();
// sets options for all pie datasets of the chart
arc.setOffset(6);
...
// from defaults
Arc defaultArc  = Defaults.get().getGlobal().getElements().getArc();
// sets options for all pie datasets of all charts
defaultArc.setOffset(6);
```

### Scriptable

Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in [Configuring charts](../configuration/ScriptableOptions) section. 

```java
// creates chart
PieChart chart = new PieChart();
// creates dataset
PieDataset dataset = chart.newDataset();
// sets the option by a callback 
dataset.setBackgroundColor(new BackgroundColorCallback() {

   @Override
   public IsColor invoke(IsChart chart, ScriptableContext context) {
      // logic
      return color;
   }
});
```

The following options can be set by a callback:

| Name | Callback | Possible returned types
| :- | :- | :- 
| backgroundColor | [BackgroundColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BackgroundColorCallback.html) | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)
| borderAlign | [BorderAlignCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderAlignCallback.html) | [BorderAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/BorderAlign.html)
| borderColor | [BorderColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderColorCallback.html) | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)
| borderWidth | [BorderWidthCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderWidthCallback.html) | int
| hoverBackgroundColor | [BackgroundColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BackgroundColorCallback.html) | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)
| hoverBorderColor | [BorderColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderColorCallback.html) | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)
| hoverBorderWidth | [BorderWidthCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderWidthCallback.html) | int
| hoverOffset | [OffsetCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/OffsetCallback.html) | int
| offset | [OffsetCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/OffsetCallback.html) | int

## Data structure

The data of a dataset for a pie chart is specified as a an array of numbers. Each point in the data array corresponds to the [label](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/Data.html#setLabels-java.lang.String...-) at the same index.

```java
// sets data as an array of doubles
dataset.setData(1,2,3,4,6);

// sets data as a list of double
List<Double> list = new LinkedList<>();
list.add(1);
list.add(2);
list.add(3);
dataset.setData(list);
```

To provide context of what each point means, we include an array of strings that show around each point in the chart.

```java
...
chart.getData().setLabels("label1", "label2");
...
```

## Options

The pie chart defines specific [options implementation](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/PieOptions.html) to be configured. These options are merged with the global chart configuration options to form the options passed to the chart.

```java
// creates chart
PieChart chart = new PieChart();
// gets the chart options
PieOptions options = chart.getOptions();
// sets options
options.setResponsive(true);
options.setCircumference(180D);
```

These are the options specific to pie charts:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| circumference | double | 360 | Sweep to allow arcs to cover.
| cutoutPercentage | String | `null` | The percentage of the chart that is cut out of the middle. It's a string, ending with '%', as percentage of the chart radius.
| cutout | double | 0 | The portion of the chart that is cut out of the middle, in pixels.
| rotation | double | 0 | Starting angle to draw arcs from.
