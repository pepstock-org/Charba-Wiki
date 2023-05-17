---
id: FillerAndDecimation
title: Filler and decimation
hide_title: true
sidebar_label: Decimation and filler
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Decimation

The decimation element can be used with line charts to automatically decimate data at the start of the chart life cycle. 

Before enabling it, review the [requirements](#requirements) to ensure that it will work with the chart you want to create.

The [decimation](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/configuration/Decimation.html) configuration is nested in the chart configuration as following:

```java
// sets the sample at chart level
chart.getOptions().getDecimation().setSamples(1000);

double samples = Dchart.getOptions().getDecimation().getSamples();
```
The defaults values are set in global defaults options, see [default global decimation options](../defaults/DefaultsCharts#decimation).

The following are the attributes that you can set:

| Name | Type | Description
| :- | :- | :- 
| enabled | boolean | If `true`, the data decimation is enabled.
| algorithm | [DecimationAlgorithm](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/enums/DecimationAlgorithm.html) | Decimation algorithm to use.
| samples | double | If the `DecimationAlgorithm.LTTB` is used, this is the number of samples in the output dataset. Defaults to the canvas width to pick 1 sample per pixel.
| threshold | double | If the number of samples in the current axis range is above this value, the decimation will be triggered.<br/>Defaults to 4 times the canvas width.<br/>The number of point after decimation can be higher than the `threshold` value.

### Algorithms

The available decimation algorithms to use for data are the following:

* `DecimationAlgorithm.MIN_MAX`: it will preserve peaks in your data but could require up to 4 points for each pixel. This type of decimation would work well for a very noisy signal where you need to see data peaks.
* `DecimationAlgorithm.LTTB` (Largest Triangle Three Bucket): it reduces the number of data points significantly. This is most useful for showing trends in data using only a few data points.

### Requirements

To use the decimation, the following requirements must be met:

1. The dataset must have an [IndexAxis](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/enums/IndexAxis.html) of `IndexAxis.X`.
2. The dataset must be a [line](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/data/LineDataset.html).
3. The dataset must not need any parsing for instance having `parsing` option set to `false`.
4. The X axis for the dataset must be either a [linear](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/configuration/CartesianLinearAxis.html) or [time](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/configuration/CartesianTimeAxis.html) axis.

## Filler

Filler element configures the engine which is in charge to manage the filling of the datasets, by the property `fill`. See [here](../coloring/Colors#filling) how filling a dataset.

The [filler](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/configuration/Filler.html) configuration is nested in the chart configuration as following:

```java
// disables the propagation at chart level
Dchart.getOptions().getFiller().setPropagate(false);

boolean propagate = chart.getOptions().getFiller().isPropagate();
```

The defaults values are set in global defaults options, see [default global filler options](../defaults/DefaultsCharts#filler).

The following are the attributes that you can set:

| Name | Type | Description
| :- | :- | :-
| propagate | boolean | If `true`, the fill area will be recursively extended to the visible target defined by the fill value of hidden data set targets.
| drawTime | [DrawTime](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/enums/DrawTime.html) | Filler draw time. 
