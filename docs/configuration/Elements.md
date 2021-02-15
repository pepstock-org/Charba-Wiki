---
id: Elements
title: Elements
hide_title: true
sidebar_label: Elements
---
## Elements

The [elements](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Elements.html) allows the user to configure the different type of shapes which are used to draw the datasets.

Options can be configured for four different types of elements: **[arc](#arc)**, **[lines](#line)**, **[points](#point)**, and **[bar](#bar)**.

The [elements](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Elements.html) configuration is nested in the global configuration as following: 

```java
chart.getOptions().getElements();
```

### Point

Point element is used to represent the points in a line chart or a bubble chart.

To change and apply own properties, you can invoke the **set** methods, as following:

```java
// example
chart.getOptions().getElements().getPoint().setBorderWidth(2);
chart.getOptions().getElements().getPoint().setBackgroundColor("red");

int borderWidth = chart.getOptions().getElements().getPoint().getBorderWidth();
IsColor backgroundColor = chart.getOptions().getElements().getPoint().getBackgroundColor();
```

The defaults values are set in global defaults options, see [default global elements point options](../defaults/DefaultsCharts#point).

The following are the attributes that you can set:

| Name | Type | Description
| :- | :- | :-
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | Point fill color.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | Point stroke color.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| borderWidth | int | Point stroke width. 
| hitRadius | int | Extra radius added to point radius for hit detection. 
| hoverBorderWidth | int | Stroke width when hovered. 
| hoverRadius | int | Point radius when hovered. 
| pointStyle | [PointStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/PointStyle.html) - [Img](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html) | Point style.
| radius | int | Point radius.
| rotation | double | The point rotation (in degrees).

### Line

Line element is used to represent the line in a line chart.

To change and apply own properties, you can invoke the **set** methods, as following:

```java
// example
chart.getOptions().getElements().getLine().setBorderWidth(5);
chart.getOptions().getElements().getLine().setBackgroundColor("red");

int borderWidth = chart.getOptions().getElements().getLine().getBorderWidth();
IsColor backgroundColor = chart.getOptions().getElements().getLine().getBackgroundColor();
```

The defaults values are set in global defaults options, see [default global elements line options](../defaults/DefaultsCharts#line).

The following are the attributes that you can set:

| Name | Type | Description
| :- | :- | :-
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | Line fill color.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| borderCapStyle | [CapStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/CapStyle.html) | Determines the shape used to draw the end points of lines.<br/>See [MDN](https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap).
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | Line stroke color.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| borderDash | int[] | The line dash pattern used when stroking lines. It uses an array of values that specify alternating lengths of lines and gaps which describe the pattern.<br/>See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| borderDashOffset | double | Line dash offset.<br/>See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| borderJoinStyle | [JoinStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/JoinStyle.html) | the shape used to join two line segments where they meet.<br/>See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin).
| borderWidth | int | Line stroke width.
| capBezierPoints | boolean | Set `true` to keep Bezier control inside the chart, `false` for no restriction.
| cubicInterpolationMode | [CubicInterpolationMode](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/CubicInterpolationMode.html) | Interpolation mode to apply.
| fill |  String - int - boolean - [IsFill](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/IsFill.html) | How to fill the area under the line.<br/>See [Filling modes](Colors#filling-modes)
| stepped | boolean | Set `true` to show the line as a stepped line (`tension` will be ignored).
| tension | double | Bezier curve tension (`0` for no Bezier curves).

### Arc

Arc element is used in the polar area, doughnut and pie charts.

To change and apply own properties, you can invoke the **set** methods, as following:

```java
// example
chart.getOptions().getElements().getArc().setBorderWidth(5);
chart.getOptions().getElements().getArc().setBackgroundColor(HtmlColor.RED);

int borderWidth = chart.getOptions().getElements().getArc().getBorderWidth();
IsColor backgroundColor = chart.getOptions().getElements().getArc().getBackgroundColor();
```

The defaults values are set in global defaults options, see [default global elements arc options](../defaults/DefaultsCharts#arc).

The following are the attributes that you can set:

| Name | Type | Description
| :- | :- | :-
| angle | double | Arc angle to cover, for polar chart only.
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | Arc fill color.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| borderAlign | [BorderAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/BorderAlign.html) | Arc stroke alignment.
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | Arc stroke color.
| borderWidth | int | Arc stroke width.
| offset | int | The offset of the arc (in pixels).

### Bar

Bar element is used to represent the bars in a bar chart.

To change and apply own properties, you can invoke the **set** methods, as following:

```java
// example
chart.getOptions().getElements().getBar().setBorderWidth(5);
chart.getOptions().getElements().getBar().setBackgroundColor(HtmlColor.RED);

int borderWidth = chart.getOptions().getElements().getBar().getBorderWidth();
IsColor backgroundColor = chart.getOptions().getElements().getBar().getBackgroundColor();
```

The defaults values are set in global defaults options, see [default global elements arc options](../defaults/DefaultsCharts#bar).

The following are the attributes that you can set:

| Name | Type | Description
| :- | :- | :-
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | Bar fill color.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | Bar stroke color.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| borderRadius | int | The bar border radius (in pixels).
| borderSkipped | [BorderSkipped](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/BorderSkipped.html) | The edge to skip when drawing bar.
| borderWidth | int | The bar border width (in pixels).
| pointStyle | [PointStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/PointStyle.html) - [Img](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html) | Point style for legend.
