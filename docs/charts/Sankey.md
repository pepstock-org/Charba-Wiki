---
id: ChartSankey
title: Sankey chart
hide_title: true
sidebar_label: Sankey
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Sankey chart

(quoted from [Sankey chart](https://en.wikipedia.org/wiki/Sankey_diagram) definition in Wikipedia)

Sankey charts are a type of flow diagram in which the width of the arrows is proportional to the flow rate.

The illustration shows a sankey chart that represents all the primary energy that flows into a factory. The widths of the bands are linearly proportional to energy production, utilization and loss. The primary energy inputs enter the left side of the diagram, and are differentiated into gas, electricity and coal/oil.

Sankey diagrams can also visualize the energy accounts, material flow accounts on a regional or national level, and cost breakdowns, and emphasize the major transfers or flows within a system. They help locate the most important contributions to a flow. They often show conserved quantities within defined system boundaries. 

<a href="https://pepstock-org.github.io/Charba-Showcase/index.html?gallery=sankey"><img src={useBaseUrl('/img/sankey.png')} /></a>

<br/>
<br/>

**Charba** provides out of the box the feature to enable sankey chart, leveraging on [Chart.js Sankey](https://github.com/kurkle/chartjs-chart-sankey).

The [Chart.js Sankey](https://github.com/kurkle/chartjs-chart-sankey) is *native javascript* implementation and **Charba** provides the wrapper in order to be able to use it.

Programmatically, you could use a bar chart as following:

```java
// creates the chart	
SankeyChart chart = new SankeyChart();
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
      <c:SankeyChartWidget ui:field="chart"/>
      ...
   </g:HTMLPanel>
</ui:UiBinder> 
```

### Controller registration

The controller registration is performed when a first SANKEY chart has been instantiated. When there is a use case where some defaults options must be set before the first instantiation, you need to register the controller before changing the default options.

```java
// registers the controller	
SankeyChart.register();
// gets default options
GlobalOptions gOptions = Defaults.get().getGlobal();
// gets default sankey element options
SankeyElementOptions defaultOptions = gOptions.getElements().getElement(SankeyElementOptions.FACTORY);
// sets default value
defaultOptions.setColorMode(ColorMode.GRADIENT);
```

## Dataset

The sankey chart allows to define the data and a number of properties, used to display the data, by a [sankey dataset](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/sankey/SankeyDataset.html).

Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor.

```java
// creates the chart
SankeyChart chart = new SankeyChart();
// creates the dataset
SankeyDataset dataset = chart.newDataset();
// sets the option
dataset.setColorMode(ColorMode.GRADIENT);
...
// creates the dataset
SankeyDataset datasetNew = new SankeyDataset();
// sets the option
datasetNew.setColorMode(ColorMode.GRADIENT);
...
// sets the dataset to the chart
chart.getData().setDatasets(dataset);
```

The following are the attributes that you can set:

| Name | Type | Default | Scriptable | Description
| :- | :- | :- | :- | :-
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.BLACK - <span style={{backgroundColor: 'rgb(0,0,0)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | - | The color of the node border. 
| borderWidth | int | 1 | - | The stroke width of the sankey nodes in pixels.
| color | String - [IsColor](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.BLACK - <span style={{backgroundColor: 'rgb(0,0,0)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | - | The color of the node label. 
| colorFrom | String[] - [IsColor](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/colors/IsColor.html)[] | empty list | [Yes](#scriptable) | The starting color of the flow between nodes.
| colorMode | [ColorMode](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/sankey/enums/ColorMode.html) | ColorMode.GRADIENT | [Yes](#scriptable) | How the flow is drawn on the chart.
| colorTo | String[] - [IsColor](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/colors/IsColor.html)[] | empty list | [Yes](#scriptable) | The ending color of the flow between nodes.
| column | [Column](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/sankey/Column.html) | `null` | - | Is a map to apply a specific position, by column number, to the nodes, affecting the chart layout.
| font | [IsFont](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/options/IsFont.html) | `Defaults.get().getGlobal()`<br/>`.getFont()` | [Yes](#scriptable) | Font of text of node label.<br/>See [Font](../defaults/DefaultsCharts#font).
| labels | [Labels](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/sankey/Labels.html) | `null` | - | Is a map to apply a different label to the nodes.
| nodeWidth | int | 10 | - | The width of node.
| padding | double | `font.getLineheight() / 2` | [Yes](#scriptable) | The padding of the node label from the top.
| priority | [Priority](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/sankey/Priority.html) | `null` | - | Is a map to apply a different priority to the nodes, affecting the chart layout.
| size | [Size](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/sankey/enums/Size.html) | Size.MAX | [Yes](#scriptable) | Sets Size.MIN if flow overlap is preferred.

### Scriptable

Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in [Configuring charts](../configuration/ScriptableOptions) section. 

```java
// creates chart
SankeyChart chart = new SankeyChart();
// creates dataset
SankeyDataset dataset = chart.newDataset();
// sets the option by a callback 
dataset.setColorFrom(new ColorCallback<DatasetContext>(){

   @Override
   public IsColor invoke(DatasetContext context){
      // logic
      return color;
   }
});
```

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :- 
| colorFrom | [ColorCallback](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/colors/IsColor.html)
| colorMode | [ColorModeCallback](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/sankey/callbacks/ColorModeCallback.html) | [ColorMode](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/sankey/enums/ColorMode.html)
| colorTo | [ColorCallback](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/colors/IsColor.html)
| font | [FontCallback](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/callbacks/FontCallback.html)&lt;DatasetContext&gt; | [FontItem](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/items/FontItem.html)
| padding | [PaddingCallback](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/sankey/callbacks/PaddingCallback.html) | double
| size | [SizeCallback](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/sankey/callbacks/SizeCallback.html) | [Size](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/sankey/enums/Size.html)

## Data structure

The data of a dataset for a sankey chart can be passed in [sankey data points](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/sankey/SankeyDataPoint.html).

:::caution
The `setData` method is available but you can **NOT** use them otherwise an exception will throw.<br/>Use `setDataPoints` instead.
:::

#### Data as objects

Sankey data should be provided by a list of objects. The [sankey data point](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/sankey/SankeyDataPoint.html) contains the relations between nodes and their value.

It needs to have `from` and `to` values, which represent the nodes, and `value` which represents the value of the sankey element.

<img src={useBaseUrl('/img/sankeyCountries.png')} />

<br/>
<br/>

```java
// creates chart
SankeyChart chart = new SankeyChart();
// creates dataset
SankeyDataset dataset = chart.newDataset();
// creates a list of data points
List<SankeyDataPoint> datapoints = dataset1.getDataPoints(true);
datapoints.add(new SankeyDataPoint("a", "b", 20));
datapoints.add(new SankeyDataPoint("c", "d", 10));
datapoints.add(new SankeyDataPoint("c", "e", 5));
// stores datapoints to dataset
dataset.setDataPoints(datapoints);
```

## Options

The sankey chart defines specific [options implementation](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/sankey/SankeyOptions.html) to be configured.

```java
// creates chart
SankeyChart chart = new SankeyChart();
// gets the chart options
SankeyOptions options = chart.getOptions();
// sets option
options.setResponsive(true);
```

:::info
The sankey chart disables the [DATALABELS](../extensions/DataLabels), [LABELS](../extensions/Labels), [ZOOM](../extensions/Zoom), [ANNOTATION](../extensions/Annotation), [HTML legend](../plugins/PluginHTMLLegend), [color schemes](../plugins/PluginColorSchemes) and [dataset items selector](../plugins/PluginDatasetsItemsSelector) plugins and the options can **NOT** be set globally but only at chart level.
:::

## Scales

The sankey chart can use cartesian [linear](../axes/CartesianLinearAxes) axes and they are not showed.
