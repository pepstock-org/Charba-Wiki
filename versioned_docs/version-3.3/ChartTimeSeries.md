---
id: ChartTimeSeries
title: Time series chart
hide_title: true
sidebar_label: Time series
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Time series charts

A time series chart is a data visualization tool that illustrates data points at successive intervals of time. Each point on the chart corresponds to both a time and a quantity that is being measured.

Time series charts present a series of data points collected over a specified reporting period. The x-axis plots time and the y-axis plots data points.

<img src={useBaseUrl('/img/timeSeriesBarChart.png')} />

**Charba** provides 2 time series charts which are extending the [line](ChartLine) and [bar](ChartBar) charts implementation. These time series charts help the developer to use th right methods and axes. 

A time series chart have got already defined the axes to use ([time cartesian axis](CartesianTimeAxes) for X axes and [linear cartesian axis](CartesianLinearAxes) for Y axis). The developer can access to the instances and just configure them without creating any axis instance.

## Dataset

The time series charts allow a number of properties to be specified for each time series [line](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/TimeSeriesLineDataset.html) or [bar](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/TimeSeriesBarDataset.html) dataset which are implementing the same properties of line and bar datasets. 

Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor.

```java
TimeSeriesLineChart chart = new TimeSeriesLineChart();
// for GWT
// TimeSeriesLineChartWidget chart = new TimeSeriesLineChartWidget();
TimeSeriesLineDataset dataset = chart.newDataset();
...
...
TimeSeriesLineDataset datasetNew = new TimeSeriesLineDataset();
...
chart.getData().setDatasets(dataset, datasetNew);
```

## Data structure

The data of a dataset for a time series chart can be passed in two formats.

#### Data as doubles or as strings

Even if the methods to load data by these methods are not hidden, you can NOT use them to load data into a time series chart (not allowed and an exception will throw). See how to load data by time series items or data points. 

#### Data as TimeSeriesItem

A [time series item](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/TimeSeriesItem.html) is a wrapper to the data points in order to simplify how to set data into a time series chart.

The chart instance will sort automatically the time series items by date in ascending mode (as required).

```java
...
List<TimeSeriesItem> data = new LinkedList<>();
...
data.add(new TimeSeriesItem(new Date(time1), value1));
data1.add(new TimeSeriesItem(new Date(time2), value2));
...
dataset.setTimeSeriesData(data);
...
chart.getData().setDatasets(dataset);
```


#### Data as DataPoint

Each data point is specified using an object containing `y` and `x` (as time type) properties for time series.

```java
...
DataPoint dp1 = new DataPoint();
dp1.setY(number_value1);
dp1.setX(new Date(time1));

DataPoint dp2 = new DataPoint();
dp2.setY(number_value1);
dp2.setX(new Date(time2));
...
dataset.setDataPoints(dp1, dp2);
...
chart.getData().setDatasets(dataset);
...
```

## Options

The time series chart defines specific options implementation of [line](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/TimeSeriesLineOptions.html) or [bar](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/TimeSeriesBarOptions.html) to be configured. These options are merged with the global chart configuration options to form the options passed to the chart.

```java
TimeSeriesLineChart chart = new TimeSeriesLineChart();
// for GWT
// TimeSeriesLineChartWidget chart = new TimeSeriesLineChartWidget();
TimeSeriesLineOptions options = chart.getOptions();
```

<img src={useBaseUrl('/img/timeSeriesLineChart.png')} />

The time series options have got already axes defined out-of-the-box ([time cartesian axis](CartesianTimeAxes) for X axes and [linear cartesian axis](CartesianLinearAxes) for Y axis). The developer can access to the instances and just configure them without creating any axis instance.

```java
// time cartesian axis
CartesianTimeAxis axis1 = chart.getOptions().getScales().getTimeAxis();
//
axis1.setDistribution(ScaleDistribution.SERIES);
axis1.getTicks().setSource(TickSource.DATA);
axis1.getTime().setUnit(TimeUnit.DAY);
//
// linear cartesian axis		
CartesianLinearAxis axis2 = chart.getOptions().getScales().getLinearAxis();
//
axis2.setDisplay(true);
axis2.getTicks().setBeginAtZero(true);
axis2.setStacked(true);
```
