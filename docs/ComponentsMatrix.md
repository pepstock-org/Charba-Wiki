---
id: ComponentsMatrix
title: Components Matrix
hide_title: true
sidebar_label: ComponentsMatrix
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Components matrix 

The following matrixes are showing the dependencies with version of components which are released in all **Charba** versions.

<img src={useBaseUrl('/img/charba_jar_trend_40.png')} />

### JAVA components

| Charba | JDK | JsInterop Base | JsInterop Annotations | GWT Web toolkit | Google Closure |
| ------ | --- | -------------- | --------------------- | ----------------| -------------- |
| 1.0    | 8   | -              | -                     | 2.8.2           | -              |
| 1.1    | 8   | -              | -                     | 2.8.2           | -              |
| 1.2    | 8   | -              | -                     | 2.8.2           | -              |
| 1.3    | 8   | -              | -                     | 2.8.2           | -              |
| 1.4    | 8   | -              | -                     | 2.8.2           | -              |
| 1.5    | 8   | -              | -                     | 2.8.2           | -              |
| 1.6    | 8   | -              | -                     | 2.8.2           | -              |
| 1.7    | 8   | -              | -                     | 2.8.2           | -              |
| 2.0    | 8   | -              | 1.0.2                 | 2.8.2           | -              |
| 2.1    | 8   | -              | 1.0.2                 | 2.8.2           | -              |
| 2.2    | 8   | -              | 1.0.2                 | 2.8.2           | v20190301      |
| 2.3    | 8   | -              | 1.0.2                 | 2.8.2           | v20190301      |
| 2.4    | 8   | -              | 1.0.2                 | 2.8.2           | v20190325      |
| 2.5    | 8   | -              | 1.0.2                 | 2.8.2           | v20190415      |
| 2.6    | 8   | -              | 1.0.2                 | 2.8.2           | v20190929      |
| 2.7    | 8   | -              | 1.0.2                 | 2.8.2           | v20191111      |
| 2.8    | 8   | -              | 2.0.0                 | 2.8.2           | v20200101      |
| 3.0    | 8   | 1.0.0          | 2.0.0                 | 2.8.2           | v20200204      |
| 3.1    | 8   | 1.0.0          | 2.0.0                 | 2.8.2           | v20200224      |
| 3.2    | 8   | 1.0.0          | 2.0.0                 | 2.8.2 <sup>1</sup> | v20200504      |
| 3.3    | 8   | 1.0.0          | 2.0.0                 | 2.8.2 <sup>1</sup> | v20201006      |
| 4.0    | 8 <sup>2</sup>  | 1.0.0          | 2.0.0                 | 2.8.2 <sup>1</sup> | ?????????      |

**<sup>1</sup>** even if **Charba** maintains the dependency with [GWT Web toolkit](http://www.gwtproject.org/) version 2.8.2, it has been successfully tested and works with [GWT version 2.9.0](http://www.gwtproject.org/release-notes.html#Release_Notes_2_9_0).

**<sup>2</sup>** even if **Charba** is developed and built on JDK 8, since **version 4.0** it is compiled by JDK 11 and checked by [Sonar.io](https://sonarcloud.io/dashboard?id=pepstock-org_Charba) on this version.


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
| 4.0    | 3.0.0    | - <sup>1</sup>                      | - <sup>1</sup>     | 0.2.2                  | 1.25.0 | - <sup>1</sup>                       | - <sup>1</sup>      |

**<sup>1</sup>** Since **version 4.0**, **Charba** (and [Chart.JS](http://www.chartjs.org/) 3.0.0) introduces the internationalization and only [Luxon](https://moment.github.io/luxon/) is leveraging on standard [INTL](/) (FIXME). The other dependencies has been removed.

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
| 4.0    | 0.7.0      | 1.1.0  | 0.7.5 | 2.0.8    | 5363042    |
