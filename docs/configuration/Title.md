---
id: Title
title: Title
hide_title: true
sidebar_label: Title
---

## Title

A title is a name or words used to describe a chart.

To get, change and apply own properties, you can invoke the **set** and **get** methods, as following:

```java
// sets the text of title
chart.getOptions().getTitle().setText("My title of chart");
// enables the title and setting to use red color for text
chart.getOptions().getTitle().setDisplay(true);
chart.getOptions().getTitle().setColor("red");

IsColor color = chart.getOptions().getTitle().getColor();
boolean display = chart.getOptions().getTitle().isDisplay();
```

The defaults values are set in global defaults options, see [default global title options](../defaults/DefaultsCharts#title).

The following are the attributes that you can set:

| Name | Type | Scriptable | Description
| :- | :- | :- | :-
| align | [ElementAlign](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/enums/ElementAlign.html) | [Yes](#scriptable) | Alignment of the title.
| color | String - [IsColor](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) | Color of text of the title.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options). 
| display | boolean | [Yes](#scriptable) | If `true`, the title is shown.
| font | [IsFont](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/options/IsFont.html) | [Yes](#scriptable) | Font of title text. The default value is the global font with the style set to FontStyle.BOLD.<br/>See [Font](../defaults/DefaultsCharts#font).
| fullSize | boolean | [Yes](#scriptable) | Marks that this box should take the full width/height of the canvas (moving other boxes).
| padding | [Padding](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/configuration/Padding.html) | [Yes](#scriptable) | Number of pixels to add above and below the title text.<br/>See [padding documentation](Commons#padding) for more details.
| position | [Position](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/enums/Position.html) | [Yes](#scriptable) | Position of title.

## Scriptable

Title also accepts a callback, for some of above attributes, which is called at runtime and that takes the context as single argument, see [here](ScriptableOptions#chart-context) the details, which is representing contextual information and chart instance.

```java
// get title
Title title = chart.getOptions().getTitle();
// sets callback
title.setPadding(new PaddingCallback<ChartContext>(){

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
| align | [ElementAlignCallback](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/callbacks/ElementAlignCallback.html)&lt;ChartContext&gt; | [ElementAlign](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/enums/ElementAlign.html)
| color | [ColorCallback](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ChartContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/colors/IsColor.html)
| display | [SimpleDisplayCallback](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/callbacks/SimpleDisplayCallback.html)&lt;ChartContext&gt; | boolean
| font | [FontCallback](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/callbacks/FontCallback.html)&lt;ChartContext&gt; | [FontItem](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/items/FontItem.html)
| fullSize | [FullSizeCallback](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/callbacks/FullSizeCallback.html)&lt;ChartContext&gt; | boolean
| padding | [PaddingCallback](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/callbacks/PaddingCallback.html)&lt;ChartContext&gt; | [PaddingItem](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/items/PaddingItem.html)
| position | [PositionCallback](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/callbacks/PositionCallback.html)&lt;ChartContext&gt; | [Position](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/enums/Position.html)
