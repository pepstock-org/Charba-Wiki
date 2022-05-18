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

There 2 ways to add plugins to **Charba**:

  1. implementing [Plugin](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/Plugin.html) interface.
  2. using [SmartPlugin](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/SmartPlugin.html) class.
  
### Using Plugin interface  

A plugin could be implemented by the [Plugin](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/Plugin.html) interface.

```java
// creates my plugin 
Plugin myPlugin = new Plugin(){
			
	@Override
	public String getId(){
		return "myplugin";
	}

	@Override
	public boolean onBeforeUpdate(IsChart chart, PluginUpdateArgument argument){
		// my logic
		return true;
	}
	
};
// registers my plugin to the chart
chart.getPlugins().add(myPlugin);
```

An easy way to implement a plugin is also to extends the [AbstractPlugin](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/AbstractPlugin.html) class as following: 

```java
// creates my plugin 
AbstractPlugin myPlugin = new AbstractPlugin("myplugin"){

	@Override
	public boolean onBeforeUpdate(IsChart chart, PluginUpdateArgument argument){
		// my logic
		return true;
	}

};
// registers my plugin to the chart
chart.getPlugins().add(myPlugin);
```

:::caution warning
Even if the interface implementation is a standard JAVA way to have plugins, this implementation forces CHART.JS to invoke all plugins hooks, even if not used. This could affect the performance of chart drawing.
:::

### Using SmartPlugin   

A [SmartPlugin](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/SmartPlugin.html) works as a configuration object where the user can add the hooks needed implementations.

```java
// creates my plugin 
SmartPlugin myPlugin = new SmartPlugin("myplugin");
// adds needed hooks
myPlugin.setBeforeUpdatehook(new BeforeUpdateHook() {

	@Override
	public boolean onBeforeUpdate(IsChart chart, PluginUpdateArgument argument){
		// my logic
		return true;
	}
	
};
// registers my plugin to the chart
chart.getPlugins().add(myPlugin);
```

In this case, CHART.JS will invoke ONLY the defined hook, ignoring all the others, improving the performance of chart drawing.

All plugin hooks could be implemented by a specific interface in [org.pepstock.charba.client.plugins.hooks](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/package-summary.html) or by a [native hook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/NativeHook.html) where you use JavaScript code.

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
// --------------------------------
// Using Plugin interface
// --------------------------------
// creates my plugin
AbstractPlugin myPlugin = new AbstractPlugin("myplugin"){

	@Override
	public boolean onBeforeUpdate(IsChart chart, PluginUpdateArgument argument){
		// my logic
		return true;
	}

};
// registers my plugin to the chart
chart.getPlugins().add(myPlugin);
// --------------------------------
// Using SmartPlugin
// --------------------------------
// creates my plugin
// creates my plugin 
SmartPlugin myPlugin = new SmartPlugin("myplugin");
// adds needed hooks
myPlugin.setBeforeUpdatehook(new BeforeUpdateHook() {

	@Override
	public boolean onBeforeUpdate(IsChart chart, PluginUpdateArgument argument){
		// my logic
		return true;
	}
	
};
// registers my plugin to the chart
chart.getPlugins().add(myPlugin);
```

## Plugin ID

Plugins must define a unique id in order to be configurable.

This id should follow the name convention (otherwise an [illegal argument](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/IllegalArgumentException.html) exception will be thrown):

 * can not start with a dot or an underscore
 * can not contain any non-URL-safe characters
 
```java
// --------------------------------
// Using Plugin interface
// --------------------------------
// creates my plugin 
AbstractPlugin myPlugin = new AbstractPlugin("_myPlugin"){
	...
}; // <-- throws IllegalArgumentException
   // because there is '_'
// --------------------------------
// Using SmartPlugin
// --------------------------------
// creates my plugin 
SmartPlugin myPlugin = new SmartPlugin("_myPlugin"); // <-- throws IllegalArgumentException
                                                     // because there is '_'
```

## Options

A plugin could need to be configured. Apart the public methods that every plugin can expose to set specific values and to be aligned with [Chart.JS](http://www.chartjs.org/) way to pass configuration to plugins, the chart options can host the configuration of the plugin which could be read at runtime.

The [plugins](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/configuration/Plugins.html) configuration is nested in the configuration using 

```java
// get plugins options container from chart configuration
Plugins plugins = chart.getOptions().getPlugins();
```

The plugin options must extend [AbstractPluginOptions](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/AbstractPluginOptions.html) and leverage on available methods to store the plugin configuration.

Furthermore, every plugin needs to have a factory which must be an implementation of [AbstractPluginOptionsFactory](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/AbstractPluginOptionsFactory.html)) interface necessary to enable **Charba** to create your options, passing the javascript object which maintain the configuration.

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

Inside the plugin, the chart instance can provide a [method](../charts/Api#getwholeoptions) to get the whole configuration of the chart where also the defaults at different levels are applied.

```java
// creates my plugin 
AbstractPlugin myPlugin = new AbstractPlugin("myplugin"){

	@Override
	public boolean onBeforeUpdate(IsChart chart, PluginUpdateArgument argument){
		// get options reference
		MyPluginOptions myOptions = null;
		// loads chart options for the chart
		IsDefaultScaledOptions options = chart.getWholeOptions();
		// retrieves the plugin options
		if (options.getPlugins().hasOptions("myplugin")){
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

[Chart.JS](http://www.chartjs.org/) provides a set of plugins out-of-the-box. All their ids are mapped to [DefaultPluginId](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/enums/DefaultPluginId.html) enumeration.

## Hooks

[Plugin](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/Plugin.html) interface and [SmartPlugin](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/SmartPlugin.html) [hooks](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/package-summary.html) provide all possible hooks or methods which will invoked during the life cycle of the chart or when an event or conditions is occurring.

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

The process is triggered when **[draw method](../charts/Api#draw)** of the chart is invoked.

The following hooks can be used to setup data needed for the plugin to operate:

| `Plugin` method | `SmartPlugin` hook | Description
| :- | :- | :-
| onConfigure | [ConfigureHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/ConfigureHook.html) | Called before initializing configuration of 'chart'
| onBeforeInit | [BeforeInitHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/BeforeInitHook.html) | Called before initializing 'chart'
| onAfterInit | [AfterInitHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/AfterInitHook.html) | Called after 'chart' has been initialized and before the first update.
| onResize | [ResizeHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/ResizeHook.html) | Called after the chart as been resized.

The initialization process is documented in the flowchart below.

<img src={useBaseUrl('/img/pluginFlowCharts-Chart Init.png')} />

### Registering and activating

Plugins are notified during throughout the plugin installation and activation process. 

The following hooks can be used to interact during the plugin registering or activating:

| `Plugin` method | `SmartPlugin` hook | Description
| :- | :- | :-
| onInstall | [InstallHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/InstallHook.html) | Called when plugin is installed for this chart instance; this hook is also invoked for disabled plugins (options equals to false)
| onStart | [StartHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/StartHook.html) | Called when a plugin is starting; this happens when chart is created or plugin is enabled
| onStop | [StopHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/StopHook.html) | Called when a plugin stopping; this happens when chart is destroyed or plugin is disabled
| onUninstall | [UninstallHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/UninstallHook.html) | Called after chart is destroyed on all plugins that were installed for that chart; this hook is also invoked for disabled plugins (options equals to false)

### Updating or reconfiguring

Plugins are notified during throughout the [update](../charts/Api#update) process. 

The process is triggered when 

 * [draw method](../charts/Api#draw) of the chart is invoked.
 * [update method](../charts/Api#update) of the chart is invoked.
 * [reconfigure method](../charts/Api#reconfigure) of the chart is invoked.
 * [resize method](../charts/Api#resize) of the chart is invoked.
 * a resize event from the browser has been caught by [Chart.JS](http://www.chartjs.org/).

The same notification are provided even if the chart is [reconfigured](../charts/Api#reconfigure). The following hooks can be used to interact during the chart updating or reconfiguring:

| `Plugin` method | `SmartPlugin` hook | Description
| :- | :- | :-
| onBeginDrawing | - | Called before every drawing cycle, coming from initialization, updating or rendering of chart
| onBeforeUpdate | [BeforeUpdateHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/BeforeUpdateHook.html) | Called before updating 'chart'. If any plugin returns false, the update is cancelled (and thus subsequent render(s)) until another 'update' is triggered.
| onAfterUpdate | [AfterUpdateHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/AfterUpdateHook.html) | Called after 'chart' has been updated and before rendering. Note that this hook will not be called if the chart update has been previously cancelled.
| onBeforeElementsUpdate | [BeforeElementsUpdateHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/BeforeElementsUpdateHook.html) | Called during the update process, before any chart elements have been created.
| onBeforeLayout | [BeforeLayoutHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/BeforeLayoutHook.html) | Called before laying out 'chart'. If any plugin returns false, the layout update is cancelled until another 'update' is triggered.
| onAfterLayout | [AfterLayoutHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/AfterLayoutHook.html) | Called after the 'chart' has been layed out. Note that this hook will not be called if the layout update has been previously cancelled.
| onBeforeDatasetsUpdate | [BeforeDatasetsUpdateHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/BeforeDatasetsUpdateHook.html) | Called before updating the 'chart' datasets. If any plugin returns false, the datasets update is cancelled until another 'update' is triggered.
| onAfterDatasetsUpdate | [AfterDatasetsUpdateHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/AfterDatasetsUpdateHook.html) | Called after the 'chart' datasets have been updated. Note that this hook will not be called if the datasets update has been previously cancelled.
| onBeforeDatasetUpdate | [BeforeDatasetUpdateHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/BeforeDatasetUpdateHook.html) | Called before updating the 'chart' dataset at the given 'args.index'. If any plugin returns false, the datasets update is cancelled until another 'update' is triggered.
| onAfterDatasetUpdate | [AfterDatasetUpdateHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/AfterDatasetUpdateHook.html) | Called after the 'chart' datasets at the given 'args.index' has been updated. Note that this hook will not be called if the datasets update has been previously cancelled.

The updating and reconfiguring process is documented in the flowchart below.

<img src={useBaseUrl('/img/pluginFlowCharts-Chart update.png')} />

### Rendering

Plugins can interact with the chart throughout the render process. 

The process is triggered when 

 * [updating or reconfiguring process](#updating-or-reconfiguring) of the chart is invoked.
 * [render method](../charts/Api#render) of the chart is invoked.

The following hooks can be used to interact during the chart rendering:

| `Plugin` method | `SmartPlugin` hook | Description
| :- | :- | :-
| onBeforeRender | [BeforeRenderHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/BeforeRenderHook.html) | Called before rendering 'chart'. If any plugin returns false, the rendering is cancelled until another 'render' is triggered.
| onAfterRender | [AfterRenderHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/AfterRenderHook.html) | Called after the 'chart' has been fully rendered (and animation completed). Note that this hook will not be called if the rendering has been previously cancelled.
| onBeforeDraw | [BeforeDrawHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/BeforeDrawHook.html) | Called before drawing 'chart' at every animation frame. If any plugin returns false, the frame drawing is cancelled until another 'render' is triggered.
| onAfterDraw | [AfterDrawHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/AfterDrawHook.html) | Called after the 'chart' has been drawn. Note that this hook will not be called if the drawing has been previously cancelled.
| onBeforeDatasetsDraw | [BeforeDatasetsDrawHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/BeforeDatasetsDrawHook.html) | Called before drawing the 'chart' datasets. If any plugin returns false, the datasets drawing is cancelled until another 'render' is triggered.
| onAfterDatasetsDraw | [AfterDatasetsDrawHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/AfterDatasetsDrawHook.html) | Called after the 'chart' datasets have been drawn. Note that this hook will not be called if the datasets drawing has been previously cancelled.
| onBeforeDatasetDraw | [BeforeDatasetDrawHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/BeforeDatasetDrawHook.html) | Called before drawing the 'chart' dataset at the given 'index' (datasets are drawn in the reverse order). If any plugin returns false, the datasets drawing is cancelled until another 'render' is triggered.
| onAfterDatasetDraw | [AfterDatasetDrawHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/AfterDatasetDrawHook.html) | Called after the 'chart' datasets at the given 'args.index' have been drawn (datasets are drawn in the reverse order). Note that this hook will not be called if the datasets drawing has been previously cancelled.
| onEndDrawing | - | Called after every drawing cycle, coming from initialization, updating or rendering of chart.

The rendering process is documented in the flowchart below.

<img src={useBaseUrl('/img/pluginFlowCharts-Chart render.png')} />

### Building scales

Plugins are notified during the scales and ticks building process. 

The process is triggered when [updating or reconfiguring process](#updating-or-reconfiguring) of the chart is invoked.

The following hooks can be used to interact during the chart updating or reconfiguring:

| `Plugin` method | `SmartPlugin` hook | Description
| :- | :- | :-
| onBeforeDataLimits | [BeforeDataLimitsHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/BeforeDataLimitsHook.html) | Called before scale data limits are calculated. This hook is called separately for each scale in the chart.
| onAfterDataLimits | [AfterDataLimitsHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/AfterDataLimitsHook.html) | Called after scale data limits are calculated. This hook is called separately for each scale in the chart.
| onBeforeBuildTicks | [BeforeBuildTicksHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/BeforeBuildTicksHook.html) | Called before scale builds its ticks. This hook is called separately for each scale in the chart.
| onAfterBuildTicks | [AfterBuildTicksHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/AfterBuildTicksHook.html) | Called after scale has build its ticks. This hook is called separately for each scale in the chart.

### Tooltip drawing

Plugins are notified during the tooltip drawing process. 

The following hooks can be used to interact during the tooltip drawing:

| `Plugin` method | `SmartPlugin` hook | Description
| :- | :- | :-
| onBeforeTooltipDraw | [BeforeTooltipDrawHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/BeforeTooltipDrawHook.html) | Called before drawing the 'tooltip'. If any plugin returns false, the tooltip drawing is cancelled until another 'render' is triggered.
| onAfterTooltipDraw | [AfterTooltipDrawHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/AfterTooltipDrawHook.html) | Called after drawing the 'tooltip'. Note that this hook will not be called if the tooltip drawing has been previously cancelled.

### Events

Plugins are notified during the chart canvas event process. 

The process is triggered when a resize event from the browser has been caught by [Chart.JS](http://www.chartjs.org/).

The following hooks can be used to interact during the canvas event process:

| `Plugin` method | `SmartPlugin` hook | Description
| :- | :- | :-
| onBeforeEvent | [BeforeEventHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/BeforeEventHook.html) | Called before processing the specified 'event'. If any plugin returns false, the event will be discarded.
| onAfterEvent | [AfterEventHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/AfterEventHook.html) | Called after the 'event' has been consumed. Note that this hook will not be called if the 'event' has been previously discarded.


### Resizing, resetting and destroying

Plugins are notified during the resize, reset and destroy processes. 

The process is triggered when 

 * [reset method](../charts/Api#reset) of the chart is invoked.
 * [destroy method](../charts/Api#destroy) of the chart is invoked.
 * [resize method](../charts/Api#resize) of the chart is invoked.
 * a resize event from the browser has been caught by [Chart.JS](http://www.chartjs.org/).

The following hooks can be used to interact during the resize, reset and destroy processes:

| `Plugin` method | `SmartPlugin` hook | Description
| :- | :- | :-
| onResize | [ResizeHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/ResizeHook.html) | Called after the chart as been resized.
| onReset | [ResetHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/ResetHook.html) | Called during chart reset.
| onBeforeDestroy | [BeforeDestroyHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/BeforeDestroyHook.html) | Called before the chart is being destroyed.
| onAfterDestroy | [AfterDestroyHook](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/plugins/hooks/AfterDestroyHook.html) | Called after the chart has been destroyed.
