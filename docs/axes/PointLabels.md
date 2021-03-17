---
id: PointLabels
title:  Point labels
hide_title: true
sidebar_label: Point labels
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Point Labels

The [point labels](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/RadialPointLabels.html) options are used to configure the point labels that are shown on the perimeter of the scale. They can be found in the pointLabels sub options object.
Note 

<img src={useBaseUrl('/img/pointLabels.png')} />

:::note
The point labels can be **ONLY** applied to radial axes.<br/>
These options only apply if **display** is **true**.
:::

The [RadialPointLabels](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/RadialPointLabels.html) provides all **set** and **get** methods to manage the configuration, as following:

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
| -----| ---- | ---------- | -----------
| backdropColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) | Background color of the point label.
| display | boolean | - | If `true`, point labels are shown.
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) | Color of point labels.
| font | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Font.html) | [Yes](#scriptable) | Font of point labels.
| padding | int | [Yes](#scriptable) | Padding between chart and point labels, in pixel.

The further customization of ticks, a [callback](#callback) is provided.

### Backdrop padding

[Padding](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Padding.html) to apply around of label backdrop.

The [Padding](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Padding.html) provides all **set** and **get** methods to manage the configuration, as following:

```java
// creates a radial axis 
RadialAxis axis = new RadialAxis(chart);
// enables point labels
axis.getPointLabels().setDisplay(true);
// set the same padding size to all directions 
axis.getPointLabels().getBackdropPadding().set(5);

int top = axis..getPointLabels().getBackdropPadding().getTop();
```

The following are the attributes that you can set:

| Name | Type | Description
| :- | :- | :-
| bottom | int | The padding bottom in pixel.
| left | int | The padding left in pixel.
| right | int | The padding right in pixel.
| top | int | The padding top in pixel.   

### Scriptable

Scriptable options at grid level accept a callback which is called for each of the underlying data values. See more details in [Configuring charts](../configuration/ScriptableOptions) section. 

```java
// creates a radial axis 
RadialAxis axis = new RadialAxis(chart);
// enables point labels
axis.getPointLabels().setDisplay(true);
// sets the option by a callback 
axis.getPointLabels().setColor(new ScaleColorCallback() {

   @Override
   public IsColor invoke(Axis axis, ScaleScriptableContext context) {
      // logic
      return color;
   }
});
```

The following options can be set by a callback:

| Name | Callback | Possible returned types
| :- | :- | :- 
| backdropColor | [ScaleColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ScaleColorCallback.html) | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)
| color | [ScaleColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ScaleColorCallback.html) | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)
| font | [ScaleFontCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ScaleFontCallback.html) | [FontOptions](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/FontOptions.html)
| padding | [ScaleSimplePaddingCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ScaleSimplePaddingCallback.html) | int

### Callback

Callback implementation can transform data labels to point labels. The default implementation simply returns the current string.

To apply an own callback, you can set a [RadialPointLabelCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/RadialPointLabelCallback.html) instance to the axis options, as following:

```java
// creates a radial axis 
RadialAxis axis = new RadialAxis(chart);
// enables point labels
axis.getPointLabels().setDisplay(true);
// sets callback
axis.getPointLabels().setCallBack(new RadialPointLabelCallback() {

   /**
    * Callback function to transform data labels to point labels. The default implementation simply returns the current string.
    * 
    * @param axis axis instance where this callback as been defined
    * @param item label of current label
    * @return new label to apply to point label
    */
    @Override
    public String onCallback(Axis axis, String item)
      // logic
      return item;
   }
         
});
```
