---
id: NumberFormat
title: Number format
hide_title: true
sidebar_label: Number formatting
---
## Number formatting

**Charba** provide a [number format](https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/intl/NumberFormat.html) implementation which enables language-sensitive number formatting, leveraging on [INTL](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) platform.

```java
// creates a number format
NumberFormat numberFormat = new NumberFormat();
// formats the number, shows "13.576.453,87"
Console.log(numberFormat.format(13576453.865));
```

## Creating

A [number format](https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/intl/NumberFormat.html) can be created and consumed as following: 

```java
// creates locale
CLocale german = CLocaleBuilder.create(Language.GERMAN).build();
// creates a number format
// with default locale and
// default options
NumberFormat numberFormat = new NumberFormat();
// creates a number format
// with a locale and
// default options
NumberFormat nfGerman = new NumberFormat(german);
// creates number format options
NumberFormatOptions options = new NumberFormatOptions();
// creates a number format
// with a locale and
// specific options
NumberFormat nfGermanOptions = new NumberFormat(german, options);
```

## Options

A [number format](https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/intl/NumberFormat.html) can be configured, when created, by the set of options which can change the number formatting, together with the locale.

```java
// creates locale
CLocale german = CLocaleBuilder.create(Language.GERMAN).build();
// creates number format options
NumberFormatOptions options = new NumberFormatOptions();
// sets the currency options
options.setStyle(Style.CURRENCY);
options.setCurrency(Currency.EURO);
options.setCurrencyDisplay(CurrencyDisplay.SYMBOL);
// creates a number format
// with a locale and
// specific options
NumberFormat nfGermanOptions = new NumberFormat(german, options);
// formats the number, shows "13.576.453,87 €"
Console.log(nfGermanOptions.format(13576453.865)); 
```

The complete options are described by following table:

| Name | Type | Default | Description
| :- | :- | :- | :-
| compactDisplay | [CompactDisplay](https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/intl/enums/CompactDisplay.html) | CompactDisplay.SHORT | Set the compact display when `notation` is set to Notation.COMPACT.
| currency | [Currency](https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/intl/enums/Currency.html) | `null` | The currency to use in currency formatting. 
| currencyDisplay | [CurrencyDisplay](https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/intl/enums/CurrencyDisplay.html) | CurrencyDisplay.SYMBOL | How to display the currency in currency formatting.
| currencySign | [CurrencySign](https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/intl/enums/CurrencySign.html) | CurrencySign.STANDARD | In many locales, accounting format means to wrap the number with parentheses instead of appending a minus sign. 
| localeMatcher | [LocaleMatcher](https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/intl/enums/LocaleMatcher.html) | LocaleMatcher.BEST_FIT | The locale matching algorithm to use.
| maximumFractionDigits | int | The default for plain number formatting is the larger of `minimumFractionDigits` and `3`.<br/>The default for currency formatting is the larger of `minimumFractionDigits` and the number of minor unit digits provided by [Currency](https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/intl/enums/Currency.html).<br/>The default for percent formatting is the larger of `minimumFractionDigits` and `0`.  | The maximum number of fraction digits to use.<br/>Possible values are from 0 to 20.
| maximumSignificantDigits | int | 21 | The maximum number of significant digits to use.<br/>Possible values are from 1 to 21.
| minimumFractionDigits | int | The default for plain number and percent formatting is `0`.<br/>The default for currency formatting is the number of minor unit digits provided by [Currency](https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/intl/enums/Currency.html). | The minimum number of fraction digits to use.<br/>Possible values are from 0 to 20.
| minimumIntegerDigits | int | 1 | The minimum number of integer digits to use.<br/>Possible values are from 1 to 21.
| minimumSignificantDigits | int | 1 | The minimum number of significant digits to use.<br/>Possible values are from 1 to 21.
| notation | [Notation](https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/intl/enums/Notation.html) | Notation.STANDARD | The formatting that should be displayed for the number.
| numberingSystem | [NumberingSystem](https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/intl/enums/NumberingSystem.html) | `null` | The numbering system to use for number formatting. 
| signDisplay | [SignDisplay](https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/intl/enums/SignDisplay.html) | SignDisplay.AUTO | When to display the sign for the number.
| style | [Style](https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/intl/enums/Style.html) | Style.DECIMAL | The formatting style to use.
| unitOfMeasureDisplay | [MeasureUnitDisplay](https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/intl/enums/MeasureUnitDisplay.html) | MeasureUnitDisplay.SHORT | The unit formatting style to use in unit formatting.
| unitsOfMeasure | [MeasureUnit](https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/intl/enums/MeasureUnit[].html)[] | [] | The unit to use in unit formatting.
| useGrouping | boolean | `true` | Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.

See [INTL number format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters) documentation for the details of each option.

## Using

The [number format](https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/intl/NumberFormat.html) provides a set of methods to enable the number formatting.

The most important one is **format**, to format a double as following:

```java
// creates a number format
NumberFormat numberFormat = new NumberFormat();
// formats the number, shows "13.576.453,87"
Console.log(numberFormat.format(13576453.865D));
```

### Resolving options

**resolveOptions** method provides a object with properties reflecting the locale and number formatting options computed during initialization.

```java
// creates a number format
NumberFormat numberFormat = new NumberFormat(CLocale.US);
// gets the resolved options
IsDefaultNumberFormatOptions resolvedOptions = numberFormat.resolveOptions();
// gets currency resolved options
resolvedOptions.getStyle();
resolvedOptions.getCurrency();
resolvedOptions.getCurrencyDisplay();
```

### Formatting to parts

**formatToParts** method is useful for custom formatting of number strings. It returns a list of [format part objects](https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/intl/FormatPart.html) containing the locale-specific tokens from which it possible to build custom strings while preserving the locale-specific parts.

```java
// creates a number format
NumberFormat numberFormat = new NumberFormat(CLocale.US);
// gets the format parts
List<FormatPart> parts = numberFormat.formatToParts(13576453.865);
// scans the list , logging them
parts.forEach((element) -> Console.log(element.getType().name()+" : "+element.getValue()));
// result to console:
// INTEGER : 13
// GROUP : ,
// INTEGER : 576
// GROUP : ,
// INTEGER : 453
// DECIMAL : .
// FRACTION : 865
```
