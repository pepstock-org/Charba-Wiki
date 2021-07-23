---
id: DateAdapters
title: Date adapters
hide_title: true
sidebar_label: Date adapters
---
## Date adapters

The [Chart.JS](http://www.chartjs.org/) time and time series scale requires both a date library and corresponding adapter to be present.

[Chart.JS](http://www.chartjs.org/) is providing the integration with 3 date libraries, but **Charba** is implementing the integration with **[Luxon](https://moment.github.io/luxon/)** date library.
The adoption of [Luxon](https://moment.github.io/luxon/) is justified because is completely based on [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) API.

See **Charba** [enabling documentation](./getting-started/GettingStarted#embedded-resources) to have more details how to embed or not [Luxon](https://moment.github.io/luxon/) date library.

## Luxon

[Luxon](https://moment.github.io/luxon/) is a powerful, modern, and friendly wrapper for java-script dates and times.

[Luxon](https://moment.github.io/luxon/) uses the native [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) API to provide easy-to-use internationalization.

These are the defaults that the library implements that you can change in the cartesian time axis.

| Name | Default | Example
| :- | :- | :-
| millisecond | h:mm:ss.SSS a | 7:26:39.413 PM
| second | h:mm:ss a | 7:26:39 PM
| minute | h:mm a | 7:26 PM
| hour | ha | 7PM
| day | MMM d | Feb 19
| week | W yyyy | 8 2020
| month | MMM yyyy | Feb 2020
| quarter | 'Q'q - yyyy | Q1 - 2020
| year | yyyy | 2020

To see all available formats, have a look [here](https://moment.github.io/luxon/docs/manual/formatting.html) in the **Luxon** documentation.

[Luxon](https://moment.github.io/luxon/) can be configured in order to update some behavior during parsing, formatting and date management.

The [Luxon options](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/adapters/DateAdapterOptions.html) can be used as following:

```java
// creates a time series axis 
CartesianTimeSeriesAxis axis = new CartesianTimeSeriesAxis(chart);
// sets and gets the locale to date adapter options
axis.getAdapters().getDate().setLocale(CLocale.US);

CLocale locale = axis.getAdapters().getDate().getLocale();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| locale | [CLocale](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/intl/CLocale.html) | `null` | Using locale specifying the language to use generating or interpreting strings.
| zone | [TimeZone](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/intl/enums/TimeZone.html) | `null` | Implementation recognizes the time zone names of the IANA time zone database.
| outputCalendar | [Calendar](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/intl/enums/Calendar.html) | `null` | The calendar type to use.
| numberingSystem | [NumberingSystem](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/intl/enums/NumberingSystem.html) | `null` | The numbering system to use.

For more details, have a look how to configure [time axes adapters](./axes/CartesianTimeAxes#adapters) and the [INTL locale](./intl/Locale) documentation.

## Using the date adapter

**Charba** enables the possibility to get a [date adapter](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/adapters/DateAdapter.html) instance from [Chart.JS](http://www.chartjs.org/) which can provides some capabilities, like formatting, parsing and date operations.

Here is an example how to use a [date adapter](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/adapters/DateAdapter.html) to format ticks by callback:

```java
// creates a time axis 
CartesianTimeAxis axis = new CartesianTimeAxis(chart);
// sets tick callback
axis.getTicks().setCallback(new TimeTickCallback(){

	private DateAdapter adapter = new DateAdapter();

	@Override
	public String onCallback(Axis axis, Date value, String label, int index, List<TimeTickItem> values){
		return adapter.format(value, "yyyy");
	}
});
```
