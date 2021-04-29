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

The implementation is [ChartBackgroundColor](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/impl/plugins/ChartBackgroundColor.html) and can be set as following:

```java
// ---------------------------------
// Registers as global plugin
// ---------------------------------
Defaults.get().getPlugins().register(new ChartBackgroundColor());
// ---------------------------------
// Registers as single chart plugin
// ---------------------------------
chart.getPlugins().add(new ChartBackgroundColor());
```

The ID of plugin is `charbabackgroundcolor` ([ChartBackgroundColor.ID](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/impl/plugins/ChartBackgroundColor.html#ID)).

To set the background color or pattern or gradient, you must create the instance passing the color or pattern or gradient in the constructor:

```java
// Default is "white"
new ChartBackgroundColor();
// Set "green"
new ChartBackgroundColor("green");
// Set "green" by HtmlColor
new ChartBackgroundColor(HtmlColor.GREEN);
// Set gradient
Gradient gradient = GradientBuilder.create(GradientType.RADIAL, GradientOrientation.IN_OUT, GradientScope.CANVAS)
	.addColorStop(0, HtmlColor.WHITE)
	.addColorStop(1, HtmlColor.GRAY).build();
new ChartBackgroundColor(gradient);
// Set pattern
Pattern pattern = PatternBuilder.create(Images.INSTANCE.pattern()).build();
new ChartBackgroundColor(pattern);
```

## Options 

It could be that you set this plugin as global one for all your charts but you want to change it for only one instance.

In this case you should instantiate a [ChartBackgroundColorOptions](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/impl/plugins/ChartBackgroundColorOptions.html) and set it to your chart options as following, setting the color or pattern or gradient you want:

```java
// creates a plugin options
ChartBackgroundColorOptions options = new ChartBackgroundColorOptions();
// Set "green" overriding the GLOBAL one
options.setBackgroundColor(HtmlColor.GREEN);

// Set a gradient overriding the GLOBAL one
Gradient gradient = GradientBuilder.create(GradientType.RADIAL, GradientOrientation.IN_OUT, GradientScope.CANVAS)
	.addColorStop(0, HtmlColor.WHITE)
	.addColorStop(1, HtmlColor.GRAY).build();
options.setBackgroundColor(gradient);

// Set a pattern overriding the GLOBAL one
Pattern pattern = PatternBuilder.create(Images.INSTANCE.pattern()).build();
options.setBackgroundColor(pattern);

// --------------------------------------
// STORING plugin options
// --------------------------------------
// stores the plugin options by plugin ID
chart.getOptions().getPlugin().setOptions(ChartBackgroundColor.ID, options);
// stores the plugin options without plugin ID
chart.getOptions().getPlugin().setOptions(options);
// stores the plugin options directly by the options
options.store(chart);
```

If you need to read the plugin options, there is the specific factory, [ChartBackgroundColorOptionsFactory](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/impl/plugins/ChartBackgroundColorOptionsFactory.html) as static reference inside the [plugin](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/impl/plugins/ChartBackgroundColor.html) which can be used to retrieve the options from the chart as following:

```java
// gets options reference
ChartBackgroundColorOptions options;

// --------------------------------------
// GETTING plugin options from chart
// --------------------------------------
if (chart.getOptions().getPlugin().hasOptions(ChartBackgroundColor.ID)){
   // retrieves the plugin options by plugin ID
   options = chart.getOptions().getPlugin().getOptions(ChartBackgroundColor.ID, ChartBackgroundColor.FACTORY);
   //retrieves the plugin options without plugin ID
   options = chart.getOptions().getPlugin().getOptions(ChartBackgroundColor.FACTORY);
}
```

The following are the attributes that you can set to plugin options:

| Name | Type | Default | Description
| :- | :- | :- | :-
| backgroundColor | String - [IsColor](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Gradient.html) | HtmlColor.WHITE - <span style={{backgroundColor: 'white', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The fill color of the chart background. 
