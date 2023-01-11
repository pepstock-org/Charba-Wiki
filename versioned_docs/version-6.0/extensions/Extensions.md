---
id: Extensions
title: Extensions
hide_title: true
sidebar_label: Introduction
---
## Extensions

**Charba** provides out of the box the feature to enable some available plugins for [Chart.JS](http://www.chartjs.org/), with all their capabilities.

The plugins are *native javascript* implementation and **Charba** provides the wrapper in order to be able to use them.

Currently the extensions, ready to use inside **Charba**, are the following:

  * [Annotation](Annotation) which can add annotations (like boxes, lines, points or ellipses) on a chart instance.
  * [DataLabels](DataLabels) which is a highly customizable plugin that displays labels on data for any type of charts.
  * [Labels](Labels) which is a light weight plugin to display labels on pie, doughnut and polar area chart. Original PieceLabel.
  * [Zoom](Zoom) which is a light weight plugin to zoom and pan a chart.
  * [Gradient](Gradient) which is a light weight plugin to apply gradients to the datasets by data values.

In this way, the user doesn't have to take care about compatibility of different versions because they are provided as components of **Charba** and they can be activate on demand.
