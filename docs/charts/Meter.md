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
| ---- | ---- | ------- | -----------
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
options.setDisplay(MeterDisplay.PERCENTAGE);
options.setPrecision(3);
```

See **[doughnut chart](ChartDoughnut#options)** configuration how to configure the meter chart, in addition of following options:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| animatedDisplay | boolean | `false` | If the display will be shown based on the animation of chart.
| cutoutPercentage | String | `"90%"` | Immutable property, always "90%".
| circumference | double | `360` | Immutable property, always 360.
| display | [MeterDisplay](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/charts/MeterDisplay.html) | MeterDisplay.VALUE | Determines which information must be displayed in the meter chart.
| displayFontColor | [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgb(128, 128, 128) - <span style={{backgroundColor: 'rgb(128,128,128)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | Color of font color 
| fontFamily | String | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | The font family of label.
| fontStyle | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html)  | FontStyle.NORMAL | The font style of label.
| precision | int | `2` | The amount to decimals digits to apply to the value.
| rotation | double | `0` | Immutable property, always 0.

:::note
The meter chart disables the legend, tooltips and animation components.
:::

## Format callback

In order to customize the value to show in the chart, you can implement a [MeterFormatCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/MeterFormatCallback.html).

```java
// creates the chart
MeterChart chart = new MeterChart();
// sets the callback
chart.getOptions().setFormatCallback(new MeterFormatCallback() {

	/**
	 * Changes the value to show.
	 * 
	 * @param chart chart instance where this callback as been defined
	 * @param value value of meter or gauge chart
	 * @param easing easing of drawing (between 0 and 1) for animation
	 * @return the string representation of value to apply or if the callback returns <code>null</code> to use default.
	 */			
	@Override
	public String onFormat(IsChart chart, double value, double easing) {
		// logic
		return value;
	}
});
```