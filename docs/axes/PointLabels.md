---
id: PointLabels
title:  Point labels
hide_title: true
sidebar_label: Point labels
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Point Labels

The [point labels](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/configuration/RadialPointLabels.html) options are used to configure the point labels that are shown on the perimeter of the scale. They can be found in the pointLabels sub options object.
Note 

<img src={useBaseUrl('/img/pointLabels.png')} />

:::caution
The point labels can be **ONLY** applied to radial axes.<br/>
These options only apply if **display** is **true**.
:::

The [RadialPointLabels](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/configuration/RadialPointLabels.html) provides all **set** and **get** methods to manage the configuration, as following:

```java
// creates a radial axis 
RadialAxis axis = new RadialAxis(chart);
// enables point labels
axis.getPointLabels().setDisplay(true);
// sets and gets the color value
axis.getPointLabels().setColor(HtmlColor.RED);

IsColor color = axis.getPointLabels().getColor();
```

Table with options:

| Name | Type | Scriptable | Description
| :- | :- | :- | :-
| backdropColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) | Background color of the point label.
| backdropPadding | [Padding](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/configuration/Padding.html) | - | The padding of label backdrop.<br/>See [padding documentation](../configuration/Commons#padding) for more details.
| borderRadius | int - [BarBorderRadius](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/data/BarBorderRadius.html) | [Yes](#scriptable) | The border radius of the point label (in pixels).
| centerPointLabels | boolean | - | If `true`, point labels are centered.
| display | boolean - [Display](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/enums/Display.html) | - | If `true`, point labels are shown. When Display.AUTO, the label is hidden if it overlaps with another label.
| color | String - [IsColor](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) | Color of point labels.
| font | [IsFont](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/options/IsFont.html) | [Yes](#scriptable) | Font of point labels.
| padding | int | [Yes](#scriptable) | Padding between chart and point labels, in pixel.

The further customization of point labels, a [callback](#callback) is provided.

### Scriptable

Scriptable options at grid level accept a callback which is called for each of the underlying data values. See more details in [Configuring charts](../configuration/ScriptableOptions) section. 

All scriptable options callbacks will get a [ScaleContext](../configuration/ScriptableOptions#scale-context) instance.

```java
// creates a radial axis 
RadialAxis axis = new RadialAxis(chart);
// enables point labels
axis.getPointLabels().setDisplay(true);
// sets the option by a callback 
axis.getPointLabels().setColor(new ColorCallback<ScaleContext>(){

   @Override
   public IsColor invoke(ScaleContext context){
      // logic
      return color;
   }
});
```

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :- 
| backdropColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/IsColor.html)
| borderRadius | [BorderRadiusCallback](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/callbacks/BorderRadiusCallback.html)&lt;ScaleContext&gt; | int - [BarBorderRadius](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/data/BarBorderRadius.html)
| color | [ColorCallback](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/IsColor.html)
| font | [FontCallback](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/callbacks/FontCallback.html)&lt;ScaleContext&gt; | [FontItem](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/items/FontItem.html)
| padding | [SimplePaddingCallback](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/callbacks/SimplePaddingCallback.html) | int

### Callback

Callback implementation can transform data labels to point labels. The default implementation simply returns the current string.

To apply an own callback, you can set a [PointLabelCallback](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/callbacks/PointLabelCallback.html) instance to the axis options, as following:

```java
// creates a radial axis 
RadialAxis axis = new RadialAxis(chart);
// enables point labels
axis.getPointLabels().setDisplay(true);
// sets callback
axis.getPointLabels().setCallBack(new PointLabelCallback(){

   /**
    * Callback function to transform data labels to point labels. The default implementation simply returns the current string.
    * 
    * @param axis axis instance where this callback as been defined
    * @param item label of current label
    * @param index index of the label
    * @return new label to apply to point label
    */
    @Override
    public String onCallback(Axis axis, String item, int index){
      // logic
      return item;
   }
         
});
```

The callback can return a string (for single line) or a list of strings (for multiple lines).
