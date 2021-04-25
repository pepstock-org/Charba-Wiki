---
id: GettingStarted
title: Getting Started
hide_title: true
sidebar_label: Getting Started
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## My first chart

It's easy to get started with **Charba**. 

In this example, we create a bar chart for a single dataset.

```java
// sets resource type
ResourcesType.setClientBundle(EmbeddedResources.INSTANCE);

BarChart chart = new BarChart();
// for GWT widget
// BarChartWidget chart = new BarChartWidget();

chart.getOptions().setResponsive(true);
chart.getOptions().getTitle().setText("My first chart");

BarDataset dataset = chart.newDataset();
dataset.setLabel("dataset 1");

dataset.setBackgroundColor(HtmlColor.CORNFLOWER_BLUE.alpha(0.2));
dataset.setBorderColor(HtmlColor.CORNFLOWER_BLUE);
dataset.setBorderWidth(1);
dataset.setData(20, 5, 40, 35, 50, 70, 80);

chart.getData().setLabels("January", "February", "March", "April", "May", "June", "July");
chart.getData().setDatasets(dataset);

// add to DOM by Elemental 2
DomGlobal.document.body.appendChild(chart.getChartElement().as());
// add to DOM for GWT widget
// RootPanel.get().add(chart);
```

<img src={useBaseUrl('/img/gettingStarted.png')} />

## Java script resources

**Charba** is injecting java script resources, in order to have a self-consistent package without any dependencies with other configuration (for instance into HTML page of application).

Injecting java script resources, the application could be pretty big, mainly due to [Chart.JS](http://www.chartjs.org/) minified file that is more than 200 KB of size.

Therefore, as of version 2.3, **Charba** forces the user to define which kind of resources must be applied to own project, before starting using **Charba**. That means before calling whatever **Charba** API, the resource to use to inject [Chart.JS](http://www.chartjs.org/) must be set, otherwise an exception will occur.

Furthermore, as of version 3.0, **Charba** enables the [Chart.JS](http://www.chartjs.org/) feature to decide which date time java script library to use to support timeseries charts. The [Chart.JS](http://www.chartjs.org/) bundle is not longer used in order to inject separately the date time library and its CHART.JS adapter.

### Embedded resources

An embedded resource contains the java script code to inject inside a specific class and, when invoked, it will inject the code into DOM tree.

There are 3 different `embedded resources` depending on date time library to inject:

 1. **[EmbeddedResources](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/resources/EmbeddedResources.html)** which injects [Chart.JS](http://www.chartjs.org/) java script file, [MOMENT.js](https://momentjs.com/) and the specific [adapter](https://github.com/chartjs/chartjs-adapter-moment).
 1. **[LuxonEmbeddedResources](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/resources/LuxonEmbeddedResources.html)** which injects [Chart.JS](http://www.chartjs.org/) java script file, [Luxon](https://moment.github.io/luxon/) and the specific [adapter](https://github.com/chartjs/chartjs-adapter-luxon).
 1. **[DatefnsEmbeddedResources](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/resources/DatefnsEmbeddedResources.html)** which injects [Chart.JS](http://www.chartjs.org/) java script file, [Date-fns](https://date-fns.org/) and the specific [adapter](https://github.com/chartjs/chartjs-adapter-date-fns).

Then, before using **Charba**, you must set which kind of resources you want to use (and that's **mandatory**):

```java
// Moment
ResourcesType.setClientBundle(EmbeddedResources.INSTANCE);
// or Luxon
ResourcesType.setClientBundle(LuxonEmbeddedResources.INSTANCE);
// or Datefns 
ResourcesType.setClientBundle(DatefnsEmbeddedResources.INSTANCE);
```

### Deferred resources (only GWT artifact)

A deferred resource contains the java script code to inject by GWT [ClientBundle](http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html#TextResource) and it will be injected into DOM tree by [EntryPointStarter](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/resources/EntryPointStarter.html).

For users who wants to leverage on asynchronously loading of [Chart.JS](http://www.chartjs.org/) module, date time library and adapter or want to leverage on [GWT code splitting](http://www.gwtproject.org/doc/latest/DevGuideCodeSplitting.html), they should use the deferred resources and start using **Charba** inside the callback of successfully load of needed resources.

There are 3 different `deferred resources` depending on date time library to inject:

 1. **[DeferredResources](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/resources/DeferredResources.html)** where [Chart.JS](http://www.chartjs.org/) java script file is defined by [ExternalTextResource](http://www.gwtproject.org/javadoc/latest/index.html?com/google/gwt/resources/client/ExternalTextResource.html), therefore loaded asynchronously with GWT application
 1. **[LuxonDeferredResources](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/resources/LuxonDeferredResources.html)** which injects [Chart.JS](http://www.chartjs.org/) java script file, [Luxon](https://moment.github.io/luxon/) and the specific [adapter](https://github.com/chartjs/chartjs-adapter-luxon).
 1. **[DatefnsDeferredResources](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/resources/DatefnsDeferredResources.html)** which injects [Chart.JS](http://www.chartjs.org/) java script file, [Date-fns](https://date-fns.org/) and the specific [adapter](https://github.com/chartjs/chartjs-adapter-date-fns).

Then, before using **Charba**, you must set which kind of resources you want to use (and that's **mandatory**) by the [EntryPointStarter](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/resources/EntryPointStarter.html), as following:

```java
GWT.runAsync(new RunAsyncCallback() {
	@Override
	public void onFailure(Throwable throwable) {
		Window.alert("Code download failed");
	}

	@Override
	public void onSuccess() {
		// MOMENT
		EntryPointStarter.run(DeferredResources.INSTANCE, new Runnable() {
		// LUXON
		// EntryPointStarter.run(LuxonDeferredResources.INSTANCE, new Runnable() {
		// Datefns
		// EntryPointStarter.run(DatefnsDeferredResources.INSTANCE, new Runnable() {
			
			@Override
			public void run() {
				// UI cretion and starting point to invoke CHARBA API
			}
		});
	}
});
```

## Polyfilling your project

Starting from **Charba** version 2.x, leveraging on [JSINTEROP](http://www.gwtproject.org/doc/latest/DevGuideCodingBasicsJsInterop.html), it does not work on `Internet Explorer 11` and other aged browsers because of Javascript lanaguage implementation can not provide all methods needed to JSINTEROP.

The common solution is to apply a polyfill, which is adding the `missing pieces` without which nothing would work as expected.
Polyfills are in fact a very bad thing, as long as they are a very big thing. 

**Don't add them unless you need them.** 

The following sections will be described a couple of ways to apply a polyfill in your GWT application in order top use **Charba**. 

### Polyfilling bj `CoreJs`

Looking for a polyfill implementation, we landed on [CoreJs](https://github.com/zloirock/core-js). 

What is `core-js`?

- It is a polyfill of the JavaScript standard library, which supports:
  - The latest ECMAScript standard.
  - ECMAScript standard library proposals.
  - Some WHATWG / W3C standards (cross-platform or closely related ECMAScript).
- It is maximally modular: you can easily choose to load only the features you will be using.
- It can be used without polluting the global namespace.

It's the most universal and the most popular way to polyfill JavaScript standard library.

The following steps describe how to polyfill your application by CoreJs.

 1. **Get CoreJs**. Seeing the [CoreJs installation section](https://github.com/zloirock/core-js#installation), there is official link where you can download the last version of CoreJs. 
 1. **Add to your project**. You can save the minified CoreJs file in your project, for instance in your WAR folder, the same folder of html page.
 1. **Change your html page**. You can add the following HTML script tag in you web page, in the `head` section, before loading your application:

```html
 <head>
    ...
    <script src="corejs.min.js"></script>
    <script type="text/javascript" src="your_application/your_application.nocache.js"></script>
    ...
 </head>
```

That's all. 

### Polyfilling bj `polyfill.io`

Even if it needs a internet connection, you can leverage on [polyfill.io](https://polyfill.io/v3/).

What is `polyfill.io`?

- It's a service which accepts a request for a set of browser features and returns only the polyfills that are needed by the requesting browser. 

To activate the polyfill by `polyfill.io`, you just need to add the following HTML script tag in you web page, in the `head` section, before loading your application:

```html
 <head>
    ...
	<script src="https://polyfill.io/v3/polyfill.js?features=es5,es6,es7"></script>
	<script type="text/javascript" src="your_application/your_application.nocache.js"></script>
    ...
 </head>
```
