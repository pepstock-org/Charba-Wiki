---
id: Javascript
title: Javascript utils
hide_title: true
sidebar_label: JavaScript utilities
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Javascript Utilities

**Charba** provides out of the box some utilities that you can use in your code.

:::info
The javascript utilities can be used even if the [**Charba.enable**](../getting-started/GettingStarted#embedded-resources) or [**DeferredCharba.enable**](../getting-started/GettingStarted#deferred-resources) are not called because they don't depend on CHART.JS.
:::

## Scheduler

The [scheduler](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/utils/CScheduler.html) utility executes a particular block of code once after a specified time has elapsed. 

The logic that you pass to the [scheduler](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/utils/CScheduler.html) will run at some point in the future. 

```java
// creates and submits my task
// without any delay
CScheduler.get().submit(new Runnable(){

	@Override
	public void run(){
		// my logic
	}
	
});
// creates and submits my task
// waiting for 5 seconds
CScheduler.get().submit(new Runnable(){

	@Override
	public void run(){
		// my logic
	}
	
}, 5000);
```

## Timer

The [timer](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/utils/CTimer.html) utility executes a particular block of code repeatedly at no less than the number of milliseconds.

```java
// creates a timer with user logic
// and an interval of 5 seconds.
// the logic will run repeatedly
// every 5 seconds
CTimer timer = new CTimer(new Runnable(){

	@Override
	public void run(){
		// my logic
	}
	
}, 5000);
// starts timer
timer.start();
```

### Starting

A [timer](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/utils/CTimer.html) will execute a particular block of code repeatedly after it has been started.

```java
// starts timer
timer.start();
```

You can change the interval of an existing [timer](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/utils/CTimer.html), restarting it with new interval to use:

```java
// starts timer
// changing the interval 
// setting to 10 seconds
timer.start(10000);
```

### Stopping

A [timer](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/utils/CTimer.html) can be stopped when you want to stop temporarily the execution or if it's not needed anymore.

```java
// stops timer
timer.stop();
```

### Chart auto update

In order to keep the chart up to date, you sometimes want to perform an update periodically. You might want to run a poll to the server for new data and update the chart.

The [chart](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/AbstractChart.html) provides a method to configure the timer for the chart instance.

The [timer](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/utils/CTimer.html) will start executing the block of code repeatedly after the chart drawing and will e stopped when chart will be destroyed.

```java
// creates the chart
LineChart chart = new LineChart();
// configures the timer
// to execute my code every 10 seconds 
chart.createAndSetTimer(new ChartTimerTask(){

	/**
	 * Executes the task repeatedly, internally by the chart instance. 
	 * 
	 * @param chart chart instance
	 */
	@Override
	public void execute(IsChart chart){
		// retrieves data from host
		// adds new data to chart
		// updates chart
		chart.update();
	}

}, 10000);
```

The [chart](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/AbstractChart.html) needs a [specific task interface](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/ChartTimerTask.html) to apply the logic.

The [chart](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/AbstractChart.html) provides the access in order to stop and start the [timer](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/utils/CTimer.html) when you need.

```java
// creates the chart
LineChart chart = new LineChart();
// gets timer
CTimer timer = chart.getTimer();
// checks if consistent
// because it could be null
if (timer != null){
	// stops the timer
	timer.stop();
}
```

## Window

**Charba** provides a JavaScript [window wrapper](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/utils/Window.html).

[JavaScript Window](https://developer.mozilla.org/en-US/docs/Web/API/Window) is a global variable, representing the window in which the script is running.

Some methods are mapped in order to be executed in your GWT or J2CL project.

```java
// gets device pixel ratio
double devicePixelRatio = Window.getDevicePixelRatio();
```

## Console

One of the method of [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window) object, returns the [console](https://developer.mozilla.org/en-US/docs/Web/API/console). 

**Charba** provides the [console](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/utils/Console.html) object as shortcut to that window service.

The console provides access to the browser's debugging console. The specifics of how it works varies from browser to browser, but there is a de facto set of features that are typically provided.

```java
// emits the log string 
Console.log("This is my log");
// emits the javascript objects
Console.log(object1, object2, object3);
```

## JSON

The [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) object contains methods for converting objects to JSON and JSON string to objects.

**Charba** provides an [implementation](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/utils/JSON.html) with the methods and capabilities to use in your GWT or J2CL project.

```java
// gets and logs the object in JSON format
Console.log(JSON.stringify(object));
// gets and logs the object in JSON format
// with 3 spaces for indentation
Console.log(JSON.stringify(object, 3));
// creates and logs an object parsed by 
// a text in JSON format
Console.log(JSON.parse("{ test: 8, doc: true}", 3));
```

## Regular expressions

[Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) are patterns used to match character combinations in strings. 

**Charba** provides an [implementation](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/utils/RegExp.html) with a subset of methods and capabilities to use in your GWT or J2CL project.

```java
// gets a string to check
String id = "myId"
// creates a regular expression
RegExp regExp = new RegExp("^[a-zA-Z0-9_-]+$");
// executes the regular expression
RegExpResult regExpResult = regExp.exec(id);
// checks if regular expression matches
if (regExpResult != null){
	// regular expression matches!
} else {
	// regular expression does NOT match!
}
```
