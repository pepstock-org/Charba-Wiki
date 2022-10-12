---
id: PluginHTMLLegend
title: HTML legend plugin
hide_title: true
sidebar_label: HTML legend
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## HTML legend plugin

**Charba** provides a plugin implementation to create a legend by HTML content, outside of the canvas element managed by [Chart.JS](http://www.chartjs.org/).

The goal is to create a HTML element with all flexibility that HTML elements can provide, like multi lines for legend text, using the chart configuration about the [legend](../configuration/Legend).

<br/> 

<img src={useBaseUrl('/img/htmlLegendStyle.png')} />

<br/> 
<br/> 
<br/> 

This plugin, as singleton, can be set both at global and at chart level.

The implementation is [HtmlLegend](https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/impl/plugins/HtmlLegend.html) and can be set as following:

```java
// ---------------------------------
// Registers as global plugin
// ---------------------------------
Defaults.get().getPlugins().register(HtmlLegend.get());
// ---------------------------------
// Registers as single chart plugin
// ---------------------------------
chart.getPlugins().add(HtmlLegend.get());
```

The ID of plugin is `charbahtmllegend` ([HtmlLegend.ID](https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/impl/plugins/HtmlLegend.html#ID)).

## Options

It could be that you set this plugin as global one for all your charts but you want to change it for only one instance.

In this case you should instantiate a [HtmlLegendOptions](https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/impl/plugins/HtmlLegendOptions.html) and set it to your chart options as following, setting the color you want:

```java
// creates a plugin options
HtmlLegendOptions options = new HtmlLegendOptions();
// Set "maximum legend columns" overriding the default one
options.setMaximumLegendColumns(5);

// --------------------------------------
// STORING plugin options
// --------------------------------------
// stores the plugin options by plugin ID
chart.getOptions().getPlugin().setOptions(HtmlLegend.ID, options);
// stores the plugin options without plugin ID
chart.getOptions().getPlugin().setOptions(options);
// stores the plugin options directly by the options
options.store(chart);
```

You can also change the default for all charts instances, as following

```java
// creates a plugin options
HtmlLegendOptions options = new HtmlLegendOptions();
// Set "maximum legend columns" overriding the default one
options.setMaximumLegendColumns(5);

// --------------------------------------
// STORING plugin options
// --------------------------------------
// stores the plugin options by plugin ID
Defaults.get().getGlobal().getPlugin().setOptions(HtmlLegend.ID, options);
// stores the plugin options without plugin ID
Defaults.get().getGlobal().getPlugin().setOptions(options);
// stores the plugin options directly by the options
options.store();
```

If you need to read the plugin options, there is the specific factory, [HtmlLegendOptionsFactory](https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/impl/plugins/HtmlLegendOptionsFactory.html) as static reference inside the [plugin](https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/impl/plugins/HtmlLegend.html) which can be used to retrieve the options from chart, as following:

```java
// gets options reference
HtmlLegendOptions options;

// --------------------------------------
// GETTING plugin options from chart
// --------------------------------------
if (chart.getOptions().getPlugin().hasOptions(HtmlLegend.ID)){
   // retrieves the plugin options by plugin ID
   options = chart.getOptions().getPlugin().getOptions(HtmlLegend.ID, HtmlLegend.FACTORY);
   //retrieves the plugin options without plugin ID
   options = chart.getOptions().getPlugin().getOptions(HtmlLegend.FACTORY);
}
```

The plugin uses the chart configuration about the [legend](../configuration/Legend) to build the HTML legend, therefore you can configure the legend as in all the other charts.

The following are the attributes that you can set to plugin options:

| Name | Type | Default | Description
| :- | :- | :- | :-
| display | boolean | `true` | if `true`, the HTML legend is showed.
| cursorPointer | [CursorType](https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/dom/enums/CursorType.html) | CursorType.POINTER | Cursor style when the legend is hovered. 
| maxLegendColumns | int | Integer.MAX_VALUE | Amount of legend items to show in the same row before creating new row.

:::note limitations
 * [Position.LEFT](https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/enums/Position.html#LEFT) is ignored and managed as [Position.TOP](https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/enums/Position.html#TOP).
 * [Position.RIGHT](https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/enums/Position.html#RIGHT) is ignored and managed as [Position.BOTTOM](https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/enums/Position.html#BOTTOM).
 * [CanvasGradientItem](https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html)s provided by a dataset callback are ignored.
:::

## Setting HTML text

The plugin allows to the user 2 ways to apply own behavior on legend text creation in order to customize the legend text:

  1. implements a [LegendLabelsCallback](../configuration/Legend#generatelabels-callback) at chart level. The interface can provide `setText(SafeHtml)` method to set or override the value of legend item as HTML.
  1. implements a [HtmlLegendTextCallback](https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/HtmlLegendTextCallback.html), see below.

By default, if the legend text (provided by labels or dataset label) contains `\n`, the legend text will be split having a multi-line legend text.

### Item text callback

The plugin provides a callback to change the value of legend text which can return a [SafeHtml](https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/dom/safehtml/SafeHtml.html) to apply as legend text.

<img src={useBaseUrl('/img/htmlLegendSplit.png')} />

```java
// creates a plugin options
HtmlLegendOptions options = new HtmlLegendOptions();
// sets callback
options.setLegendItemCallback(new HtmlLegendItemCallback(){

    /**
     * Returns a text of legend for a specific item, as HTML
     * 
     * @param chart chart instance
     * @param item legend item which represents the text to create
     * @param currentText current text provided by legend labels callback.
     * @return HTML legend representation as SafeHTML
     */
     @Override
     public SafeHtml generateText(IsChart chart, LegendLabelItem item, String currentText){
    	// logic
    	return myItemTextAsHtml;
    }

});
```

### Title text callback

The plugin provides a callback to change the value of legend title text which can return a [SafeHtml](https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/dom/safehtml/SafeHtml.html) to apply as legend title text.

<img src={useBaseUrl('/img/htmlLegendTitle.png')} />

```java
// creates a plugin options
HtmlLegendOptions options = new HtmlLegendOptions();
// sets callback
options.setLegendTitleCallback(new HtmlLegendTitleCallback(){

    /**
     * Returns a text of legend for the legend title, as HTML
     * 
     * @param chart chart instance
     * @param item legend title instance
     * @param currentText current text provided by legend title
     * @return HTML legend title representation as SafeHTML
     */
     @Override
    public SafeHtml generateText(IsChart chart, LegendTitle item, String currentText){
    	// logic
    	return myTitleTextAsHtml;
    }

});
```

## Options builder

**Charba** provides a builder to create options using the **set** methods in sequence and get the options object at the end of configuration.

```java
// creates a plugin options
HtmlLegendOptions options = HtmlLegendOptionsBuilder.create()
	.setDisplay(true)
	.setMaximumLegendColumns(6)
	.build();
// sets options
chart.getOptions().getPlugins().setOptions(HtmlLegend.ID, options);
```

Creating a build by `HtmlLegendOptionsBuilder.create()` it will use the global options as default, instead by `HtmlLegendOptionsBuilder.create(chart)` it will use the global chart options as default.
