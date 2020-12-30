---
id: Integration
title: Migration and integration
hide_title: true
sidebar_label: Migration and integration
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Integration

Even if **Charba** was born to be a GWT chart library, since version **3.1** it is now more a [J2CL - JavaToClosure](https://github.com/google/j2cl) chart library and GWT is only one of possible framework where **Charba** works. 

**Charba** has got an own DOM tree manager in order to be do not have any strong dependency with DOM framework used for an application but nevertheless it is necessary that the DOM elements of **Charba** can be used by the other frameworks.

For this reason, **Charba** provides a set of utilities (casting some own elements to the framework's ones) in order to enable adding a chart into a DOM framework.

The main provided hooks by **Charba** are:

   * a [Div](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Div.html) element which is exposed by `chart.getChartElement()` method.
   * a [Canvas](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Canvas.html) element which is exposed by `chart.getCanvas()` method.

The following sections will explain how to integrate **Charba** with [Google Elemental2](https://github.com/google/elemental2) and what must be changed into an existing GWT project, which is already using **Charba**.

<img src={useBaseUrl('/img/charbaDiagram.png')} />

## Migrating to version 3

Since version **3**, **Charba** is mainly a [J2CL - JavaToClosure](https://github.com/google/j2cl) chart library and [GWT Web toolkit](http://www.gwtproject.org/) is considered as one of possible frameworks where can be used.

The following list of items provides the mainly changes must be applied to an existing GWT project which is using **Charba** with a version 1.x or 2.x:

  * add new **Charba** artifact (`charba-[version.release]-gwt.jar`) to GWT project, removing the previous **Charba** jar file.
  * add dependency with [JSINTEROP base](https://github.com/google/jsinterop-base), have a look [here](/docs#building). 
  * replace all import package statements from **org.pepstock.charba.client.[chartType]Chart** to **org.pepstock.charba.client.gwt.widgets.[chartType]ChartWidget** into java classes.
  * replace all import package statements from **urn:import:org.pepstock.charba.client** to **urn:import:org.pepstock.charba.client.gwt.widgets** into UIBinder XML files.
  * replace all chart class names from **[chartType]Chart** to **[chartType]ChartWidget**, both on java classes and UIBinder XML files.
  * `LegendCallback` and `HtmlLegendTextCallback` are now using a **Charba** [SafeHtml](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/safehtml/SafeHtml.html) and not GWT one anymore.


## Integrating Elemental2

[Google Elemental2](https://github.com/google/elemental2) provides type checked access to all browser APIs for Java code. This is done by using closure extern files and generating JsTypes, which are part of the new JsInterop specification that is both implemented in GWT and J2CL.

The following table shows how you can leverage on [Google Elemental2](https://github.com/google/elemental2) and **Charba** together:

| Charba class | Elemental2 class | Charba to Elemental2 | Elemental2 to Charba |
| ------------ | ---------------- | -------------------- | -------------------- | 
| [Div](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Div.html)| HTMLDivElement| `HTMLDivElement element = Div.as()` | `Div element = CastHelper.toDiv(HTMLDivElement)`|
| [Img](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html)| HTMLImageElement| `HTMLImageElement element = Img.as()` | `Img element = CastHelper.toImg(HTMLImageElement)`|
| [Canvas](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Canvas.html)| HTMLCanvasElement| `HTMLCanvasElement element = Canvas.as()` | - |
| [CanvasPatternItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html)| CanvasPattern| `CanvasPattern item = CanvasPatternItem.as()` | `CanvasPatternItem item = CastHelper.toPattern(CanvasPattern)`|
| [CanvasGradientItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html)| CanvasGradient| `CanvasGradient item = CanvasGradientItem.as()` | `CanvasGradientItem item = CastHelper.toGradient(CanvasGradient)`|
| [BaseNativeEvent](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/BaseNativeEvent.html)| Event - MouseEvent - TouchEvent| `Event event = BaseNativeEvent.as()` | - |

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

## Integrating GWT Web Toolkit

The following table shows how you can leverage on [GWT Web toolkit](http://www.gwtproject.org/) and **Charba** together, since **Charba 3**:

| Charba class | GWT class | Charba to GWT | GWT to Charba |
| ------------ | --------- | ------------- | ------------- | 
| [Div](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Div.html)| [DivElement](http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/DivElement.html) | `DivElement element = Div.as()` | `Div element = CastHelper.toDiv(DivElement)`|
| [Img](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html)| [ImageElement](http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/ImageElement.html) | `ImageElement element = Img.as()` | `Img element = CastHelper.toImg(ImageElement)`|
| [Canvas](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Canvas.html)| [CanvasElement](http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/CanvasElement.html) | `CanvasElement element = Canvas.as()` | - |
| [CanvasPatternItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html) | [CanvasPattern](http://www.gwtproject.org/javadoc/latest/com/google/gwt/canvas/dom/client/CanvasPattern.html) | `CanvasPattern item = CanvasPatternItem.as()` | `CanvasPatternItem item = CastHelper.toPattern(CanvasPattern)`|
| [CanvasGradientItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html) | [CanvasGradient](http://www.gwtproject.org/javadoc/latest/com/google/gwt/canvas/dom/client/CanvasGradient.html) | `CanvasGradient item = CanvasGradientItem.as()` | `CanvasGradientItem item = CastHelper.toGradient(CanvasGradient)`|
| [BaseNativeEvent](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/BaseNativeEvent.html)| [NativeEvent](http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/NativeEvent.html) | `NativeEvent event = BaseNativeEvent.as()` | - |

GWT Web Toolkit is also providing other classes related to images and for those **Charba** is providing a dedicated utility, [ImagesHelper](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/gwt/ImagesHelper.html), to transform those GWT classes into a [Img](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html).

| Charba class | GWT class | GWT to Charba |
| ------------ | --------- | ------------- | 
| [Img](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html)| [ImageResource](http://www.gwtproject.org/javadoc/latest/com/google/gwt/resources/client/ImageResource.html) | `Img element = ImagesHelper.toImg(ImageResource)`|
| [Img](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html)| [Image](http://www.gwtproject.org/javadoc/latest/com/google/gwt/user/client/ui/Image.html) | `Img element = ImagesHelper.toImg(Image)`|
