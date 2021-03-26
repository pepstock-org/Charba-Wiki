---
id: ScriptableOptions
title: Scriptable Options
hide_title: true
sidebar_label: Scriptable Options
---
## Scriptable options

Scriptable options are configuration items which can be configured at runtime, based on a callback which is called for each of the underlying data values and that takes a context representing contextual information.

All scriptable options callbacks can accept only 1 argument, the context, which can be different depending on the chart element which is triggering the callback.

Here is an example:

```java
LineDataset dataset = chart.newDataset();
dataset.setBackgroundColor(new ColorCallback<ScriptableContext>() {

	@Override
	public IsColor invoke(ScriptableContext context) {
		return HtmlColor.PINK;
	}

});
```

## Options Context

The option context is used to give contextual information when resolving options. It applies to all scriptable options and their callbacks.

The object is preserved, so it can be used to store and pass information between calls.

There are the following different types of context objects, to be consumed on scriptable options on chart elements (plugins excluded):

 * [Scriptable context](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ScriptableContext.html) used for scriptable options that apply at chart, dataset or data level.
 * [Scale scriptable context](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ScaleScriptableContext.html) used for scriptable options that apply at scale or ticks level.

Apart for the options stored by the user in the context, all other options must be considered as read-only properties. 

### Scriptable Options Context

The scriptable options context is used for data set scriptable options which are providing all necessary information to get the data and data set links in order to apply own logic.

Here is an example:

```java
BarDataset dataset = chart.newDataset();
dataset.setBackgroundColor(new ColorCallback<ScriptableContext>() {

	@Override
	public IsColor invoke(ScriptableContext context) {
		IsChart chart = context.getChart(); 
		Dataset dataset = chart.getData().getDatasets().get(context.getDatasetIndex());
		Double value = dataset.getData().get(context.getDataIndex());
		if (value >= 85D) {
			return HtmlColor.RED;
		} else if (value >= 60D) {
			return HtmlColor.ORANGE;
		}
		return HtmlColor.GREEN;
	}

});
```

The context object contains the following properties:

| Name | Type | Description
| ---- | ---- | ----
| active | boolean | Whether the associated element is hovered.
| chart | [IsChart](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/IsChart.html) | Chart instance. 
| dataIndex | int | The index of the current data.
| datasetIndex | int | The index of the current data set.
| datasetItem | [DatasetItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/DatasetItem.html) | The data set information for this data
| datasetElement | [DatasetElement](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/DatasetElement.html) | The element (point, arc, bar, etc.) for this data
| type | [ContextType](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/ContextType.html) | The type of the context. It can be `ContextType.CHART`, `ContextType.DATASET` or `ContextType.DATA`. 

The following matrix will report which properties are available based on the context type.

<table>
   <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">ContextType.CHART</th>
            <th scope="col">ContextType.DATASET</th>
            <th scope="col">ContextType.DATA</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td scope="row">chart</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
        </tr>
        <tr>
            <td scope="row">active</td>
            <td style={{backgroundColor: 'rgb(255,232,232)'}}>NO</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
        </tr>
        <tr>
            <td scope="row">datasetIndex</td>
            <td style={{backgroundColor: 'rgb(255,232,232)'}}>NO</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
        </tr>
        <tr>
            <td scope="row">dataIndex</td>
            <td style={{backgroundColor: 'rgb(255,232,232)'}}>NO</td>
            <td style={{backgroundColor: 'rgb(255,232,232)'}}>NO</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
        </tr>
        <tr>
            <td scope="row">datasetItem</td>
            <td style={{backgroundColor: 'rgb(255,232,232)'}}>NO</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
        </tr>
        <tr>
            <td scope="row">datasetElement</td>
            <td style={{backgroundColor: 'rgb(255,232,232)'}}>NO</td>
            <td style={{backgroundColor: 'rgb(255,232,232)'}}>NO</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
        </tr>
    </tbody>
</table>

### Scale Scriptable Options Context

The scale scriptable options context is used for scales and ticks scriptable options which are providing all necessary information to get the scale and ticks links in order to apply own logic.

Here is an example:

```java
RadialAxis axis = new RadialAxis(chart);
axis.getPointLabels().setColor(new ColorCallback<ScaleScriptableContext>() {
			
	@Override
	public Object invoke(ScaleScriptableContext context) {
		return context.getIndex() % 2  == 0 ? HtmlColor.RED : HtmlColor.BLACK;
	}
});
```

The context object contains the following properties:

| Name | Type |  Description
| ---- | ---- | ----
| chart | [IsChart](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/IsChart.html) | Chart instance.
| axis | [Axis](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Axis.html) | Axis instance. 
| index | int | The index of the current tick.
| scale | [ScaleItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/ScaleItem.html) | The scale associated to this context.
| tick | [ScaleTickItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/ScaleTickItem.html)| The tick associated to this context.
| type | [ContextType](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/ContextType.html) | The type of the context. It can be `ContextType.SCALE` or `ContextType.TICK`. 

The following matrix will report which properties are available based on the context type.

<table>
   <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">ContextType.SCALE</th>
            <th scope="col">ContextType.TICK</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td scope="row">chart</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
        </tr>
        <tr>
            <td scope="row">axis</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
        </tr>
        <tr>
            <td scope="row">scale</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
        </tr>
        <tr>
            <td scope="row">tick</td>
            <td style={{backgroundColor: 'rgb(255,232,232)'}}>NO</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
        </tr>
        <tr>
            <td scope="row">index</td>
            <td style={{backgroundColor: 'rgb(255,232,232)'}}>NO</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
        </tr>
    </tbody>
</table>
