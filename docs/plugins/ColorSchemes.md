---
id: PluginColorSchemes
title: Color schemes plugin
hide_title: true
sidebar_label: Color schemes
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Color schemes plugin

**Charba** provides an plugin implementation to use color schemes instead of the single colors for border and background colors of charts.
It enables to pick the color combination for charts from the predefined or custom color schemes.

This plugin, as singleton, can be set both at global and at chart level.

<img src={useBaseUrl('/img/colorSchemes.png')} />

The implementation is [ColorSchemes](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/impl/plugins/ColorSchemes.html) and can be set as following:

```java
// ---------------------------------
// Registers as global plugin
// ---------------------------------
Defaults.get().getPlugins().register(ColorSchemes.get());
// ---------------------------------
// Registers as single chart plugin
// ---------------------------------
chart.getPlugins().add(ColorSchemes.get());
```

The ID of plugin is `charbacolorschemes` ([ColorSchemes.ID](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/impl/plugins/ColorSchemes.html#ID)).

## Options

It could be that you set this plugin as global one for all your charts but you want to change it for only one instance.

In this case you should instantiate a [ColorSchemesOptions](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/impl/plugins/ColorSchemesOptions.html) and set it to your chart options as following, setting the color scheme you want:

```java
// creates a plugin options
ColorSchemesOptions options = new ColorSchemesOptions();
// sets the color scheme and background opacity
options.setScheme(BrewerScheme.PAIRED12);
options.setBackgroundColorAlpha(0.5D);

// --------------------------------------
// STORING plugin options
// --------------------------------------
// stores the plugin options by plugin ID
chart.getOptions().getPlugin().setOptions(ColorSchemes.ID, options);
// stores the plugin options without plugin ID
chart.getOptions().getPlugin().setOptions(options);
// stores the plugin options directly by the options
options.store(chart);
```

You can also change the default for all charts instances, as following

```java
// creates a plugin options
ColorSchemesOptions options = new ColorSchemesOptions();
// sets the color scheme and background opacity
options.setScheme(BrewerScheme.PAIRED12);
options.setBackgroundColorAlpha(0.5D);

// --------------------------------------
// STORING plugin options
// --------------------------------------
// stores the plugin options by plugin ID
Defaults.get().getGlobal().getPlugin().setOptions(ColorSchemes.ID, options);
// stores the plugin options without plugin ID
Defaults.get().getGlobal().getPlugin().setOptions(options);
// stores the plugin options directly by the options
options.store();
```


If you need to read the plugin options, there is the specific factory, [ColorSchemesOptionsFactory](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/impl/plugins/ColorSchemesOptionsFactory.html) as static reference inside the [plugin](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/impl/plugins/ColorSchemes.html) which can be used to retrieve the options from chart as following:

```java
// gets options reference
ColorSchemesOptions options;

// --------------------------------------
// GETTING plugin options from chart
// --------------------------------------
if (chart.getOptions().getPlugin().hasOptions(ColorSchemes.ID)){
   // retrieves the plugin options by plugin ID
   options = chart.getOptions().getPlugin().getOptions(ColorSchemes.ID, ColorSchemes.FACTORY);
   //retrieves the plugin options without plugin ID
   options = chart.getOptions().getPlugin().getOptions(ColorSchemes.FACTORY);
}
```

The following are the attributes that you can set to plugin options:

| Name | Type | Default | Description
| :- | :- | :- | :-
| schemeScope | [SchemeScope](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/impl/plugins/enums/SchemeScope.html) | SchemeScope.DATASET | If set to `data`, the color scheme is applied to the data instead of dataset. This can be set only for [BAR](../charts/ChartBar) or [BUBBLE](../charts/ChartBubble) charts.
| scheme | [ColorScheme](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/impl/plugins/ColorScheme.html) | BrewerScheme.PAIRED12 - <img src={useBaseUrl('/img/BrewerScheme-PAIRED12.png')} />| Defines the color scheme instance to apply
| backgroundColorAlpha | double | `0.5` | The transparency value for the background color. Must be a number between 0.0 (fully transparent) and 1.0 (no transparency).
| reverse | boolean | `false` | If set to `true`, the order of the colors in the selected scheme is reversed.

## Color scheme

**Charba** provides 4 color schemes collection out of the box:

 * **Brewer**, with a set of color schemes described [here](http://colorbrewer2.org/). Here the complete [list](./tables/ColorSchemeBrewer).
 * **Office**, with a set of color schemes of MS Office suite. Here the complete [list](./tables/ColorSchemeOffice).
 * **Tableau**, with a set of color schemes of Tableau suite. Here the complete [list](./tables/ColorSchemeTableau).
 * **GWT material**, with a set of color schemes taken from [GWT Material color table](../coloring/tables/GWTMaterialColors). Here the complete [list](./tables/ColorSchemeGwtMaterial).
 * **Google Chart**, with a set of color schemes taken from [Google Chart table color](../coloring/tables/GoogleChartColors).

You can also create your own color schemes, implementing the [ColorScheme](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/impl/plugins/ColorScheme.html) interface.

## Options builder

**Charba** provides a builder to create options using the **set** methods in sequence and get the options object at the end of configuration.

```java
// creates plugin options by builder
ColorSchemesOptions option = ColorSchemesOptionsBuilder.create()
	.setScheme(BrewerScheme.PAIRED12)
	.setBackgroundColorAlpha(0.5D).build();
// stores options to chart
chart.getOptions().getPlugins().setOptions(ColorSchemes.ID, option);
```

Creating a color scheme options by `ColorSchemesOptionsBuilder.create()` it will use the global options as default, instead by `ColorSchemesOptionsBuilder.create(chart)` it will use the global chart options as default.

:::note limitations
The plugin is not activated for [Meter](../charts/ChartMeter) and [Gauge](../charts/ChartGauge) charts because they are managing the colors of dataset in different way.
:::
