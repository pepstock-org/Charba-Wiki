---
id: Integration
title: Integration
hide_title: true
sidebar_label: Integration
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Integration

Even if **Charba** was born to be a GWT chart library, **Charba** is now more a [J2CL - JavaToClosure](https://github.com/google/j2cl) chart library and GWT is only one of possible framework where **Charba** works. 

**Charba** has got an own DOM tree manager in order to do not have any strong dependency with a DOM framework used for an application but nevertheless it is necessary that the DOM elements of **Charba** can be used by the other frameworks.

For this reason, **Charba** provides a set of utilities (casting some own elements to the framework's ones) in order to enable adding a chart in a DOM framework.

The main provided hooks by **Charba** are:

   * a [Div](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/Div.html) element which is exposed by `chart.getChartElement()` method.
   * a [Canvas](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/Canvas.html) element which is exposed by `chart.getCanvas()` method.

<img src={useBaseUrl('/img/charbaDiagram.png')} />

## Elemental2

[Google Elemental2](https://github.com/google/elemental2) provides type checked access to all browser APIs for Java code. This is done by using closure extern files and generating JsTypes, which are part of the new JsInterop specification that is both implemented in GWT and J2CL.

The following table shows how you can leverage on [Google Elemental2](https://github.com/google/elemental2) and **Charba** together:

| Charba class | Elemental2 class | Charba to Elemental2 | Elemental2 to Charba
| :- | :- | :- | :-
| [Div](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/Div.html)| HTMLDivElement| `HTMLDivElement element = Div.as()` | `Div element = CastHelper.toDiv(HTMLDivElement)`|
| [Img](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/Img.html)| HTMLImageElement| `HTMLImageElement element = Img.as()` | `Img element = CastHelper.toImg(HTMLImageElement)`|
| [Canvas](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/Canvas.html)| HTMLCanvasElement| `HTMLCanvasElement element = Canvas.as()` | `Canvas element = CastHelper.toCanvas(HTMLCanvasElement)` |
| [CanvasPatternItem](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html)| CanvasPattern| `CanvasPattern item = CanvasPatternItem.as()` | `CanvasPatternItem item = CastHelper.toPattern(CanvasPattern)`|
| [CanvasGradientItem](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html)| CanvasGradient| `CanvasGradient item = CanvasGradientItem.as()` | `CanvasGradientItem item = CastHelper.toGradient(CanvasGradient)`|
| [BaseNativeEvent](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/BaseNativeEvent.html)| Event - MouseEvent - TouchEvent| `Event event = BaseNativeEvent.as()` | - |

Here is a simple sample:

```java
LineChart chart = new LineChart();
chart.getOptions().setResponsive(true);
chart.getOptions().getLegend().setPosition(Position.TOP);
chart.getOptions().getTitle().setDisplay(true);
chart.getOptions().getTitle().setText("Charba line chart");

LineDataset dataset1 = chart.newDataset();
dataset1.setLabel("dataset 1");

dataset1.setBackgroundColor(HtmlColor.BLUE.alpha(0.2));
dataset1.setBorderColor(HtmlColor.BLUE);

dataset1.setData(10, 45, 50, 25, 30, 5);

chart.getData().setLabels("1", "2", "3", "4", "5", "6");
chart.getData().setDatasets(dataset1);

chart.getChartElement().getStyle().setWidth("600px");
chart.getChartElement().getStyle().setHeight("300px");

Element element = chart.getChartElement().as();

DomGlobal.document.body.appendChild(element);
```

## GWT Web Toolkit

The following table shows how you can leverage on [GWT Web toolkit](http://www.gwtproject.org/) and **Charba** together:

| Charba class | GWT class | Charba to GWT | GWT to Charba
| :- | :- | :- | :-
| [Div](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/Div.html)| [DivElement](http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/DivElement.html) | `DivElement element = Div.as()` | `Div element = CastHelper.toDiv(DivElement)`|
| [Img](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/Img.html)| [ImageElement](http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/ImageElement.html) | `ImageElement element = Img.as()` | `Img element = CastHelper.toImg(ImageElement)`|
| [Canvas](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/Canvas.html)| [CanvasElement](http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/CanvasElement.html) | `CanvasElement element = Canvas.as()` | `Canvas element = CastHelper.toCanvas(CanvasElement)` |
| [CanvasPatternItem](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html) | [CanvasPattern](http://www.gwtproject.org/javadoc/latest/com/google/gwt/canvas/dom/client/CanvasPattern.html) | `CanvasPattern item = CanvasPatternItem.as()` | `CanvasPatternItem item = CastHelper.toPattern(CanvasPattern)`|
| [CanvasGradientItem](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html) | [CanvasGradient](http://www.gwtproject.org/javadoc/latest/com/google/gwt/canvas/dom/client/CanvasGradient.html) | `CanvasGradient item = CanvasGradientItem.as()` | `CanvasGradientItem item = CastHelper.toGradient(CanvasGradient)`|
| [BaseNativeEvent](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/BaseNativeEvent.html)| [NativeEvent](http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/NativeEvent.html) | `NativeEvent event = BaseNativeEvent.as()` | - |

GWT Web Toolkit is also providing other classes related to images and for those **Charba** is providing a dedicated utility, [ImagesHelper](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/gwt/ImagesHelper.html), to transform those GWT classes in a [Img](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/Img.html).

| Charba class | GWT class | GWT to Charba
| :- | :- | :-
| [Img](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/Img.html)| [ImageResource](http://www.gwtproject.org/javadoc/latest/com/google/gwt/resources/client/ImageResource.html) | `Img element = ImagesHelper.toImg(ImageResource)`|
| [Img](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/Img.html)| [Image](http://www.gwtproject.org/javadoc/latest/com/google/gwt/user/client/ui/Image.html) | `Img element = ImagesHelper.toImg(Image)`|
