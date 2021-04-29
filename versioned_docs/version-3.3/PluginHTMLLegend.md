---
id: PluginHTMLLegend
title: HTML legend plugin
hide_title: true
sidebar_label: HTML legend
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## HTML legend plugin

**Charba** provides a plugin implementation to create a legend by HTML content, outside of the canvas element managed by [Chart.JS](http://www.chartjs.org/).

The goal is to leverage on LegendCallback to create a HTML element with all flexibility that HTML elements can provide, like multi lines for legend text.

<img src={useBaseUrl('/img/htmlLegendStyle.png')} />

This plugin, as singleton, can be set both at global and at chart level.

The implementation is [HtmlLegend](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/HtmlLegend.html) and can be set as following:

```java
// GLOBAL
Defaults.get().getPlugins().register(HtmlLegend.get());

// INLINE
chart.getPlugins().add(HtmlLegend.get());
```

The ID of plugin is `charbahtmllegend` ([HtmlLegend.ID](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/HtmlLegend.html#ID)).

It could be that you set this plugin as global one for all your charts but you want to change it for only one instance.

In this case you should instantiate a [HtmlLegendOptions](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/HtmlLegendOptions.html) and set it to your chart options as following, setting the color you want:

```java
// INLINE
// Set "maximum legend columns" overriding the default one
HtmlLegendOptions option = new HtmlLegendOptions();
option.setMaximumLegendColumns(5);

// --------------------------------------
// store the plugin options by plugin ID
// --------------------------------------
chart.getOptions().getPlugins().setOptions(HtmlLegend.ID, option);
// --------------------------------------
// or store the plugin options without plugin ID
// --------------------------------------
chart.getOptions().getPlugins().setOptions(option);

// GLOBAL
// Set "maximum legend columns" overriding the default one
HtmlLegendOptions option = new HtmlLegendOptions();
option.setMaximumLegendColumns(5);

// --------------------------------------
// store the plugin options by plugin ID
// --------------------------------------
Defaults.get().getGlobal().getPlugins().setOptions(HtmlLegend.ID, option);
// --------------------------------------
// or store the plugin options without plugin ID
// --------------------------------------
Defaults.get().getGlobal().getPlugins().setOptions(option);
```

If you need to read the plugin options, there is the specific factory, [HtmlLegendOptionsFactory](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/HtmlLegendOptionsFactory.html) as static reference inside the [plugin](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/HtmlLegend.html) which can be used to retrieve the options from chart, as following:

```java
// INLINE
// reads the options from chart
HtmlLegendOptions option;
if (chart.getOptions().getPlugins().hasOptions(HtmlLegend.ID)){
   // --------------------------------------
   // retrieve the plugin options by plugin ID
   // --------------------------------------
   options = chart.getOptions().getPlugins().getOptions(HtmlLegend.ID, HtmlLegend.FACTORY);
   // --------------------------------------
   // or retrieve the plugin options without plugin ID
   // --------------------------------------
   options = chart.getOptions().getPlugins().getOptions(HtmlLegend.FACTORY);
}

// GLOBAL
if (Defaults.get().getGlobal().getPlugins().hasOptions(HtmlLegend.ID)){
   // --------------------------------------
   // retrieve the plugin options by plugin ID
   // --------------------------------------
   options = Defaults.get().getGlobal().getPlugins().getOptions(HtmlLegend.ID, HtmlLegend.FACTORY);
   // --------------------------------------
   // or retrieve the plugin options without plugin ID
   // --------------------------------------
   options = Defaults.get().getGlobal().getPlugins().getOptions(HtmlLegend.FACTORY);
}
```

The following are the attributes that you can set to plugin options:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| display | boolean | `true` | if `true`, the HTML legend is showed.
| cursorPointer | [CursorType](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/enums/CursorType.html) | CursorType.POINTER | Cursor style when the legend is hovered.
| maxLegendColumns | int | Integer.MAX_VALUE | Amount of legend items to show in the same row before creating new row.

## Configuration

The plugin will

  * provide some specific configuration to change some behaviors but it is leveraging on the [Legend](Defaults#legend) configuration provided by chart options.
  * respect if the user does not want to have the legend (by setting `false` the the legend or disabling legend plugin).
  * set to `false` the legend `display` options during own initialization to override the legend `display` set by the user.
  * set an internal [LegendCallback](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/LegendCallback.html) which will provide a HTML representation of chart legend.
  
Invoking the [generateLegend](Charts#generatelegend) method of the chart, you will get the HTML structure of HTML legend and not the out of the box one.

The HTML structure is:

```html
<TABLE>
  <TR>
    <TD>
      <DIV color for legend item>
      <DIV label for legend item>
    </TD>
    <TD>
      <DIV color for legend item>
      <DIV label for legend item>
    </TD>
  </TR>
</TABLE>
```

inside a DOM DIV element. All styles are applied directly to the elements therefore no CSS style file by class or id are managed. 

## Setting HTML Legend Text

The plugin allows to the user 2 ways to apply own behavior on legend text creation in order to customize the legend text:

  1. implements a [LegendLabelsCallback](Configuration#generatelabels-callback) at chart level. The interface can provide `setText(SafeHtml)` method to set or override the value of legend item as HTML.
  1. implements a [HtmlLegendTextCallback](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/HtmlLegendTextCallback.html), see below.

By default, if the legend text (provided by labels or dataset label) contains `\n`, the legend text will be split having a multi-line legend text.

### Legend Text Callback

The plugin provides a callback to change the value of legend text which can return a [SafeHtml](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/safehtml/SafeHtml.html) to apply as legend text.

<img src={useBaseUrl('/img/htmlLegendSplit.png')} />

```java
// INLINE
HtmlLegendOptions option = new HtmlLegendOptions();
option.setLegendTextCallback(new HtmlLegendTextCallback(){

    /**
     * Returns a text of legend for a specific item, as HTML
     * 
     * @param chart chart instance
     * @param item legend item which represents the text to create
     * @param currentText current text provided by legend labels callback.
     * @return HTML legend representation as SafeHTML
     */
     @Override
    public SafeHtml generateLegendText(IsChart chart, LegendItem item, String currentText){
    	// logic
    	return myLegendTextAsHtml;
    }

});
```

## Limitations 

There are a couple of limitations on current implementation:

  1. [Position.LEFT](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Position.html#LEFT) and [Position.RIGHT](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Position.html#RIGHT) are ignored and Position.LEFT is managed as [Position.TOP](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Position.html#TOP) and Position.RIGHT is managed as [Position.BOTTOM](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Position.html#BOTTOM)
  1. [CanvasGradientItem](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html)s provided by a dataset callback are ignored.
   