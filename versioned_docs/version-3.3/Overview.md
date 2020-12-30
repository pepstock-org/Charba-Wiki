---
id: Overview
title: Charba - J2CL and GWT Charts library based on CHART.JS
hide_title: false
sidebar_label: Overview
slug: /
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Why Charba

[GWT Web toolkit](http://www.gwtproject.org/) doesn't have charting library available out of the box.

There are some open source charting libraries for GWT available to be used but with some constraints or unclear items:

 * internet connection needed
 * open source license not completely clear, sometimes with some obligations like to add specific labels
 * old packages not longer maintained

[Google Charts](https://developers.google.com/chart/interactive/docs/reference) tools are powerful, simple to use, and free. Unfortunately if you see the terms of service into [support](https://developers.google.com/chart/interactive/faq) section, you can read that you can NOT use it in offline mode.

```
Can I use charts offline?

Your users' computers must have access to https://www.gstatic.com/charts/loader.js 
in order to use the interactive features of Google Charts. This is because the 
visualization libraries that your page requires are loaded dynamically before you 
use them. 
The code for loading the appropriate library is part of the included script, and 
is called when you invoke the google.charts.load() method. Our terms of service do 
not allow you to download the google.charts.load or google.visualization code to 
use offline.

Can I download and host the chart code locally, or on an intranet?

Sorry; our terms of service do not allow you to download and save or host the 
google.charts.load or google.visualization code. 
However, if you don't need the interactivity of Google Charts, you can screenshot 
the charts and use them as you wish.
```

Other open-source libraries which provide charts for [GWT Web toolkit](http://www.gwtproject.org/) have got sentences like the following one (even if they are available under open-source license):

```
 If you like this software and intend to use it we'd appreciate you letting us 
 know, and possibly adding a link or reference back to our site. 
```

For all these reasons, **Charba** has been developed.

We spent time to evaluate some open-source charts java script libraries and finally we landed on [Chart.JS](http://www.chartjs.org/).

Why?

Because it's simple, clean and user-friendly. Perfect words to describe the [Chart.JS](http://www.chartjs.org/) library.

The [Chart.JS](http://www.chartjs.org/) library is an HTML5 based JavaScript library for creating animated, interactive and customizable charts and graphs. With [Chart.JS](http://www.chartjs.org/), you can easily get to visualize your mixed chart types without hassle, creating responsive web pages by default.

Even if **Charba** was born only as GWT library, since version **3**, **Charba** has been changed in order to be used not only in GWT but also with other DOM frameworks, base on [J2CL - JavaToClosure](https://github.com/google/j2cl), like [Google Elemental2](https://github.com/google/elemental2) or [Elemento](https://github.com/hal/elemento).

Since version **3**, **Charba** has got an own DOM tree manager which allows to it to be independent from any other DOM tree managers (i.e. GWT, Elemental2 or Elemento) but it is providing a set of hooks in order to use it also over those frameworks.
 
## Features

**Charba** has implemented almost all [Chart.JS](http://www.chartjs.org/) features, as following:

 * Default global options and scale, chart and scale options
 * All [charts types](http://www.chartjs.org/docs/latest/charts/)
    * Line
    * Bar
    * Horizontal Bar
    * Radar
    * Polar area
    * Doughnut
    * Pie
    * Bubble
    * Scatter
    * Area
 * All [options](http://www.chartjs.org/docs/latest/configuration/) items
    * Animation
    * Layout
    * Legend
    * Title
    * Tooltip
    * Element
    * Events  
 * All [axes](http://www.chartjs.org/docs/latest/axes/) elements (with all configuration items for labelling and styling)
    * Cartesian (linear, logarithmic, category, time)
    * Radial (linear)
 * All charts [API](http://www.chartjs.org/docs/latest/developers/api.html)
 * All [plugins](http://www.chartjs.org/docs/latest/developers/plugins.html) capabilities
 * Date adapters capabilities
 * [Controller](https://www.chartjs.org/docs/latest/developers/charts.html) capabilities to create own chart types.
 * Some [Chart.JS](http://www.chartjs.org/) plugins, provided as **Charba** extensions:
    * [DataLabels](https://github.com/chartjs/chartjs-plugin-datalabels) which is a highly customizable plugin that displays labels on data for any type of charts.
    * [Labels](https://github.com/emn178/chartjs-plugin-labels) which is a light weight plugin to display labels on pie, doughnut and polar area chart. Original PieceLabel.
    * [Zoom](https://github.com/chartjs/chartjs-plugin-zoom) which enables zooming and panning on chart.
    * [Annotation](https://github.com/chartjs/chartjs-plugin-annotation) which draws lines and boxes on the chart area.
 
## Out-of-the-box 

**Charba** has implemented some out-of-the-box features, leveraging on [Chart.JS](http://www.chartjs.org/) features, mentioned above:

 * Charts (by controllers)
    * Meter
    * Gauge
 * Tiles builder to create patterns   
 * Plugins
    * Chart background color
    * Chart cursor pointer to change cursor hovering chart elements
    * Chart dataset items selector (for drill down and zooming)
    * Color schemes which enables to pick the color combination for charts from the predefined or custom schemes
    * HTML legend to create own legend changing styles and multiple lines
 * Callbacks
    * Tick callback to define the amount of decimals digits of the axis number values when all datasets are hidden
    * Legend callback to avoid to hide all datasets
    * Datalabels listeners callback to change cursor hovering the labels
    * Datalabels listeners callback to select the labels, leveraging on [DatasetSelectionEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/DatasetSelectionEventHandler.html) 
    * Datalabels formatter callback to return the percentage as value to show in the chart
    
## Requirements

**Charba** is built on JDK 8.

**Charba** is leveraging on [JSINTEROP](http://www.gwtproject.org/doc/latest/DevGuideCodingBasicsJsInterop.html) method to integrate java script objects and then it needs of [jsinterop-annotations](https://github.com/gwtproject/gwt/tree/master/user/src/jsinterop/annotations), version 2.0.0, and [jsinterop-base](https://github.com/google/jsinterop-base), version 1.0.0, to be built.

**Charba** has got also a dependency with [GWT Web toolkit](http://www.gwtproject.org/) version 2.8.2, when the GWT distribution (which is containing chart widgets and code splitting capabilities) is used. Since versions 3.1, **Charba** can work (and it has also been successfully tested) on [GWT 2.9.0](http://www.gwtproject.org/release-notes.html#Release_Notes_2_9_0).

**Charba** has got embedded [Chart.JS](http://www.chartjs.org/), currently the minified distribution, the [version 2.9.4](https://github.com/chartjs/Chart.js/releases/tag/v2.9.4).

**Charba** enables the possibility to embed a specific date time library, needed to [Chart.JS](http://www.chartjs.org/) to use timeseries, providing the embedding items based on the 3 date time libraries currently available their CHART.JS adapters:

  * [MOMENT.js](https://momentjs.com/), version [2.28.0](https://github.com/moment/moment/releases/tag/2.28.0) and the specific [adapter](https://github.com/chartjs/chartjs-adapter-moment/releases/tag/v0.1.2), at version 0.1.2.
  * [Luxon](https://moment.github.io/luxon/), version [1.25.0](https://github.com/moment/luxon/releases/tag/1.25.0) and the specific [adapter](https://github.com/chartjs/chartjs-adapter-luxon/releases/tag/v0.2.2), at version 0.2.2.
  * [Date-fns](https://date-fns.org/) version [2.9.0](https://github.com/date-fns/date-fns/releases/tag/v2.9.0) and the specific [adapter](https://github.com/chartjs/chartjs-adapter-date-fns/releases/tag/v1.0.0), at version 1.0.0. Datefns is not separately embedded (like Luxon or Moment) because is already included into CHART.JS adapter.

Furthermore **Charba** has embedded a set of [Chart.JS](http://www.chartjs.org/) plugins in order to enrich own features:

  * [DataLabels](https://github.com/chartjs/chartjs-plugin-datalabels) plugin, currently the [version 0.7.0](https://github.com/chartjs/chartjs-plugin-datalabels/releases/tag/v0.7.0).
  * [Labels](https://github.com/emn178/chartjs-plugin-labels) plugin (former PieceLabels), currently the [version 1.1.0](https://github.com/emn178/chartjs-plugin-labels/releases/tag/v1.1.0).
  * [Zoom](https://github.com/chartjs/chartjs-plugin-zoom) plugin, currently the [version 0.7.5](https://github.com/chartjs/chartjs-plugin-zoom/releases/tag/v0.7.5).
     * [Hammer.JS](https://github.com/hammerjs/hammer.js) javaScript library for detecting touch gestures, currently the [version 2.0.8](https://github.com/hammerjs/hammer.js/releases/tag/v2.0.8), as dependency of [Zoom](https://github.com/chartjs/chartjs-plugin-zoom) plugin.
  * [Annotation](https://github.com/chartjs/chartjs-plugin-annotation) plugin, currently at `master` commit id [53630421b5d2e5d6790de3d32c1fb7d3cdc590e2](https://github.com/chartjs/chartjs-plugin-annotation).
      * This is plugin is not released at any versions anymore and for this reason it has embedded at last `master` commit id.   

See here the license and versions matrix.

| Component | Version | License
| --------- | ------- | -------
| JSInterop Base | 1.0.0 | [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)
| JSInterop Annotations | 2.0.0 | [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)
| GWT Web Toolkit | [2.8.2](https://github.com/gwtproject/gwt/releases/tag/2.8.2) | [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)
| Chart.JS | [2.9.4](https://github.com/chartjs/Chart.js/releases/tag/v2.9.4) | [MIT](https://raw.githubusercontent.com/chartjs/Chart.js/v2.9.4/LICENSE.md)
| Chart.JS Moment adapter | [0.1.2](https://github.com/chartjs/chartjs-adapter-moment/releases/tag/v0.1.2) | [MIT](https://raw.githubusercontent.com/chartjs/chartjs-adapter-moment/master/LICENSE.md)
| Chart.JS Luxon adapter | [0.2.2](https://github.com/chartjs/chartjs-adapter-luxon/releases/tag/0.2.2) | [MIT](https://raw.githubusercontent.com/chartjs/chartjs-adapter-luxon/master/LICENSE.md)
| Chart.JS Datefns adapter | [1.0.0](https://github.com/chartjs/chartjs-adapter-date-fns/releases/tag/v1.0.0) | [MIT](https://raw.githubusercontent.com/chartjs/chartjs-adapter-date-fns/master/LICENSE.md)
| Moment | [2.28.0](https://github.com/moment/moment/releases/tag/2.28.0) | [MIT](https://github.com/moment/moment/blob/develop/LICENSE)
| Luxon | [1.25.0](https://github.com/moment/luxon/releases/tag/1.25.0) | [MIT](https://raw.githubusercontent.com/moment/luxon/master/license.md)
| Datefns | [2.9.0](https://github.com/date-fns/date-fns/releases/tag/v2.9.0) | [MIT](https://kossnocorp.mit-license.org/)
| DataLabels | [0.7.0](https://github.com/chartjs/chartjs-plugin-datalabels/releases/tag/v0.7.0) | [MIT](https://raw.githubusercontent.com/chartjs/chartjs-plugin-datalabels/v0.7.0/LICENSE.md)
| Labels | [1.1.0](https://github.com/emn178/chartjs-plugin-labels/releases/tag/v1.1.0) | [MIT](https://raw.githubusercontent.com/emn178/chartjs-plugin-labels/v1.1.0/LICENSE.txt)
| Zoom | [0.7.5](https://github.com/chartjs/chartjs-plugin-zoom/releases/tag/v0.7.5) | [MIT](https://github.com/chartjs/chartjs-plugin-zoom/blob/master/LICENSE.md)
| HammerJS | [2.0.8](https://github.com/hammerjs/hammer.js/releases/tag/v2.0.8) | [MIT](https://github.com/hammerjs/hammer.js/blob/master/LICENSE.md)
| Annotation | [53630421b5d2e5d6790de3d32c1fb7d3cdc590e2](https://github.com/chartjs/chartjs-plugin-annotation) | [MIT](https://github.com/chartjs/chartjs-plugin-annotation/blob/master/LICENSE.md)

To enable the minifying of javascript objects, not provided out-of-the-box, **Charba** needs also [Google Closure Compiler](https://developers.google.com/closure/compiler/), version v20201006, only in [Ant build.xml](https://github.com/pepstock-org/Charba/blob/3.3/build.xml).

## Components matrix 

The following matrixes are showing the dependencies with version of components which are released in all **Charba** versions.

<img src={useBaseUrl('/img/charba_jar_trend_33.png')} />

### JAVA components

| Charba | JsInterop Base | JsInterop Annotations | GWT Web toolkit | Google Closure |
| ------ | -------------- | --------------------- | ----------------| -------------- |
| 1.0    | -              | -                     | 2.8.2           | -              |
| 1.1    | -              | -                     | 2.8.2           | -              |
| 1.2    | -              | -                     | 2.8.2           | -              |
| 1.3    | -              | -                     | 2.8.2           | -              |
| 1.4    | -              | -                     | 2.8.2           | -              |
| 1.5    | -              | -                     | 2.8.2           | -              |
| 1.6    | -              | -                     | 2.8.2           | -              |
| 1.7    | -              | -                     | 2.8.2           | -              |
| 2.0    | -              | 1.0.2                 | 2.8.2           | -              |
| 2.1    | -              | 1.0.2                 | 2.8.2           | -              |
| 2.2    | -              | 1.0.2                 | 2.8.2           | v20190301      |
| 2.3    | -              | 1.0.2                 | 2.8.2           | v20190301      |
| 2.4    | -              | 1.0.2                 | 2.8.2           | v20190325      |
| 2.5    | -              | 1.0.2                 | 2.8.2           | v20190415      |
| 2.6    | -              | 1.0.2                 | 2.8.2           | v20190929      |
| 2.7    | -              | 1.0.2                 | 2.8.2           | v20191111      |
| 2.8    | -              | 2.0.0                 | 2.8.2           | v20200101      |
| 3.0    | 1.0.0          | 2.0.0                 | 2.8.2           | v20200204      |
| 3.1    | 1.0.0          | 2.0.0                 | 2.8.2           | v20200224      |
| 3.2    | 1.0.0          | 2.0.0                 | 2.8.2 <sup>1</sup> | v20200504      |
| 3.3    | 1.0.0          | 2.0.0                 | 2.8.2 <sup>1</sup> | v20201006      |

**<sup>1</sup>** even if **Charba** mantains the dependency with [GWT Web toolkit](http://www.gwtproject.org/) version 2.8.2, it has been successfully tested and works with [GWT version 2.9.0](http://www.gwtproject.org/release-notes.html#Release_Notes_2_9_0).

### CHART.JS core components

| Charba | Chart.JS | Chart.JS Moment adapter | Moment | Chart.JS Luxon adapter | Luxon  | Chart.JS Datefns adapter | Datefns |
| ------ | -------- | ----------------------- | ------ | ---------------------- | ------ | ------------------------ | ------- |
| 1.0    | 2.7.1    | -                       | -      | -                      | -      | -                        | -       |
| 1.1    | 2.7.1    | -                       | -      | -                      | -      | -                        | -       |
| 1.2    | 2.7.1    | -                       | -      | -                      | -      | -                        | -       |
| 1.3    | 2.7.1    | -                       | -      | -                      | -      | -                        | -       |
| 1.4    | 2.7.1    | -                       | -      | -                      | -      | -                        | -       |
| 1.5    | 2.7.2    | -                       | -      | -                      | -      | -                        | -       |
| 1.6    | 2.7.2    | -                       | -      | -                      | -      | -                        | -       |
| 1.7    | 2.7.3    | -                       | -      | -                      | -      | -                        | -       |
| 2.0    | 2.7.3    | -                       | -      | -                      | -      | -                        | -       |
| 2.1    | 2.7.3    | -                       | -      | -                      | -      | -                        | -       |
| 2.2    | 2.8.0    | -                       | -      | -                      | -      | -                        | -       |
| 2.3    | 2.8.0    | -                       | -      | -                      | -      | -                        | -       |
| 2.4    | 2.8.0    | -                       | -      | -                      | -      | -                        | -       |
| 2.5    | 2.8.0    | -                       | -      | -                      | -      | -                        | -       |
| 2.6    | 2.9.2    | -                       | -      | -                      | -      | -                        | -       |
| 2.7    | 2.9.3    | -                       | -      | -                      | -      | -                        | -       |
| 2.8    | 2.9.3    | -                       | -      | -                      | -      | -                        | -       |
| 3.0    | 2.9.3    | 0.1.1                   | 2.24.0 | 0.2.0                  | 1.22.0 | 1.0.0                    | 2.9.0   |
| 3.1    | 2.9.3    | 0.1.1                   | 2.24.0 | 0.2.0                  | 1.22.0 | 1.0.0                    | 2.9.0   |
| 3.2    | 2.9.3    | 0.1.1                   | 2.25.3 | 0.2.1                  | 1.24.1 | 1.0.0                    | 2.9.0   |
| 3.3    | 2.9.4    | 0.1.2                   | 2.28.0 | 0.2.2                  | 1.25.0 | 1.0.0                    | 2.9.0   |

### CHART.JS plugin components

| Charba | Datalabels | Labels | Zoom  | HammerJS | Annotation |
| ------ | ---------- | ------ | ----- | -------- | ---------- |
| 1.0    | -          | -      | -     | -        | -          |
| 1.1    | -          | -      | -     | -        | -          |
| 1.2    | -          | -      | -     | -        | -          |
| 1.3    | -          | -      | -     | -        | -          |
| 1.4    | -          | -      | -     | -        | -          |
| 1.5    | -          | -      | -     | -        | -          |
| 1.6    | -          | -      | -     | -        | -          |
| 1.7    | -          | -      | -     | -        | -          |
| 2.0    | -          | -      | -     | -        | -          |
| 2.1    | 0.5.0      | 1.1.0  | -     | -        | -          |
| 2.2    | 0.6.0      | 1.1.0  | -     | -        | -          |
| 2.3    | 0.6.0      | 1.1.0  | -     | -        | -          |
| 2.4    | 0.6.0      | 1.1.0  | -     | -        | -          |
| 2.5    | 0.6.0      | 1.1.0  | -     | -        | -          |
| 2.6    | 0.7.0      | 1.1.0  | -     | -        | -          |
| 2.7    | 0.7.0      | 1.1.0  | -     | -        | -          |
| 2.8    | 0.7.0      | 1.1.0  | 0.7.5 | 2.0.8    | 7037eea    |
| 3.0    | 0.7.0      | 1.1.0  | 0.7.5 | 2.0.8    | 7037eea    |
| 3.1    | 0.7.0      | 1.1.0  | 0.7.5 | 2.0.8    | 7037eea    |
| 3.2    | 0.7.0      | 1.1.0  | 0.7.5 | 2.0.8    | 5363042    |
| 3.3    | 0.7.0      | 1.1.0  | 0.7.5 | 2.0.8    | 5363042    |

## Building

To build **Charba**, you can check out the project and to run [Ant build.xml](https://github.com/pepstock-org/Charba/blob/3.3/build.xml).

The [Ant build.xml](https://github.com/pepstock-org/Charba/blob/3.3/build.xml) is able to build the 2 artifacts, related to the 2 distributions available.

The first distribution is a **Charba** file without any GWT dependency (but working on GWT anyway), consumable also in other [J2CL - JavaToClosure](https://github.com/google/j2cl) frameworks, like [Google Elemental2](https://github.com/google/elemental2) and [Elemento](https://github.com/hal/elemento).

To build the project, execute `buildBinary` target.

It creates a `charba-[version.release].jar` file into `dist` folder, ready to be included into your project.

The second distribution is a **Charba** file with a hard GWT dependency which contains charts widgets and code splitting capabilities.

To build the project, execute `buildBinaryGwt` target.

It creates a `charba-[version.release]-gwt.jar` file into `dist` folder, ready to be included into your project.

## Installation

Currently **Charba** is available on [MVN repository](https://mvnrepository.com/artifact/org.pepstock/charba).

It is available also on [GitHub releases](https://github.com/pepstock-org/Charba/releases).

If you are using [Apache Maven](https://maven.apache.org/):

```xml
<dependency>
    <groupId>org.pepstock</groupId>
    <artifactId>charba</artifactId>
    <version>3.3</version>
    <!-- for GWT -->
    <version>3.3-gwt</version>
</dependency>
```

If you are using [Apache Ivy](http://ant.apache.org/ivy/):

```xml
<dependency org="org.pepstock" name="charba" rev="3.3"/>
<!-- for GWT -->
<dependency org="org.pepstock" name="charba" rev="3.3-gwt"/>
```

If you are using [Gradle](https://gradle.org/):

```json
compile group: 'org.pepstock', name: 'charba', version: '3.3'

compile group: 'org.pepstock', name: 'charba', version: '3.3-gwt'
```

To install in your GWT project, both for GWT and for J2CL artifacts, you must the following configuration into your GWT project module configuration:

```xml
...
    <inherits name="org.pepstock.charba.Charba"/>
...
```

**Charba** is now leveraging on [JSINTEROP](http://www.gwtproject.org/doc/latest/DevGuideCodingBasicsJsInterop.html).

As the name suggests, JsInterop is a way of interoperating Java with JavaScript. It offers a better way of communication between the two using annotations instead of having to write java script in your classes (using JSNI).

## GWT compiler param 

:::important
If you are using a **Charba** version between **2.0** and **3.0** (included), GWT compiler (you are using for your project) requires `-generateJsInteropExports` to be passed. 

Since **Charba** version **3.1**, this is **NOT** needed anymore. 
:::

If you are using [Apache Maven](https://maven.apache.org/):

```xml
<plugin>
  <groupId>org.codehaus.mojo</groupId>
  <artifactId>gwt-maven-plugin</artifactId>
  ...
  <configuration>
    <generateJsInteropExports>true</generateJsInteropExports>
  </configuration>
</plugin>
```
