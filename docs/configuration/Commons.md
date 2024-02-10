---
id: Commons
title: Common configuration
hide_title: true
sidebar_label: Common options
---
## Common options

The configuration is used to change how the chart behaves. There are properties to control styling, fonts, the legend, etc.

These sections describe general configuration options that can apply elsewhere to the charts.

* **Responsive** defines responsive chart options that apply to all charts.
* **Pixel ratio** defines the physical display pixel ratio.
* **Locale** defines the language tag to use for internationalization.
* **Font** defines the graphical representation of text to use in the chart.

To change the chart options, **Charba** is providing the method `getOptions` in all charts classes.

## Responsive

When it comes to change the chart size based on the window size, a major limitation is that the chart canvas *render* size can **not** be expressed with relative values, contrary to the *display* size. 
Furthermore, these sizes are independent from each other and thus the canvas *render* size does not adjust automatically based on the *display* size, making the rendering inaccurate.

The following examples **do not work** without setting `maintainAspectRatio` to `false`, because, setting to `false`, the chart will maintain the provided dimensions:

```java
// invalid values, the canvas of chart doesn't resize
chart.setWidth("80vh");
chart.setHeight("80vh");
// in order to use the passed dimensions
chart.getOptions().setMaintainAspectRatio(false);
```

Leveraging on [Chart.JS](http://www.chartjs.org/) capabilities, **Charba** provides options to enable responsiveness and control the resize behavior of charts by detecting when the canvas *display* size changes and update the *render* size accordingly.

To change and apply own properties, you can invoke the **set** methods, both at chart and global level, as following:

```java
// chart
chart.getOptions().setResponsive(true);
boolean responsive = chart.getOptions().isResponsive();
// global
Defaults.get().getGlobal().setResponsive(true);
boolean globalResponsive = Defaults.get().getGlobal().isResponsive();
```

The default values are set in global defaults options, see [default global chart options](../defaults/DefaultsCharts).

Table with options:

| Name | Type | Description
| :- | :- | :-
| aspectRatio | double | Canvas aspect ratio (i.e. width / height, a value of 1 representing a square canvas).<br/><br/>Note: *this option is ignored if the height is explicitly defined either as attribute or via the style*.
| maintainAspectRatio | boolean | Maintain the original canvas aspect ratio (width / height) when resizing.
| responsive | boolean | Resizes the chart canvas when its container does.
| resizeDelay | int | Delay the resize update by give amount of milliseconds. This can ease the resize process by debouncing update of the elements.

### Printing

CSS media queries allow changing styles when printing a page. The CSS applied from these media queries may cause charts to need to resize. However, the resize won't happen automatically. To support resizing charts when printing, one needs to invoke the following statement after the **Charba** setup:

```java
JsWindowHelper.enableResizeOnBeforePrint();
```

## Device pixel ratio

By default the chart's canvas will use a 1:1 pixel ratio, unless the physical display has a higher pixel ratio (e.g. Retina displays).

For applications where a chart will be converted to a bitmap, or printed to a higher DPI medium it can be desirable to render the chart at a higher resolution than the default.

Setting `devicePixelRatio` property to a value other than 1 will force the canvas size to be scaled by that amount, relative to the container size. There should be no visible difference on screen; the difference will only be visible when the image is zoomed or printed.

To change and apply own property value, you can invoke the **set** methods, both at chart and global level, as following:

```java
// chart
chart.getOptions().setDevicePixelRatio(2D);
double devicePixelRatio = chart.getOptions().getDevicePixelRatio();
// global
Defaults.get().getGlobal().setDevicePixelRatio(2D);
double globalDevicePixelRatio = Defaults.get().getGlobal().getDevicePixelRatio();
```

The default value is set in global defaults options, see [default global chart options](../defaults/DefaultsCharts).

Table with options:

| Name | Type | Description
| :- | :- | :-
| devicePixelRatio | double | Override the window's default devicePixelRatio.

## Locale

For applications where the numbers of ticks on scales must be formatted accordingly with a language sensitive number formatting, you can enable this kind of formatting by setting the locale option.

The locale is a [CLocale](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/intl/CLocale.html) object which represents a string that is a [Unicode BCP 47 locale identifier](https://www.unicode.org/reports/tr35/tr35.html#BCP_47_Conformance).

A Unicode BCP 47 locale identifier consists of

  1. a language code,
  2. (optionally) a script code,
  3. (optionally) a region (or country) code,
  4. (optionally) one or more variant codes, and
  5. (optionally) one or more extension sequences,

with all present components separated by hyphens. 

```java
// chart
chart.getOptions().setLocale(CLocale.US);
CLocale locale = chart.getOptions().getLocale();
// global
Defaults.get().getGlobal().setLocale(CLocale.US);
CLocale globalLocale = Defaults.get().getGlobal().getLocale();
```

The default value is set in global defaults options, see [default global chart options](../defaults/DefaultsCharts).

Table with options:

| Name | Type | Description
| :- | :- | :-
| locale | [CLocale](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/intl/CLocale.html) | A string with a BCP 47 language tag.<br/>See [INTL locale](../intl/Locale#locale).

## Colors

There are chart settings that can change colors on the chart, related to their use case. The colors settings will be consume from the other elements of chart only if they don't have any other specific default, related to the element itself. The default values are set in [default global options](../defaults/DefaultsCharts).

To change and apply own property value, you can invoke the **set** methods, as following:

```java
// chart
chart.getOptions().setColor(HtmlColor.RED);
HtmlColor color = chart.getOptions().getColor();
// global
Defaults.get().getGlobal().setColor(HtmlColor.RED);
HtmlColor color = Defaults.get().getGlobal().getColor();
```

Table with options:

| Name | Type | Description
| :- | :- | :-
| autoColors | boolean | `true` if the chart will cycle through a palette of seven [Chart.JS](http://www.chartjs.org/) brand colors. See [color](../coloring/Colors#default-color-palette) section.
| autoColorsForceOverride | boolean | `true` if you want to force the auto colors to always color your datasets, for example when using dynamic datasets at runtime. See [color](../coloring/Colors#default-color-palette) section.
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/IsColor.html) | The default background color to use in the chart.
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/IsColor.html) | The default border color to use in the chart.
| color | String - [IsColor](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/IsColor.html) | The default font color to use in the chart.

## Font

There are chart settings that can change all fonts on the chart. The font settings will be consume from the other elements of chart only if they don't have any other specific default, related to the element itself. The default values are set in global defaults options, see [default global font options](../defaults/DefaultsCharts#font).

To change and apply own property value, you can invoke the **set** methods, as following:

```java
// sets font size at chart level
chart.getOptions().getFont().setSize(16);
// gets the size
int size = chart.getOptions().getFont().getSize();
```

| Name | Type | Description
| :- | :- | :-
| family | String | Font family for all text.
| size | int | Font size (in px) for text.
| style | [FontStyle](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/enums/FontStyle.html) | Font style
| weight | [Weight](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/enums/Weight.html) | Default font weight (boldness).<br/>See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight).
| lineHeight | double - String | Height of an individual line of text.<br/>See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height).

## Padding

Many elements use the padding to apply space around the element itself.

The [Padding](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/configuration/Padding.html) provides all **set** and **get** methods to manage the configuration, as following:

```java
// creates a radial axis 
RadialAxis axis = new RadialAxis(chart);
// enables point labels
axis.getPointLabels().setDisplay(true);
// set the same padding size to all directions 
axis.getPointLabels().getBackdropPadding().setTop(5);

int top = axis.getPointLabels().getBackdropPadding().getTop();
```

The following are the attributes that you can set:

| Name | Type | Description
| :- | :- | :-
| bottom | int | The padding bottom in pixel.
| left | int | The padding left in pixel.
| right | int | The padding right in pixel.
| top | int | The padding top in pixel.

The [Padding](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/configuration/Padding.html) provides the methods to:

 * set the same value to all dimensions, by `set(int)`.
 * set the same value to X dimensions (left and right), by `setX(int)`.
 * set the same value to Y dimensions (top and bottom), by `setY(int)`.
