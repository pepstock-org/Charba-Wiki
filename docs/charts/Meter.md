---
id: ChartMeter
title: Meter chart
hide_title: true
sidebar_label: Meter
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Meter chart

A [meter chart](https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/impl/charts/MeterChart.html) is **Charba** extension of **[doughnut chart](ChartDoughnut)**, by a [controller](../Controllers) implementation.

The meter charts are divided in the 2 segments, the arc of each segment shows the proportional value of data.

<a href="https://pepstock-org.github.io/Charba-Showcase/index.html?gallery=meter"><img src={useBaseUrl('/img/meter.png')} /></a>

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

The meter chart allows a number of properties to be specified for the [meter dataset](https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/impl/charts/MeterDataset.html).

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

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/colors/IsColor.html) | `color` option value | The border color of the arcs in the dataset.
| borderRadius | int - [ArcBorderRadius](https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/data/ArcBorderRadius.html) | 0 | The arc border radius (in pixels).
| borderWidth | int | 0 | The border width of the arcs in the dataset.
| color | String[] - [IsColor](https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/colors/IsColor.html)[] | rgb(140,214,16) - <span style={{backgroundColor: 'rgb(140,214,16)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The color to fill the segment of the chart which represents the value.
| emptyColor | String[] - [IsColor](https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/colors/IsColor.html)[] | rgb(234,234,234) - <span style={{backgroundColor: 'rgb(234,234,234)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The color to fill the segment of the chart which represents the empty part.

:::caution
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

### Labels

The meter charts allow you to set labels inside the chart in order to improve the understanding of the chart for the user.

There are 2 possible labels you can set in the chart:

<img src={useBaseUrl('/img/meterLabels.png')} />

### Value label

The value label allows you to show the value or percentage inside the chart.

```java
// creates the dataset
MeterDataset dataset = chart.newDataset();
// sets the percentage rendering
dataset.getValueLabel().setPercentage(true);
```

The value label element contains all options in order to configure the rendering.

The following are the attributes that you can set:

| Name | Type | Default | Scriptable | Description
| :- | :- | :- | :- | :-
| animated | boolean | `false` | - |If the rendered label will be shown based on the animation of chart.
| autoFontSize | boolean | `true` | - | If `true`, the font size to applied to the rendered label is automatically calculated at runtime, otherwise uses the `size` property of the font.
| color | [IsColor](https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/colors/IsColor.html) | rgb(128, 128, 128) - <span style={{backgroundColor: 'rgb(128,128,128)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | [Yes](#scriptable) | Color of the content.
| display | boolean | `true` | - | If `true`, the value label is shown.
| font | [IsFont](https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/options/IsFont.html) | `null` | [Yes](#scriptable) | Font of rendered label. If `autoFontSize` is set to `true`, the `size` property is ignored because automatically calculated at runtime.<br/><br/>The default value is the font instance in the chart options.<br/>See [Font](../defaults/DefaultsCharts#font).
| format | [MeterFormatCallback](https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/callbacks/MeterFormatCallback.html) | `null` | [Yes](#scriptable) | The callback instance which format the value.
| percentage | boolean | `false` | - | If `true`, the rendered label will show the dataset value as a percentage.
| precision | int | `2` | - | The amount to decimals digits to apply to the value.

### Description label

The description label allows you to show a string as description inside the chart, below the [value label](#value-label).

```java
// creates the dataset
MeterDataset dataset = chart.newDataset();
// enables rendering
dataset.getDescriptionLabel().setDisplay(true);
// enables rendering
dataset.getDescriptionLabel().setContent("RAM utilization");

```

The description label element contains all options in order to configure the rendering.

:::caution
This label only apply if **display** options of **[value label](#value-label)** is **true**.
:::

The following are the attributes that you can set:

| Name | Type | Default | Scriptable | Description
| :- | :- | :- | :- | :-
| autoFontSize | boolean | `true` | - | If `true`, the font size to applied to the rendered label is automatically calculated at runtime, otherwise uses the `size` property of the font.
| color | [IsColor](https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/colors/IsColor.html) | rgb(128, 128, 128) - <span style={{backgroundColor: 'rgb(128,128,128)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | [Yes](#scriptable) | Color of the content.
| content | String | `null` | [Yes](#scriptable) | The content of description label.
| display | boolean | `false` | - | If `true`, the value label is shown.
| font | [IsFont](https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/options/IsFont.html) | `null` | [Yes](#scriptable) | Font of rendered label. If `autoFontSize` is set to `true`, the `size` property is ignored because automatically calculated at runtime.<br/><br/>The default value is the font instance in the chart options.<br/>See [Font](../defaults/DefaultsCharts#font).

## Data structure

The data of a dataset for a meter chart is specified as single value. 

```java
// creates the dataset
MeterDataset dataset = chart.newDataset();
// sets the value
dataset.setValue(90.5D);
```

:::caution
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
| cutoutPercentage | String | `"90%"` | Immutable property, always "90%".
| circumference | double | `360` | Immutable property, always 360.
| rotation | double | `0` | Immutable property, always 0.

:::info
The meter chart disables the legend, tooltips and animation components.
:::

## Scriptable

Scriptable options in the configuration accept a callback which is called for each animation cycle.

```java
// creates the chart
MeterDataset dataset = chart.newDataset();
// sets the color
dataset.getValueLabel().setColor(new ColorCallback<MeterContext>(){

   @Override
   public IsColor invoke(MeterContext context){
      // logic
      return color;
   }
});
```

The callbacks are getting the only 1 argument, the [scriptable context](https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/impl/charts/MeterContext.html) which contains the context of the callback execution.

The context object contains the following properties:

| Name | Type | Description
| :- | :- | :-
| attributes | [NativeObjectContainer](https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/commons/NativeObjectContainer.html) | User object which you can store your options at runtime.
| chart | [IsChart](https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/IsChart.html) | Chart instance. 
| datasetLabel | String | The label of the dataset.
| easing | double | The easing of drawing (between 0 and 1) for animation.
| type | [ContextType](https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/items/ContextType.html) | The type of the context. It can be ONLY `ContextType.METER`.
| value | double | The value of meter or gauge dataset.

The meter chart can provide scriptable options by the meter data set and the labels.

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :- 
| color | [ColorCallback](https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;MeterContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/colors/IsColor.html)
| content | [MeterContentCallback](https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/callbacks/MeterContentCallback.html) | String
| font | [FontCallback](https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/callbacks/FontCallback.html)&lt;MeterContext&gt; | [FontItem](https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/items/FontItem.html)
| format | [MeterFormatCallback](https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/callbacks/MeterFormatCallback.html) | String

Here is an example fo value formatting.

<img src={useBaseUrl('/img/meterFormatting.png')} />

```java
// creates the dataset
MeterDataset dataset = chart.newDataset();
// sets the formatter
dataset.getValueLabel().setFormatCallback(new MeterFormatCallback(){

   @Override
   public String invoke(MeterContext context){
      // logic
      return Utilities.applyPrecision(context.getValue(), 0) + " logged users";
   }
});
```