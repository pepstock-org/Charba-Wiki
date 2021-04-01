---
id: Requirements
title: Requirements
hide_title: true
sidebar_label: Requirements
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Requirements

**Charba** is built on JDK 8.

**Charba** is leveraging on [JSINTEROP](http://www.gwtproject.org/doc/latest/DevGuideCodingBasicsJsInterop.html) method to integrate java script objects and needs the following libraries: 

  * [jsinterop-annotations](https://github.com/google/jsinterop-annotations)
  * [jsinterop-base](https://github.com/google/jsinterop-base)
 
**Charba** has got also a dependency with [GWT Web toolkit](http://www.gwtproject.org/), when the GWT distribution (which is containing chart widgets and code splitting capabilities) is used.  

**Charba** has got embedded [Chart.JS](http://www.chartjs.org/), currently the minified distribution.

Even if [Chart.JS](http://www.chartjs.org/) leaves the users to select a date adapter, **Charba** embeds only [Luxon](https://moment.github.io/luxon/) as specific date time library, needed to use time or time series axes, because **Charba** (and [Chart.JS](http://www.chartjs.org/)) introduces the internationalization and only [Luxon](https://moment.github.io/luxon/) is leveraging on [INTL](./intl/Locale) platform.

**Charba** has got embedded [Luxon](https://moment.github.io/luxon/) and the specific [Chart.JS adapter](https://github.com/chartjs/chartjs-adapter-luxon/).

Furthermore **Charba** has embedded a set of [Chart.JS](http://www.chartjs.org/) plugins in order to enrich own features:

  * [DataLabels](https://github.com/chartjs/chartjs-plugin-datalabels) plugin
  * [Labels](https://github.com/emn178/chartjs-plugin-labels) plugin (former PieceLabels). Due to the project is unmaintained, the plugin has been [imported](https://github.com/pepstock-org/Charba/blob/master/src/org/pepstock/charba/client/resources/js/chartjs-plugin-labels.js) in **Charba** project and maintained over there.
  * [Zoom](https://github.com/chartjs/chartjs-plugin-zoom) plugin
    * [Hammer.JS](https://github.com/hammerjs/hammer.js) javaScript library for detecting touch gestures, as dependency of [Zoom](https://github.com/chartjs/chartjs-plugin-zoom) plugin.
  * [Annotation](https://github.com/chartjs/chartjs-plugin-annotation) plugin

To enable the minifying of javascript objects, not provided out-of-the-box, **Charba** needs also [Google Closure Compiler](https://developers.google.com/closure/compiler/), invoked only in [Ant build.xml](https://github.com/pepstock-org/Charba/blob/3.3/build.xml).

See here the license matrix.

| Component | Version | License
| :- | :- | :-
| JSInterop Base | [1.0.0](https://github.com/google/jsinterop-base/releases/tag/1.0.0) | [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)
| JSInterop Annotations | [2.0.0](https://github.com/google/jsinterop-annotations/releases/tag/2.0.0) | [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)
| GWT Web Toolkit | [2.8.2](https://github.com/gwtproject/gwt/releases/tag/2.8.2) | [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)
| Google Closure Compiler | v20201006 | [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)
| Chart.JS | [3.0.0](https://github.com/chartjs/Chart.js/releases/tag/v3.0.0) | [MIT](https://raw.githubusercontent.com/chartjs/Chart.js/v3.0.0/LICENSE.md)
| Chart.JS Luxon adapter | [1.0.0](https://github.com/chartjs/chartjs-adapter-luxon/releases/tag/v1.0.0-beta.2) | [MIT](https://raw.githubusercontent.com/chartjs/chartjs-adapter-luxon/master/LICENSE.md)
| Luxon | [1.26.0](https://github.com/moment/luxon/releases/tag/1.26.0) | [MIT](https://raw.githubusercontent.com/moment/luxon/master/license.md)
| DataLabels | [2.0.0](https://github.com/chartjs/chartjs-plugin-datalabels/releases/tag/v2.0.0) | [MIT](https://raw.githubusercontent.com/chartjs/chartjs-plugin-datalabels/v0.7.0/LICENSE.md)
| Zoom | [1.0.0](https://github.com/chartjs/chartjs-plugin-zoom/releases/tag/v1.0.0-beta.1) | [MIT](https://github.com/chartjs/chartjs-plugin-zoom/blob/master/LICENSE.md)
| HammerJS | [2.0.8](https://github.com/hammerjs/hammer.js/releases/tag/v2.0.8) | [MIT](https://github.com/hammerjs/hammer.js/blob/master/LICENSE.md)
| Annotation | [1.0.0](https://github.com/chartjs/chartjs-plugin-annotation/releases/tag/v1.0.0) | [MIT](https://github.com/chartjs/chartjs-plugin-annotation/blob/master/LICENSE.md)

## Components matrix 

The following matrixes are showing the dependencies with version of components which are released in all **Charba** versions.

<img src={useBaseUrl('/img/charba_jar_trend_40.png')} />

### Java

| Charba | JDK | JsInterop<br/>Base | JsInterop<br/>Annotations | GWT Web<br/>toolkit | Google<br/>Closure
| :- | :- | - | - | - | - 
| 1.0 | 8 | - | - | 2.8.2 | - 
| 1.1 | 8 | - | - | 2.8.2 | - 
| 1.2 | 8 | - | - | 2.8.2 | - 
| 1.3 | 8 | - | - | 2.8.2 | - 
| 1.4 | 8 | - | - | 2.8.2 | - 
| 1.5 | 8 | - | - | 2.8.2 | - 
| 1.6 | 8 | - | - | 2.8.2 | - 
| 1.7 | 8 | - | - | 2.8.2 | - 
| 2.0 | 8 | - | 1.0.2 | 2.8.2 | - 
| 2.1 | 8 | - | 1.0.2 | 2.8.2 | - 
| 2.2 | 8 | - | 1.0.2 | 2.8.2 | v20190301 
| 2.3 | 8 | - | 1.0.2 | 2.8.2 | v20190301 
| 2.4 | 8 | - | 1.0.2 | 2.8.2 | v20190325 
| 2.5 | 8 | - | 1.0.2 | 2.8.2 | v20190415 
| 2.6 | 8 | - | 1.0.2 | 2.8.2 | v20190929 
| 2.7 | 8 | - | 1.0.2 | 2.8.2 | v20191111 
| 2.8 | 8 | - | 2.0.0 | 2.8.2 | v20200101 
| 3.0 | 8 | 1.0.0 | 2.0.0 | 2.8.2 | v20200204 
| 3.1 | 8 | 1.0.0 | 2.0.0 | 2.8.2 | v20200224 
| 3.2 | 8 | 1.0.0 | 2.0.0 | 2.8.2**<sup style={{color: 'orange'}}>(2)</sup>** | v20200504
| 3.3 | 8 | 1.0.0 | 2.0.0 | 2.8.2**<sup style={{color: 'orange'}}>(2)</sup>** | v20201006
| 4.0 | 8**<sup style={{color: 'orange'}}>(1)</sup>**  | 1.0.0 | 2.0.0 | 2.8.2**<sup style={{color: 'orange'}}>(2)</sup>** | ?????????

**<sup style={{color: 'orange'}}>(1)</sup>** even if **Charba** is developed and built on JDK 8, since **version 4.0** it is compiled by JDK 11 and checked by [Sonar.io](https://sonarcloud.io/dashboard?id=pepstock-org_Charba) on this version.

**<sup style={{color: 'orange'}}>(2)</sup>** even if **Charba** maintains the dependency with [GWT Web toolkit](http://www.gwtproject.org/) version 2.8.2, it has been successfully tested and works with [GWT version 2.9.0](http://www.gwtproject.org/release-notes.html#Release_Notes_2_9_0).

### CHART.JS core

| Charba | Chart.JS | Chart.JS<br/>Luxon<br/>adapter | Luxon | Chart.JS<br/>Moment<br/>adapter | Moment | Chart.JS<br/>Datefns<br/>adapter | Datefns |
| :- | :- | - | :- | - | :- | - | :-
| 1.0 | 2.7.1 | - | - | - | - | - | -
| 1.1 | 2.7.1 | - | - | - | - | - | -
| 1.2 | 2.7.1 | - | - | - | - | - | -
| 1.3 | 2.7.1 | - | - | - | - | - | -
| 1.4 | 2.7.1 | - | - | - | - | - | -
| 1.5 | 2.7.2 | - | - | - | - | - | -
| 1.6 | 2.7.2 | - | - | - | - | - | -
| 1.7 | 2.7.3 | - | - | - | - | - | -
| 2.0 | 2.7.3 | - | - | - | - | - | -
| 2.1 | 2.7.3 | - | - | - | - | - | -
| 2.2 | 2.8.0 | - | - | - | - | - | -
| 2.3 | 2.8.0 | - | - | - | - | - | -
| 2.4 | 2.8.0 | - | - | - | - | - | -
| 2.5 | 2.8.0 | - | - | - | - | - | -
| 2.6 | 2.9.2 | - | - | - | - | - | -
| 2.7 | 2.9.3 | - | - | - | - | - | -
| 2.8 | 2.9.3 | - | - | - | - | - | - 
| 3.0 | 2.9.3 | 0.2.0 | 1.22.0 | 0.1.1 | 2.24.0 | 1.0.0 | 2.9.0
| 3.1 | 2.9.3 | 0.2.0 | 1.22.0 | 0.1.1 | 2.24.0 | 1.0.0 | 2.9.0
| 3.2 | 2.9.3 | 0.2.1 | 1.24.1 | 0.1.1 | 2.25.3 | 1.0.0 | 2.9.0
| 3.3 | 2.9.4 | 0.2.2 | 1.25.0 | 0.1.2 | 2.28.0 | 1.0.0 | 2.9.0
| 4.0 | 3.0.0 | 0.2.2 | 1.25.0 | -**<sup style={{color: 'orange'}}>(1)</sup>** | -**<sup style={{color: 'orange'}}>(1)</sup>** | -**<sup style={{color: 'orange'}}>(1)</sup>** | -**<sup style={{color: 'orange'}}>(1)</sup>**

**<sup style={{color: 'orange'}}>(1)</sup>** Since **version 4.0**, **Charba** (and [Chart.JS](http://www.chartjs.org/) version 3.0.0) introduces the internationalization and only [Luxon](https://moment.github.io/luxon/) is leveraging on [INTL](./intl/Locale) platform. The other dependencies has been removed.

### CHART.JS extensions

| Charba | Datalabels | Labels | Zoom  | HammerJS | Annotation |
| :- | :- | :- | :- | :- | :- |
| 1.0 | - | - | - | - | - 
| 1.1 | - | - | - | - | - 
| 1.2 | - | - | - | - | - 
| 1.3 | - | - | - | - | - 
| 1.4 | - | - | - | - | - 
| 1.5 | - | - | - | - | - 
| 1.6 | - | - | - | - | - 
| 1.7 | - | - | - | - | - 
| 2.0 | - | - | - | - | - 
| 2.1 | 0.5.0 | 1.1.0 | -  | - | - 
| 2.2 | 0.6.0 | 1.1.0 | -  | - | - 
| 2.3 | 0.6.0 | 1.1.0 | -  | - | - 
| 2.4 | 0.6.0 | 1.1.0 | -  | - | - 
| 2.5 | 0.6.0 | 1.1.0 | -  | - | - 
| 2.6 | 0.7.0 | 1.1.0 | -  | - | - 
| 2.7 | 0.7.0 | 1.1.0 | -  | - | - 
| 2.8 | 0.7.0 | 1.1.0 | 0.7.5 | 2.0.8 | 7037eea 
| 3.0 | 0.7.0 | 1.1.0 | 0.7.5 | 2.0.8 | 7037eea 
| 3.1 | 0.7.0 | 1.1.0 | 0.7.5 | 2.0.8 | 7037eea 
| 3.2 | 0.7.0 | 1.1.0 | 0.7.5 | 2.0.8 | 5363042 
| 3.3 | 0.7.0 | 1.1.0 | 0.7.5 | 2.0.8 | 5363042 
| 4.0 | 2.0.0 | 1.1.0**<sup style={{color: 'orange'}}>(1)</sup>** | 0.7.5 | 2.0.8 | 1.0.0 

**<sup style={{color: 'orange'}}>(1)</sup>** The [Labels plugin](./extensions/Labels) has been heavily changed in order to be compliant with [Chart.JS](http://www.chartjs.org/) version 3.0.0) in the **Charba** [project](https://github.com/pepstock-org/Charba/blob/master/src/org/pepstock/charba/client/resources/js/chartjs-plugin-labels.js) because the [original project](https://github.com/emn178/chartjs-plugin-labels) is unmaintained. 
