---
id: ChartBubbleMap
title: BubbleMap chart
hide_title: true
sidebar_label: BubbleMap
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Bubble map chart

(quoted from [Proportional Symbol Map](https://en.wikipedia.org/wiki/Proportional_symbol_map) definition in Wikipedia)

A Bubble Map (or Proportional Symbol Map)  is a type of thematic map that uses map symbols that vary in size to represent a quantitative variable. For example, circles may be used to show the location of cities within the map, with the size of each circle sized proportionally to the population of the city. 

It is a map chart type that uses the visual variable of size to display differences in the magnitude of a certain discrete, abruptly changing phenomenon.

<img src={useBaseUrl('/img/geoBubbleMap.png')} />

Programmatically, you could use a bar chart as following:

```java
// creates the chart	
BarChart chart = new BarChart();
// adds to DOM
component.add(chart);
...
// example for Elemental2
// gets the chart instance as DOM element
Element element = chart.getChartElement().as();
// adds to DOM
DomGlobal.document.body.appendChild(element);
```

By [UIBinder](http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html) (**ONLY for GWT**), you could use a bar chart as following:

```xml
<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"
   xmlns:g="urn:import:com.google.gwt.user.client.ui"
   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">

   <g:HTMLPanel  width="100%">
      ....
      <c:BarChartWidget ui:field="chart"/>
      ...
   </g:HTMLPanel>
</ui:UiBinder> 
```

## Dataset

The bar chart allows to define the data and a number of properties, used to display the data, by a [bar dataset](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/data/BarDataset.html).

Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor.

```java
// creates the chart
BarChart chart = new BarChart();
// creates the dataset
BarDataset dataset = chart.newDataset();
// sets the option
dataset.setBackgroundColor(HtmlColor.RED);
...
// creates the dataset
BarDataset datasetNew = new BarDataset();
// sets the option
datasetNew.setBackgroundColor(HtmlColor.RED);
...
// sets the datasets to the chart
chart.getData().setDatasets(dataset, datasetNew);
```

The following are the attributes that you can set:

| Name | Type | Scriptable | Description
| :- | :- | :- | :-

