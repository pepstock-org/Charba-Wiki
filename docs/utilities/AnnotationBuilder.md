---
id: AnnotationBuilder
title: Annotation builder
hide_title: true
sidebar_label: Annotation builder
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## HTML annotation Builder

One of most frequent requests is how to add HTML code in the canvas. This enables the user to add easily information in the chart, leveraging on HTML code.

[HTML annotation Builder](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/utils/AnnotationBuilder.html) provides methods to create images to add to canvas where the chart is drawing. It is leveraging on `SVG+XML` and `<foreignObject>` to create an image that you can add to the chart by a plugin, controller or with whatever else method.

Leveraging on `<foreignObject>`, check [here](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject#Browser_compatibility) the compatibility matrix on browsers.

You can pass the HTML as string or by an [element](https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/dom/BaseHtmlElement.html). If you use a string, the string must be XML well-formed, following the [xHTML specification](http://www.w3.org/1999/xhtml) otherwise an exception will occurs.

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

:::tip
Drawing the image on canvas, you could get a `NS_ERROR_NOT_AVAILABLE` javascript error which means that if even the content is well-formed, it contains some invalid characters, not allowed in the xHTML (for instance `#` char).
:::
