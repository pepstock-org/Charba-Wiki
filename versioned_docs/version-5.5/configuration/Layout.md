---
id: Layout
title: Layout
hide_title: true
sidebar_label: Layout
---
## Layout

The layout component enables the padding configuration to add to a chart.

The [layout](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/configuration/Layout.html) configuration is nested in the configuration using 

```java
// get layout
Layout layout = chart.getOptions().getLayout();
// get padding
Padding padding = chart.getOptions().getLayout().getPadding();

// sets top and bottom options to padding of chart
chart.getOptions().getLayout().getPadding().setTop(10);
chart.getOptions().getLayout().getPadding().setBottom(10);
// to set same padding value to all sides of the chart
chart.getOptions().getLayout().getPadding().set(10);

int paddingTop = chart.getOptions().getLayout().getPadding().getTop();
```

The default values are set in global defaults options, see [default global layout options](../defaults/DefaultsCharts#layout).

The following layout options are available. 

| Name | Type | Description
| :- | :- | :-
| autoPadding | boolean | If `true`, apply automatic padding so visible elements are completely drawn.
| padding | [Padding](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/configuration/Padding.html) | To set specific padding for specific sides.

See [padding documentation](Commons#padding) for more details.

## Scriptable

Padding also accepts a callback which is called at runtime and that takes the context as single argument, see [here](ScriptableOptions#chart-context) the details, which is representing contextual information and chart instance.

The padding element can be set as a [callback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/PaddingCallback.html), providing a [padding item](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/items/PaddingItem.html) instance, as following:

```java
// get layout
Layout layout = chart.getOptions().getLayout();
// sets callback
layout.setPadding(new PaddingCallback<ChartContext>(){

   @Override
   public PaddingItem invoke(ChartContext context){
      PaddingItem padding = new PaddingItem(); 
      // your logic
      return padding;
   }
});
```

The following option can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :- 
| padding | [PaddingCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/PaddingCallback.html)&lt;ChartContext&gt; | [PaddingItem](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/items/PaddingItem.html)
