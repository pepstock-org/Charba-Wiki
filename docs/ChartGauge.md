---
id: ChartGauge
title: Gauge chart
hide_title: true
sidebar_label: Gauge
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Gauge chart

A [gauge chart](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/charts/GaugeChart.html)(also for [gauge chart widget](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/gwt/widgets/GaugeChartWidget.html) for GWT) is **Charba** extension of [Chart.JS](http://www.chartjs.org/) doughnut chart, by a [controller](Controllers) implementation.

The gauge charts are divided into segments, the arc of each segment shows the proportional value of data.

<img src={useBaseUrl('/img/gauge.png')} />

This chart doesn't allow any legend, hover, layout and tooltips components.

## Dataset

The gauge chart allows a number of properties to be specified for the [gauge dataset](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/charts/GaugeDataset.html). 

A gauge chart can have ONLY 1 dataset.

The following are the attributes that you can set:

| Name | Type | Description
| ---- | ---- | -----------
| backgroundColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] | The fill color of the arcs in the dataset. 
| percentageThreshold | boolean | if `true`, use the percentage as threshold instead of the value. 
| thresholds | [Threshold](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/charts/Threshold.html)[] | the thresholds to apply to the gauge 

The dataset can be created instantiating the constructor, passing the maximum value of chart.

The default value of maximum value is **100**.

```java
int maxValue = 200;
GaugeChart chart = new GaugeChart();
// for GWT
// GaugeChartWidget chart = new GaugeChartWidget();
GaugeDataset dataset = chart.newDataset(maxValue);
...
chart.getData().setDatasets(dataset);
```

## Data structure

The data of a dataset for a gauge chart is specified as single value. **PAY ATTENTION** that to set the value into the dataset you must use `setValue` method. Calling `setData` method, an exception will be throw. 

```java
...
dataset.setValue(100);
...
```

## Options

The gauge chart defines the following configuration options. It extends the [meter options](ChartMeter).

To set the options at chart level, you can get a typed object accordingly with the chart type.

```java
GaugeChart chart = new GaugeChart();
// for GWT
// GaugeChartWidget chart = new GaugeChartWidget();
GaugeOptions options = chart.getOptions();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| animatedDisplay | boolean | `false` | if the display will be shown based on the animation of chart.
| cutoutPercentage | double | 90 | **ALWAYS 90** 
| display | [MeterDisplay](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/charts/MeterDisplay.html) | MeterDisplay.VALUE | Determines which information must be displayed into meter chart.
| displayFontColor | [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(128, 128, 128) | Color of font color 
| fontFamily | String | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | font family of label 
| fontStyle | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html)  | FontStyle.NORMAL |  font style of label
| precision | int | 2 | amount to decimals digits to apply to the value

## Callback

In order to customize the value to show into the chart, you can implement a [ValueCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ValueCallback.html).

```java
GaugeChart chart = new GaugeChart();
// for GWT
// GaugeChartWidget chart = new GaugeChartWidget();
chart.getOptions().setValueCallback(new ValueCallback() {

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
