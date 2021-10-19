---
id: Locale
title: Locale
hide_title: true
sidebar_label: Locale
---
## Internationalization

[Internationalization](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) provides language sensitive number formatting, and date and time formatting.

## Locale

**Charba** provide a own [locale](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/intl/CLocale.html) implementation which can be used in the charts or for other several purposes.
 
The [locale](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/intl/CLocale.html) object allows for easier manipulation of Unicode locales. Unicode represents locales with a string, called a _locale identifier_. 

The locale identifier consists of a language identifier and extension tags. Language identifiers are the core of the locale, consisting of language, script, and region subtags. 

Additional information about the locale is stored in the optional extension tags. Extension tags hold information about locale aspects such as calendar type, clock type, and numbering system type.

See [INTL documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) about more details.

## Creating

The locale is a string that is a [Unicode BCP 47 locale identifier](https://www.unicode.org/reports/tr35/tr35.html#BCP_47_Conformance).

A Unicode BCP 47 locale identifier consists of

  1. a language code,
  2. (optionally) a script code,
  3. (optionally) a region (or country) code,
  4. (optionally) one or more variant codes, and
  5. (optionally) one or more extension sequences,

with all present components separated by hyphens.

To create own locale, you can use the [locale builder](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/intl/CLocaleBuilder.html) as following:

```java
// creates a locale with language
CLocale german = CLocaleBuilder.create(Language.GERMAN)
	.build();
// creates a locale with language and region
CLocale austrian = CLocaleBuilder.create(Language.GERMAN)
	.setRegion(Region.AUSTRIA)
	.build();
// creates a locale with language, region and script
CLocale austrianLatn = CLocaleBuilder.create(Language.GERMAN)
	.setRegion(Region.AUSTRIA)
	.setScript(Script.LATN)
	.build();
	
// creates a locale with language by a string
CLocale german = CLocaleBuilder.build("de");
// creates a locale with language and region by a string
CLocale austrian = CLocaleBuilder.build("de-AT");
```

The [locale](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/intl/CLocale.html) is providing a subset of locales as constants.

**Charba** provides the enumerations with possible languages, regions or scripts that can be used to create a locale:

  * languages codes are enumerated in [Language](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/intl/Language.html) object.
  * regions are enumerated in [Region](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/intl/Region.html) object.
  * scripts are enumerated in [Script](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/intl/Script.html) object.

## Defaults

At runtime, you can determine the user’s locale in different ways, automatically retrieved, or can be set programmatically.

The default [locale](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/intl/CLocale.html) will set if one of the following items is met and in the order are described:

  * Append the client `locale` property value to the query string of the URL.

For instance, `http://www.example.org/myapp.html?locale=de` will set "de" as default locale.
  
  * Add an HTML `<meta>` tag to the `<head>` of the application host page, containing the `gwt:property` property name and value: 

For instance, `<meta name="gwt:property" content="locale=de">` will set "de" as default locale.

  * Reads the default locale from platform
  * if all above items don't provide any correct locale, [CLocale.US](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/intl/CLocale.html) is set.

To access to default locale, you can retrieve it from [locale](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/intl/CLocale.html) object, where is statically stored, as following: 

```java
// gets default locale
CLocale defaultLocale = CLocale.getDefault();
```

You can also set the default locale programmatically as following:

```java
// creates a locale with language
CLocale german = CLocaleBuilder.create(Language.GERMAN)

// sets default locale
CLocale.setDefault(german);
```

When a default has been set, automatically it changes the default configuration for charts, in order to use the default locale if it's not programmatically set.

See [chart locale configuration](../configuration/Commons#locale) for more details. 
