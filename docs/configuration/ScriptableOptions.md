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
// creates datasets instance from chart
LineDataset dataset = chart.newDataset();
// sets callback for scriptable options
dataset.setBackgroundColor(new ColorCallback<DatasetContext>(){

	@Override
	public IsColor invoke(DatasetContext context){
		return HtmlColor.PINK;
	}

});
```

## Options Context

The option context is used to give contextual information when resolving options. It applies to all scriptable options and their callbacks.

The object is preserved, so it can be used to store and pass information between calls.

There are the following different types of context objects, to be consumed on scriptable options on chart elements (plugins excluded):

 * [chart context](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/ChartContext.html) used for scriptable options that apply at chart configuration level.
 * [dataset context](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/DatasetContext.html) used for scriptable options that apply at dataset or data configuration level.
 * [scale context](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/ScaleContext.html) used for scriptable options that apply at scale or ticks level.

Apart for the options stored by the user in the context (attributes), all other options must be considered as read-only properties. 

### Chart context

The [chart context](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/ChartContext.html) is used for scriptable options set in the chart configuration and is providing all necessary information about the chart in order to apply own logic.

The context object contains the following properties:

| Name | Type | Description
| :- | :- | :-
| chart | [IsChart](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/IsChart.html) | Chart instance. 
| type | [ContextType](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/items/ContextType.html) | The type of the context. It can only be `ContextType.CHART`.
| attributes | [NativeObjectContainer](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/commons/NativeObjectContainer.html) | User object which you can store your options at runtime.

### Custom attributes

You can set custom attributes in the context. When teh context is persistent, this could be very helpful because can store attributes needed in the logic of the scriptable options.

| Name | Type | Description
| :- | :- | :-
| [Key](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/commons/Key.html) instance | boolean - double - int - String | The key could not be the same of the existing context properties and can set custom attributes.

```java
// creates datasets instance from chart
BarDataset dataset = chart.newDataset();
// sets callback for scriptable options
dataset.setBackgroundColor(new ColorCallback<DatasetContext>(){

	private final Key myKey = Key.create("myKey");

	@Override
	public IsColor invoke(DatasetContext context){
		// -------------------------------
		// sets and gets boolean attribute
		// -------------------------------
		context.setAttribute(myKey, true);
		boolean myKeyAsBoolean = context.getAttribute(myKey, false);
		// -------------------------------
		// sets and gets double attribute
		// -------------------------------
		context.setAttribute(myKey, 0D);
		double myKeyAsDouble = context.getAttribute(myKey, Double.NaN);
		// -------------------------------
		// sets and gets int attribute
		// -------------------------------
		context.setAttribute(myKey, 1);
		double myKeyAsInt = context.getAttribute(myKey, Integer.MIN_VALUE);
		// -------------------------------
		// sets and gets string attribute
		// -------------------------------
		context.setAttribute(myKey, "myString");
		String myKeyAsString = context.getAttribute(myKey, null);
		
		// logic
	}

});
```

### Dataset context

The [dataset context](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/DatasetContext.html) is used for data set scriptable options which are providing all necessary information to get the data and data set links in order to apply own logic.

Here is an example:

```java
// creates datasets instance from chart
BarDataset dataset = chart.newDataset();
// sets callback for scriptable options
dataset.setBackgroundColor(new ColorCallback<DatasetContext>(){

	@Override
	public IsColor invoke(DatasetContext context){
	    // gets chart from context
		IsChart chart = context.getChart();
		// gets data by indexes provided by context
		Dataset dataset = chart.getData().getDatasets().get(context.getDatasetIndex());
		Double value = dataset.getData().get(context.getDataIndex());
		// my logic
		if (value >= 85D){
			return HtmlColor.RED;
		} else if (value >= 60D){
			return HtmlColor.ORANGE;
		}
		return HtmlColor.GREEN;
	}

});
```

The context object contains the following properties:

| Name | Type | Description
| :- | :- | :-
| active | boolean | Whether the associated element is hovered.
| attributes | [NativeObjectContainer](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/commons/NativeObjectContainer.html) | User object which you can store your options at runtime.
| chart | [IsChart](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/IsChart.html) | Chart instance. 
| dataIndex | int | The index of the current data.
| datasetElement | [DatasetElement](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/items/DatasetElement.html) | The element (point, arc, bar, etc.) for this data
| datasetIndex | int | The index of the current data set.
| datasetItem | [DatasetItem](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/items/DatasetItem.html) | The data set information for this data
| mode | [TransitionKey](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/options/TransitionKey.html) | The update mode, brought by conte 
| type | [ContextType](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/items/ContextType.html) | The type of the context. It can be `ContextType.DATASET` or `ContextType.DATA`. 

The following matrix will report which properties are available based on the context type.

<table>
   <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">ContextType.DATASET</th>
            <th scope="col">ContextType.DATA</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td scope="row">active</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
        </tr>
        <tr>
            <td scope="row">attributes</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
        </tr>
        <tr>
            <td scope="row">chart</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
        </tr>
        <tr>
            <td scope="row">dataIndex</td>
            <td style={{backgroundColor: 'rgb(255,232,232)'}}>NO</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
        </tr>
        <tr>
            <td scope="row">datasetElement</td>
            <td style={{backgroundColor: 'rgb(255,232,232)'}}>NO</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
        </tr>
        <tr>
            <td scope="row">datasetIndex</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
        </tr>
        <tr>
            <td scope="row">datasetItem</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
        </tr>
        <tr>
            <td scope="row">mode</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
        </tr>
    </tbody>
</table>

### Scale context

The [scale context](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/ScaleContext.html) is used for scales and ticks scriptable options which are providing all necessary information to get the scale and ticks links in order to apply own logic.

Here is an example:

```java
// creates an axis
RadialAxis axis = new RadialAxis(chart);
// sets callback for scriptable options
axis.getPointLabels().setColor(new ColorCallback<ScaleContext>(){
			
	@Override
	public Object invoke(ScaleContext context){
	    // my logic
		return context.getIndex() % 2  == 0 ? HtmlColor.RED : HtmlColor.BLACK;
	}
});
```

The context object contains the following properties:

| Name | Type |  Description
| :- | :- | :-
| attributes | [NativeObjectContainer](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/commons/NativeObjectContainer.html) | User object which you can store your options at runtime.
| axis | [Axis](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/configuration/Axis.html) | Axis instance. 
| chart | [IsChart](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/IsChart.html) | Chart instance.
| index | int | The index of the current tick or the label (wfor [point labels](../axes/PointLabels#scriptable) callback).
| label | String | the label that is shown on the perimeter of the scale. Only for [point labels](../axes/PointLabels#scriptable) callback.
| scale | [ScaleItem](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/items/ScaleItem.html) | The scale associated to this context.
| tick | [ScaleTickItem](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/items/ScaleTickItem.html)| The tick associated to this context.
| type | [ContextType](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/items/ContextType.html) | The type of the context. It can be `ContextType.SCALE`, `ContextType.TICK`  or `ContextType.POINT_LABEL`. 

The following matrix will report which properties are available based on the context type.

<table>
   <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">ContextType.SCALE</th>
            <th scope="col">ContextType.TICK</th>
            <th scope="col">ContextType.POINT_LABEL</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td scope="row">attributes</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
        </tr>
        <tr>
            <td scope="row">axis</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
        </tr>
        <tr>
            <td scope="row">chart</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
        </tr>
        <tr>
            <td scope="row">index</td>
            <td style={{backgroundColor: 'rgb(255,232,232)'}}>NO</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
        </tr>
        <tr>
            <td scope="row">scale</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
        </tr>
        <tr>
            <td scope="row">tick</td>
            <td style={{backgroundColor: 'rgb(255,232,232)'}}>NO</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
            <td style={{backgroundColor: 'rgb(255,232,232)'}}>NO</td>
        </tr>
        <tr>
            <td scope="row">label</td>
            <td style={{backgroundColor: 'rgb(255,232,232)'}}>NO</td>
            <td style={{backgroundColor: 'rgb(255,232,232)'}}>NO</td>
            <td style={{backgroundColor: 'rgb(244,252,239)'}}>Available</td>
        </tr>
    </tbody>
</table>

## Advanced usage of scriptable options

There are use cases where the scriptable options callbacks are called several hundreds because are related to the amount of data set on datasets of the charts.

When you are in above use case and you need the best performance, you can set a scriptable options by a [native java script callback](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/NativeCallback.html).

A [native java script callback](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/NativeCallback.html) is built with java script code in order to be execute directly from [Chart.JS](http://www.chartjs.org/).

```java
// creates a callback 
// using java script code and default "context" variable name
// for scriptable context
NativeCallback from = NativeCallback.create("return context.index === 0 ? context.chart.scales.y.getPixelForValue(100) : context.chart.getDatasetMeta(context.datasetIndex).data[context.index - 1].getProps(['y'], true).y;");

// creates a callback 
// using java script code and my "ctx" variable name
// for scriptable context
NativeCallback loop = NativeCallback.create("ctx", "return ctx.active");

Animations animations = chart.getOptions().getAnimations();
AnimationCollection y = animations.create(DefaultAnimationPropertyKey.Y);
y.setFrom(from);
y.setLoop(loop);

```
