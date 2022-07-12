---
id: Building
title: Build and install
hide_title: true
sidebar_label: Build and install
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Building

To build **Charba**, you can check out the project and to run [Ant build.xml](https://github.com/pepstock-org/Charba/blob/5.4/build.xml).

The [Ant build.xml](https://github.com/pepstock-org/Charba/blob/5.4/build.xml) is able to build the 2 artifacts, related to the 2 distributions available.

The first distribution is a **Charba** file without any GWT dependency (but working on GWT anyway), consumable also in other [J2CL - JavaToClosure](https://github.com/google/j2cl) frameworks, like [Google Elemental2](https://github.com/google/elemental2) and [Elemento](https://github.com/hal/elemento).

To build the project, execute `buildBinary` target.

It creates a `charba-[version.release].jar` file in `dist` folder, ready to be included in your project.

The second distribution is a **Charba** file with a hard GWT dependency which contains charts widgets and code splitting capabilities.

To build the project, execute `buildBinaryGwt` target.

It creates a `charba-[version.release]-gwt.jar` file in `dist` folder, ready to be included in your project.

## Installation

Currently **Charba** is available on [MVN repository](https://mvnrepository.com/artifact/org.pepstock/charba).

It is available also on [GitHub releases](https://github.com/pepstock-org/Charba/releases).

If you are using [Apache Maven](https://maven.apache.org/):

```xml
<dependency>
    <groupId>org.pepstock</groupId>
    <artifactId>charba</artifactId>
    <version>5.4</version>
    <!-- for GWT -->
    <version>5.4-gwt</version>
</dependency>
```

If you are using [Apache Ivy](http://ant.apache.org/ivy/):

```xml
<dependency org="org.pepstock" name="charba" rev="5.4"/>
<!-- for GWT -->
<dependency org="org.pepstock" name="charba" rev="5.4-gwt"/>
```

To install in your GWT project, both for GWT and for J2CL artifacts, you must the following configuration in your GWT project module configuration:

```xml
...
<inherits name="org.pepstock.charba.Charba"/>
...
```

**Charba** is now leveraging on [JSINTEROP](http://www.gwtproject.org/doc/latest/DevGuideCodingBasicsJsInterop.html).

As the name suggests, JsInterop is a way of interoperating Java with JavaScript. It offers a better way of communication between the two using annotations instead of having to write javascript in your classes (using JSNI).
