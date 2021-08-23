---
id: DateAdapters
title: Date adapters
hide_title: true
sidebar_label: Date adapters
---
## Date adapters
As of version **3** of **Charba**, [Chart.JS](http://www.chartjs.org/) is not longer provided by the bundle artifact where there was a default date time library to use for time series.

The [Chart.JS](http://www.chartjs.org/) time scale requires both a date library and corresponding adapter to be present.

[Chart.JS](http://www.chartjs.org/) is providing the integration with 3 date libraries, that you can choose by the specific resource type:

 1. [Moment.js](https://momentjs.com/) which remains the default for **Charba**, enabled by `EmbeddedResources` or `DeferredResources` classes.
 1. [Luxon](https://moment.github.io/luxon/) which can be enabled by `LuxonEmbeddedResources` or `LuxonDeferredResources` classes. 
 1. [Date-fns](https://date-fns.org/) which can be enabled by `DatefnsEmbeddedResources` or `DatefnsDeferredResources` classes. 

## Moment.js

[Moment.js](https://momentjs.com/) is a lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.

These are the defaults that the library implements that you can change into cartesian time axis.

| Name | Default | Example
| ---- | ------- | -------
| millisecond | h:mm:ss.SSS a | 7:25:34.639 pm
| second | h:mm:ss a | 7:25:34 pm
| minute | h:mm a | 7:25 pm
| hour | hA | 7PM
| day | MMM D | Feb 19
| week | w YYYY | 8 2020
| month | MMM YYYY | Feb 2020
| quarter | [Q]Q - YYYY | Q1 - 2020
| year | YYYY | 2020

To see all available formats, have a look [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) into Moment.js documentation.

## Luxon

[Luxon](https://moment.github.io/luxon/) is a powerful, modern, and friendly wrapper for Javascript dates and times. 

These are the defaults that the library implements that you can change into cartesian time axis.

| Name | Default | Example
| ---- | ------- | -------
| millisecond | h:mm:ss.SSS a | 7:26:39.413 PM
| second | h:mm:ss a | 7:26:39 PM
| minute | h:mm a | 7:26 PM
| hour | ha | 7PM
| day | MMM d | Feb 19
| week | W yyyy | 8 2020
| month | MMM yyyy | Feb 2020
| quarter | 'Q'q - yyyy | Q1 - 2020
| year | yyyy | 2020

To see all available formats, have a look [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) into Luxon documentation.

[Luxon](https://moment.github.io/luxon/) is the only adapter which can be configured in order to update some behavior during parsing, formatting and date management.

The [Luxon options](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/adapters/LuxonOptions.html) has got the following table options:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| zone | String | `null` | If defined, adapter will use that time zone. See [here](https://moment.github.io/luxon/#/zones) for more details
| locale | String | `null` | If defined, adapter will use that locale. See [here](https://moment.github.io/luxon/#/intl) for more details
| setZone | boolean | `false` | If `true`, adapter will apply the zone as fixed-offset one
| outputCalendar | String | `null` | If defined, adapter will use that calendaring systems. See [here](https://moment.github.io/luxon/#/calendars) for more details
| numberingSystem | String | `null` | If defined, adapter will use that numbering systems. See [here](https://moment.github.io/luxon/#/intl) for more details
 
## Datefns

[Date-fns](https://date-fns.org/) provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates.

These are the defaults that the library implements that you can change into cartesian time axis.

| Name | Default | Example
| ---- | ------- | -------
| millisecond | h:mm:ss.SSS aaaa | 7:27:20.682 p.m.
| second | h:mm:ss aaaa | 7:27:20 p.m.
| minute | h:mm aaaa | 7:27 p.m.
| hour | ha | 7PM
| day | MMM d | Feb 19
| week | I yyyy | 8 2020
| month | MMM yyyy | Feb 2020
| quarter | qqq - yyyy | Q1 - 2020
| year | yyyy | 2020

To see all available formats, have a look [here](https://date-fns.org/v2.9.0/docs/format) into Datefns documentation.

## Using the date adapter

**Charba** enables the possibility to get a [date adapter](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/adapters/DateAdapter.html) instance from [Chart.JS](http://www.chartjs.org/) which can provides some capabilities, like formatting, parsing and date operations.

Here is an example how to use a [date adapter](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/adapters/DateAdapter.html) to format ticks by callback:

```java
CartesianTimeAxis axis = new CartesianTimeAxis(chart);
axis.getTicks().setCallback(new TimeTickCallback() {

	private DateAdapter adapter = new DateAdapter();

	@Override
	public String onCallback(Axis axis, Date value, String label, int index, List<TimeTickItem> values) {
		return adapter.format(value, "yyyy");
	}
});
```
