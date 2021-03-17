---
id: ScaleTitle
title: Scale title
hide_title: true
sidebar_label: Axis title
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Axis Title

When creating a chart, you want to tell the viewer what data they are viewing. To do this, you need to label the axis.

<img src={useBaseUrl('/img/scaleTitle.png')} />

:::note
The scale title can be **ONLY** applied to cartesian axes.
:::

The [axis title](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/CartesianScaleTitle.html) provides all **set** and **get** methods to manage the configuration, as following:

```java
// creates an axis
CartesianLinearAxis axis = new CartesianLinearAxis(chart);
// enables the title
axis.getTitle().setDisplay(true);
// sets and gets color of title
axis.getTitle().setColor(HtmlColor.RED);

IsColor color = axis.getTitle().getColor();
```

The following are the attributes that you can set:

| Name | Type | Description
| -----| ---- | -----------
| align | [ScaleTitleAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/ScaleTitleAlign.html) | Alignment of the scale label.
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | Color of scale label.
| display | boolean | `false` | If `true`, the scale label is shown.
| font | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Font.html) | Font of scale label.

### Padding

[Padding](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Padding.html) to apply around scale labels. Only `top` and `bottom` are implemented.

```java
// creates an axis
CartesianLinearAxis axis = new CartesianLinearAxis(chart);
// enables the title
axis.getTitle().setDisplay(true);
// sets and gets top of title padding
axis.getScaleLabel().getPadding().setTop(10);

int top = axis.getScaleLabel().getPadding().getTop();
```

The following are the attributes that you can set:

| Name | Type | Description
| :- | :- | :- 
| bottom | int | The padding bottom in pixel.
| left | int | The padding left in pixel.
| right | int | The padding right in pixel.
| top | int | The padding top in pixel.    