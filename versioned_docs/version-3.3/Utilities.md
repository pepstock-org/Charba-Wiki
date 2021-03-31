---
id: Utilities
title: Utilities
hide_title: true
sidebar_label: Utilities
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Utilities

**Charba** provides out of the box some utilities that you can use in your code.

## HTML annotation Builder

One of most frequent requests is how to add HTML code into canvas. This enables the user to add easily information into chart, leveraging on HTML code.

[HTML annotation Builder](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/utils/AnnotationBuilder.html) provides methods to create images to add to canvas where the chart is drawing. It is leveraging on `SVG+XML` and `<foreignObject>` to create an image that you can add to the chart by a plugin, controller or with whatever else method.

Leveraging on `<foreignObject>`, check [here](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject#Browser_compatibility) the compatibility matrix on browsers.

You can pass the HTML as string or by an [element](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/BaseHtmlElement.html). If you use a string, the string must be XML well-formed, following the [xHTML specification](http://www.w3.org/1999/xhtml) otherwise an exception will occurs.

<img src={useBaseUrl('/img/htmlAnnotation.png')} />

Here is a sample how to use it:

```java
// creates an image with the text in bold
Img image = AnnotationBuilder.build("<b>This is an annotation</b>", 
	chart.getCanvas().getOffsetWidth(), 
	100);
// uses the context 2d of canvas to draw the image at point 0,0					
ctx.drawImage(img, 0, 0);
```

:::note PAY ATTENTION
This capability DOES NOT work on IE11 and on MS Edge.
:::

:::note PAY ATTENTION
Drawing the image on canvas, you could get a `NS_ERROR_NOT_AVAILABLE` java script error which means that if even the content is well-formed, it contains some invalid characters, not allowed into xHTML (for instance `#` char).
:::

## Window

**Charba** provides a JavaScript [window wrapper](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/utils/Window.html).

Window is a global variable, representing the window in which the script is running.

Some methods are mapped in order to be executed inside your GWT or J2CL project.

```java
// gets device pixel ratio
double devicePixelRatio = Window.getDevicePixelRatio();
```

## Console

One of the method of Window object, returns the console.

The console provides access to the browser's debugging console. The specifics of how it works varies from browser to browser, but there is a de facto set of features that are typically provided.

See [here](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/utils/Console.html) the complete list of methods.

```java
// emits the log string 
Window.getConsole().log("This is my log");
// emits the java script objects
Window.getConsole().log(object1, object2, object3);
```

## JSON

The JSON object contains methods for converting values to JSON.

See [here](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/utils/JSON.html) the complete list of methods.

```java
// gets and logs the object in JSON format
Console.log(JSON.stringify(object));
// gets and logs the object in JSON format
// with 3 spaces for indentation
Console.log(JSON.stringify(object, 3));
```

## RegExp

The RegExp object is used for matching text with a pattern.

See [here](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/utils/RegExp.html) the complete list of methods.
