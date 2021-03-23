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

**Charba** provides 2 time series charts which are extending the [line](ChartLine) and [bar](ChartBar) charts implementation. These time series charts help the developer providing some methods and axes implementations. 

A time series chart have already defined the axes to use ([time series cartesian axis](../axes/CartesianTimeSeriesAxes) for X axes and [linear cartesian axis](../axes/CartesianLinearAxes) for Y axis). The developer can access to the instances and just configure them without creating any axis instance.

## Dataset

The time series charts allow a number of properties to be specified for each time series [line](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/TimeSeriesLineDataset.html) or [bar](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/TimeSeriesBarDataset.html) datasets which are implementing the same properties of line and bar ones. 

See **[line dataset](ChartLine#dataset)** or **[bar dataset](ChartBar#dataset)** configuration how to configure the time series dataset, because no additional options are defined.

Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor.

```java
// creates a line time series chart
TimeSeriesLineChart chart = new TimeSeriesLineChart();
// for GWT
// TimeSeriesLineChartWidget chart = new TimeSeriesLineChartWidget();
// creates a dataset
TimeSeriesLineDataset dataset = chart.newDataset();
// sets the option
dataset.setBackgroundColor(HtmlColor.RED);
... // adds data and dataset configuration
// adds dataset to chart
chart.getData().setDatasets(dataset);
```

## Data structure

The data of a dataset for a time series chart can be passed in two formats.

#### Data as doubles or as strings

Even if the methods to load data by these methods are not hidden, you can NOT use them to load data in a time series chart (not allowed and an exception will throw). See how to load data by [time series items](#data-as-timeseriesitems) or [data points](#data-as-datapoints). 

#### Data as TimeSeriesItems

A [time series item](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/TimeSeriesItem.html) is a wrapper to the data points in order to simplify how to set data in a time series chart.

The chart instance will sort automatically the time series items by date in ascending mode (as required).

```java
// creates a line time series chart
TimeSeriesLineChart chart = new TimeSeriesLineChart();
// for GWT
// TimeSeriesLineChartWidget chart = new TimeSeriesLineChartWidget();
// creates a dataset
TimeSeriesLineDataset dataset = chart.newDataset();
// creates an empty list to contain the items
List<TimeSeriesItem> data = new LinkedList<>();
// creates time series items and add to the list
data.add(new TimeSeriesItem(new Date(time1), number_value1));
data1.add(new TimeSeriesItem(new Date(time2), number_value2));
// sets the time series items as data to the dataset
dataset.setTimeSeriesData(data);
// adds dataset to chart
chart.getData().setDatasets(dataset);
```


#### Data as DataPoints

Each data point is specified using an object containing `y` and `x` (as time type) properties for time series.

```java
// creates a line time series chart
TimeSeriesLineChart chart = new TimeSeriesLineChart();
// for GWT
// TimeSeriesLineChartWidget chart = new TimeSeriesLineChartWidget();
// creates a dataset
TimeSeriesLineDataset dataset = chart.newDataset();
// creates a datapoint
DataPoint dp1 = new DataPoint();
dp1.setY(number_value1);
dp1.setX(new Date(time1));
// creates a datapoint
DataPoint dp2 = new DataPoint();
dp2.setY(number_value1);
dp2.setX(new Date(time2));
// sets the data points as data to the dataset
dataset.setDataPoints(dp1, dp2);
// adds dataset to chart
chart.getData().setDatasets(dataset);
```

## Options

The time series chart defines specific options implementation of [line](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/TimeSeriesLineOptions.html) or [bar](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/TimeSeriesBarOptions.html) to be configured.

See **[line chart](ChartLine#options)** or **[bar chart](ChartBar#options)** options how to configure the time series chart, because no additional options are defined.

```java
// creates a line time series chart
TimeSeriesLineChart chart = new TimeSeriesLineChart();
// for GWT
// TimeSeriesLineChartWidget chart = new TimeSeriesLineChartWidget();
// gets options
TimeSeriesLineOptions options = chart.getOptions();
// sets options
options.setResponsive(true);
```

<img src={useBaseUrl('/img/timeSeriesLineChart.png')} />

The time series options have already defined the out-of-the-box axes ([time series cartesian axis](../axes/CartesianTimeSeriesAxes) for X axes and [linear cartesian axis](../axes/CartesianLinearAxes) for Y axis) to use. The developer can access to the instances and just configure them without creating any axis instance.

```java
// creates a line time series chart
TimeSeriesLineChart chart = new TimeSeriesLineChart();
// gets time series cartesian axis
CartesianTimeSeriesAxis timeseriesAxis = chart.getOptions().getScales().getTimeAxis();
// sets options
timeseriesAxis.getTime().setUnit(TimeUnit.DAY);
// gets linear cartesian axis		
CartesianLinearAxis linearAxis = chart.getOptions().getScales().getLinearAxis();
// sets options
linearAxis.setBeginAtZero(true);
```
