---
id: Patterns
title: Patterns
hide_title: true
sidebar_label: Patterns
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Patterns

A pattern represents an opaque object, based on an image, that it can be used to fill or stroke properties of a dataset chart.

Apart of the image, to create a pattern you could decide how to repeat the pattern's image. Possible values are:

  * ["repeat"](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/enums/Repetition.html#REPEAT) (both directions)
  * ["repeat-x"](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/enums/Repetition.html#REPEAT_X) (horizontal only)
  * ["repeat-y"](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/enums/Repetition.html#REPEAT_Y) (vertical only)
  * ["no-repeat"](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/enums/Repetition.html#NO_REPEAT) (neither direction)

If repetition is not specified creating a pattern, a value of ["repeat"](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/enums/Repetition.html#REPEAT) will be used.

A pattern is an alternative option to configure a dataset by [Pattern](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html) object, instead of using a color.

<img src={useBaseUrl('/img/pattern.png')} />

For example, if you wanted to fill a dataset with a pattern from an image, you could do the following:

```java
LineDataset dataset = new LineDataset();
// convert a ImageResource into Img
Img img = ImagesHelper.toImg(Images.INSTANCE.pattern());      
Pattern pattern = new Pattern(img);
      
dataset.setBackgroundColor(pattern);
dataset.setBorderColor(HtmlColor.BLACK);
...
dataset.setFill(Fill.origin);
```

where `Images.INSTANCE.pattern()` is a method of a [ClientBundle](http://www.gwtproject.org/javadoc/latest/com/google/gwt/resources/client/ClientBundle.html), where the image is inside the project and using the [ImagesHelper](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/gwt/ImagesHelper.html) can be cast of a [Img](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html), as following:


```java
public interface Images extends ClientBundle {

   /**
    * Static reference to be used everywhere.
    */
   Images INSTANCE = GWT.create(Images.class);

   /**
    */
   @Source("/images/crossline-lines.png")
   ImageResource pattern();
```
 
To avoid to have patterns without loaded images, it's suggested to prefetch the images at starting of application, leveraging on GWT [Image](http://www.gwtproject.org/javadoc/latest/com/google/gwt/user/client/ui/Image.html#prefetch-com.google.gwt.safehtml.shared.SafeUri-) as following:

```java
// loads images
Image.prefetch(Images.INSTANCE.pattern().getSafeUri());
```

## Tiles

**Charba** provides a tile builders which can easily generate canvas or **Charba** patterns with a set of shapes in order to use them in datasets, instead of colors.

<img src={useBaseUrl('/img/tiles.png')} />

The main class to use this feature is [TilesFactory](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/tiles/TilesFactory.html) which provides a set of methods to get a tile as canvas pattern or as **Charba** pattern which can be used into datasets.

```java
DoughnutDataset dataset = chart.newDataset();

Pattern p1 = TilesFactory.createPattern(Shape.square, "#0000FF");
Pattern p2 = TilesFactory.createPattern(Shape.verticalZigzag, "#FFFFFF");
Pattern p3 = TilesFactory.createPattern(Shape.diagonal, "#FF0000");
Pattern p4 = TilesFactory.createPattern(Shape.ring, "#OOFFOO");

dataset.setBackgroundColor(p1, p2, p3, p4);
```

The tiles factory can also create canvas patterns to use wherever you want in your application:

```java
CanvasPatternItem canvasPattern = TilesFactory.createTile(Shape.square, "#0000FF");
```

This is the [list](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/tiles/Shape.html) of shapes out-of-the-box:

  * back slashed line
  * box
  * cross
  * cross dash
  * dash
  * diagonal
  * diamond
  * diamond box
  * disc
  * dot
  * dot dash
  * double diagonal
  * empty star
  * inverted diagonal
  * inverted double diagonal
  * inverted triangle
  * line
  * plus
  * ring
  * slashed line
  * solid
  * star
  * square
  * triangle
  * weave
  * zigzag
  * vertical line
  * vertical zigzag

There are other 2 additional shapes, available out of the box.

[ImageShape](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/tiles/ImageShape.html) enables to use an image and apply (scaling it) into tile. The vantage is that we can decide the background of the image if it has got a transparent background.

```java
ImageShape imageShape = new ImageShape(ImagesHelper.toImg(Images.INSTANCE.myImage()));
...		
Pattern pattern = TilesFactory.createPattern(imageShape, "#990099");
...
```

[CharacterShape](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/tiles/CharacterShape.html) enables to use a character (ONLY 1 otherwise you will get an exception) and apply into tile. 

```java
CharacterShape charShape = new CharacterShape("m");
...		
Pattern pattern = TilesFactory.createPattern(charShape, "#990099");
...
```

It is also possible to use [PointStyle](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/PointStyle.html) as shape for a tile.

```java
Pattern pattern = TilesFactory.createPattern(PointStyle.CIRCLE, "#990099");
```

The tiles factory has got a default configuration which can be updated in order that new configuration can be used for all tiles.

The complete configuration items are described by following table:

| Name | Type | Default  | Description
| ---- | ---- | -------- | -----------
| shape | [Shape](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/tiles/Shape.html) | Shape.SQUARE | the shape to apply on tile
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(100, 100, 100, 0.7) | the background color of tile
| shapeColor | String - [IsColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(255, 255, 255, 0.8) | the shape color on tile
| size | int | 20 | the size of the tile (always a square). The minimum size for a tile is **10**.
| lineCap | [CapStyle](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/CapStyle.html) | CapStyle.ROUND | determines the shape used to draw the end points of lines
| lineJoin | [JoinStyle](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/JoinStyle.html) | JoinStyle.ROUND | determines the shape used to join two line segments where they meet

**Charba** provides a [TilesBuilder](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/tiles/TilesBuilder.html) to create tiles using the **set** methods in sequence and get a [pattern](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html) or [CanvasPatternItem](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html) at the end of configuration.

```java
// creates a CHARBA pattern
Pattern pattern = TilesBuilder.create().setShape(Shape.EMPTY_STAR).setBackgroundColor("#990099").asPattern();
// creates a canvas pattern
CanvasPatternItem canvasPattern = TilesBuilder.create().setShape(Shape.EMPTY_STAR).setBackgroundColor("#990099").asTile();
```
