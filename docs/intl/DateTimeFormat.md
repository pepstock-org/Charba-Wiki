---
id: DateTimeFormat
title: Date time format
hide_title: true
sidebar_label: Date time formatting
---
## Date time formatting

**Charba** provide a [date time format](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/DateTimeFormat.html) implementation which enables language-sensitive date time formatting, leveraging on [INTL](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) platform.

```java
// creates a date time format
DateTimeFormat dateTimeFormat = new DateTimeFormat();
// formats the date, shows the current date, 
// for instance "4/1/2021", M/d/YYYY
Console.log(numberFormat.format(new Date()));
// creates a date time format 
// with a locale
DateTimeFormat dateTimeFormat = new DateTimeFormat(CLocale.GERMANY);
// formats the date, shows the current date 
// for instance "1.4.2021", d.M.YYYY
Console.log(numberFormat.format(new Date()));
```

## Creating

A [date time format](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/DateTimeFormat.html) can be created and consumed as following: 

```java
// creates locale
CLocale german = CLocaleBuilder.create(Language.GERMAN).build();
// creates a date time format
// with default locale and
// default options
DateTimeFormat dateTimeFormat = new DateTimeFormat();
// creates a date time format
// with a locale and
// default options
DateTimeFormat dfGerman = new DateTimeFormat(german);
// creates date time format options
DateTimeFormatOptions options = new DateTimeFormatOptions();
// creates a date time format
// with a locale and
// specific options
DateTimeFormat dfGermanOptions = new DateTimeFormat(german, options);
```

## Options

A [date time format](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/DateTimeFormat.html) can be configured, when created, by the set of options which can change the date time formatting, together with the locale.

```java
// creates locale
CLocale german = CLocaleBuilder.create(Language.GERMAN).build();
// creates date format options
DateTimeFormatOptions options = new DateTimeFormatOptions();
// sets the date time styles
options.setDateStyle(DateTimeStyle.LONG);
options.setTimeStyle(DateTimeStyle.MEDIUM);
// creates a date time format
// with a locale and
// specific options
DateTimeFormat dfGermanOptions = new DateTimeFormat(german, options);
// formats the date, shows the current date 
// for instance "1. April 2021 um 12:12:04"
Console.log(dfGermanOptions.format(new Date()));
```

The complete options are described by following table:

| Name | Type | Default | Description
| :- | :- | :- | :-
| calendar | [Calendar](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/Calendar.html) | `null` | The calendar to use for formatting.
| dateStyle | [DateTimeStyle](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/DateTimeStyle.html) | `null` | The date style to use when formatting.
| day | [NumberItemStyle](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/NumberItemStyle.html) | NumberItemStyle.NUMERIC | The representation of the day.
| dayPeriod | [StringItemStyle](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/StringItemStyle.html) | `null` | The way day periods should be expressed.
| era | [StringItemStyle](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/StringItemStyle.html) | `null` | The representation of the era.
| formatMatcher | [FormatMatcher](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/FormatMatcher.html) | `null` | The format matching algorithm to use. 
| hour | [NumberItemStyle](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/NumberItemStyle.html) | `null` | The representation of the hour. 
| hour12 | boolean | `false` | Whether to use 12-hour time (as opposed to 24-hour time).<br/> This option overrides the `hourCycle` option in case both are present.
| hourCycle | [HourCycle](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/HourCycle.html) | `null` | The hour cycle to use.
| localeMatcher | [LocaleMatcher](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/LocaleMatcher.html) | LocaleMatcher.BEST_FIT | The locale matching algorithm to use.
| minute | [NumberItemStyle](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/NumberItemStyle.html) | `null` | The representation of the minute. 
| month | [MixedItemStyle](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/MixedItemStyle.html) | MixedItemStyle.NUMERIC | The representation of the month.
| numberingSystem | [NumberingSystem](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/NumberingSystem.html) | `null` | The numbering system to use for date time formatting. 
| second | [NumberItemStyle](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/NumberItemStyle.html) | `null` | The representation of the second. 
| timeStyle | [DateTimeStyle](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/DateTimeStyle.html) | `null` | The time style to use when formatting.
| timeZone | [TimeZone](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/TimeZone.html) | `null` | The time zone to use.
| timeZoneName | [TimeZoneName](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/TimeZoneName.html) | `null` | The representation of the time zone name. 
| weekDay | [StringItemStyle](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/StringItemStyle.html) | `null` | The representation of the weekday.
| year | [NumberItemStyle](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/NumberItemStyle.html) | NumberItemStyle.NUMERIC | The representation of the year.

See [INTL date time format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters) documentation for the details of each option.

## Using

The [date time format](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/DateTimeFormat.html) provides a set of methods to enable the date time formatting.

The most important one is **format**, to format a [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) as following:

```java
// creates a date time format 
// with a locale
DateTimeFormat dateTimeFormat = new DateTimeFormat(CLocale.GERMANY);
// formats the date, shows the current date 
// for instance "1.4.2021", d.M.YYYY
Console.log(numberFormat.format(new Date()));
```

### Resolving options

**resolveOptions** method provides a object with properties reflecting the locale and date time formatting options computed during initialization.

```java
// creates a date time format 
// with a locale
DateTimeFormat dateTimeFormat = new DateTimeFormat(CLocale.US);
// gets the resolved options
IsDefaultDateTimeFormatOptions resolvedOptions = dateTimeFormat.resolveOptions();
// gets date time styles resolved options
resolvedOptions.getDateStyle();
resolvedOptions.getTimeStyle();
```

### Formatting to parts

**formatToParts** method is useful for custom formatting of date time strings. It returns a list of [format part objects](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/FormatPart.html) containing the locale-specific tokens from which it possible to build custom strings while preserving the locale-specific parts.

```java
// creates a date time format 
// with a locale
DateTimeFormat dateTimeFormat = new DateTimeFormat(CLocale.US);
// gets the format parts
List<FormatPart> parts = dateTimeFormat.formatToParts(new Date());
// scans the list , logging them
parts.forEach((element) -> Console.log(element.getType().name()+" : "+element.getValue()));
// result to console:
// MONTH : 4
// LITERAL : /
// DAY : 1
// LITERAL : /
// YEAR : 2021
```
