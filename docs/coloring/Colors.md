---
id: Colors
title: Colors
hide_title: true
sidebar_label: Colors and filling
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Coloring

The colors on charts is very important because can make the difference to have an understandable result or not.

Usually the colors are managed as string, following the syntax defined for CSS, but sometimes this is annoying because its' easier to have the name of the color.

**Charba** provides:

 * [IsColor](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/colors/IsColor.html) interface to manage colors
 * [Color](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/colors/Color.html) entity to create and manage colors
 * 3 enumerations with
   * all [color names](./tables/HTMLColorsNames) defined for HTML, by enumeration [HtmlColor](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/colors/HtmlColor.html)
   * all [color names](./tables/GWTMaterialColors) defined for GWT Material, by enumeration [GwtMaterialColor](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/colors/GwtMaterialColor.html)
   * first [31 color names](./tables/GoogleChartColors) defined for Google Charts, by enumeration [GoogleChartColor](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/colors/GoogleChartColor.html) 
   * all gradients defined by [UiGradients.com](https://uigradients.com), by enumeration [UiGradient](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/colors/UiGradient.html)

**Charba** is using [IsColor](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/colors/IsColor.html) and colors as string in the methods where you must define a color.

### Building colors

Even if the usual method is to use strings which are representing colors, leveraging on colors structure of **Charba**, you can use color as objects, defining your base colors and play with transparency without creating a specific string every time.

The [IsColor](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/colors/IsColor.html) interface (and then all colors defined out of the box) has got a method which returns a another color instance, based from source one, as following:

```java
// it can be a static reference
Color myColor = new Color(255,0,0);
// new color based on previous one, which is immutable.
IsColor myColorWithAlpha = myColor.alpha(0.2D);
// new Color darker from the previous one
IsColor myDarkerColor = myColor.darker();
```
 
Another interesting utility is the [ColorBuilder](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/colors/ColorBuilder.html) which can create [IsColor](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/colors/IsColor.html) instances by a string.

```java
// parses color and creates new color.
// by HEX representation
IsColor myColorHex = ColorBuilder.parse("#FF0000");
// by RGB representation
IsColor myColorRGB = ColorBuilder.parse("rgb(255, 0, 0)");
// by RGBA representation
IsColor myColorRGBA = ColorBuilder.parse("rgba(255, 0, 0, 0.5)");
// by HSL representation
IsColor myColorHSL = ColorBuilder.parse("hsl(100, 100%, 50%)");
// by HSLA representation
IsColor myColorHSLA = ColorBuilder.parse("hsla(100, 100%, 50%, 0.5)");
// by color names representation
IsColor myColorName = ColorBuilder.parse("red");
```

The parser of [ColorBuilder](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/colors/ColorBuilder.html) is able to parse color string representation by HEX, RGB, RGBA, HSL and HSLA.

The parser can also use HTML color names, defined in the [HtmlColor](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/colors/HtmlColor.html) enumeration. 

## Filling

Both [line](../charts/ChartLine) and [radar](../charts/ChartRadar) charts support a `fill` option on the dataset object which can be used to create area between two datasets or a dataset and a boundary.

### Modes

**Charba** is providing an enumeration for fixed [filling modes](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/enums/Fill.html). 

On top of these, you can set other kind of filling mode, as following:

| Mode | Type | Values |
| :--- | :--- | :--- |
| Absolute dataset index | int | `1`, `2`, `3`, ... |
| Relative dataset index | String | `"-1"`, `"-2"`, `"+1"`, ... |

<img src={useBaseUrl('/img/fillingMode.png')} />

To get absolute dataset index, you can get it by `Fill.getFill(int)` and you get a IsFill mode that you can set to **Charba** configuration.

To get relative dataset index, you can get it by `Fill.getFill(String)` and you get a IsFill mode that you can set to **Charba** configuration.

Furthermore **Charba** configuration enables the possibility to set directly absolute or relative filling mode, by `setFill(int)` or `setFill(String)` methods. 
