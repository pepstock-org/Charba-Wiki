---
id: Requirements
title: Requirements
hide_title: true
sidebar_label: Requirements
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Requirements

**Charba** is built on JDK 8.

**Charba** is leveraging on [JSINTEROP](http://www.gwtproject.org/doc/latest/DevGuideCodingBasicsJsInterop.html) method to integrate java script objects and then it needs of [jsinterop-annotations](https://github.com/gwtproject/gwt/tree/master/user/src/jsinterop/annotations), version 2.0.0, and [jsinterop-base](https://github.com/google/jsinterop-base), version 1.0.0, to be built.

**Charba** has got also a dependency with [GWT Web toolkit](http://www.gwtproject.org/) version 2.8.2, when the GWT distribution (which is containing chart widgets and code splitting capabilities) is used. Since versions 3.1, **Charba** can work (and it has also been successfully tested) on [GWT 2.9.0](http://www.gwtproject.org/release-notes.html#Release_Notes_2_9_0).

**Charba** has got embedded [Chart.JS](http://www.chartjs.org/), currently the minified distribution, the [version 3.0.0](https://github.com/chartjs/Chart.js/releases/tag/v3.0.0).

Even if [Chart.JS](http://www.chartjs.org/) leaves the users to select a date adapter, **Charba** embeds only [Luxon](https://moment.github.io/luxon/) as specific date time library, needed to use time or timeseries axes, because **Charba** (and [Chart.JS](http://www.chartjs.org/)) introduces the internationalization and only [Luxon](https://moment.github.io/luxon/) is leveraging on standard [INTL](/).(FIXME)

**Charba** has got embedded [Luxon](https://moment.github.io/luxon/), version [1.25.0](https://github.com/moment/luxon/releases/tag/1.25.0) and the specific [adapter](https://github.com/chartjs/chartjs-adapter-luxon/releases/tag/v0.2.2), at version 0.2.2.

Furthermore **Charba** has embedded a set of [Chart.JS](http://www.chartjs.org/) plugins in order to enrich own features:

  * [DataLabels](https://github.com/chartjs/chartjs-plugin-datalabels) plugin, currently the [version 0.7.0](https://github.com/chartjs/chartjs-plugin-datalabels/releases/tag/v0.7.0).
  * [Labels](https://github.com/emn178/chartjs-plugin-labels) plugin (former PieceLabels), currently the [version 1.1.0](https://github.com/emn178/chartjs-plugin-labels/releases/tag/v1.1.0).
  * [Zoom](https://github.com/chartjs/chartjs-plugin-zoom) plugin, currently the [version 0.7.5](https://github.com/chartjs/chartjs-plugin-zoom/releases/tag/v0.7.5).
     * [Hammer.JS](https://github.com/hammerjs/hammer.js) javaScript library for detecting touch gestures, currently the [version 2.0.8](https://github.com/hammerjs/hammer.js/releases/tag/v2.0.8), as dependency of [Zoom](https://github.com/chartjs/chartjs-plugin-zoom) plugin.
  * [Annotation](https://github.com/chartjs/chartjs-plugin-annotation) plugin, currently at `master` commit id [53630421b5d2e5d6790de3d32c1fb7d3cdc590e2](https://github.com/chartjs/chartjs-plugin-annotation).
      * This is plugin is not released at any versions anymore and for this reason it has embedded at last `master` commit id.   (FIXME)

To enable the minifying of javascript objects, not provided out-of-the-box, **Charba** needs also [Google Closure Compiler](https://developers.google.com/closure/compiler/), version v20201006, only in [Ant build.xml](https://github.com/pepstock-org/Charba/blob/3.3/build.xml).

See here the license matrix.

| Component | License
| --------- | -------
| JSInterop Base | [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)
| JSInterop Annotations | [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)
| GWT Web Toolkit | [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)
| Google Closure Compiler | [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)
| Chart.JS | [MIT](https://raw.githubusercontent.com/chartjs/Chart.js/v3.0.0/LICENSE.md)
| Chart.JS Luxon adapter | [MIT](https://raw.githubusercontent.com/chartjs/chartjs-adapter-luxon/master/LICENSE.md)
| Luxon | [MIT](https://raw.githubusercontent.com/moment/luxon/master/license.md)
| DataLabels | [MIT](https://raw.githubusercontent.com/chartjs/chartjs-plugin-datalabels/v0.7.0/LICENSE.md)
| Labels | [MIT](https://raw.githubusercontent.com/emn178/chartjs-plugin-labels/v1.1.0/LICENSE.txt)
| Zoom | [MIT](https://github.com/chartjs/chartjs-plugin-zoom/blob/master/LICENSE.md)
| HammerJS | [MIT](https://github.com/hammerjs/hammer.js/blob/master/LICENSE.md)
| Annotation | [MIT](https://github.com/chartjs/chartjs-plugin-annotation/blob/master/LICENSE.md)


See [here](ComponentsMatrix) the complete matrix of all **Charba** components and their version.
