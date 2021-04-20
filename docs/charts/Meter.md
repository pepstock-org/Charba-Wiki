---
id: ChartMeter
title: Meter chart
hide_title: true
sidebar_label: Meter
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Meter chart

A [meter chart](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/charts/MeterChart.html) is **Charba** extension of **[doughnut chart](ChartDoughnut)**, by a [controller](../Controllers) implementation.

The meter charts are divided in the 2 segments, the arc of each segment shows the proportional value of data.

<img src={useBaseUrl('/img/meter.png')} />

Programmatically, you could use a meter chart as following:

```java
// creates the chart	
MeterChart chart = new MeterChart();
// adds to DOM
component.add(chart);
...
// example for Elemental2
// gets the chart instance as DOM element
Element element = chart.getChartElement().as();
// adds to DOM
DomGlobal.document.body.appendChild(element);
```

By [UIBinder](http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html) (**ONLY for GWT**), you could use a meter chart as following:

```xml
<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"
   xmlns:g="urn:import:com.google.gwt.user.client.ui"
   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">

   <g:HTMLPanel  width="100%">
      ....
      <c:MeterChartWidget ui:field="chart"/>
      ...
   </g:HTMLPanel>
</ui:UiBinder> 
```

## Dataset

The meter chart allows a number of properties to be specified for the [meter dataset](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/charts/MeterDataset.html).

```java
// creates the chart
MeterChart chart = new MeterChart();
// creates the dataset
MeterDataset dataset = chart.newDataset();
// sets the value
dataset.setValue(90.5D);
// sets the dataset to the chart
chart.getData().setDatasets(dataset);
```

See **[doughnut dataset](ChartDoughnut#dataset)** configuration how to configure the meter dataset, in addition of following options:

| Name | Type | Default | Description
| :- | :- | :- | :-
| color | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] | rgb(140,214,16) - <span style={{backgroundColor: 'rgb(140,214,16)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The color to fill the segment of the chart which represents the value.
| emptyColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] | rgb(234,234,234) - <span style={{backgroundColor: 'rgb(234,234,234)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The color to fill the segment of the chart which represents the empty part.

:::note
A meter chart can have **ONLY** 1 dataset.<br/>
:::

The dataset can be created instantiating the constructor, passing the maximum value of chart.

The default value of maximum value is **100**.

```java
// sets max value
int maxValue = 200;
// creates the chart
MeterChart chart = new MeterChart();
// creates the dataset with new max value
MeterDataset dataset = chart.newDataset(maxValue);
// sets the value
dataset.setValue(90.5D);
// sets the dataset to the chart
chart.getData().setDatasets(dataset);
```

## Data structure

The data of a dataset for a meter chart is specified as single value. 

```java
// creates the dataset
MeterDataset dataset = chart.newDataset();
// sets the value
dataset.setValue(90.5D);
```

:::note
The `setData` methods are available, inherited by a doughnut dataset, but you can **NOT** use them otherwise an exception will throw.<br/>Use `setValue` instead.
:::

## Options

The meter chart defines the following configuration options. It extends the [doughnut options](ChartDoughnut).

To set the options at chart level, you can get a typed object accordingly with the chart type.

```java
// creates the chart
MeterChart chart = new MeterChart();
// gets options
MeterOptions options = chart.getOptions();
// sets options
options.setRender(Render.PERCENTAGE);
options.setPrecision(3);
```

See **[doughnut chart](ChartDoughnut#options)** configuration how to configure the meter chart, in addition of following options:

| Name | Type | Default | Description
| :- | :- | :- | :-
| animated | boolean | `false` | If the rendered label will be shown based on the animation of chart.
| autoFontSize | boolean | `true` | If `true`, the font size to applied to the rendered label is automatically calculated at runtime, otherwise uses the `size` property of the font.
| cutoutPercentage | String | `"90%"` | Immutable property, always "90%".
| circumference | double | `360` | Immutable property, always 360.
| render | [Render](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Render.html) | Render.VALUE | Determines which information must be rendered in the meter chart.
| font | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Font.html) | 	See description | Font of rendered label. If `autoFontSize` is set to `true`, the `size` property is ignored because automatically calculated at runtime.<br/><br/>The default value is the global font.<br/>See [Font](../defaults/DefaultsCharts#font).
| fontColor | [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgb(128, 128, 128) - <span style={{backgroundColor: 'rgb(128,128,128)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | Color of font color 
| precision | int | `2` | The amount to decimals digits to apply to the value.
| rotation | double | `0` | Immutable property, always 0.

:::note
The meter chart disables the legend, tooltips and animation components.
:::

## Scriptable

Scriptable options in the configuration accept a callback which is called for each animation cycle.

There are 2 options which can be defined as scriptable:

 * `fontColor`, to set the color of the label.
 * `format`, to set the value of the label.
 
The callbacks are getting the only 1 argument, the [scriptable context](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/charts/MeterContext.html) which contains the context of the callback execution.

The context object contains the following properties:

| Name | Type | Description
| :- | :- | :-
| attributes | [NativeObjectContainer](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/commons/NativeObjectContainer.html) | User object which you can store your options at runtime.
| chart | [IsChart](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/IsChart.html) | Chart instance. 
| easing | double | The easing of drawing (between 0 and 1) for animation.
| type | [ContextType](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/ContextType.html) | The type of the context. It can be ONLY `ContextType.METER`.
| value | double | The value of meter or gauge dataset.

### Formatting

In order to customize the value to show in the chart, you can implement a [MeterFormatCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/MeterFormatCallback.html), as following:

<img src={useBaseUrl('/img/meterFormatting.png')} />

```java
// creates the chart
MeterChart chart = new MeterChart();
// sets the callback
chart.getOptions().setFormatCallback(new MeterFormatCallback(){

   @Override
   public String invoke(MeterContext context){
      // logic
      return format;
   }
});
```

### Font coloring

In order to customize the font color of the rendered label to show in the chart, you can implement a [ColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ColorCallback.html), as following:

<img src={useBaseUrl('/img/meterFontColoring.png')} />

```java
// creates the chart
MeterChart chart = new MeterChart();
// sets the callback
chart.getOptions().setFontColor(new ColorCallback<MeterContext>(){

   @Override
   public IsColor invoke(MeterContext context){
      // logic
      return color;
   }
});
```
