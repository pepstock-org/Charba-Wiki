---
id: Plugins
title: Plugins
hide_title: true
sidebar_label: Implementing a plugin
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Plugins

Plugins are the most efficient way to customize or change the default behavior of a chart. Leveraging on [Chart.JS](http://www.chartjs.org/) implementation, **Charba** provides the features to set a plugin both at global and at chart level (inline plugin).

<img src={useBaseUrl('/img/plugins.png')} />

A plugin must implement the [Plugin](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Plugin.html) interface.

```java
// creates my plugin 
Plugin myPlugin = new Plugin() {
			
	@Override
	public String getId() {
		return "myplugin";
	}

	@Override
	public boolean onBeforeUpdate(IsChart chart, PluginUpdateArgument argument) {
		// my logic
		return true;
	}
	
};
// registers my plugin to the chart
chart.getPlugins().add(myPlugin);
```

An easy way to implement a plugin is also to extends the [AbstractPlugin](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/plugins/AbstractPlugin.html) class as following: 

```java
// creates my plugin 
AbstractPlugin myPlugin = new AbstractPlugin("myplugin") {

	@Override
	public boolean onBeforeUpdate(IsChart chart, PluginUpdateArgument argument) {
		// my logic
		return true;
	}

};
// registers my plugin to the chart
chart.getPlugins().add(myPlugin);
```

## Registering

Every plugin must be registered to the chart or the the default before the charts will start using it.

### Globally

A plugin can be registered/unregistered at global level, which means that the plugin instance will be triggered by all charts instances. 

The global registration is performed as following:

```java
// --------------------------------
// REGISTER plugin for all charts
// --------------------------------
Defaults.get().getPlugins().register(new ChartBackgroundColor());

// --------------------------------
// UNREGISTER the "pluginid" plugin
// --------------------------------
Defaults.get().getPlugins().unregister("pluginid");
```

### At chart level

A plugin can be registered/unregistered at chart level, which means that the plugin instance will be triggered only by that chart instance. 

The chart registration is performed as following:

```java
// creates my plugin 
AbstractPlugin myPlugin = new AbstractPlugin("myplugin") {

	@Override
	public boolean onBeforeUpdate(IsChart chart, PluginUpdateArgument argument) {
		// my logic
		return true;
	}

};
// registers my plugin to the chart
chart.getPlugins().add(myPlugin);
```

## Plugin ID

Plugins must define a unique id in order to be configurable.

This id should follow the name convention (otherwise an [illegal argument](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalArgumentException.html) exception will be thrown):

 * can not start with a dot or an underscore
 * can not contain any non-URL-safe characters
 * can not contain upper case letters

```java
// creates my plugin 
AbstractPlugin myPlugin = new AbstractPlugin("_myPlugin") {
	...
};
// registers my plugin to the chart
chart.getPlugins().add(myPlugin); // <-- throws IllegalArgumentException
                                  // because there is '_' and an char in upper-case
```

## Options

A plugin could need to be configured. Apart the public methods that every plugin can expose to set specific values and to be aligned with [Chart.JS](http://www.chartjs.org/) way to pass configuration to plugins, the chart options can host the configuration of the plugin which could be read at runtime.

The [plugins](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Plugins.html) configuration is nested in the configuration using 

```java
// get plugins options container from chart configuration
Plugins plugins = chart.getOptions().getPlugins();
```

The plugin options must extend [AbstractPluginOptions](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/plugins/AbstractPluginOptions.html) and leverage on available methods to store the plugin configuration.

Furthermore, every plugin needs to have a factory which must be an implementation of [AbstractPluginOptionsFactory](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/plugins/AbstractPluginOptionsFactory.html)) interface necessary to enable **Charba** to create your options, passing the java script object which maintain the configuration.

A plugin can consume configuration by options from:

  * [Global options](#global-options)
  * [Global chart options](#global-chart-type-options), based on chart type
  * [Chart options](#chart-configuration)
  * [Datasets](#dataset-configuration) 

### Global options

A plugin can have a default configuration that can be used from all plugin instances on all charts.

Here are some examples how to get and store the options in the defaults: 

```java
// creates the options
ChartBackgroundColorOptions option = new ChartBackgroundColorOptions();
option.setBackgroundColor(HtmlColor.GREEN);

// --------------------------------------
// STORING plugin options
// --------------------------------------
// stores the plugin options by plugin ID
Defaults.get().getGlobal().getPlugin().setOptions(ChartBackgroundColor.ID, options);
// stores the plugin options without plugin ID
Defaults.get().getGlobal().getPlugin().setOptions(options);
// stores the plugin options directly by the options
options.store();

// --------------------------------------
// GETTING plugin options
// --------------------------------------
if (Defaults.get().getGlobal().getPlugin().hasOptions(ChartBackgroundColor.ID)){
   // retrieves the plugin options by plugin ID
   options = Defaults.get().getGlobal().getPlugin().getOptions(ChartBackgroundColor.ID, ChartBackgroundColor.FACTORY);
   // retrieves the plugin options without plugin ID
   options = Defaults.get().getGlobal().getPlugin().getOptions(ChartBackgroundColor.FACTORY);
}
```

### Global chart type options

You can set a default plugin configuration for a specific type of chart that can be used from all plugin instances on all charts of that type.

Here are some examples how to get and store the options in the chart type defaults options: 

```java
// creates the options
ChartBackgroundColorOptions option = new ChartBackgroundColorOptions();
option.setBackgroundColor(HtmlColor.GREEN);

// --------------------------------------
// STORING plugin options
// --------------------------------------
// stores the plugin options by plugin ID
Defaults.get().getOptions(ChartType.BAR).getPlugin().setOptions(ChartBackgroundColor.ID, options);
// stores the plugin options without plugin ID
Defaults.get().getOptions(ChartType.BAR).getPlugin().setOptions(options);
// stores the plugin options directly by the options
options.store(ChartType.BAR);

// --------------------------------------
// GETTING plugin options
// --------------------------------------
if (Defaults.get().getOptions(ChartType.BAR).getPlugin().hasOptions(ChartBackgroundColor.ID)){
   // retrieves the plugin options by plugin ID
   options = Defaults.get().getOptions(ChartType.BAR).getPlugin().getOptions(ChartBackgroundColor.ID, ChartBackgroundColor.FACTORY);
   // retrieves the plugin options without plugin ID
   options = Defaults.get().getOptions(ChartType.BAR).getPlugin().getOptions(ChartBackgroundColor.FACTORY);
}
```

### Chart configuration

You can set a plugin configuration for a chart that can be used only on that chart instance.

Here are some examples how to get and store the options in the chart configuration: 

```java
// creates the chart
BarChart chart = new BarChart();
// creates the options
ChartBackgroundColorOptions option = new ChartBackgroundColorOptions();
option.setBackgroundColor(HtmlColor.GREEN);

// --------------------------------------
// STORING plugin options
// --------------------------------------
// stores the plugin options by plugin ID
chart.getOptions().getPlugin().setOptions(ChartBackgroundColor.ID, options);
// stores the plugin options without plugin ID
chart.getOptions().getPlugin().setOptions(options);
// stores the plugin options directly by the options
options.store(chart);

// --------------------------------------
// GETTING plugin options
// --------------------------------------
if (chart.getOptions().getPlugin().hasOptions(ChartBackgroundColor.ID)){
   // retrieves the plugin options by plugin ID
   chart.getOptions().getPlugin().getOptions(ChartBackgroundColor.ID, ChartBackgroundColor.FACTORY);
   //retrieves the plugin options without plugin ID
   chart.getOptions().getPlugin().getOptions(ChartBackgroundColor.FACTORY);
}
```

### Dataset configuration

A plugin can also act at dataset level and you can set a plugin configuration for a dataset that can be used only on that dataset instance.

Here are some examples how to get and store the options in the dataset configuration: 

```java
// creates the chart
BarChart chart = new BarChart();
// creates the dataset
BarDataset dataset = chart.newDataset();
// creates the options
DataLabelsOptions option = new DataLabelsOptions();
option.setDisplay(true);

// --------------------------------------
// STORING plugin options
// --------------------------------------
// stores the plugin options by plugin ID
dataset.setOptions(DataLabelsPlugin.ID, options);
// stores the plugin options without plugin ID
dataset.getPlugin().setOptions(options);
// stores the plugin options directly by the options
options.store(dataset);

// --------------------------------------
// GETTING plugin options
// --------------------------------------
if (dataset.hasOptions(DataLabelsPlugin.ID)){
   // --------------------------------------
   // retrieve the plugin options by plugin ID
   // --------------------------------------
   options = dataset.getOptions(DataLabelsPlugin.ID, DataLabelsPlugin.FACTORY);
   // --------------------------------------
   // or retrieve the plugin options without plugin ID
   // --------------------------------------
   options = dataset.getOptions(DataLabelsPlugin.FACTORY);
}
```

### Accessing to the options from plugins

The implementation of plugin usually needs to access to the plugin configuration to enable the right behaviors based on the user configuration.

Inside the plugin, the chart instance can provide a [method](./charts/Api#getwholeoptions) to get the whole configuration of the chart where also the defaults at different levels are applied.

```java
// creates my plugin 
AbstractPlugin myPlugin = new AbstractPlugin("myplugin") {

	@Override
	public boolean onBeforeUpdate(IsChart chart, PluginUpdateArgument argument) {
		// get options reference
		MyPluginOptions myOptions = null;
		// loads chart options for the chart
		IsDefaultScaledOptions options = chart.getWholeOptions();
		// retrieves the plugin options
		if (options.getPlugins().hasOptions("myplugin")) {
			myOptions = options.getPlugins().getOptions("myplugin", myFactory);
		}
		return true;
	}

};
// registers my plugin to the chart
chart.getPlugins().add(myPlugin);
```

## Disabling plugins 

You can also enable or disable them at chart level, as following:

```java
// disables the tooltip to the chart
chart.getOptions().getPlugins().setEnabled(DefaultPluginId.TOOLTIP, false);

// disables the "pluginid" plugin
chart.getOptions().getPlugins().setEnabled("pluginid", true);
```

[Chart.JS](http://www.chartjs.org/) provides a set of plugins out-of-the-box. All their ids are mapped to [DefaultPluginId](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/DefaultPluginId.html) enumeration.

## Hooks

[Plugin](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Plugin.html) interface provides all possible hooks or methods which will invoked during the life cycle of the chart or when an event or conditions is occurring.

All hooks are defined with a default therefore you can implement only what you need. The hooks have got different purposes:

 * [Initialization](#initializating)
 * [Registering and activating](#registering-and-activating)
 * [Updating or reconfiguring](#updating-or-reconfiguring)
 * [Rendering](#rendering)
 * [Building scales](#building-scales)
 * [Tooltip drawing](#tooltip-drawing)
 * [Events](#events)
 * [Resizing, resetting and destroying](#resizing-resetting-and-destroying)

### Initializating

Plugins are notified during the initialization process.

The process is triggered when **[draw method](./charts/Api#draw)** of the chart is invoked.

The following hooks (the following one are the methods definitions in the [Plugin](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Plugin.html)) can be used to setup data needed for the plugin to operate:

```java
/**
 * Called before initializing configuration of 'chart'.
 * 
 * @param chart the chart instance.
 */
default void onConfigure(IsChart chart) {
}

/**
 * Called before initializing 'chart'.
 * 
 * @param chart the chart instance.
 */
default void onBeforeInit(IsChart chart) {
}

/**
 * Called after 'chart' has been initialized and before the first update.
 * 
 * @param chart the chart instance.
 * @param nativeChart CHART.JS chart instance
 */
default void onAfterInit(IsChart chart, Chart nativeChart) {
}
/**
 * Called after the chart as been resized.
 * 
 * @param chart the chart instance.
 * @param argument argument of method which contains the new canvas display size
 */
default void onResize(IsChart chart, PluginResizeArgument argument) {
}
```

The initialization process is documented in the flowchart below.

<img src={useBaseUrl('/img/pluginFlowCharts-Chart Init.png')} />

### Registering and activating

Plugins are notified during throughout the plugin installation and activation process. 

The following hooks (the following one are the methods definitions in the [Plugin](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Plugin.html)) can be used to interact during the plugin registering or activating:

```java
/**
 * Called when plugin is installed for this chart instance.
 * This hook is also invoked for disabled plugins (options equals to false).
 * 
 * @param chart the chart instance.
 */
default void onInstall(IsChart chart) {
}

/**
 * Called when a plugin is starting.
 * This happens when chart is created or plugin is enabled.
 * 
 * @param chart the chart instance.
 */
default void onStart(IsChart chart) {
}

/**
 * Called when a plugin stopping.<br>
 * This happens when chart is destroyed or plugin is disabled.
 * 
 * @param chart the chart instance.
 */
default void onStop(IsChart chart) {
}

/**
 * Called after chart is destroyed on all plugins that were installed for that chart.
 * This hook is also invoked for disabled plugins (options equals to false).
 * 
 * @param chart the chart instance.
 */
default void onUninstall(IsChart chart) {
}
```

### Updating or reconfiguring

Plugins are notified during throughout the [update](./charts/Api#update) process. 

The process is triggered when 

 * **[draw method](./charts/Api#draw)** of the chart is invoked.
 * **[update method](./charts/Api#update)** of the chart is invoked.
 * **[reconfigure method](./charts/Api#reconfigure)** of the chart is invoked.
 * **[resize method](./charts/Api#resize)** of the chart is invoked.
 * a resize event from the browser has been caught by [Chart.JS](http://www.chartjs.org/).

The same notification are provided even if the chart is [reconfigured](./charts/Api#reconfigure). The following hooks (the following one are the methods definitions in the [Plugin](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Plugin.html)) can be used to interact during the chart updating or reconfiguring:

```java
/**
 * Called before every drawing cycle, coming from initialization, updating or rendering of 
 * chart.
 * 
 * @param chart the chart instance
 * @param overridePreviousUpdate if true the drawing was already running.
 */
default void onBeginDrawing(IsChart chart, boolean overridePreviousUpdate) {
}

/**
 * Called before updating 'chart'.
 * If any plugin returns false, the update is cancelled (and thus subsequent render(s)) 
 * until another 'update' is triggered.
 * 
 * @param chart the chart instance.
 * @param argument the argument passed for update
 * @return false to cancel the chart update.
 */
default boolean onBeforeUpdate(IsChart chart, PluginUpdateArgument argument) {
	return true;
}

/**
 * Called after 'chart' has been updated and before rendering.
 * Note that this hook will not be called if the chart update has been previously cancelled.
 * 
 * @param chart the chart instance.
 * @param argument the argument passed for update
 */
default void onAfterUpdate(IsChart chart, PluginUpdateArgument argument) {
}

/**
 * Called during the update process, before any chart elements have been created.
 * 
 * @param chart the chart instance.
 */
default void onBeforeElementsUpdate(IsChart chart) {
}

/**
 * Called before laying out 'chart'.
 * If any plugin returns false, the layout update is cancelled until another 'update' is
 * triggered.
 * 
 * @param chart the chart instance.
 * @return false to cancel the chart layout.
 */
default boolean onBeforeLayout(IsChart chart) {
	return true;
}

/**
 * Called after the 'chart' has been layed out.
 * Note that this hook will not be called if the layout update has been previously cancelled.
 * 
 * @param chart the chart instance.
 */
default void onAfterLayout(IsChart chart) {
}

/**
 * Called before updating the 'chart' datasets.
 * If any plugin returns false, the datasets update is cancelled until another 
 * 'update' is triggered.
 * 
 * @param chart the chart instance.
 * @param argument the argument passed for update
 * @return false to cancel the datasets update.
 */
default boolean onBeforeDatasetsUpdate(IsChart chart, PluginUpdateArgument argument) {
	return true;
}

/**
 * Called after the 'chart' datasets have been updated.
 * Note that this hook will not be called if the datasets update has been previously cancelled.
 * 
 * @param chart the chart instance.
 * @param argument the argument passed for update
 */
default void onAfterDatasetsUpdate(IsChart chart, PluginUpdateArgument argument) {
}

/**
 * Called before updating the 'chart' dataset at the given 'args.index'.
 * If any plugin returns false, the datasets update is cancelled until another
 * 'update' is triggered.
 * 
 * @param chart the chart instance.
 * @param item the dataset item.
 * @return false to cancel the chart datasets drawing.
 */
default boolean onBeforeDatasetUpdate(IsChart chart, PluginDatasetArgument item) {
	return true;
}

/**
 * Called after the 'chart' datasets at the given 'args.index' has been updated.
 * Note that this hook will not be called if the datasets update has been previously cancelled.
 * 
 * @param chart the chart instance.
 * @param item the dataset item.
 */
default void onAfterDatasetUpdate(IsChart chart, PluginDatasetArgument item) {
}
```

The updating and reconfiguring process is documented in the flowchart below.

<img src={useBaseUrl('/img/pluginFlowCharts-Chart update.png')} />

### Rendering

Plugins can interact with the chart throughout the render process. 

The process is triggered when 

 * [updating or reconfiguring process](#updating-or-reconfiguring) of the chart is invoked.
 * **[render method](./charts/Api#render)** of the chart is invoked.

The following hooks (the following one are the methods definitions in the [Plugin](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Plugin.html)) can be used to interact during the chart rendering:

```java
/**
 * Called before rendering 'chart'. 
 * If any plugin returns false, the rendering is cancelled until another 'render' is triggered.
 * 
 * @param chart the chart instance.
 * @return false to cancel the chart rendering.
 */
default boolean onBeforeRender(IsChart chart) {
	return true;
}

/**
 * Called after the 'chart' has been fully rendered (and animation completed).
 * Note that this hook will not be called if the rendering has been previously cancelled.
 * 
 * @param chart the chart instance.
 */
default void onAfterRender(IsChart chart) {
}

/**
 * Called before drawing 'chart' at every animation frame. If any plugin returns false,
 * the frame drawing is cancelled until another 'render' is triggered.
 * 
 * @param chart the chart instance.
 * @return false to cancel the chart drawing.
 */
default boolean onBeforeDraw(IsChart chart) {
	return true;
}

/**
 * Called after the 'chart' has been drawn.
 * Note that this hook will not be called if the drawing has been previously cancelled.
 * 
 * @param chart the chart instance.
 */
default void onAfterDraw(IsChart chart) {
}

/**
 * Called before drawing the 'chart' datasets. 
 * If any plugin returns false, the datasets drawing is cancelled until another 'render'
 * is triggered.
 * 
 * @param chart the chart instance.
 * @return false to cancel the chart datasets drawing.
 */
default boolean onBeforeDatasetsDraw(IsChart chart) {
	return true;
}

/**
 * Called after the 'chart' datasets have been drawn.
 * Note that this hook will not be called if the datasets drawing has been previously
 * cancelled.
 * 
 * @param chart the chart instance.
 */
default void onAfterDatasetsDraw(IsChart chart) {
}

/**
 * Called before drawing the 'chart' dataset at the given 'index' (datasets are drawn
 * in the reverse order).
 * If any plugin returns false, the datasets drawing is cancelled until another
 * 'render' is triggered.
 * 
 * @param chart the chart instance.
 * @param item the dataset item.
 * @return false to cancel the chart datasets drawing.
 */
default boolean onBeforeDatasetDraw(IsChart chart, PluginDatasetArgument item) {
	return true;
}

/**
 * Called after the 'chart' datasets at the given 'args.index' have been drawn (datasets
 * are drawn in the reverse order).
 * Note that this hook will not be called if the datasets drawing has been previously cancelled.
 * 
 * @param chart the chart instance.
 * @param item the dataset item.
 */
default void onAfterDatasetDraw(IsChart chart, PluginDatasetArgument item) {
}

/**
 * Called after every drawing cycle, coming from initialization, updating or rendering of chart.
 * 
 * @param chart the chart instance
 */
default void onEndDrawing(IsChart chart) {
}
```

The rendering process is documented in the flowchart below.

<img src={useBaseUrl('/img/pluginFlowCharts-Chart render.png')} />

### Building scales

Plugins are notified during the scales and ticks building process. 

The process is triggered when [updating or reconfiguring process](#updating-or-reconfiguring) of the chart is invoked.

The following hooks (the following one are the methods definitions in the [Plugin](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Plugin.html)) can be used to interact during the chart updating or reconfiguring:

```java
/**
 * Called before scale data limits are calculated.
 * This hook is called separately for each scale in the chart.
 * 
 * @param chart the chart instance.
 * @param argument argument of method which contains the scale instance.
 */
default void onBeforeDataLimits(IsChart chart, PluginScaleArgument argument) {
}

/**
 * Called after scale data limits are calculated.
 * This hook is called separately for each scale in the chart.
 * 
 * @param chart the chart instance.
 * @param argument argument of method which contains the scale instance.
 */
default void onAfterDataLimits(IsChart chart, PluginScaleArgument argument) {
}

/**
 * Called before scale builds its ticks.
 * This hook is called separately for each scale in the chart.
 * 
 * @param chart the chart instance.
 * @param argument argument of method which contains the scale instance.
 */
default void onBeforeBuildTicks(IsChart chart, PluginScaleArgument argument) {
}

/**
 * Called after scale has build its ticks.
 * This hook is called separately for each scale in the chart.
 * 
 * @param chart the chart instance.
 * @param argument argument of method which contains the scale instance.
 */
default void onAfterBuildTicks(IsChart chart, PluginScaleArgument argument) {
}
```

### Tooltip drawing

Plugins are notified during the tooltip drawing process. 

The following hooks (the following one are the methods definitions in the [Plugin](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Plugin.html)) can be used to interact during the tooltip drawing:

```java
/**
 * Called before drawing the 'tooltip'.
 * If any plugin returns false, the tooltip drawing is cancelled until another 'render' 
 * is triggered.
 * 
 * @param chart the chart instance.
 * @param item The tooltip instance.
 * @return false to cancel the chart tooltip drawing.
 */
default boolean onBeforeTooltipDraw(IsChart chart, PluginTooltipArgument item) {
	return true;
}

/**
 * Called after drawing the 'tooltip'.
 * Note that this hook will not be called if the tooltip drawing has been previously cancelled.
 * 
 * @param chart the chart instance.
 * @param item The tooltip instance.
 */
default void onAfterTooltipDraw(IsChart chart, PluginTooltipArgument item) {
}
```

### Events

Plugins are notified during the chart canvas event process. 

The process is triggered when a resize event from the browser has been caught by [Chart.JS](http://www.chartjs.org/).

The following hooks (the following one are the methods definitions in the [Plugin](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Plugin.html)) can be used to interact during the canvas event process:

```java
/**
 * Called before processing the specified 'event'.
 * If any plugin returns false, the event will be discarded.
 * 
 * @param chart the chart instance.
 * @param argument instance which contains event context
 * @return false to discard the event.
 */
default boolean onBeforeEvent(IsChart chart, PluginEventArgument argument) {
	return true;
}

/**
 * Called after the 'event' has been consumed.
 * Note that this hook will not be called if the 'event' has been previously discarded.
 * 
 * @param chart the chart instance.
 * @param argument instance which contains event context
 */
default void onAfterEvent(IsChart chart, PluginEventArgument argument) {
}
```

### Resizing, resetting and destroying

Plugins are notified during the resize, reset and destroy processes. 

The process is triggered when 

 * **[reset method](./charts/Api#reset)** of the chart is invoked.
 * **[destroy method](./charts/Api#destroy)** of the chart is invoked.
 * **[resize method](./charts/Api#resize)** of the chart is invoked.
 * a resize event from the browser has been caught by [Chart.JS](http://www.chartjs.org/).

The following hooks (the following one are the methods definitions in the [Plugin](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Plugin.html)) can be used to interact during the resize, reset and destroy processes:

```java
/**
 * Called after the chart as been resized.
 * 
 * @param chart the chart instance.
 * @param argument argument of method which contains the new canvas display size.
 */
default void onResize(IsChart chart, PluginResizeArgument argument) {
}

/**
 * Called during chart reset.
 * 
 * @param chart the chart instance.
 */
default void onReset(IsChart chart) {
}

/**
 * Called after the chart as been destroyed.
 * 
 * @param chart the chart instance.
 */
default void onDestroy(IsChart chart) {
}
```

## Importing existing Chart.JS plugins 

Some plugins, written in java script, are already developed and available for [Chart.JS](http://www.chartjs.org/).

**Charba** provides you the way to import and leverage on these plugins.

The following list of steps is related to GWT projects. For J2CL applications, you must implement an [AbstractInjectableResource](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/resources/AbstractInjectableResource.html) in order to provide the javascript content as strings.

The steps are the following:

 1. take the java script plugin and store in your project in a resource folder 
 1. create a GWT [ClientBundle](http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html) to get the java script plugin as GWT [TextResource](http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html#TextResource)
 1. use **Charba** [Injector](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Injector.html) to inject the plugin. It's **IMPORTANT** to inject [Chart.JS](http://www.chartjs.org/) before the plugin because usually the plugin registers itself and therefore [Chart.JS](http://www.chartjs.org/) must be available
 1. Create a [plugin options container]((http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/plugins/AbstractPluginOptions.html)), with the properties to configure the plugin (see [above](#options))
 1. Create the view with a chart with the statement to activate the plugin

Here is an example, how to include [Stacked100](https://github.com/y-takey/chartjs-plugin-stacked100) plugin:

 * Get `stacked100` plugin from [GitHub](https://github.com/y-takey/chartjs-plugin-stacked100/blob/master/src/index.js) and store the javascript in your project, in this example we are using the **Charba** showcase paths:
    * /src/org/pepstock/charba/showcase/client/resources/js/chartjs-plugin-stacked100.js
 * Create a client bundle (called in this example `org.pepstock.charba.showcase.client.resources.MyResources.java`) with the plugin reference:

```java
package org.pepstock.charba.showcase.client.resources;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.TextResource;

public interface MyResources extends ClientBundle {
	
	public static final MyResources INSTANCE = GWT.create(MyResources.class);

	@Source("js/chartjs-plugin-stacked100.js")
	TextResource chartJsStacked100Source();

}    
```

 * Inject the javascript resource in your main page or before using the plugin:

```java
// gets text resource with plugin code
TextResource pluginCode = MyResources.INSTANCE.chartJsStacked100Source();
// create an injectable resource by text resource of plugin code
InjectableTextResource plugin = new InjectableTextResource(pluginCode);
// inject plugin in DOM document
Injector.ensureInjected(MyResources.INSTANCE.chartJsStacked100Source());
```
 
 * Create a plugin options object to store plugin configuration (in this case an inner class):
 
```java
private static class Stacked100Options extends AbstractPluginOptions {

	private Key enableKey = Key.create("enable");

	Stacked100Options() {
		super("stacked100");
	}

	void setEnable(boolean enable) {
		setValue(enableKey, enable);
	}
} 
```

 * Add a plugin options object to your chart instance:

```java
Stacked100Options options = new Stacked100Options();
options.setEnable(true);
options.store(chart);
```

And now your chart instance is leveraging on `stacked100` plugin.

:::note
Usually all [Chart.JS](http://www.chartjs.org/) are registering themselves automatically, at global level.<br/>If the plugin does not register itself, you must register on the chart instances and the above procedure will be more complex.
:::

#### Special plugin options case

Unfortunately some [Chart.JS](https://www.chartjs.org/docs/master/developers/plugins#plugin-options) plugins implementations are not respecting the described standard way to store the plugin options.

Therefore **Charba** provides in the configurable options a method to add an additional configuration.

The `merge` method has been created on configuration options (all elements) to add a java script object in another one. This enables to add the plugin configuration in any other configuration object of **Charba**. 
