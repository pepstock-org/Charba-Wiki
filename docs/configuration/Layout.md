---
id: Layout
title: Layout
hide_title: true
sidebar_label: Layout
---
## Layout

The layout component enables the padding configuration to add to a chart.

The [layout](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Layout.html) configuration is nested in the configuration using 

```java
// get layout
chart.getOptions().getLayout();
// get padding
Padding padding = chart.getOptions().getLayout().getPadding();
```

## Padding

The [padding](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Padding.html) to add inside the chart.

To change and apply own properties, you can invoke the **set** methods, as following:

```java
// example
chart.getOptions().getLayout().getPadding().setTop(10);
chart.getOptions().getLayout().getPadding().setBottom(10);
// to set same padding value to all sides of the chart
chart.getOptions().getLayout().getPadding().set(10);

int paddingTop = chart.getOptions().getLayout().getPadding().getTop();
```

The defaults values are set in global defaults options, see [default global layout padding options](../defaults/DefaultsCharts#padding).

The following padding options are available. 


| Name | Type | Description
| :- | :- | :-
| bottom | int | The padding bottom in pixel.
| left | int | The padding left in pixel.
| right | int | The padding right in pixel.
| top | int | The padding top in pixel.