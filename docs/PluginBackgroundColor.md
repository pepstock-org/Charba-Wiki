---
id: PluginBackgroundColor
title: Chart background color plugin
hide_title: true
sidebar_label: Chart background color
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Chart background color plugin

**Charba** provides an plugin implementation to set the background color, pattern or gradient of the chart. This plugin can be set both at global and at chart level.

<img src={useBaseUrl('/img/backgroundGradient.png')} />

The implementation is [ChartBackgroundColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/ChartBackgroundColor.html) and can be set as following:

```java
// GLOBAL
Defaults.get().getPlugins().register(new ChartBackgroundColor());

// INLINE
chart.getPlugins().add(new ChartBackgroundColor());
```

The ID of plugin is `charbabackgroundcolor` ([ChartBackgroundColor.ID](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/ChartBackgroundColor.html#ID)).

To set the background color or pattern or gradient, you must create the instance passing the color or pattern or gradient in the constructor:

```java

// Default is "white"
new ChartBackgroundColor();
// Set "green"
new ChartBackgroundColor("green");
// Set "green" by HtmlColor
new ChartBackgroundColor(HtmlColor.GREEN);
// Set gradient
Gradient gradient = new Gradient(GradientType.RADIAL, GradientOrientation.IN_OUT,  GradientScope.CANVAS);
gradient.addColorStop(0, HtmlColor.WHITE);
gradient.addColorStop(1, HtmlColor.GRAY);
new ChartBackgroundColor(gradient);
// Set pattern
Pattern pattern = new Pattern(Images.INSTANCE.pattern());
new ChartBackgroundColor(pattern);
```

It could be that you set this plugin as global one for all your charts but you want to change it for only one instance.

In this case you should instantiate a [ChartBackgroundColorOptions](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/ChartBackgroundColorOptions.html) and set it to your chart options as following, setting the color or pattern or gradient you want:

```java
// Set "green" overriding the GLOBAL one
ChartBackgroundColorOptions option = new ChartBackgroundColorOptions();
option.setBackgroundColor(HtmlColor.GREEN);

// Set a gradient overriding the GLOBAL one
Gradient gradient = new Gradient(GradientType.RADIAL, GradientOrientation.IN_OUT,  GradientScope.CANVAS);
gradient.addColorStop(0, HtmlColor.WHITE);
gradient.addColorStop(1, HtmlColor.GRAY);
option.setBackgroundColor(gradient);

// Set a pattern overriding the GLOBAL one
Pattern pattern = new Pattern(Images.INSTANCE.pattern());
option.setBackgroundColor(pattern);

// --------------------------------------
// store the plugin options by plugin ID
// --------------------------------------
chart.getOptions().getPlugins().setOptions(ChartBackgroundColor.ID, option);
// --------------------------------------
// or store the plugin options without plugin ID
// --------------------------------------
chart.getOptions().getPlugins().setOptions(option);
```

If you need to read the plugin options, there is the specific factory, [ChartBackgroundColorOptionsFactory](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/ChartBackgroundColorOptionsFactory.html) as static reference inside the [plugin](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/ChartBackgroundColor.html) which can be used to retrieve the options from thechart as following:

```java
// --------------------------------------
// reads the options from chart
// --------------------------------------
ChartBackgroundColorOptions option;

if (chart.getOptions().getPlugins().hasOptions(ChartBackgroundColor.ID)){
   // --------------------------------------
   // retrieve the plugin options by plugin ID
   // --------------------------------------
   options = chart.getOptions().getPlugins().getOptions(ChartBackgroundColor.ID, ChartBackgroundColor.FACTORY);
   // --------------------------------------
   // or retrieve the plugin options without plugin ID
   // --------------------------------------
   options = chart.getOptions().getPlugins().getOptions(ChartBackgroundColor.FACTORY);
}
```

The following are the attributes that you can set to plugin options:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html) | HtmlColor.WHITE | The fill color of the chart background. 
