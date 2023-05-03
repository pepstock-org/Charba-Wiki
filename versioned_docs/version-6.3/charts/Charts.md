---
id: Charts
title: Introduction
hide_title: true
sidebar_label: Introduction
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Charts

Every **Charba** chart has got a common structure to define own configuration.

There 3 main sections:

  1. **Type** which represents the chart type. See [Type](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/Type.html) and [ChartType](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/ChartType.html) enumeration, with all available chart types out of the box. By controllers, you can create own charts and different types.
  2. **Data** which must be showed by the chart. See [Data](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/data/Data.html) and [the data section](#data) for details.
  3. **Options** which represents a set of options to configure the chart. See [Options](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/configuration/package-summary.html).
  
## Usage 

A **Charba** chart extends always [AbstractChart](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/AbstractChart.html) which wraps a DOM [DIV element](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/dom/elements/Div.html) and implements [IsChart](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/IsChart.html) interface which is passed to callbacks, events handlers, plugins and all other customization items.

Programmatically, you could use a chart as following:

```java
...
// example for a line chart
LineChart chart = new LineChart();
component.add(chart);
...
// example for Elemental2
Element element = chart.getChartElement().as();
DomGlobal.document.body.appendChild(element);
```

## Usage by widget (only GWT artifact)

A **Charba** chart widget for GWT extends always [AbstractChartWidget](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/gwt/widgets/AbstractChartWidget.html) which is a [GWT SimplePanel](http://www.gwtproject.org/javadoc/latest/com/google/gwt/user/client/ui/SimplePanel.html) and implements [IsChart](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/IsChart.html) interface which is passed to callbacks, events handlers, plugins and all other customization items.

The charts can be implemented leveraging on [UIBinder](http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html) feature of GWT or also programmatically.  

Using as example a Line chart, here is an example how to include it in the a [UIBinder](http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html) file (be sure to have in the your classpath the `charba-[version.release]-gwt.jar` file):

```xml
<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"
   xmlns:g="urn:import:com.google.gwt.user.client.ui"
   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">

   <g:HTMLPanel  width="100%">
      ....
      <c:LineChartWidget ui:field="chart"/>
      ...
   </g:HTMLPanel>
</ui:UiBinder> 
```

Into GWT component related to UIbinder definition, we could reference it as following:

```java
   ...
   @UiField
   LineChartWidget chart;
   ...
```

In the java constructor of widget, you can set all options and datasets definitions needed for your project.

Programmatically, you could implement a chart as following:

```java
   ...
   LineChartWidget chart = new LineChartWidget();
   component.add(chart);
   ...
```

## Data

The [Data](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/data/Data.html) contains the [datasets](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/data/Dataset.html) with data and configuration how data should be showed and the labels for each dataset and data.

```java
// creates the chart	
BarChart chart = new BarChart();
// creates the dataset
BarDataset dataset = chart.newDataset();
// sets labels of the data
chart.getData().setLabels("January", "February", "March", "April");
// sets the dataset to the chart
chart.getData().setDatasets(dataset);
```

The following are the attributes that you can set:

| Name | Defaults | Description
| :- | :- | :-
| labels | String[] - [Labels](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/data/Labels.html) | The labels to display.
| datasets | [Dataset](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/data/Dataset.html)[] | The datasets of the chart.
