---
id: GettingStarted
title: Getting Started
hide_title: true
sidebar_label: Getting started
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## My first chart

It's easy to get started with **Charba**. 

In this example, we create a bar chart with a single dataset.

```java
// enabling Charba
Charba.enable();

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

## Javascript resources

**Charba** injects javascript resources, in order to have a self-consistent package without any dependencies with other configuration (for instance in the HTML page of application).

Injecting javascript resources, the application could be pretty big, mainly due to [Chart.JS](http://www.chartjs.org/) minified file that is more than 200 KB of size.

Therefore, as of version 2.3, **Charba** forces the user to define which kind of resources must be applied to own project, before starting using **Charba**. That means before calling whatever **Charba** API, the resource to use to inject [Chart.JS](http://www.chartjs.org/) must be set, otherwise an exception will occur.

**Charba** injects also  the [Luxon](https://moment.github.io/luxon/) and the specific [adapter](https://github.com/chartjs/chartjs-adapter-luxon) in order to enable the [Chart.JS](http://www.chartjs.org/) time and time series axes feature.

### Embedded resources

An embedded resource contains the javascript code to inject inside a specific class and, when invoked, it will inject the code in the DOM tree.

To initialize **Charba** using the embedded resources, you must set enable **Charba** (and that's **mandatory**), as following:

```java
// with date time library, Luxon
Charba.enable();
// or without date time library, Luxon
Charba.enable(false);
```

There are 2 different `embedded resources` instances depending on if [Luxon](https://moment.github.io/luxon/), as date time library, has to be injected or not.

 1. `Charba.enable()` injects [Chart.JS](http://www.chartjs.org/) javascript file, [Luxon](https://moment.github.io/luxon/) and the specific date [adapter](https://github.com/chartjs/chartjs-adapter-luxon).
 1. `Charba.enable(false)` injects [Chart.JS](http://www.chartjs.org/) javascript file and the specific date [adapter](https://github.com/chartjs/chartjs-adapter-luxon). [Luxon](https://moment.github.io/luxon/) is not injected in order to leave the user to use another instance of [Luxon](https://moment.github.io/luxon/) because, for instance, it could be already in use for other purposes.

:::info
The [javascript utilities](../utilities/Javascript) and the [toast](../utilities/Toast) can be used even if the **Charba.enable** is not called because they don't depend on CHART.JS.
:::

### Deferred resources

:::caution
The deferred resources can be used ONLY in **GWT Web Toolkit** projects.
:::

A deferred resource contains the javascript code to inject by GWT [ClientBundle](http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html#TextResource) and it will be injected in the DOM tree by [DeferredCharba](https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/DeferredCharba.html).

For users who wants to leverage on asynchronously loading of [Chart.JS](http://www.chartjs.org/) module, date time library and adapter or want to leverage on [GWT code splitting](http://www.gwtproject.org/doc/latest/DevGuideCodeSplitting.html), they should use the deferred resources and start using **Charba** inside the callback of successfully load of needed resources.

To initialize **Charba** using the deferred resources, you must set enable **Charba** (and that's **mandatory**), as following:

```java
GWT.runAsync(new RunAsyncCallback(){
	@Override
	public void onFailure(Throwable throwable){
		Window.alert("Code download failed");
	}

	@Override
	public void onSuccess(){
		// with date time library, Luxon
		DeferredCharba.enable(() -> {
			// UI creation and starting point to invoke CHARBA API
		});
		// without date time library, Luxon
		//DeferredCharba.enable(() -> {
		//	// UI creation and starting point to invoke CHARBA API
		//}, false);
	}
});
```

There are 2 different `deferred resources` instances depending on if [Luxon](https://moment.github.io/luxon/), as date time library, has to be injected or not:

 1. `DeferredCharba.enable(Runnable)` injects [Chart.JS](http://www.chartjs.org/) javascript file, [Luxon](https://moment.github.io/luxon/) and the specific date [adapter](https://github.com/chartjs/chartjs-adapter-luxon).
 1. `DeferredCharba.enable(Runnable, false)` injects [Chart.JS](http://www.chartjs.org/) javascript file and the specific date [adapter](https://github.com/chartjs/chartjs-adapter-luxon). [Luxon](https://moment.github.io/luxon/) is not injected in order to leave the user to use another instance of [Luxon](https://moment.github.io/luxon/) because, for instance, it could be already in use for other purposes.

:::info
The [javascript utilities](../utilities/Javascript) and the [toast](../utilities/Toast) can be used even if the **DeferredCharba.enable** is not called because they don't depend on CHART.JS.
:::
 