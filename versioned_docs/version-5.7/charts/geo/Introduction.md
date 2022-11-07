---
id: Geo
title: Introduction
hide_title: true
sidebar_label: Introduction
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Geographic map charts

**Charba** provides out of the box the feature to enable some geographic map chart, leveraging on [Chart.js Geo](https://github.com/sgratzl/chartjs-chart-geo).

The [Chart.js Geo](https://github.com/sgratzl/chartjs-chart-geo) is *native javascript* implementation and **Charba** provides the wrapper in order to be able to use it.

<img src={useBaseUrl('/img/choroplethEarth.png')} />

Currently the [Chart.js Geo](https://github.com/sgratzl/chartjs-chart-geo), ready to use inside **Charba**, can provide the following charts types:

  * [Choropleth](ChartChoropleth) which can be used to render maps with the area filled according to some numerical value.
  * [BubbleMap](ChartBubbleMap), as know as Proportional Symbol, which is used to render maps with dots that are scaled according to some numerical value. 

## Maps

The maps used to render the chart must be based on [TopoJSON](https://github.com/topojson/topojson) definitions.

[TopoJSON](https://github.com/topojson/topojson) is an extension of GeoJSON that encodes topology. [TopoJSON](https://github.com/topojson/topojson) is a topological geospatial data format. In contrast to a geometry, where each shape is encoded with separate (and often redundant) arrays of coordinates, a topology encodes sequences of coordinates in line fragments called arcs that can be shared. For example, the border between 2 states is an arc that is shared by both polygons.

The main benefit of a topology is that it improves shape simplification by avoiding artifacts that would be caused by simplifying shapes independently. It also enables applications like map coloring and selective meshing, and makes the format more compact by removing redundant coordinates. 

Here is the [TopoJSON specification](https://github.com/topojson/topojson-specification)

However, **Charba** does not include any [TopoJSON](https://github.com/topojson/topojson) files itself. Some useful resources are the following:

  * US map: https://www.npmjs.com/package/us-atlas
  * World map: https://www.npmjs.com/package/world-atlas
  * [TopoJSON](https://github.com/topojson/topojson) collection: https://github.com/deldersveld/topojson

### Loading

The maps can be loaded:

  * at runtime, invoking some HTTP services in order to get the needed [TopoJSON](https://github.com/topojson/topojson) definitions.
  * at project level, by [GWT Web toolkit clientBundle](http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html#TextResource), if you are developing a [GWT Web toolkit](http://www.gwtproject.org/) project.
  * at project level, by the implementation of a [AbstractInjectableResource](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/resources/AbstractInjectableResource.html) class.

An example how to load a map by [GWT Web toolkit clientBundle](http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html#TextResource) is the following:
  
  1. take the [TopoJSON](https://github.com/topojson/topojson) definition and store in your project in a resource folder.
  1. create a GWT [ClientBundle](http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html) to get the [TopoJSON](https://github.com/topojson/topojson) definition as GWT [TextResource](http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html#TextResource)
  1. use [GeoUtil](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/geo/GeoUtil.html) to get a [TopoJson](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/geo/TopoJson.html) instance.

An example how to load a map by [GWT Web toolkit clientBundle](http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html#TextResource) is the following:

 * get the world map JSON file from [NPMjs](https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json) and store it in your project, in this example we are using the **Charba** showcase paths:
    * `/src/org/pepstock/charba/showcase/client/resources/topojson/countries-50m.json`
 * create a client bundle (called in this example `org.pepstock.charba.showcase.client.resources.MyResources.java`) with the [TopoJSON](https://github.com/topojson/topojson) map reference:

```java
package org.pepstock.charba.showcase.client.resources;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.TextResource;

public interface MyResources extends ClientBundle {
	
	public static final MyResources INSTANCE = GWT.create(MyResources.class);

	@Source("topojson/countries-50m.json")
	TextResource topojsonEarth();

}    
```

 * use [GeoUtil](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/geo/GeoUtil.html) to get a [TopoJson](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/geo/TopoJson.html) instance.

```java
// gets the topoJSON map as string
String topoJsonText = MyResources.INSTANCE.topojsonEarth().getText();
// creates a topoJSON object, needed for further computations
TopoJson world = GeoUtil.createTopoJson(topoJsonText);
```

## Features

A topology is a [TopoJSON](https://github.com/topojson/topojson) object where the type member’s value is the topology.

A topology must have a member with the name `objects` whose value is another object. The value of each member of this object is a geometry object.

**Charba** provides methods, by [GeoUtil](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/geo/GeoUtil.html), to parse the [TopoJSON](https://github.com/topojson/topojson) definition and provide a list of [Features](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/geo/Feature.html) which are mapping the topology needed to render in the chart.

Every [TopoJSON](https://github.com/topojson/topojson) definition object could be built with a different name spaces, therefore the node name to use as root of object must be provided by the developer.

 ```java
// gets the topoJSON map as string
String topoJsonText = MyResources.INSTANCE.topojsonEarth().getText();
// creates a topoJSON object, needed for further computations
TopoJson world = GeoUtil.createTopoJson(topoJsonText);
// the node name in "objects" one where the topology
// are stored is "countries" 
List<Feature> features = GeoUtil.features(world, "countries");
```

A [Feature](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/geo/Feature.html) contains the properties of the topology.

Even in this case, the properties names are not standard. Every feature can have own property names.

```java
 // defines the property name "name"
 private static final Key NAME = Key.create("name");
... 
// gets the topoJSON map as string
String topoJsonText = MyResources.INSTANCE.topojsonEarth().getText();
// creates a topoJSON object, needed for further computations
TopoJson world = GeoUtil.createTopoJson(topoJsonText);
// the node name in "objects" one where the topology
// are stored is "countries" 
List<Feature> features = GeoUtil.features(world, "countries");

for (Feature feature: features) {
    // gets the name of the country by NAME key instance
	String countryName = feature.getStringProperty(NAME);
	...
}
```

### Labels

Usually the labels to display for the geographic map chart are stored in the properties of a [Feature](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/geo/Feature.html), for instance the name of the country, state, regions, provinces, cities and so on. As said above, the properties names are not fixed for all topologies and every topology can have own properties.

To improve to the access of topology definitions and to help the labels creation, **Charba** provides methods, by [GeoUtil](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/geo/GeoUtil.html), which creates a [Labels](https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/data/Labels.html) to set to the chart, as following:

```java
 // defines the property name "name"
 private static final Key NAME = Key.create("name");
... 
// gets the topoJSON map as string
String topoJsonText = MyResources.INSTANCE.topojsonEarth().getText();
// creates a topoJSON object, needed for further computations
TopoJson world = GeoUtil.createTopoJson(topoJsonText);
// the node name in "objects" one where the topology
// are stored is "countries" 
List<Feature> features = GeoUtil.features(world, "countries");
// creates a labels object with all countries names.
Labels labels = GeoUtil.loadLabels(features, NAME);
// sets labels to chart
chart.getData().setLabels(labels);
```
  
The labels enables the tooltip to shows the property related to the topology that you are representing.

<img src={useBaseUrl('/img/geoLabels.png')} />
