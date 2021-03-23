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

The implementation is [ColorSchemes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/ColorSchemes.html) and can be set as following:

```java
// GLOBAL
Defaults.get().getPlugins().register(ColorSchemes.get());

// INLINE
chart.getPlugins().add(ColorSchemes.get());
```

The ID of plugin is `charbacolorschemes` ([ColorSchemes.ID](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/ColorSchemes.html#ID)).

It could be that you set this plugin as global one for all your charts but you want to change it for only one instance.

In this case you should instantiate a [ColorSchemesOptions](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/ColorSchemesOptions.html) and set it to your chart options as following, setting the color scheme you want:

```java
// at global level
ColorSchemesOptions option = new ColorSchemesOptions();
options.setScheme(BrewerScheme.PAIRED12);
options.setBackgroundColorAlpha(0.5D);

// --------------------------------------
// store the plugin options by plugin ID
// --------------------------------------
Default.get().getGlobal().getPlugins().setOptions(ColorSchemes.ID, option);
// --------------------------------------
// or store the plugin options without plugin ID
// --------------------------------------
Default.get().getGlobal().getPlugins().setOptions(option);

// at chart level
ColorSchemesOptions option = new ColorSchemesOptions();
options.setScheme(BrewerScheme.PAIRED12);
options.setBackgroundColorAlpha(0.5D);

// --------------------------------------
// store the plugin options by plugin ID
// --------------------------------------
chart.getOptions().getPlugins().setOptions(ColorSchemes.ID, option);
// --------------------------------------
// or store the plugin options without plugin ID
// --------------------------------------
chart.getOptions().getPlugins().setOptions(option);
```

If you need to read the plugin options, there is the specific factory, [ColorSchemesOptionsFactory](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/ColorSchemesOptionsFactory.html) as static reference inside the [plugin](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/ColorSchemes.html) which can be used to retrieve the options from chart as following:

```java
// --------------------------------------
// reads the options from chart
// --------------------------------------
ColorSchemesOptions option;

if (chart.getOptions().getPlugins().hasOptions(ColorSchemes.ID)){
   // --------------------------------------
   // retrieve the plugin options by plugin ID
   // --------------------------------------
   options = chart.getOptions().getPlugins().getOptions(ColorSchemes.ID, ColorSchemes.FACTORY);
   // --------------------------------------
   // or retrieve the plugin options without plugin ID
   // --------------------------------------
   options = chart.getOptions().getPlugins().getOptions(ColorSchemes.FACTORY);
}
```

The following are the attributes that you can set to plugin options:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| schemeScope | [SchemeScope](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/enums/SchemeScope.html) | SchemeScope.DATASET | if set to `data`, the color scheme is applied to the data instead of dataset. This can be set only for BAR or BUBBLE charts.
| scheme | [ColorScheme](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/ColorScheme.html) | BrewerScheme.PAIRED12 | defines the name of color scheme to apply
| backgroundColorAlpha | double | 0.5 | The transparency value for the background color. Must be a number between 0.0 (fully transparent) and 1.0 (no transparency).
| reverse | boolean | `false` | if set to `true`, the order of the colors in the selected scheme is reversed.

## Color scheme

**Charba** provides 4 color schemes collection out of the box:

 * **Brewer**, with a set of color schemes described [here](http://colorbrewer2.org/). Here the complete [list](ColorSchemeBrewer).
 * **Office**, with a set of color schemes of MS Office suite. Here the complete [list](ColorSchemeOffice).
 * **Tableau**, with a set of color schemes of Tableau suite. Here the complete [list](ColorSchemeTableau).
 * **GWT material**, with a set of color schemes taken from [GWT Material color table](GWTMaterialColors). Here the complete [list](ColorSchemeGwtMaterial).
 * **Google Chart**, with a set of color schemes taken from [Google Chart table color](GoogleChartColors).

You can also create your own color schemes, implementing the [ColorScheme](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/ColorScheme.html) interface.

## Options builder

**Charba** provides a builder to create options using the **set** methods in sequence and get the options object at the end of configuration.

```java
ColorSchemesOptions option = ColorSchemesOptionsBuilder.create().setScheme(BrewerScheme.PAIRED12).setBackgroundColorAlpha(0.5D).build();

chart.getOptions().getPlugins().setOptions(ColorSchemes.ID, option);
```

Creating a color scheme options by `ColorSchemesOptionsBuilder.create()` it will use the global options as default, instead by `ColorSchemesOptionsBuilder.create(chart)` it will use the global chart options as default.

## Legend

The plugin activates a [LegendLabelsCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/LegendLabelsCallback.html) instance which is managing the legend. This is because changing color scheme on a chart already initialized, the  out of the box legend does not reflect new color scheme.

This callback implementation is wrapping whatever legend labels callback implementation already set by user.

## Limitations

The plugin is not activated for [Meter](ChartMeter) and [Gauge](ChartGauge) charts because they are managing the colors of dataset in different way.
