---
id: ImportPlugins
title: Importing plugins
hide_title: true
sidebar_label: Importing Chart.JS plugins
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Importing existing Chart.JS plugins 

Some plugins, written in java script, are already developed and available for [Chart.JS](http://www.chartjs.org/).

**Charba** provides you the way to import and leverage on these plugins.

The following list of steps is related to GWT projects. For J2CL applications, you must implement an [AbstractInjectableResource](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/resources/AbstractInjectableResource.html) in order to provide the javascript content as strings.

The steps are the following:

 1. take the java script plugin and store in your project in a resource folder 
 1. create a GWT [ClientBundle](http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html) to get the java script plugin as GWT [TextResource](http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html#TextResource)
 1. use **Charba** [Injector](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Injector.html) to inject the plugin. It's **IMPORTANT** to inject [Chart.JS](http://www.chartjs.org/) before the plugin because usually the plugin registers itself and therefore [Chart.JS](http://www.chartjs.org/) must be available
 1. Create a [plugin options container](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/plugins/AbstractPluginOptions.html), with the properties to configure the plugin (see [above](Plugins#options))
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

:::important
Unfortunately some [Chart.JS](https://www.chartjs.org/docs/master/developers/plugins#plugin-options) plugins implementations are not respecting the described standard way to store the plugin options.

Therefore **Charba** provides a method to add an additional configuration to whatever chart configuration.

The `merge` method enables to add the plugin configuration in any other configuration object of **Charba**. 
:::