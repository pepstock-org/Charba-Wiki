---
id: Requirements
title: Requirements
hide_title: true
sidebar_label: Requirements
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Requirements

**Charba** is built on JDK 11 (as of version 5).

**Charba** is leveraging on [JSINTEROP](http://www.gwtproject.org/doc/latest/DevGuideCodingBasicsJsInterop.html) method to integrate javascript objects and needs the [jsinterop-annotations](https://github.com/google/jsinterop-annotations).
 
**Charba** has got also a dependency with [GWT Web toolkit](http://www.gwtproject.org/), when the GWT distribution (which is containing chart widgets and code splitting capabilities) is used.  

**Charba** has got embedded [Chart.JS](http://www.chartjs.org/), currently the minified distribution.

Even if [Chart.JS](http://www.chartjs.org/) leaves the users to select a date adapter, **Charba** embeds only [Luxon](https://moment.github.io/luxon/) as specific date time library, needed to use time or time series axes, because **Charba** (and [Chart.JS](http://www.chartjs.org/)) introduces the internationalization and only [Luxon](https://moment.github.io/luxon/) can use the browser's [INTL](./intl/Locale) platform.

**Charba** has got embedded [Luxon](https://moment.github.io/luxon/) and the specific [Chart.JS adapter](https://github.com/chartjs/chartjs-adapter-luxon/).

Furthermore **Charba** has embedded a set of [Chart.JS](http://www.chartjs.org/) plugins and controllers in order to enrich own features:

  * [DataLabels](https://github.com/chartjs/chartjs-plugin-datalabels) plugin
  * [Labels](https://github.com/emn178/chartjs-plugin-labels) plugin (former PieceLabels). Due to the project is unmaintained, the plugin has been [imported](https://github.com/pepstock-org/Charba/blob/master/src/org/pepstock/charba/client/resources/js/chartjs-plugin-labels.js) in **Charba** project and maintained in [Charba](https://github.com/pepstock-org/Charba/blob/6.4/src/org/pepstock/charba/client/resources/js/chartjs-plugin-labels.js) project
  * [Zoom](https://github.com/chartjs/chartjs-plugin-zoom) plugin
    * [Hammer.JS](https://github.com/hammerjs/hammer.js) javaScript library for detecting touch gestures, as dependency of [Zoom](https://github.com/chartjs/chartjs-plugin-zoom) plugin
  * [Annotation](https://github.com/chartjs/chartjs-plugin-annotation) plugin
  * [Gradient](https://github.com/kurkle/chartjs-plugin-gradient) plugin
  * [Chart.js Geo](https://github.com/sgratzl/chartjs-chart-geo) controller
  * [Chart.js Treemap](https://github.com/kurkle/chartjs-chart-treemap) controller
  * [Chart.js Matrix](https://github.com/kurkle/chartjs-chart-matrix) controller
  * [Chart.js Sankey](https://github.com/kurkle/chartjs-chart-sankey) controller

**Charba** has got embedded [ML.js](https://github.com/mljs/ml) to enable some [regressions](Regressions) models as part of machine learning tools.
    
To enable the minifying of javascript objects, not provided out-of-the-box, **Charba** needs also [Google Closure Compiler](https://developers.google.com/closure/compiler/), invoked only in [Ant build.xml](https://github.com/pepstock-org/Charba/blob/6.4/build.xml).

See here the license matrix.

| Component | Version | License
| :- | :- | :-
| JSInterop Annotations | [2.0.0](https://github.com/google/jsinterop-annotations/releases/tag/2.0.0) | [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)
| GWT Web Toolkit | [2.9.0](http://www.gwtproject.org/release-notes.html#Release_Notes_2_9_0) | [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)
| Google Closure Compiler | v20230502 | [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)
| Chart.JS | [4.3.0](https://github.com/chartjs/Chart.js/releases/tag/v4.3.0) | [MIT](https://raw.githubusercontent.com/chartjs/Chart.js/v4.3.0/LICENSE.md)
| Chart.JS Luxon adapter | [1.3.1](https://github.com/chartjs/chartjs-adapter-luxon/releases/tag/v1.3.1) | [MIT](https://raw.githubusercontent.com/chartjs/chartjs-adapter-luxon/master/LICENSE.md)
| Luxon | [3.3.0](https://github.com/moment/luxon/releases/tag/3.3.0) | [MIT](https://raw.githubusercontent.com/moment/luxon/master/license.md)
| DataLabels | [2.2.0](https://github.com/chartjs/chartjs-plugin-datalabels/releases/tag/v2.2.0) | [MIT](https://raw.githubusercontent.com/chartjs/chartjs-plugin-datalabels/master/LICENSE.md)
| Zoom | [2.0.1](https://github.com/chartjs/chartjs-plugin-zoom/releases/tag/v2.0.1) | [MIT](https://github.com/chartjs/chartjs-plugin-zoom/blob/master/LICENSE.md)
| HammerJS | [2.0.8](https://github.com/hammerjs/hammer.js/releases/tag/v2.0.8) | [MIT](https://github.com/hammerjs/hammer.js/blob/master/LICENSE.md)
| Annotation | [3.0.1](https://github.com/chartjs/chartjs-plugin-annotation/releases/tag/v3.0.1) | [MIT](https://github.com/chartjs/chartjs-plugin-annotation/blob/master/LICENSE.md)
| Gradient | [0.6.1](https://github.com/kurkle/chartjs-plugin-gradient/releases/tag/v0.6.1) | [MIT](https://github.com/kurkle/chartjs-plugin-gradient/blob/master/LICENSE)
| Chart Geo | [4.2.0](https://github.com/sgratzl/chartjs-chart-geo/releases/tag/v4.2.0) | [MIT](https://github.com/sgratzl/chartjs-chart-geo/blob/main/LICENSE)
| Chart Treemap | [2.3.0](https://github.com/kurkle/chartjs-chart-treemap/releases/tag/v2.3.0) | [MIT](https://github.com/kurkle/chartjs-chart-treemap/blob/next/LICENSE)
| Chart Matrix | [2.0.1](https://github.com/kurkle/chartjs-chart-matrix/releases/tag/v2.0.1) | [MIT](https://github.com/kurkle/chartjs-chart-matrix/blob/next/LICENSE)
| Chart Sankey | [0.12.0](https://github.com/kurkle/chartjs-chart-sankey/releases/tag/v0.11.0) | [MIT](https://github.com/kurkle/chartjs-chart-sankey/blob/master/LICENSE)
| ML.js | [6.0.0](https://github.com/mljs/ml/releases/tag/v6.0.0) | [MIT](https://github.com/mljs/ml/blob/master/LICENSE)

## Browser support

All modern and up-to-date browsers are supported, including, but not limited to:

 * Chrome
 * Edge
 * Firefox
 * Safari

As of version 3, [Chart.JS](http://www.chartjs.org/) has dropped **Internet Explorer 11** support, and then **Charba** has dropped as well, as of **version 4**.

For more information about browser support, see the details **[here](https://caniuse.com/es6-class)**, where the filter is which browser can support ES6 classes.

## Components matrix 

The following matrixes are showing the dependencies with version of components which are released in all **Charba** versions.

<img src={useBaseUrl('/img/charba_jar_trend_64.png')} />

### Java

| Charba | Version<br/>date | JDK | JsInterop<br/>Base | JsInterop<br/>Annotations | GWT Web<br/>toolkit**<sup style={{color: 'orange'}}>(1)</sup>** | Google<br/>Closure<br/>Compiler | Google<br/>Closure<br/>Stylesheets**<sup style={{color: 'orange'}}>(2)</sup>**
| :- | - | - | - | - | - | - | - 
| 6.4 | May 31, 2023 | 11 | - | 2.0.0 | 2.9.0 | v20230502 | -
| 6.3 | Apr 2, 2023 | 11 | - | 2.0.0 | 2.9.0 | v20230228 | -
| 6.2 | Mar 3, 2023 | 11 | - | 2.0.0 | 2.9.0 | v20230206 | -
| 6.1 | Feb 6, 2023 | 11 | - | 2.0.0 | 2.9.0 | v20230103 | -
| 6.0 | Dec 27, 2022 | 11 | - | 2.0.0 | 2.9.0 | v20221102 | -
| 5.8 | Dec 1, 2022 | 11 | - | 2.0.0 | 2.9.0 | v20221102 | -
| 5.7 | Oct 24, 2022 | 11 | - | 2.0.0 | 2.9.0 | v20221004 | -
| 5.6 | Sep 20, 2022 | 11 | - | 2.0.0 | 2.9.0 | v20220905 | -
| 5.5 | Aug 8, 2022 | 11 | - | 2.0.0 | 2.9.0 | v20220719 | -
| 5.4 | Jul 12, 2022 | 11 | - | 2.0.0 | 2.9.0 | v20220601 | 1.5.0
| 5.3 | May 12, 2022 | 11 | - | 2.0.0 | 2.9.0 | v20220301 | 1.5.0
| 5.2 | Apr 4, 2022 | 11 | - | 2.0.0 | 2.9.0 | v20220301 | 1.5.0
| 5.1 | Feb 22, 2022 | 11 | - | 2.0.0 | 2.9.0 | v20220202 | 1.5.0
| 5.0 | Dec 4, 2021 | 11 | - | 2.0.0 | 2.9.0 | v20211006 | 1.5.0
| 4.2 | Oct 7, 2021 | 8 | - | 2.0.0 | 2.9.0 | v20210808 | 1.5.0
| 4.1 | Jul 29, 2021 | 8 | - | 2.0.0 | 2.9.0 | v20210601 | -
| 4.0 | Jun 3, 2021 | 8 | - | 2.0.0 | 2.9.0 | v20210505 | -
| 3.3 | Oct 21, 2020 | 8 | 1.0.0 | 2.0.0 | 2.8.2 | v20201006 | -
| 3.2 | May 22, 2020 | 8 | 1.0.0 | 2.0.0 | 2.8.2 | v20200504 | -
| 3.1 | Mar 21, 2020 | 8 | 1.0.0 | 2.0.0 | 2.8.2 | v20200224 | -
| 3.0 | Feb 21, 2020 | 8 | 1.0.0 | 2.0.0 | 2.8.2 | v20200204 | -
| 2.8 | Jan 16, 2020 | 8 | - | 2.0.0 | 2.8.2 | v20200101 | -
| 2.7 | Dec 16, 2019 | 8 | - | 1.0.2 | 2.8.2 | v20191111 | -
| 2.6 | Nov 3, 2019 | 8 | - | 1.0.2 | 2.8.2 | v20190929 | -
| 2.5 | May 20, 2019 | 8 | - | 1.0.2 | 2.8.2 | v20190415 | - 
| 2.4 | Apr 15, 2019 | 8 | - | 1.0.2 | 2.8.2 | v20190325 | - 
| 2.3 | Mar 27, 2019 | 8 | - | 1.0.2 | 2.8.2 | v20190301 | -
| 2.2 | Mar 26, 2019 | 8 | - | 1.0.2 | 2.8.2 | v20190301 | - 
| 2.1 | Feb 28, 2019 | 8 | - | 1.0.2 | 2.8.2 | -  | -
| 2.0 | Jan 25, 2019 | 8 | - | 1.0.2 | 2.8.2 | -  | -
| 1.7 | Dec 4, 2018 | 8 | - | - | 2.8.2 | -  | -
| 1.6 | Oct 30, 2018 | 8 | - | - | 2.8.2 | -  | -
| 1.5 | Aug 28, 2018 | 8 | - | - | 2.8.2 | -  | -
| 1.4 | May 17, 2018 | 8 | - | - | 2.8.2 | -  | -
| 1.3 | Apr 9, 2018 | 8 | - | - | 2.8.2 | -  | -
| 1.2 | Feb 6, 2018 | 8 | - | - | 2.8.2 | -  | -
| 1.1 | Jan 31, 2018 | 8 | - | - | 2.8.2 | -  | -
| 1.0 | Jan 29, 2018 | 8 | - | - | 2.8.2 | - | - 

**<sup style={{color: 'orange'}}>(1)</sup>** even if **Charba** maintains the dependency with [GWT Web toolkit](http://www.gwtproject.org/) version 2.8.2, it has been successfully tested and works with [GWT version 2.9.0](http://www.gwtproject.org/release-notes.html#Release_Notes_2_9_0). As of **Charba version 4.0**, there is the dependency with GWT version 2.9.0 but it is continuing working with GWT 2.8.2. As of **Charba version 5.5** it has been successfully tested and works with [GWT version 2.10.0](http://www.gwtproject.org/release-notes.html#Release_Notes_2_10_0)

**<sup style={{color: 'orange'}}>(2)</sup>** as of **Charba version 5.5** Google Closure Stylesheets dependency has been removed and CSS minifying is done internally.

### CHART.JS core

| Charba | Chart.JS | Chart.JS<br/>Luxon<br/>adapter | Luxon | Chart.JS<br/>Moment<br/>adapter**<sup style={{color: 'orange'}}>(1)</sup>** | Moment**<sup style={{color: 'orange'}}>(1)</sup>** | Chart.JS<br/>Datefns<br/>adapter**<sup style={{color: 'orange'}}>(1)</sup>** | Datefns**<sup style={{color: 'orange'}}>(1)</sup>** |
| :- | :- | - | :- | - | :- | - | :-
| 6.4 | 4.3.0 | 1.3.1 | 3.3.0 | - | - | - | -
| 6.3 | 4.2.1 | 1.3.1 | 3.3.0 | - | - | - | -
| 6.2 | 4.2.1 | 1.3.1 | 3.2.1 | - | - | - | -
| 6.1 | 4.2.0 | 1.3.1 | 3.2.1 | - | - | - | -
| 6.0 | 4.1.1 | 1.3.0 | 3.1.1 | - | - | - | -
| 5.8 | 3.9.1 | 1.3.0 | 3.1.1 | - | - | - | -
| 5.7 | 3.9.1 | 1.2.0 | 3.0.4 | - | - | - | -
| 5.6 | 3.9.1 | 1.2.0 | 3.0.3 | - | - | - | -
| 5.5 | 3.9.1 | 1.2.0 | 3.0.1 | - | - | - | -
| 5.4 | 3.8.0 | 1.1.0 | 3.0.1 | - | - | - | -
| 5.3 | 3.7.1 | 1.1.0 | 2.4.0 | - | - | - | -
| 5.2 | 3.7.1 | 1.1.0 | 2.3.1 | - | - | - | -
| 5.1 | 3.7.1 | 1.1.0 | 2.3.0 | - | - | - | -
| 5.0 | 3.6.1 | 1.1.0 | 2.0.2 | - | - | - | -
| 4.2 | 3.5.1 | 1.1.0 | 2.0.2 | - | - | - | -
| 4.1 | 3.5.0 | 1.0.0 | 2.0.1 | - | - | - | -
| 4.0 | 3.3.2 | 1.0.0 | 1.27.0 | - | - | - | -
| 3.3 | 2.9.4 | 0.2.2 | 1.25.0 | 0.1.2 | 2.28.0 | 1.0.0 | 2.9.0
| 3.2 | 2.9.3 | 0.2.1 | 1.24.1 | 0.1.1 | 2.25.3 | 1.0.0 | 2.9.0
| 3.1 | 2.9.3 | 0.2.0 | 1.22.0 | 0.1.1 | 2.24.0 | 1.0.0 | 2.9.0
| 3.0 | 2.9.3 | 0.2.0 | 1.22.0 | 0.1.1 | 2.24.0 | 1.0.0 | 2.9.0
| 2.8 | 2.9.3 | - | - | - | - | - | - 
| 2.7 | 2.9.3 | - | - | - | - | - | -
| 2.6 | 2.9.2 | - | - | - | - | - | -
| 2.5 | 2.8.0 | - | - | - | - | - | -
| 2.4 | 2.8.0 | - | - | - | - | - | -
| 2.3 | 2.8.0 | - | - | - | - | - | -
| 2.2 | 2.8.0 | - | - | - | - | - | -
| 2.1 | 2.7.3 | - | - | - | - | - | -
| 2.0 | 2.7.3 | - | - | - | - | - | -
| 1.7 | 2.7.3 | - | - | - | - | - | -
| 1.6 | 2.7.2 | - | - | - | - | - | -
| 1.5 | 2.7.2 | - | - | - | - | - | -
| 1.4 | 2.7.1 | - | - | - | - | - | -
| 1.3 | 2.7.1 | - | - | - | - | - | -
| 1.2 | 2.7.1 | - | - | - | - | - | -
| 1.1 | 2.7.1 | - | - | - | - | - | -
| 1.0 | 2.7.1 | - | - | - | - | - | -

**<sup style={{color: 'orange'}}>(1)</sup>** As of **version 4.0**, **Charba** (and [Chart.JS](http://www.chartjs.org/) version 3.x) introduces the internationalization and only [Luxon](https://moment.github.io/luxon/) is leveraging on [INTL](./intl/Locale) platform. The other dependencies has been removed.

### CHART.JS extensions

| Charba | Datalabels | Labels**<sup style={{color: 'orange'}}>(1)</sup>** | Zoom  | HammerJS | Annotation | Gradient | Geo | Treemap | Matrix | Sankey
| :- | :- | :- | :- | :- | :- | :- | :- | :- | :-
| 6.4 | 2.2.0 | 1.1.0 | 2.0.1 | 2.0.8 | 3.0.1 | 0.6.1 | 4.2.0 | 2.3.0 | 2.0.1 | 0.12.0
| 6.3 | 2.2.0 | 1.1.0 | 2.0.1 | 2.0.8 | 2.2.1 | 0.6.1 | 4.1.2 | 2.3.0 | 2.0.1 | 0.12.0
| 6.2 | 2.2.0 | 1.1.0 | 2.0.0 | 2.0.8 | 2.1.2 | 0.6.1 | 4.1.2 | 2.3.0 | 2.0.1 | 0.12.0
| 6.1 | 2.2.0 | 1.1.0 | 2.0.0 | 2.0.8 | 2.1.2 | 0.6.1 | 4.1.2 | 2.3.0 | 2.0.1 | 0.12.0
| 6.0 | 2.2.0 | 1.1.0 | 2.0.0 | 2.0.8 | 2.1.0 | 0.6.1 | 4.1.0 | 2.2.0 | 1.3.0 | 0.12.0
| 5.8 | 2.1.0 | 1.1.0 | 2.0.0 | 2.0.8 | 2.1.0 | 0.5.1 | 3.10.0 | 2.1.3 | 1.3.0 | 0.12.0
| 5.7 | 2.1.0 | 1.1.0 | 1.2.1 | 2.0.8 | 2.0.1 | 0.5.1 | 3.10.0 | 2.0.2 | 1.2.0 | 0.11.0
| 5.6 | 2.1.0 | 1.1.0 | 1.2.1 | 2.0.8 | 2.0.1 | 0.5.1 | 3.9.0 | 2.0.2 | 1.1.1 | 0.9.1
| 5.5 | 2.1.0 | 1.1.0 | 1.2.1 | 2.0.8 | 2.0.0 | 0.5.0 | 3.8.1 | 2.0.2 | 1.1.1 | 0.9.0
| 5.4 | 2.0.0 | 1.1.0 | 1.2.1 | 2.0.8 | 1.4.0 | 0.5.0 | 3.8.0 | 2.0.2 | 1.1.1 | 0.9.0
| 5.3 | 2.0.0 | 1.1.0 | 1.2.1 | 2.0.8 | 1.4.0 | 0.5.0 | 3.7.2 | 2.0.2 | 1.1.1 | 0.9.0
| 5.2 | 2.0.0 | 1.1.0 | 1.2.1 | 2.0.8 | 1.4.0 | 0.4.0 | 3.7.1 | 2.0.2 | 1.1.1 | 0.9.0
| 5.1 | 2.0.0 | 1.1.0 | 1.2.0 | 2.0.8 | 1.3.1 | - | 3.7.1 | 2.0.2 | 1.1.1 | 0.8.1
| 5.0 | 2.0.0 | 1.1.0 | 1.2.0 | 2.0.8 | 1.1.0 | - | 3.6.0 | 2.0.0 | 1.1.0 | 0.8.0
| 4.2 | 2.0.0 | 1.1.0 | 1.1.1 | 2.0.8 | 1.0.2 | - | 3.5.1 | 1.0.2 | 1.1.0 | 0.8.0
| 4.1 | 2.0.0 | 1.1.0 | 1.1.1 | 2.0.8 | 1.0.2 | - | 3.1.0 | - | - | -
| 4.0 | 2.0.0-rc.1 | 1.1.0 | 1.0.1 | 2.0.8 | 1.0.2 | - | - | - | - | -
| 3.3 | 0.7.0 | 1.1.0 | 0.7.5 | 2.0.8 | 5363042 | - | - | - | - | -
| 3.2 | 0.7.0 | 1.1.0 | 0.7.5 | 2.0.8 | 5363042 | - | - | - | - | -
| 3.1 | 0.7.0 | 1.1.0 | 0.7.5 | 2.0.8 | 7037eea | - | - | - | - | -
| 3.0 | 0.7.0 | 1.1.0 | 0.7.5 | 2.0.8 | 7037eea | - | - | - | - | -
| 2.8 | 0.7.0 | 1.1.0 | 0.7.5 | 2.0.8 | 7037eea | - | - | - | - | -
| 2.7 | 0.7.0 | 1.1.0 | -  | - | - | - | - | - | - | -
| 2.6 | 0.7.0 | 1.1.0 | -  | - | - | - | - | - | - | -
| 2.5 | 0.6.0 | 1.1.0 | -  | - | - | - | - | - | - | -
| 2.4 | 0.6.0 | 1.1.0 | -  | - | - | - | - | - | - | -
| 2.3 | 0.6.0 | 1.1.0 | -  | - | - | - | - | - | - | -
| 2.2 | 0.6.0 | 1.1.0 | -  | - | - | - | - | - | - | -
| 2.1 | 0.5.0 | 1.1.0 | -  | - | - | - | - | - | - | -
| 2.0 | - | - | - | - | - | - | - | - | - | -
| 1.7 | - | - | - | - | - | - | - | - | - | -
| 1.6 | - | - | - | - | - | - | - | - | - | -
| 1.5 | - | - | - | - | - | - | - | - | - | -
| 1.4 | - | - | - | - | - | - | - | - | - | -
| 1.3 | - | - | - | - | - | - | - | - | - | -
| 1.2 | - | - | - | - | - | - | - | - | - | -
| 1.1 | - | - | - | - | - | - | - | - | - | -
| 1.0 | - | - | - | - | - | - | - | - | - | -

**<sup style={{color: 'orange'}}>(1)</sup>** The [Labels plugin](./extensions/Labels) has been heavily changed in order to be compliant with [Chart.JS](http://www.chartjs.org/) version 3.x) in the **Charba** [project](https://github.com/pepstock-org/Charba/blob/master/src/org/pepstock/charba/client/resources/js/chartjs-plugin-labels.js) because the [original project](https://github.com/emn178/chartjs-plugin-labels) is unmaintained. 

### Additional extensions

| Charba | ML.js
| :- | :-
| 6.4 | 6.0.0
| 6.3 | 6.0.0
| 6.2 | 6.0.0
| 6.1 | 6.0.0
| 6.0 | 6.0.0
| 5.8 | 6.0.0
| 5.7 | 6.0.0
| 5.6 | 6.0.0
| 5.5 | 6.0.0
| 5.4 | 6.0.0
| 5.3 | 6.0.0
