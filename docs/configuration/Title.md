---
id: Title
title: Title
hide_title: true
sidebar_label: Title
---
## Title

A title is a name or words used to describe a chart.

To change and apply own properties, you can invoke the **set** methods, as following:

```java
// example
chart.getOptions().getTitle().setText("My title of chart");

chart.getOptions().getTitle().setDisplay(true);
chart.getOptions().getTitle().setColor("red");

IsColor color = chart.getOptions().getTitle().getColor();
boolean display = chart.getOptions().getTitle().isDisplay();
```

The defaults values are set in global defaults options, see [default global title options](../defaults/DefaultsCharts#title).

The following are the attributes that you can set:

| Name | Type | Description
| :- | :- | :- 
| align | [ElementAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/ElementAlign.html) | Alignment of the title.
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | Color of text of the title.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options). 
| display | boolean | If `true`, the title is shown.
| font | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Font.html) | Font of title text. The default value is the global font with the style set to FontStyle.BOLD.<br/>See [Font](../defaults/DefaultsCharts#font).
| fullSize | boolean | Marks that this box should take the full width/height of the canvas (moving other boxes).
| padding | int | Number of pixels to add above and below the title text.
| position | [Position](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Position.html) | Position of title.
