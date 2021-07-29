---
id: Gradients
title: Gradients
hide_title: true
sidebar_label: Gradients
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Gradients

A gradient is a special type of image that consists of a progressive transition between two or more colors.

<img src={useBaseUrl('/img/radialGradient.png')} />

The gradient data type is defined with one of the types listed below.

 * **Linear** where transitions colors progressively along an imaginary line. 
 * **Radial** where transitions colors progressively from a center point (origin).
 
As with any interpolation involving colors, gradients are calculated in the alpha-premultiplied color space. This prevents unexpected shades of gray from appearing when both the color and the opacity are changing.

**Charba** enables the usage of gradient providing some helpful configuration in order to enable you to do not use any dimensions or calculate them.

The gradient is mapped in the [Gradient](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/Gradient.html), which can configure both linear and radial gradients.

A [Gradient](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/Gradient.html) can be created only by a [gradient builder](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/GradientBuilder.html) in order to optimize the cache used for them. 

```java
// creates a dataset
LineDataset dataset = new LineDataset();
// creates a gradient     
// setting the 2 colors and their offset
Gradient gradient = GradientBuilder.create(GradientType.LINEAR, GradientScope.CHART).
	addColorStop(0, HtmlColor.ORANGE).addColorStop(1, HtmlColor.PURPLE).build();
// sets the gradient as background color of the dataset      
dataset.setBackgroundColor(gradient);
// fills the dataset
dataset.setFill(Fill.origin);
```

## Types

Every gradient must be created setting which type represents. The [gradient type](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/GradientType.html) must be passed to constructor of new gradient. If omitted, the default is **[linear](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/GradientType.html#LINEAR)**.

## Orientation

The **Charba** gradient implementation doesn't provide you to define the imaginary line or the direction from center but provides you a predefined sets of value, which can be used to create the canvas gradient.

The orientation values of the imaginary line or the direction from/to center are defined in an enumeration, [gradient orientation](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/GradientOrientation.html).

| Name | Type | Description |
| :- | :- | :- | :- |
| TOP_DOWN | LINEAR | From top to bottom (vertical) | <img src={useBaseUrl('/img/topDown.png')} /> |
| BOTTOM_UP | LINEAR | From bottom to to (vertical) | <img src={useBaseUrl('/img/bottomUp.png')} /> |
| LEFT_RIGHT | LINEAR | From left to right (horizontal) | <img src={useBaseUrl('/img/leftRight.png')} /> |
| RIGHT_LEFT | LINEAR | From right to left (horizontal) | <img src={useBaseUrl('/img/rightLeft.png')} /> |
| TOP_RIGHT | LINEAR | From top(left) to right(bottom) (diagonal) | <img src={useBaseUrl('/img/topRight.png')} /> |
| BOTTOM_LEFT | LINEAR | From bottom(right) to left(top) (diagonal) | <img src={useBaseUrl('/img/bottomLeft.png')} /> |
| TOP_LEFT | LINEAR | From top(right) to left(bottom) (diagonal) | <img src={useBaseUrl('/img/topLeft.png')} /> |
| BOTTOM_RIGHT | LINEAR | From bottom(left) to right(top) (diagonal) | <img src={useBaseUrl('/img/bottomRight.png')} /> |
| IN_OUT | RADIAL | From center to the borders | <img src={useBaseUrl('/img/inOut.png')} /> |
| OUT_IN | RADIAL | From borders to the center | <img src={useBaseUrl('/img/outIn.png')} /> |

## Scope

The **Charba** gradient implementation doesn't provide you to define the imaginary line or the direction from center but provides you a predefined sets of value, which can be used to create the canvas gradient.

The dimension of the area to use to calculate the gradient are defined in an enumeration, [gradient scope](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/GradientScope.html).

| Name | Description |
| :- | :- | :- |
| CANVAS | Uses the whole dimension of canvas | <img src={useBaseUrl('/img/canvas.png')} /> |
| CHART | Uses the whole dimension of chart | <img src={useBaseUrl('/img/chart.png')} /> |

## Adding colors

<img src={useBaseUrl('/img/linearGradient.png')} />

To complete a gradient configuration, you need to set a list of colors, adds a new color stop to the gradient, setting the offset, as value between 0 and 1 for where the color stop is located, and the color at the stop.

The [gradient builder](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/GradientBuilder.html) provides the methods to add colors, building the [Gradient](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/Gradient.html), as following:

```java
// creates a gradient     
// setting the 2 colors and their offset
Gradient gradient = GradientBuilder.create(GradientType.LINEAR, GradientScope.CHART)
	.addColorStop(0, HtmlColor.ORANGE)
	.addColorStop(0.5, HtmlColor.YELLOW)
	.addColorStop(1, HtmlColor.PURPLE).build();
// creates a gradient     
// setting the 2 colors directly
// with offset 0 and 1
Gradient gradient = GradientBuilder.create(GradientType.RADIAL, GradientScope.CANVAS)
	.addColorsStartStop(HtmlColor.ORANGE, HtmlColor.PURPLE).build();
```

## Resizing

**Charba** recalculates the gradients every time the dimension of chart or canvas occurs. In this way it maintains always the gradients even if the chart has got a different size comparing with it at creation time.
