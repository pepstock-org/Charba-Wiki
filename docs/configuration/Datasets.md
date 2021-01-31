---
id: Datasets
title: Datasets
hide_title: true
sidebar_label: Datasets
---
## Datasets

The datasets options are managing the set options which will affect the datasets management.

The datasets configuration is passed using the [Datasets](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Datasets.html) object in the chart options.

To change and apply own properties, you can invoke the **set** methods, as following:

```java
// --------------------------------------
// GLOBAL, for all charts of the same type
// --------------------------------------
Defaults.get().getOptions(ChartType.LINE).getDatasets().setShowLine(true);
boolean globalShowLine = Defaults.get().getOptions(ChartType.LINE).getDatasets().isShowLine();
// chart instance 
chart.getOptions().getDatasets().setShowLine(true);
boolean showLine = chart.getOptions().getDatasets().isShowLine();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| barPercentage | double | 0.9 | Percent (0-1) of the available width each bar should be within the category width. 1.0 will take the whole category width and put the bars right next to each other.
| categoryPercentage | double | 0.8 | Percent (0-1) of the available width each category should be within the sample width.
| barThickness | int | 0 | Manually set width of each bar in pixels.<br/>If set to [DefaultDatasets.FLEX_BAR_THICKNESS](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultDatasets.html#FLEX_BAR_THICKNESS), it computes "optimal" sample widths that globally arrange bars side by side.<br/>If not set (default), bars are equally sized based on the smallest interval.
| base | double | Undefinedvalues.DOUBLE | Base value for the bar in data units along the value axis.<br/>If not set, defaults to the value axis base value.
| maxBarThickness | int | 0 | Set this to ensure that bars are not sized thicker than this.
| minBarLength | int | 0 | Set this to ensure that bars have a minimum length in pixels.
| showLine | boolean | `true` | If `true`, the line is drawn for dataset.
