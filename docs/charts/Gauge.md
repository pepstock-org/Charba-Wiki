---
id: ChartGauge
title: Gauge chart
hide_title: true
sidebar_label: Gauge
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Gauge chart

A [gauge chart](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/charts/GaugeChart.html) is **Charba** extension of **[doughnut chart](ChartDoughnut)**, by a [controller](../Controllers) implementation.

The gauge charts are divided in the segments, the arc of each segment shows the proportional value of data.

<img src={useBaseUrl('/img/gauge.png')} />

Programmatically, you could use a gauge chart as following:

```java
// creates the chart	
GaugeChart chart = new GaugeChart();
// adds to DOM
component.add(chart);
...
// example for Elemental2
// gets the chart instance as DOM element
Element element = chart.getChartElement().as();
// adds to DOM
DomGlobal.document.body.appendChild(element);
```

By [UIBinder](http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html) (**ONLY for GWT**), you could use a gauge chart as following:

```xml
<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"
   xmlns:g="urn:import:com.google.gwt.user.client.ui"
   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">

   <g:HTMLPanel  width="100%">
      ....
      <c:GaugeChartWidget ui:field="chart"/>
      ...
   </g:HTMLPanel>
</ui:UiBinder> 
```

## Dataset

The gauge chart allows a number of properties to be specified for the [gauge dataset](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/charts/GaugeDataset.html). 

```java
// creates the chart
GaugeChart chart = new GaugeChart();
// creates the dataset
GaugeDataset dataset = chart.newDataset();
// sets the value
dataset.setValue(90.5D);
// sets thresholds
dataset.setThresholds(GaugeThreshold.NORMAL.getThreshold().setValue(40), 
	GaugeThreshold.WARNING.getThreshold().setValue(75), 
	GaugeThreshold.CRITICAL.getThreshold().setValue(100));
// sets the dataset to the chart
chart.getData().setDatasets(dataset);
```

See **[doughnut dataset](ChartDoughnut#dataset)** configuration how to configure the gauge dataset, in addition of following options:

| Name | Type | Default | Description
|:-|:-|:-|:-
| emptyColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] | rgb(234,234,234) - <span style={{backgroundColor: 'rgb(234,234,234)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The color to fill the segment of the chart which represents the empty part.
| percentageThreshold | boolean | `true` | If `true`, it uses the percentage as threshold instead of the value. 
| thresholds | [Threshold](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/charts/Threshold.html)[] | [] | The thresholds to apply to the gauge dataset. 

:::note
A gauge chart can have **ONLY** 1 dataset.
:::

The dataset can be created instantiating the constructor, passing the maximum value of chart.

The default value of maximum value is **100**.

```java
// sets max value
int maxValue = 200;
// creates the chart
GaugeChart chart = new GaugeChart();
// creates the dataset with new max value
GaugeDataset dataset = chart.newDataset(maxValue);
// sets the value
dataset.setValue(90.5D);
// sets the dataset to the chart
chart.getData().setDatasets(dataset);
```

### Using thresholds

The [thresholds](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/charts/Threshold.html)is the entity which defines the color of the dataset, based on the value of the threshold.

A threshold is composed by 3 attributes:

 * **name**, mandatory attribute to apply the name, for instance `"warning"`.
 * **value**, optional attribute to set the value, the default is `Double.MAX_VALUE`.
 * **color**, optional attribute to set the color to use in the dataset when the threshold is activated y the value of dataset, the default is `rgb(140, 214, 16)` - <span style={{backgroundColor: 'rgb(140,214,16)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>.

The below example is configuring the chart in order to use
 
 * green color if the value of dataset is less or equals to 50,
 * yellow color if the value of dataset is less or equals to 75 and greater than 50, 
 * red color if the value of dataset is greater than 75 (set to 100 because it's teh maximum value of the dataset). 

```java
Threshold myNorm = new Threshold("normal", 50, HtmlColor.GREEN);
Threshold myWarn = new Threshold("warning", 75, HtmlColor.YELLOW);
Threshold myCrit = new Threshold("critical", 100, HtmlColor.RED);
// creates the chart
GaugeChart chart = new GaugeChart();
// creates the dataset
GaugeDataset dataset = chart.newDataset();
// sets the thresholds
dataset.setThresholds(myNorm, myWarn, myCrit); 
// sets the dataset to the chart
chart.getData().setDatasets(dataset);
```

**Charba** provides a default threshold implementation by [gauge threshold](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/charts/GaugeThreshold.html) enumeration.

| Threshold instance| Name | Value | Color |
|:-|:-|:-|:-
| GaugeThreshold.NORMAL | "NORMAL" | `75` | rgb(140, 214, 16) - <span style={{backgroundColor: 'rgb(140,214,16)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
| GaugeThreshold.WARNING | "WARNING" | `90` | rgb(239, 198, 0) - <span style={{backgroundColor: 'rgb(239,198,0)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
| GaugeThreshold.CRITICAL | "CRITICAL" | `Double.MAX_VALUE` | rgb(231, 24, 49) - <span style={{backgroundColor: 'rgb(231,24,49)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

You can reuse the [gauge threshold](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/charts/GaugeThreshold.html) enumeration, changing color or value or both.

```java
Threshold myNorm = GaugeThreshold.NORMAL.getThreshold().setValue(50).setColor(HtmlColor.GREEN);
Threshold myWarn = GaugeThreshold.WARNING.getThreshold().setValue(75).setColor(HtmlColor.YELLOW);
Threshold myCrit = GaugeThreshold.WARNING.getThreshold().setValue(100).setColor(HtmlColor.RED);
// creates the chart
GaugeChart chart = new GaugeChart();
// creates the dataset
GaugeDataset dataset = chart.newDataset();
// sets the thresholds
dataset.setThresholds(myNorm, myWarn, myCrit); 
// sets the dataset to the chart
chart.getData().setDatasets(dataset);
```

## Data structure

The data of a dataset for a gauge chart is specified as single value.

```java
// creates the dataset
GaugeDataset dataset = chart.newDataset();
// sets the value
dataset.setValue(90.5D);
```

:::note
The `setData` methods are available, inherited by a doughnut dataset, but you can **NOT** use them otherwise an exception will throw.<br/>Use `setValue` instead.
:::

## Options

The gauge chart defines the following configuration options. It extends the [meter options](ChartMeter#options).

To set the options at chart level, you can get a typed object accordingly with the chart type.

```java
// creates the chart
GaugeChart chart = new GaugeChart();
// gets options
GaugeOptions options = chart.getOptions();
// sets options
options.setDisplay(MeterDisplay.PERCENTAGE);
options.setPrecision(3);
```

See **[doughnut chart](ChartDoughnut#options)** configuration how to configure the gauge chart, in addition of following options:

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
The gauge chart disables the legend, tooltips and animation components.
:::

## Format callback

In order to customize the value to show in the chart, you can implement a [MeterFormatCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/MeterFormatCallback.html).

```java
// creates the chart
GaugeChart chart = new GaugeChart();
// sets the callback
chart.getOptions().setFormatCallback(new MeterFormatCallback(){

	/**
	 * Changes the value to show.
	 * 
	 * @param chart chart instance where this callback as been defined
	 * @param value value of meter or gauge chart
	 * @param easing easing of drawing (between 0 and 1) for animation
	 * @return the string representation of value to apply or if the callback returns null to use default.
	 */			
	@Override
	public String onFormat(IsChart chart, double value, double easing){
		// logic
		return value;
	}
});
```
