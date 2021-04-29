---
id: Title
title: Title
hide_title: true
sidebar_label: Title
---
## Title

A title is a name or words used to describe a chart.

To get, change and apply own properties, you can invoke the **set** and **get** methods, as following:

```java
// sets the text of title
chart.getOptions().getTitle().setText("My title of chart");
// enables the title and setting to use red color for text
chart.getOptions().getTitle().setDisplay(true);
chart.getOptions().getTitle().setColor("red");

IsColor color = chart.getOptions().getTitle().getColor();
boolean display = chart.getOptions().getTitle().isDisplay();
```

The defaults values are set in global defaults options, see [default global title options](../defaults/DefaultsCharts#title).

The following are the attributes that you can set:

| Name | Type | Description
| :- | :- | :- 
| align | [ElementAlign](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/ElementAlign.html) | Alignment of the title.
| color | String - [IsColor](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html) | Color of text of the title.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options). 
| display | boolean | If `true`, the title is shown.
| font | [Font](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/options/Font.html) | Font of title text. The default value is the global font with the style set to FontStyle.BOLD.<br/>See [Font](../defaults/DefaultsCharts#font).
| fullSize | boolean | Marks that this box should take the full width/height of the canvas (moving other boxes).
| padding | [Padding](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/configuration/Padding.html) | Number of pixels to add above and below the title text.<br/>See [padding documentation](Commons#padding) for more details.
| position | [Position](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/Position.html) | Position of title.
