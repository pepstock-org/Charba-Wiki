---
id: AngleLines
title:  Angle lines
hide_title: true
sidebar_label: Angle lines
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Angle lines

The [angle lines](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/RadialAngleLines.html) options are used to configure angled lines that radiate from the center of the chart to the point labels.

<img src={useBaseUrl('/img/angleLines.png')} />

:::note
The angle lines can be **ONLY** applied to radial axes.<br/>
These options only apply if **display** is **true**.
:::

The [RadialAngleLines](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/RadialAngleLines.html) provides all **set** and **get** methods to manage the configuration, as following:

```java
// creates a radial axis 
RadialAxis axis = new RadialAxis(chart);
// enables the angle lines
axis.getAngleLines().setDisplay(true);
// sets and gets the line width value
axis.getAngleLines().setLineWidth(2);

int lineWidth = axis.getAngleLines().getLineWidth();
```

Table with options:

| Name | Type | Scriptable | Description
| -----| ---- | ---------- | -----------
| borderDash | int[] | [Yes](#scriptable) | Length and spacing of dashes on grid lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| borderDashOffset | double | [Yes](#scriptable) | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) | Color of angled lines.
| display | boolean | - | If `true`, angle lines are shown.
| lineWidth | int | [Yes](#scriptable) | Width of angled lines.

### Scriptable

Scriptable options at grid level accept a callback which is called for each of the underlying data values. See more details in [Configuring charts](../configuration/ScriptableOptions) section. 

```java
// creates a radial axis 
RadialAxis axis = new RadialAxis(chart);
// enables the angle lines
axis.getAngleLines().setDisplay(true);
// sets the option by a callback 
axis.getAngleLines().setColor(new ScaleColorCallback() {

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
| borderDash | [ScaleBorderDashCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ScaleBorderDashCallback.html) | int
| borderDashOffset | [ScaleBorderDashOffsetCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ScaleBorderDashOffsetCallback.html) | double
| color | [ScaleColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ScaleColorCallback.html) | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)
| lineWidth | [ScaleLineWidthCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ScaleLineWidthCallback.html) | int
