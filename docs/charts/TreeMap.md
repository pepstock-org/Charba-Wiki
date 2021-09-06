---
id: ChartTreeMap
title: TreeMap chart
hide_title: true
sidebar_label: TreeMap
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## TreeMap chart

(quoted from [Treemap chart](https://en.wikipedia.org/wiki/Treemapping) definition in Wikipedia)

In information visualization and computing, treemapping is a method for displaying hierarchical data using nested figures, usually rectangles.

Treemaps display hierarchical (tree-structured) data as a set of nested rectangles. Each branch of the tree is given a rectangle, which is then tiled with smaller rectangles representing sub-branches. A leaf node's rectangle has an area proportional to a specified dimension of the data. Often the leaf nodes are colored to show a separate dimension of the data.

When the color and size dimensions are correlated in some way with the tree structure, one can often easily see patterns that would be difficult to spot in other ways, such as whether a certain color is particularly relevant. A second advantage of treemaps is that, by construction, they make efficient use of space. As a result, they can legibly display thousands of items on the screen simultaneously.

<a href="https://pepstock-org.github.io/Charba-Showcase/index.html?gallery=treemap"><img src={useBaseUrl('/img/treemap.png')} /></a>

<br/>
<br/>

**Charba** provides out of the box the feature to enable treemap chart, leveraging on [Chart.js Treemap](https://github.com/kurkle/chartjs-chart-treemap).

The [Chart.js Treemap](https://github.com/kurkle/chartjs-chart-treemap) is *native javascript* implementation and **Charba** provides the wrapper in order to be able to use it.

Programmatically, you could use a bar chart as following:

```java
// creates the chart	
TreeMapChart chart = new TreeMapChart();
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
      <c:TreeMapChartWidget ui:field="chart"/>
      ...
   </g:HTMLPanel>
</ui:UiBinder> 
```

## Dataset

The treemap chart allows to define the data and a number of properties, used to display the data, by a [treemap dataset](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/treemap/TreeMapDataset.html).

Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor.

```java
// creates the chart
TreeMapChart chart = new TreeMapChart();
// creates the dataset
TreeMapDataset dataset = chart.newDataset();
// sets the option
dataset.setBackgroundColor(HtmlColor.RED);
...
// creates the dataset
TreeMapDataset datasetNew = new TreeMapDataset();
// sets the option
datasetNew.setBackgroundColor(HtmlColor.RED);
...
// sets the dataset to the chart
chart.getData().setDatasets(dataset);
```

The following are the attributes that you can set:

| Name | Type | Default | Scriptable | Description
| :- | :- | :- | :- | :-
| backgroundColor | String[] - [IsColor](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html)[] - [Pattern](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/Pattern.html)[] - [Gradient](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/Gradient.html)[] | `Defaults.get().getGlobal()`<br/>`.getBackgroundColorAsString()` | [Yes](#scriptable) |The fill color/pattern of the treemap element.
| borderColor | String[] - [IsColor](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/Gradient.html)[] | `Defaults.get().getGlobal()`<br/>`.getBorderColorAsString()` | [Yes](#scriptable) | The color of the treemap element border. 
| borderWidth | int[] | 0 | - | The stroke width of the treemap element in pixels.
| color | String[] - [IsColor](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html)[] | HtmlColor.TRANSPARENT | [Yes](#scriptable) | Color of label.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| dividerCapStyle | [CapStyle](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/enums/CapStyle.html) | CapStyle.BUTT | - | Cap style of the divider inside a treemap element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap).
| dividerColor | String[] - [IsColor](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html)[] | HtmlColor.BLACK - <span style={{backgroundColor: 'rgba(0,0,0,1)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | - | The color of the divider inside a treemap element. 
| dividerWidth | int[] | 0 | - | The stroke width of the divider inside a treemap element in pixels.
| dividerDash | [Dash](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/treemap/Dash.html)[] | [] | - | Length and spacing of dashes of the divider inside a treemap element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| dividerDashOffset | double | 0 | - | Offset for line dashes of the divider inside a treemap element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| font | [IsFont](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/options/IsFont.html) | `Defaults.get().getGlobal()`<br/>`.getFont()` | - | Font of text of label.<br/>See [Font](../defaults/DefaultsCharts#font).
| groupDividers | boolean | `false` | - | If `true`, the dividers will be applied to the grouped treemap elements, only if grouping.
| groupLabels | boolean | `true` | - | If `true`, the labels will be applied to the grouped treemap elements, only if grouping.
| groups | [Key](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/commons/Key.html)[] | [] | - | Set the properties names of the tree object to group by the data.
| hoverBackgroundColor | String[] - [IsColor](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html)[] - [Pattern](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/Pattern.html)[] - [Gradient](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/Gradient.html)[] | `Defaults.get().getGlobal()`<br/>`.getBackgroundColorAsString()` | [Yes](#scriptable) | The fill color/pattern of the treemap elements when hovered.
| hoverBorderColor | String[] - [IsColor](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/Gradient.html)[] | `Defaults.get().getGlobal()`<br/>`.getBorderColorAsString()` | [Yes](#scriptable) | The stroke color of the treemap elements when hovered.
| hoverBorderWidth | int[] | 0 | - | The stroke width of the treemap elements when hovered.
| hoverColor | String[] - [IsColor](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html)[] | HtmlColor.TRANSPARENT` | [Yes](#scriptable) | Color of label, when hovered.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| hoverFont | [IsFont](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/options/IsFont.html) | `Defaults.get().getGlobal()`<br/>`.getFont()` | - | Font of text of label, when hovered.<br/>See [Font](../defaults/DefaultsCharts#font).
| key | [Key](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/commons/Key.html) | `null` | - | Set the property name of the tree object to use to get the value of the data.
| rtl | boolean | `false` | - | Set `true` for rendering the treemap elements from right to left.
| spacing | double | 0.5D | - | Fixed distance between all treemap elements.

### Scriptable

Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in [Configuring charts](../configuration/ScriptableOptions) section. 

```java
// creates chart
TreeMapChart chart = new TreeMapChart();
// creates dataset
TreeMapDataset dataset = chart.newDataset();
// sets the option by a callback 
dataset.setBackgroundColor(new ColorCallback<DatasetContext>(){

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
| backgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/Gradient.html)
| borderColor | [ColorCallback](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/Gradient.html)
| color | [ColorCallback](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html)
| hoverBackgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/Gradient.html)
| hoverBorderColor | [ColorCallback](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/Gradient.html)
| hoverColor | [ColorCallback](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html)

## Data structure

The data of a dataset for a treemap chart can be passed in two formats. The data are automatically built, based on the tree data, provided by the users.

:::caution
The `setData` and `setDataPoints` methods are available, inherited by the bar dataset, but you can **NOT** use them otherwise an exception will throw.<br/>Use `setTree` or `setTreeObjects` instead.

The `getDataPoints` methods is available and can provide a list of [TreeMapDataPoint](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/treemap/TreeMapDataPoint.html).
:::

#### Data as doubles

A treemap dataset can contain the data as an array or list of doubles, 

```java
// creates chart
TreeMapChart chart = new TreeMapChart();
// creates dataset
TreeMapDataset dataset = chart.newDataset();
// sets data as an array of doubles
dataset.setTree(1,2,3,4,6);

// sets data as a list of double
List<Double> list = new LinkedList<>();
list.add(1);
list.add(2);
list.add(3);
dataset.setTree(list);
```

#### Data as objects

Tree data should be provided by a list of objects. Data is then automatically build. When the data are provided by objects, the `key` dataset property defines the key name in data objects to use for value, and the `groups` dataset property, as list of keys, can be provided to display multiple levels of hierarchy. Data is summarized to groups internally.

<img src={useBaseUrl('/img/groupedTreemap.png')} />

<br/>
<br/>

```java
// list of TreeMapObject properties
private enum Property implements Key
{
	STATE("state"),
	CODE("code"),
	REGION("region"),
	DIVISION("division"),
	INCOME("income"),
	POPULATION("population"),
	AREA("area");

	private final String value;

	private Property(String value) {
		this.value = value;
	}

	@Override
	public String value() {
		return value;
	}
}
// tree objects type
private static class TreeMapObject extends NativeObjectContainer {

	private TreeMapObject(NativeObject nativeObject) {
		super(nativeObject);
	}
}
// creates the tree objects
List<TreeMapObject> objects = new LinkedList<>();
// creates or loads objects from external source
...
// creates chart
TreeMapChart chart = new TreeMapChart();
// creates dataset
TreeMapDataset dataset = chart.newDataset();
// sets data as an array of doubles
dataset.setTreeObjects(objects);
// sets the value by the key of the object
dataset.setKey(Property.POPULATION);
// sets the keys of the object to group by
dataset.setGroups(Property.REGION, Property.DIVISION, Property.CODE);
```

## Options

The treemap chart defines specific [options implementation](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/treemap/TreeMapOptions.html) to be configured.

```java
// creates the chart
TreeMapChart chart = new TreeMapChart();
// gets the chart options
TreeMapOptions options = chart.getOptions();
// sets option
options.setResponsive(true);
```

:::info
The treemap chart disables the [DATALABELS](../extensions/DataLabels) and [LABELS](../extensions/Labels) plugins and the options can **NOT** be set globally but only at chart level.
:::
