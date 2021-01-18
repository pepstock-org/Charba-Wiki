---
id: Utilities
title: Utilities
hide_title: true
sidebar_label: Utilities
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Utilities

**Charba** provides out of the box some utilities to used inside your code.

## HTML annotation Builder

One of most frequent requests is how to add HTML code in the canvas. This enables the user to add easily information in the chart, leveraging on HTML code.

[HTML annotation Builder](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/utils/AnnotationBuilder.html) provides methods to create images to add to canvas where the chart is drawing. It is leveraging on `SVG+XML` and `<foreignObject>` to create an image that you can add to the chart by a plugin, controller or with whatever else method.

Leveraging on `<foreignObject>`, check [here](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject#Browser_compatibility) the compatibility matrix on browsers.

You can pass the HTML as string or by an [element](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/BaseHtmlElement.html). If you use a string, the string must be XML well-formed, following the [xHTML specification](http://www.w3.org/1999/xhtml) otherwise an exception will occurs.

<img src={useBaseUrl('/img/htmlAnnotation.png')} />

Here is a sample how to use it:

```java
// creates an image with the test in bold
Img image = AnnotationBuilder.build("<b>This is an annotation</b>", chart.getCanvas().getOffsetWidth(), 100);
// uses the context 2d of canvas to draw the image at point 0,0					
ctx.drawImage(img, 0, 0);
```

**PAY ATTENTION** that this capability DOES NOT work on IE11 and on MS Edge.

**PAY ATTENTION** that drawing the image on canvas, you could get the java script error `NS_ERROR_NOT_AVAILABLE` which means that if even the content is well-formed, it contains some invalid characters, not allowed in the xHTML (for instance `#` char).

## Window

It's a global variable, representing the window in which the script is running, is exposed to JavaScript code.

Some methods are mapped in order to be executed inside your GWT project.

See [here](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/utils/Window.html) the complete list of methods.

## Console

One of the method of Window object, returns the console.

The console provides access to the browser's debugging console. The specifics of how it works varies from browser to browser, but there is a de facto set of features that are typically provided.

See [here](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/utils/Console.html) the complete list of methods.

## JSON

The JSON object contains methods for converting values to JSON.

See [here](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/utils/JSON.html) the complete list of methods.

## RegExp

The RegExp object is used for matching text with a pattern.

See [here](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/utils/RegExp.html) the complete list of methods.
