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
Layout layout = chart.getOptions().getLayout();
// get padding
Padding padding = chart.getOptions().getLayout().getPadding();

// sets top and bottom options to padding of chart
chart.getOptions().getLayout().getPadding().setTop(10);
chart.getOptions().getLayout().getPadding().setBottom(10);
// to set same padding value to all sides of the chart
chart.getOptions().getLayout().getPadding().set(10);

int paddingTop = chart.getOptions().getLayout().getPadding().getTop();
```

See [padding documentation](Commons#padding) for more details.
