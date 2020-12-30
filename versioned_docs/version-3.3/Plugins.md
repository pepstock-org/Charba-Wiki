---
id: Plugins
title: Plugins
hide_title: true
sidebar_label: Plugins
---
## Plugins

Plugins are the most efficient way to customize or change the default behavior of a chart. Leveraging on [Chart.JS](http://www.chartjs.org/) implementation, **Charba** provides the features to set a plugin both at global and at chart level (inline plugin).

A plugin must implement the [Plugin](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Plugin.html) interface:

```java
public interface Plugin {

   /**
    * Plugins must define a unique id in order to be configurable.
    * Returns the plugin id. A plugin id 
    *
    * can not start with a dot or an underscore
    * can not contain any non-URL-safe characters
    * cannot contain upper-case letters
    * should be something short, but also reasonably descriptive
    * 
    * @return the plugin id.
    */
   String getId();

   /**
    * Called before initializing configuration of 'chart'.
    * 
    * @param chart The chart instance.
    */
   void onConfigure(IsChart chart);

   /**
    * Called before initializing 'chart'.
    * 
    * @param chart The chart instance.
    */
   void onBeforeInit(IsChart chart);

	/**
	 * Called after 'chart' has been initialized and before the first update.
	 * 
	 * @param chart the chart instance.
	 * @param nativeChart CHART.JS chart instance
	 */
	void onAfterInit(IsChart chart, Chart nativeChart);

   /**
    * Called before updating 'chart'. If any plugin returns false, the update is cancelled (and thus subsequent
    * render(s)) until another 'update' is triggered.
    * 
    * @param chart The chart instance.
    * @return false to cancel the chart update.
    */
   boolean onBeforeUpdate(IsChart chart);

   /**
    * Called after 'chart' has been updated and before rendering. Note that this hook will not be called if the chart update
    * has been previously cancelled.
    * 
    * @param chart The chart instance.
    */
   void onAfterUpdate(IsChart chart);

   /**
    * Called before laying out 'chart'. If any plugin returns false, the layout update is cancelled until another
    * 'update' is triggered.
    * 
    * @param chart The chart instance.
    * @return false to cancel the chart layout.
    */
   boolean onBeforeLayout(IsChart chart);

   /**
    * Called after the 'chart' has been layed out. Note that this hook will not be called if the layout update has been
    * previously cancelled.
    * 
    * @param chart The chart instance.
    */
   void onAfterLayout(IsChart chart);

   /**
    * Called before updating the 'chart' datasets. If any plugin returns false, the datasets update is cancelled
    * until another 'update' is triggered.
    * 
    * @param chart The chart instance.
    * @return false to cancel the datasets update.
    */
   boolean onBeforeDatasetsUpdate(IsChart chart);

   /**
    * Called after the 'chart' datasets have been updated. Note that this hook will not be called if the datasets update has
    * been previously cancelled.
    * 
    * @param chart The chart instance.
    */
   void onAfterDatasetsUpdate(IsChart chart);

   /**
    * Called before updating the 'chart' dataset at the given 'args.index'. If any plugin returns false, the
    * datasets update is cancelled until another 'update' is triggered.
    * 
    * @param chart The chart instance.
    * @param item the dataset item.
    * @return false to cancel the chart datasets drawing.
    */
   boolean onBeforeDatasetUpdate(IsChart chart, DatasetPluginItem item);

   /**
    * Called after the 'chart' datasets at the given 'args.index' has been updated. Note that this hook will not be called if
    * the datasets update has been previously cancelled.
    * 
    * @param chart The chart instance.
    * @param item the dataset item.
    */
   void onAfterDatasetUpdate(IsChart chart, DatasetPluginItem item);

   /**
    * Called before rendering 'chart'. If any plugin returns false, the rendering is cancelled until another
    * 'render' is triggered.
    * 
    * @param chart The chart instance.
    * @return false to cancel the chart rendering.
    */
   boolean onBeforeRender(IsChart chart);

   /**
    * Called after the 'chart' has been fully rendered (and animation completed). Note that this hook will not be called if the
    * rendering has been previously cancelled.
    * 
    * @param chart The chart instance.
    */
   void onAfterRender(IsChart chart);

   /**
    * Called before drawing 'chart' at every animation frame specified by the given easing value. If any plugin returns
    * false, the frame drawing is cancelled until another 'render' is triggered.
    * 
    * @param chart The chart instance.
    * @param easing The current animation value, between 0.0 and 1.0.
    * @return false to cancel the chart drawing.
    */
   boolean onBeforeDraw(IsChart chart, double easing);

   /**
    * Called after the 'chart' has been drawn for the specific easing value. Note that this hook will not be called if the
    * drawing has been previously cancelled.
    * 
    * @param chart The chart instance.
    * @param easing The current animation value, between 0.0 and 1.0.
    */
   void onAfterDraw(IsChart chart, double easing);

   /**
    * Called before drawing the 'chart' datasets. If any plugin returns false, the datasets drawing is cancelled
    * until another 'render' is triggered.
    * 
    * @param chart The chart instance.
    * @param easing The current animation value, between 0.0 and 1.0.
    * @return false to cancel the chart datasets drawing.
    */
   boolean onBeforeDatasetsDraw(IsChart chart, double easing);

   /**
    * Called after the 'chart' datasets have been drawn. Note that this hook will not be called if the datasets drawing has
    * been previously cancelled.
    * 
    * @param chart The chart instance.
    * @param easing The current animation value, between 0.0 and 1.0.
    */
   void onAfterDatasetsDraw(IsChart chart, double easing);

   /**
    * Called before drawing the 'chart' dataset at the given 'args.index' (datasets are drawn in the reverse order). If any
    * plugin returns false, the datasets drawing is cancelled until another 'render' is triggered.
    * 
    * @param chart The chart instance.
    * @param item the dataset item.
    * @return false to cancel the chart datasets drawing.
    */
   boolean onBeforeDatasetDraw(IsChart chart, DatasetPluginItem item);

   /**
    * Called after the 'chart' datasets at the given 'args.index' have been drawn (datasets are drawn in the reverse order).
    * Note that this hook will not be called if the datasets drawing has been previously cancelled.
    * 
    * @param chart The chart instance.
    * @param item the dataset item.
    */
   void onAfterDatasetDraw(IsChart chart, DatasetPluginItem item);

   /**
    * Called before drawing the 'tooltip'. If any plugin returns false, the tooltip drawing is cancelled until
    * another 'render' is triggered.
    * 
    * @param chart The chart instance.
    * @param item The tooltip instance.
    * @return false to cancel the chart tooltip drawing.
    */
   boolean onBeforeTooltipDraw(IsChart chart, TooltipPluginItem item);

   /**
    * Called after drawing the 'tooltip'. Note that this hook will not be called if the tooltip drawing has been previously
    * cancelled.
    * 
    * @param chart The chart instance.
    * @param item The tooltip instance.
    */
   void onAfterTooltipDraw(IsChart chart, TooltipPluginItem item);

   /**
    * Called before processing the specified 'event'. If any plugin returns false, the event will be discarded.
    * 
    * @param chart The chart instance.
    * @param event The event object.
    * @return false to discard the event.
    */
   boolean onBeforeEvent(IsChart chart, BaseNativeEvent event);

   /**
    * Called after the 'event' has been consumed. Note that this hook will not be called if the 'event' has been previously
    * discarded.
    * 
    * @param chart The chart instance.
    * @param event The event object.
    */
   void onAfterEvent(IsChart chart, BaseNativeEvent event);

   /**
    * Called after the chart as been resized.
    * 
    * @param chart The chart instance.
    * @param size The new canvas display size (eq. canvas.style width and height).
    */
   void onResize(IsChart chart, SizeItem size);

   /**
    * Called after the chart as been destroyed.
    * 
    * @param chart The chart instance.
    */
   void onDestroy(IsChart chart);
}
```

The easy way to implement a plugin is to extends the [AbstractPlugin](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/plugins/AbstractPlugin.html) class and implement `getId` method and then extends only the methods you want to implement.

A plugin can be registered/unregistered at global level as following:

```java
// REGISTER
Defaults.get().getPlugins().register(new ChartBackgroundColor());

// UNREGISTER
Defaults.get().getPlugins().unregister("pluginid");
```

At chart level, this is an example how to register it:

```java
AbstractPlugin p = new AbstractPlugin() {
         
   @Override
   public String getId() {
      return "test";
   }
   
   @Override
   public void onAfterDatasetsDraw(IsChart chart, double easing) {
      // logic
   }
};

chart.getPlugins().add(p);
```

You can also enable or disable them at chart level, as following:

```java
if (!chart.getPlugins().isEnabled("pluginid")){
   chart.getPlugins().setEnabled("pluginid", true);
}
```

## Plugin ID

Plugins must define a unique id in order to be configurable.

This id should follow the name convention (otherwise an [illegal argument](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalArgumentException.html) exception will be thrown):

 * can not start with a dot or an underscore
 * can not contain any non-URL-safe characters
 * can not contain upper case letters

If a plugin is intended to be released publicly, you may want to check and to see if there's something by that name already. 
To do that, see the following samples:


```java
// ONLY GLOBAL
Set<String> ids = Defaults.get().getPlugins().getIds();
```

## Options

A plugin could need to be configured. Apart the public methods that every plugin can expose to set specific values and to be aligned with [Chart.JS](http://www.chartjs.org/) way to pass configuration to plugins, the chart options can host the configuration of the plugin which could be read at runtime.

A plugin can consume configuration by options from:

  * Global options
  * Global chart options
  * Chart options
  * Chart dataset 

Here is same example how to set options:

```java
// GLOBAL options
// --------------------------------------
// store the plugin options by plugin ID
// --------------------------------------
Defaults.get().getGlobal().getPlugin().setOptions("pluginID", options);
// --------------------------------------
// or store the plugin options without plugin ID
// --------------------------------------
Defaults.get().getGlobal().getPlugin().setOptions(options);

// GLOBAL CHART options
// --------------------------------------
// store the plugin options by plugin ID
// --------------------------------------
Defaults.get().getOptions(ChartType.BAR).getPlugin().setOptions("pluginID", options);
// --------------------------------------
// or store the plugin options without plugin ID
// --------------------------------------
Defaults.get().getOptions(ChartType.BAR).getPlugin().setOptions(options);

// CHART instance 
// --------------------------------------
// store the plugin options by plugin ID
// --------------------------------------
chart.getOptions().getPlugin().setOptions("pluginID", options);
// --------------------------------------
// or store the plugin options without plugin ID
// --------------------------------------
chart.getOptions().getPlugin().setOptions(options);

// Dataset 
// --------------------------------------
// store the plugin options by plugin ID
// --------------------------------------
dataset.setOptions("pluginID", options);
// --------------------------------------
// or store the plugin options without plugin ID
// --------------------------------------
dataset.setOptions(options);
```

The `options` to store must extend and internal object of **Charba**, [AbstractPluginOptions](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/plugins/AbstractPluginOptions.html) and leverage on available methods to store the plugin configuration.

To read the stored configuration, here are some example: 

```java
// GLOBAL options
if (Defaults.get().getGlobal().getPlugin().hasOptions("pluginID")){
   // --------------------------------------
   // retrieve the plugin options by plugin ID
   // --------------------------------------
   Defaults.get().getGlobal().getPlugin().getOptions("pluginID", factory);
   // --------------------------------------
   // or retrieve the plugin options without plugin ID
   // --------------------------------------
   Defaults.get().getGlobal().getPlugin().getOptions(factory);
}

// GLOBAL CHART options
if (Defaults.get().getOptions(ChartType.BAR).getPlugin().hasOptions("pluginID")){
   // --------------------------------------
   // retrieve the plugin options by plugin ID
   // --------------------------------------
   Defaults.get().getOptions(ChartType.BAR).getPlugin().getOptions("pluginID", factory);
   // --------------------------------------
   // or retrieve the plugin options without plugin ID
   // --------------------------------------
   Defaults.get().getOptions(ChartType.BAR).getPlugin().getOptions(factory);
}

// CHART 
if (chart.getOptions().getPlugin().hasOptions("pluginID")){
   // --------------------------------------
   // retrieve the plugin options by plugin ID
   // --------------------------------------
   chart.getOptions().getPlugin().getOptions("pluginID", factory);
   // --------------------------------------
   // or retrieve the plugin options without plugin ID
   // --------------------------------------
   chart.getOptions().getPlugin().getOptions(factory);
}

// Dataset 
if (dataset.hasOptions("pluginID")){
   // --------------------------------------
   // retrieve the plugin options by plugin ID
   // --------------------------------------
   dataset.getOptions("pluginID", factory);
   // --------------------------------------
   // or retrieve the plugin options without plugin ID
   // --------------------------------------
   dataset.getOptions(factory);
}
```

The `factory` is an implementation of [AbstractPluginOptionsFactory](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/plugins/AbstractPluginOptionsFactory.html)) interface necessary to enable **Charba** to create your options, passing the java script object which maintain the configuration.

Here is how to create the instance and pass to chart options:

```java
ChartBackgroundColorOptions option = new ChartBackgroundColorOptions();
option.setBackgroundColor("green");

// --------------------------------------
// store the plugin options by plugin ID
// --------------------------------------
chart.getOptions().getPlugins().setOptions(ChartBackgroundColor.ID, option);
// --------------------------------------
// or store the plugin options without plugin ID
// --------------------------------------
chart.getOptions().getPlugin().setOptions(options);
```

The [AbstractPluginOptions](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/plugins/AbstractPluginOptions.html) provides some `store` in order to store the options into the different targets, as followoing:

```java
ChartBackgroundColorOptions option = new ChartBackgroundColorOptions();
option.setBackgroundColor("green");

// --------------------------------------
// store to the GLOBAL options
// --------------------------------------
options.store();
// --------------------------------------
// store to the GLOBAL chart options
// --------------------------------------
options.store(ChartType.BAR);
// --------------------------------------
// store to the chart options
// --------------------------------------
options.store(chart);
// --------------------------------------
// store to the dataset
// --------------------------------------
options.store(dataset);
```

## Importing existing Chart.JS plugins 

Some plugins, written in java script, are already developed and available for [Chart.JS](http://www.chartjs.org/).

**Charba** provides you the way to import and leverage on these plugins.

The following list of steps is related to GWT projects. For J2CL applications, you must implement an [AbstractInjectableResource](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/resources/AbstractInjectableResource.html) in order to provide the javascript content as strings.

These are the steps:

 1. take the java script plugin and store in your project into a resource folder 
 1. create a GWT [ClientBundle](http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html) to get the java script plugin as GWT [TextResource](http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html#TextResource)
 1. use **Charba** [Injector](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Injector.html) to inject the plugin. It's **IMPORTANT** to inject [Chart.JS](http://www.chartjs.org/) before the plugin because usually the plugin registers itself and therefore [Chart.JS](http://www.chartjs.org/) must be available
 1. Create a java script object, with some properties to configure the plugin (see [above](#options))
 1. Create the view with a chart with the statement to activate the plugin

Here is an example, how to include [Stacked100](https://github.com/y-takey/chartjs-plugin-stacked100) plugin:

 * Get `stacked100` plugin from [GitHub](https://github.com/y-takey/chartjs-plugin-stacked100/blob/master/src/index.js) and store the javascript into your project, in this example we are using the **Charba** showcase paths:
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

 * Inject the javascript resource into you main page or before using the plugin:

```java
// create an injectable resource by text resource of plugin
InjectableTextResource plugin = new InjectableTextResource(MyResources.INSTANCE.chartJsStacked100Source());
// inject plugin
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

:::note PAY ATTENTION
Usually all [Chart.JS](http://www.chartjs.org/) are registering themselves automatically, at global level. If the plugin does not register itself, you must register on the chart instances and the above procedure will be more complex.
:::

#### Special plugin options case

Unfortuntaley some [Chart.JS](http://www.chartjs.org/docs/latest/notes/extensions.html#plugins) plugin implementation are not respecting the described standard way to store the plugin options.

Therefore **Charba** provides into the configurable options a method to add an additional configuration.

The `merge` method has been created on configuration options (all elements) to add a java script object in another one. This enables to add the plugin configuration in any other configuration object of **Charba**. 
