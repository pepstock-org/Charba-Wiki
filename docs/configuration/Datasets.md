---
id: Datasets
title: Datasets
hide_title: true
sidebar_label: Datasets
---
## Datasets

The datasets options are managing the set options which will affect the datasets management.

The datasets configuration is passed using the [Datasets](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Datasets.html) object in the chart options and mapped to [TypedDataset](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/TypedDataset.html).

To get, change and apply own properties, you can invoke the **set** and **get** methods, as following:

```java
// --------------------------------------
// GLOBAL, for all charts of the same type
// --------------------------------------
Defaults.get().getOptions(ChartType.LINE).getDatasets().get(ChartType.LINE).setShowLine(true);

boolean globalShowLine = Defaults.get().getOptions(ChartType.LINE).getDatasets().get(ChartType.LINE).isShowLine();

// sets and gets showLine option to line datasets 
chart.getOptions().getDatasets().get(ChartType.LINE).setShowLine(true);

boolean showLine = chart.getOptions().getDatasets().get(ChartType.LINE).isShowLine();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| animation | [Animation](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Animation.html) | - | See [animation configuration](Animation#animation) section for more details.
| animations | [Animations](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Animations.html) | - | See [animation configuration](Animation#animations) section for more details.
| barPercentage | double | 0.9 | Percent (0-1) of the available width each bar should be within the category width. 1.0 will take the whole category width and put the bars right next to each other.
| categoryPercentage | double | 0.8 | Percent (0-1) of the available width each category should be within the sample width.
| barThickness | int | 0 | Manually set width of each bar in pixels.<br/>If set to [DefaultDatasets.FLEX_BAR_THICKNESS](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultDatasets.html#FLEX_BAR_THICKNESS), it computes "optimal" sample widths that globally arrange bars side by side.<br/>If not set (default), bars are equally sized based on the smallest interval.
| grouped | boolean | `true` | Should the bars be grouped on index axis.<br/>When `true`, all the datasets at same index value will be placed next to each other centering on that index value.<br/>When `false`, each bar is placed on its actual index-axis value.
| maxBarThickness | int | 0 | Set this to ensure that bars are not sized thicker than this.
| minBarLength | int | 0 | Set this to ensure that bars have a minimum length in pixels.
| showLine | boolean | `true` | If `true`, the line is drawn for dataset.
| transitions | [Transitions](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Transitions.html) | - | See [animation configuration](Animation#transitions) section for more details.

