"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[31920],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),h=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=h(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=h(n),c=r,d=g["".concat(s,".").concat(c)]||g[c]||p[c]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var h=2;h<i;h++)o[h]=n[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},83724:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return h},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return g}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(44996),l=["components"],s={id:"Plugins",title:"Plugins",hide_title:!0,sidebar_label:"Implementing a plugin"},h=void 0,u={unversionedId:"plugins/Plugins",id:"version-4.1/plugins/Plugins",title:"Plugins",description:"",source:"@site/versioned_docs/version-4.1/plugins/Plugins.md",sourceDirName:"plugins",slug:"/plugins/",permalink:"/Charba-Wiki/docs/4.1/plugins/",tags:[],version:"4.1",frontMatter:{id:"Plugins",title:"Plugins",hide_title:!0,sidebar_label:"Implementing a plugin"},sidebar:"version-4.1/docs",previous:{title:"Date adapters",permalink:"/Charba-Wiki/docs/4.1/DateAdapters"},next:{title:"Chart background color",permalink:"/Charba-Wiki/docs/4.1/plugins/PluginBackgroundColor"}},p={},g=[{value:"Plugins",id:"plugins",level:2},{value:"Registering",id:"registering",level:2},{value:"Globally",id:"globally",level:3},{value:"At chart level",id:"at-chart-level",level:3},{value:"Plugin ID",id:"plugin-id",level:2},{value:"Options",id:"options",level:2},{value:"Global options",id:"global-options",level:3},{value:"Global chart type options",id:"global-chart-type-options",level:3},{value:"Chart configuration",id:"chart-configuration",level:3},{value:"Dataset configuration",id:"dataset-configuration",level:3},{value:"Accessing to the options from plugins",id:"accessing-to-the-options-from-plugins",level:3},{value:"Disabling plugins",id:"disabling-plugins",level:2},{value:"Hooks",id:"hooks",level:2},{value:"Initializating",id:"initializating",level:3},{value:"Registering and activating",id:"registering-and-activating",level:3},{value:"Updating or reconfiguring",id:"updating-or-reconfiguring",level:3},{value:"Rendering",id:"rendering",level:3},{value:"Building scales",id:"building-scales",level:3},{value:"Tooltip drawing",id:"tooltip-drawing",level:3},{value:"Events",id:"events",level:3},{value:"Resizing, resetting and destroying",id:"resizing-resetting-and-destroying",level:3}],c={toc:g};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"plugins"},"Plugins"),(0,i.kt)("p",null,"Plugins are the most efficient way to customize or change the default behavior of a chart. Leveraging on ",(0,i.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," implementation, ",(0,i.kt)("strong",{parentName:"p"},"Charba")," provides the features to set a plugin both at global and at chart level (inline plugin)."),(0,i.kt)("img",{src:(0,o.Z)("/img/plugins.png")}),(0,i.kt)("p",null,"A plugin must implement the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/Plugin.html"},"Plugin")," interface."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// creates my plugin \nPlugin myPlugin = new Plugin(){\n            \n    @Override\n    public String getId(){\n        return "myplugin";\n    }\n\n    @Override\n    public boolean onBeforeUpdate(IsChart chart, PluginUpdateArgument argument){\n        // my logic\n        return true;\n    }\n    \n};\n// registers my plugin to the chart\nchart.getPlugins().add(myPlugin);\n')),(0,i.kt)("p",null,"An easy way to implement a plugin is also to extends the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/plugins/AbstractPlugin.html"},"AbstractPlugin")," class as following: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// creates my plugin \nAbstractPlugin myPlugin = new AbstractPlugin("myplugin"){\n\n    @Override\n    public boolean onBeforeUpdate(IsChart chart, PluginUpdateArgument argument){\n        // my logic\n        return true;\n    }\n\n};\n// registers my plugin to the chart\nchart.getPlugins().add(myPlugin);\n')),(0,i.kt)("h2",{id:"registering"},"Registering"),(0,i.kt)("p",null,"Every plugin must be registered to the chart or the the default before the charts will start using it."),(0,i.kt)("h3",{id:"globally"},"Globally"),(0,i.kt)("p",null,"A plugin can be registered/unregistered at global level, which means that the plugin instance will be triggered by all charts instances. "),(0,i.kt)("p",null,"The global registration is performed as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// --------------------------------\n// REGISTER plugin for all charts\n// --------------------------------\nDefaults.get().getPlugins().register(new ChartBackgroundColor());\n\n// --------------------------------\n// UNREGISTER the "pluginid" plugin\n// --------------------------------\nDefaults.get().getPlugins().unregister("pluginid");\n')),(0,i.kt)("h3",{id:"at-chart-level"},"At chart level"),(0,i.kt)("p",null,"A plugin can be registered/unregistered at chart level, which means that the plugin instance will be triggered only by that chart instance. "),(0,i.kt)("p",null,"The chart registration is performed as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// creates my plugin \nAbstractPlugin myPlugin = new AbstractPlugin("myplugin"){\n\n    @Override\n    public boolean onBeforeUpdate(IsChart chart, PluginUpdateArgument argument){\n        // my logic\n        return true;\n    }\n\n};\n// registers my plugin to the chart\nchart.getPlugins().add(myPlugin);\n')),(0,i.kt)("h2",{id:"plugin-id"},"Plugin ID"),(0,i.kt)("p",null,"Plugins must define a unique id in order to be configurable."),(0,i.kt)("p",null,"This id should follow the name convention (otherwise an ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalArgumentException.html"},"illegal argument")," exception will be thrown):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"can not start with a dot or an underscore"),(0,i.kt)("li",{parentName:"ul"},"can not contain any non-URL-safe characters")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates my plugin \nAbstractPlugin myPlugin = new AbstractPlugin(\"_myPlugin\"){\n    ...\n};\n// registers my plugin to the chart\nchart.getPlugins().add(myPlugin); // <-- throws IllegalArgumentException\n                                  // because there is '_' and an char in upper-case\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,"A plugin could need to be configured. Apart the public methods that every plugin can expose to set specific values and to be aligned with ",(0,i.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," way to pass configuration to plugins, the chart options can host the configuration of the plugin which could be read at runtime."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/configuration/Plugins.html"},"plugins")," configuration is nested in the configuration using "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// get plugins options container from chart configuration\nPlugins plugins = chart.getOptions().getPlugins();\n")),(0,i.kt)("p",null,"The plugin options must extend ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/plugins/AbstractPluginOptions.html"},"AbstractPluginOptions")," and leverage on available methods to store the plugin configuration."),(0,i.kt)("p",null,"Furthermore, every plugin needs to have a factory which must be an implementation of ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/plugins/AbstractPluginOptionsFactory.html"},"AbstractPluginOptionsFactory"),") interface necessary to enable ",(0,i.kt)("strong",{parentName:"p"},"Charba")," to create your options, passing the javascript object which maintain the configuration."),(0,i.kt)("p",null,"A plugin can consume configuration by options from:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#global-options"},"Global options")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#global-chart-type-options"},"Global chart options"),", based on chart type"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#chart-configuration"},"Chart options")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dataset-configuration"},"Datasets")," ")),(0,i.kt)("h3",{id:"global-options"},"Global options"),(0,i.kt)("p",null,"A plugin can have a default configuration that can be used from all plugin instances on all charts."),(0,i.kt)("p",null,"Here are some examples how to get and store the options in the defaults: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates the options\nChartBackgroundColorOptions option = new ChartBackgroundColorOptions();\noption.setBackgroundColor(HtmlColor.GREEN);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nDefaults.get().getGlobal().getPlugin().setOptions(ChartBackgroundColor.ID, options);\n// stores the plugin options without plugin ID\nDefaults.get().getGlobal().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store();\n\n// --------------------------------------\n// GETTING plugin options\n// --------------------------------------\nif (Defaults.get().getGlobal().getPlugin().hasOptions(ChartBackgroundColor.ID)){\n   // retrieves the plugin options by plugin ID\n   options = Defaults.get().getGlobal().getPlugin().getOptions(ChartBackgroundColor.ID, ChartBackgroundColor.FACTORY);\n   // retrieves the plugin options without plugin ID\n   options = Defaults.get().getGlobal().getPlugin().getOptions(ChartBackgroundColor.FACTORY);\n}\n")),(0,i.kt)("h3",{id:"global-chart-type-options"},"Global chart type options"),(0,i.kt)("p",null,"You can set a default plugin configuration for a specific type of chart that can be used from all plugin instances on all charts of that type."),(0,i.kt)("p",null,"Here are some examples how to get and store the options in the chart type defaults options: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates the options\nChartBackgroundColorOptions option = new ChartBackgroundColorOptions();\noption.setBackgroundColor(HtmlColor.GREEN);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nDefaults.get().getOptions(ChartType.BAR).getPlugin().setOptions(ChartBackgroundColor.ID, options);\n// stores the plugin options without plugin ID\nDefaults.get().getOptions(ChartType.BAR).getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store(ChartType.BAR);\n\n// --------------------------------------\n// GETTING plugin options\n// --------------------------------------\nif (Defaults.get().getOptions(ChartType.BAR).getPlugin().hasOptions(ChartBackgroundColor.ID)){\n   // retrieves the plugin options by plugin ID\n   options = Defaults.get().getOptions(ChartType.BAR).getPlugin().getOptions(ChartBackgroundColor.ID, ChartBackgroundColor.FACTORY);\n   // retrieves the plugin options without plugin ID\n   options = Defaults.get().getOptions(ChartType.BAR).getPlugin().getOptions(ChartBackgroundColor.FACTORY);\n}\n")),(0,i.kt)("h3",{id:"chart-configuration"},"Chart configuration"),(0,i.kt)("p",null,"You can set a plugin configuration for a chart that can be used only on that chart instance."),(0,i.kt)("p",null,"Here are some examples how to get and store the options in the chart configuration: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nBarChart chart = new BarChart();\n// creates the options\nChartBackgroundColorOptions option = new ChartBackgroundColorOptions();\noption.setBackgroundColor(HtmlColor.GREEN);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nchart.getOptions().getPlugin().setOptions(ChartBackgroundColor.ID, options);\n// stores the plugin options without plugin ID\nchart.getOptions().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store(chart);\n\n// --------------------------------------\n// GETTING plugin options\n// --------------------------------------\nif (chart.getOptions().getPlugin().hasOptions(ChartBackgroundColor.ID)){\n   // retrieves the plugin options by plugin ID\n   chart.getOptions().getPlugin().getOptions(ChartBackgroundColor.ID, ChartBackgroundColor.FACTORY);\n   //retrieves the plugin options without plugin ID\n   chart.getOptions().getPlugin().getOptions(ChartBackgroundColor.FACTORY);\n}\n")),(0,i.kt)("h3",{id:"dataset-configuration"},"Dataset configuration"),(0,i.kt)("p",null,"A plugin can also act at dataset level and you can set a plugin configuration for a dataset that can be used only on that dataset instance."),(0,i.kt)("p",null,"Here are some examples how to get and store the options in the dataset configuration: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nBarChart chart = new BarChart();\n// creates the dataset\nBarDataset dataset = chart.newDataset();\n// creates the options\nDataLabelsOptions option = new DataLabelsOptions();\noption.setDisplay(true);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\ndataset.setOptions(DataLabelsPlugin.ID, options);\n// stores the plugin options without plugin ID\ndataset.getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store(dataset);\n\n// --------------------------------------\n// GETTING plugin options\n// --------------------------------------\nif (dataset.hasOptions(DataLabelsPlugin.ID)){\n   // --------------------------------------\n   // retrieve the plugin options by plugin ID\n   // --------------------------------------\n   options = dataset.getOptions(DataLabelsPlugin.ID, DataLabelsPlugin.FACTORY);\n   // --------------------------------------\n   // or retrieve the plugin options without plugin ID\n   // --------------------------------------\n   options = dataset.getOptions(DataLabelsPlugin.FACTORY);\n}\n")),(0,i.kt)("h3",{id:"accessing-to-the-options-from-plugins"},"Accessing to the options from plugins"),(0,i.kt)("p",null,"The implementation of plugin usually needs to access to the plugin configuration to enable the right behaviors based on the user configuration."),(0,i.kt)("p",null,"Inside the plugin, the chart instance can provide a ",(0,i.kt)("a",{parentName:"p",href:"../charts/Api#getwholeoptions"},"method")," to get the whole configuration of the chart where also the defaults at different levels are applied."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// creates my plugin \nAbstractPlugin myPlugin = new AbstractPlugin("myplugin"){\n\n    @Override\n    public boolean onBeforeUpdate(IsChart chart, PluginUpdateArgument argument){\n        // get options reference\n        MyPluginOptions myOptions = null;\n        // loads chart options for the chart\n        IsDefaultScaledOptions options = chart.getWholeOptions();\n        // retrieves the plugin options\n        if (options.getPlugins().hasOptions("myplugin")){\n            myOptions = options.getPlugins().getOptions("myplugin", myFactory);\n        }\n        return true;\n    }\n\n};\n// registers my plugin to the chart\nchart.getPlugins().add(myPlugin);\n')),(0,i.kt)("h2",{id:"disabling-plugins"},"Disabling plugins"),(0,i.kt)("p",null,"You can also enable or disable them at chart level, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// disables the tooltip to the chart\nchart.getOptions().getPlugins().setEnabled(DefaultPluginId.TOOLTIP, false);\n\n// disables the "pluginid" plugin\nchart.getOptions().getPlugins().setEnabled("pluginid", true);\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," provides a set of plugins out-of-the-box. All their ids are mapped to ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/DefaultPluginId.html"},"DefaultPluginId")," enumeration."),(0,i.kt)("h2",{id:"hooks"},"Hooks"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/Plugin.html"},"Plugin")," interface provides all possible hooks or methods which will invoked during the life cycle of the chart or when an event or conditions is occurring."),(0,i.kt)("p",null,"All hooks are defined with a default therefore you can implement only what you need. The hooks have got different purposes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#initializating"},"Initialization")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#registering-and-activating"},"Registering and activating")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#updating-or-reconfiguring"},"Updating or reconfiguring")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rendering"},"Rendering")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#building-scales"},"Building scales")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#tooltip-drawing"},"Tooltip drawing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#events"},"Events")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#resizing-resetting-and-destroying"},"Resizing, resetting and destroying"))),(0,i.kt)("h3",{id:"initializating"},"Initializating"),(0,i.kt)("p",null,"Plugins are notified during the initialization process."),(0,i.kt)("p",null,"The process is triggered when ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"../charts/Api#draw"},"draw method"))," of the chart is invoked."),(0,i.kt)("p",null,"The following hooks (the following ones are the methods definitions in the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/Plugin.html"},"Plugin"),") can be used to setup data needed for the plugin to operate:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Called before initializing configuration of 'chart'.\n * \n * @param chart the chart instance.\n */\ndefault void onConfigure(IsChart chart){\n}\n\n/**\n * Called before initializing 'chart'.\n * \n * @param chart the chart instance.\n */\ndefault void onBeforeInit(IsChart chart){\n}\n\n/**\n * Called after 'chart' has been initialized and before the first update.\n * \n * @param chart the chart instance.\n * @param nativeChart CHART.JS chart instance\n */\ndefault void onAfterInit(IsChart chart, Chart nativeChart){\n}\n/**\n * Called after the chart as been resized.\n * \n * @param chart the chart instance.\n * @param argument argument of method which contains the new canvas display size\n */\ndefault void onResize(IsChart chart, PluginResizeArgument argument){\n}\n")),(0,i.kt)("p",null,"The initialization process is documented in the flowchart below."),(0,i.kt)("img",{src:(0,o.Z)("/img/pluginFlowCharts-Chart Init.png")}),(0,i.kt)("h3",{id:"registering-and-activating"},"Registering and activating"),(0,i.kt)("p",null,"Plugins are notified during throughout the plugin installation and activation process. "),(0,i.kt)("p",null,"The following hooks (the following ones are the methods definitions in the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/Plugin.html"},"Plugin"),") can be used to interact during the plugin registering or activating:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Called when plugin is installed for this chart instance.\n * This hook is also invoked for disabled plugins (options equals to false).\n * \n * @param chart the chart instance.\n */\ndefault void onInstall(IsChart chart){\n}\n\n/**\n * Called when a plugin is starting.\n * This happens when chart is created or plugin is enabled.\n * \n * @param chart the chart instance.\n */\ndefault void onStart(IsChart chart){\n}\n\n/**\n * Called when a plugin stopping.\n * This happens when chart is destroyed or plugin is disabled.\n * \n * @param chart the chart instance.\n */\ndefault void onStop(IsChart chart){\n}\n\n/**\n * Called after chart is destroyed on all plugins that were installed for that chart.\n * This hook is also invoked for disabled plugins (options equals to false).\n * \n * @param chart the chart instance.\n */\ndefault void onUninstall(IsChart chart){\n}\n")),(0,i.kt)("h3",{id:"updating-or-reconfiguring"},"Updating or reconfiguring"),(0,i.kt)("p",null,"Plugins are notified during throughout the ",(0,i.kt)("a",{parentName:"p",href:"../charts/Api#update"},"update")," process. "),(0,i.kt)("p",null,"The process is triggered when "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"../charts/Api#draw"},"draw method"))," of the chart is invoked."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"../charts/Api#update"},"update method"))," of the chart is invoked."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"../charts/Api#reconfigure"},"reconfigure method"))," of the chart is invoked."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"../charts/Api#resize"},"resize method"))," of the chart is invoked."),(0,i.kt)("li",{parentName:"ul"},"a resize event from the browser has been caught by ",(0,i.kt)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS"),".")),(0,i.kt)("p",null,"The same notification are provided even if the chart is ",(0,i.kt)("a",{parentName:"p",href:"../charts/Api#reconfigure"},"reconfigured"),". The following hooks (the following ones are the methods definitions in the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/Plugin.html"},"Plugin"),") can be used to interact during the chart updating or reconfiguring:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Called before every drawing cycle, coming from initialization, updating or rendering of \n * chart.\n * \n * @param chart the chart instance\n * @param overridePreviousUpdate if true the drawing was already running.\n */\ndefault void onBeginDrawing(IsChart chart, boolean overridePreviousUpdate){\n}\n\n/**\n * Called before updating 'chart'.\n * If any plugin returns false, the update is cancelled (and thus subsequent render(s)) \n * until another 'update' is triggered.\n * \n * @param chart the chart instance.\n * @param argument the argument passed for update\n * @return false to cancel the chart update.\n */\ndefault boolean onBeforeUpdate(IsChart chart, PluginUpdateArgument argument){\n    return true;\n}\n\n/**\n * Called after 'chart' has been updated and before rendering.\n * Note that this hook will not be called if the chart update has been previously cancelled.\n * \n * @param chart the chart instance.\n * @param argument the argument passed for update\n */\ndefault void onAfterUpdate(IsChart chart, PluginUpdateArgument argument){\n}\n\n/**\n * Called during the update process, before any chart elements have been created.\n * \n * @param chart the chart instance.\n */\ndefault void onBeforeElementsUpdate(IsChart chart){\n}\n\n/**\n * Called before laying out 'chart'.\n * If any plugin returns false, the layout update is cancelled until another 'update' is\n * triggered.\n * \n * @param chart the chart instance.\n * @return false to cancel the chart layout.\n */\ndefault boolean onBeforeLayout(IsChart chart){\n    return true;\n}\n\n/**\n * Called after the 'chart' has been layed out.\n * Note that this hook will not be called if the layout update has been previously cancelled.\n * \n * @param chart the chart instance.\n */\ndefault void onAfterLayout(IsChart chart){\n}\n\n/**\n * Called before updating the 'chart' datasets.\n * If any plugin returns false, the datasets update is cancelled until another \n * 'update' is triggered.\n * \n * @param chart the chart instance.\n * @param argument the argument passed for update\n * @return false to cancel the datasets update.\n */\ndefault boolean onBeforeDatasetsUpdate(IsChart chart, PluginUpdateArgument argument){\n    return true;\n}\n\n/**\n * Called after the 'chart' datasets have been updated.\n * Note that this hook will not be called if the datasets update has been previously cancelled.\n * \n * @param chart the chart instance.\n * @param argument the argument passed for update\n */\ndefault void onAfterDatasetsUpdate(IsChart chart, PluginUpdateArgument argument){\n}\n\n/**\n * Called before updating the 'chart' dataset at the given 'args.index'.\n * If any plugin returns false, the datasets update is cancelled until another\n * 'update' is triggered.\n * \n * @param chart the chart instance.\n * @param item the dataset item.\n * @return false to cancel the chart datasets drawing.\n */\ndefault boolean onBeforeDatasetUpdate(IsChart chart, PluginDatasetArgument item){\n    return true;\n}\n\n/**\n * Called after the 'chart' datasets at the given 'args.index' has been updated.\n * Note that this hook will not be called if the datasets update has been previously cancelled.\n * \n * @param chart the chart instance.\n * @param item the dataset item.\n */\ndefault void onAfterDatasetUpdate(IsChart chart, PluginDatasetArgument item){\n}\n")),(0,i.kt)("p",null,"The updating and reconfiguring process is documented in the flowchart below."),(0,i.kt)("img",{src:(0,o.Z)("/img/pluginFlowCharts-Chart update.png")}),(0,i.kt)("h3",{id:"rendering"},"Rendering"),(0,i.kt)("p",null,"Plugins can interact with the chart throughout the render process. "),(0,i.kt)("p",null,"The process is triggered when "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#updating-or-reconfiguring"},"updating or reconfiguring process")," of the chart is invoked."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"../charts/Api#render"},"render method"))," of the chart is invoked.")),(0,i.kt)("p",null,"The following hooks (the following ones are the methods definitions in the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/Plugin.html"},"Plugin"),") can be used to interact during the chart rendering:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Called before rendering 'chart'. \n * If any plugin returns false, the rendering is cancelled until another 'render' is triggered.\n * \n * @param chart the chart instance.\n * @return false to cancel the chart rendering.\n */\ndefault boolean onBeforeRender(IsChart chart){\n    return true;\n}\n\n/**\n * Called after the 'chart' has been fully rendered (and animation completed).\n * Note that this hook will not be called if the rendering has been previously cancelled.\n * \n * @param chart the chart instance.\n */\ndefault void onAfterRender(IsChart chart){\n}\n\n/**\n * Called before drawing 'chart' at every animation frame. If any plugin returns false,\n * the frame drawing is cancelled until another 'render' is triggered.\n * \n * @param chart the chart instance.\n * @return false to cancel the chart drawing.\n */\ndefault boolean onBeforeDraw(IsChart chart){\n    return true;\n}\n\n/**\n * Called after the 'chart' has been drawn.\n * Note that this hook will not be called if the drawing has been previously cancelled.\n * \n * @param chart the chart instance.\n */\ndefault void onAfterDraw(IsChart chart){\n}\n\n/**\n * Called before drawing the 'chart' datasets. \n * If any plugin returns false, the datasets drawing is cancelled until another 'render'\n * is triggered.\n * \n * @param chart the chart instance.\n * @return false to cancel the chart datasets drawing.\n */\ndefault boolean onBeforeDatasetsDraw(IsChart chart){\n    return true;\n}\n\n/**\n * Called after the 'chart' datasets have been drawn.\n * Note that this hook will not be called if the datasets drawing has been previously\n * cancelled.\n * \n * @param chart the chart instance.\n */\ndefault void onAfterDatasetsDraw(IsChart chart){\n}\n\n/**\n * Called before drawing the 'chart' dataset at the given 'index' (datasets are drawn\n * in the reverse order).\n * If any plugin returns false, the datasets drawing is cancelled until another\n * 'render' is triggered.\n * \n * @param chart the chart instance.\n * @param item the dataset item.\n * @return false to cancel the chart datasets drawing.\n */\ndefault boolean onBeforeDatasetDraw(IsChart chart, PluginDatasetArgument item){\n    return true;\n}\n\n/**\n * Called after the 'chart' datasets at the given 'args.index' have been drawn (datasets\n * are drawn in the reverse order).\n * Note that this hook will not be called if the datasets drawing has been previously cancelled.\n * \n * @param chart the chart instance.\n * @param item the dataset item.\n */\ndefault void onAfterDatasetDraw(IsChart chart, PluginDatasetArgument item){\n}\n\n/**\n * Called after every drawing cycle, coming from initialization, updating or rendering of chart.\n * \n * @param chart the chart instance\n */\ndefault void onEndDrawing(IsChart chart){\n}\n")),(0,i.kt)("p",null,"The rendering process is documented in the flowchart below."),(0,i.kt)("img",{src:(0,o.Z)("/img/pluginFlowCharts-Chart render.png")}),(0,i.kt)("h3",{id:"building-scales"},"Building scales"),(0,i.kt)("p",null,"Plugins are notified during the scales and ticks building process. "),(0,i.kt)("p",null,"The process is triggered when ",(0,i.kt)("a",{parentName:"p",href:"#updating-or-reconfiguring"},"updating or reconfiguring process")," of the chart is invoked."),(0,i.kt)("p",null,"The following hooks (the following ones are the methods definitions in the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/Plugin.html"},"Plugin"),") can be used to interact during the chart updating or reconfiguring:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Called before scale data limits are calculated.\n * This hook is called separately for each scale in the chart.\n * \n * @param chart the chart instance.\n * @param argument argument of method which contains the scale instance.\n */\ndefault void onBeforeDataLimits(IsChart chart, PluginScaleArgument argument){\n}\n\n/**\n * Called after scale data limits are calculated.\n * This hook is called separately for each scale in the chart.\n * \n * @param chart the chart instance.\n * @param argument argument of method which contains the scale instance.\n */\ndefault void onAfterDataLimits(IsChart chart, PluginScaleArgument argument){\n}\n\n/**\n * Called before scale builds its ticks.\n * This hook is called separately for each scale in the chart.\n * \n * @param chart the chart instance.\n * @param argument argument of method which contains the scale instance.\n */\ndefault void onBeforeBuildTicks(IsChart chart, PluginScaleArgument argument){\n}\n\n/**\n * Called after scale has build its ticks.\n * This hook is called separately for each scale in the chart.\n * \n * @param chart the chart instance.\n * @param argument argument of method which contains the scale instance.\n */\ndefault void onAfterBuildTicks(IsChart chart, PluginScaleArgument argument){\n}\n")),(0,i.kt)("h3",{id:"tooltip-drawing"},"Tooltip drawing"),(0,i.kt)("p",null,"Plugins are notified during the tooltip drawing process. "),(0,i.kt)("p",null,"The following hooks (the following one are the methods definitions in the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/Plugin.html"},"Plugin"),") can be used to interact during the tooltip drawing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Called before drawing the 'tooltip'.\n * If any plugin returns false, the tooltip drawing is cancelled until another 'render' \n * is triggered.\n * \n * @param chart the chart instance.\n * @param item The tooltip instance.\n * @return false to cancel the chart tooltip drawing.\n */\ndefault boolean onBeforeTooltipDraw(IsChart chart, PluginTooltipArgument item){\n    return true;\n}\n\n/**\n * Called after drawing the 'tooltip'.\n * Note that this hook will not be called if the tooltip drawing has been previously cancelled.\n * \n * @param chart the chart instance.\n * @param item The tooltip instance.\n */\ndefault void onAfterTooltipDraw(IsChart chart, PluginTooltipArgument item){\n}\n")),(0,i.kt)("h3",{id:"events"},"Events"),(0,i.kt)("p",null,"Plugins are notified during the chart canvas event process. "),(0,i.kt)("p",null,"The process is triggered when a resize event from the browser has been caught by ",(0,i.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),"."),(0,i.kt)("p",null,"The following hooks (the following ones are the methods definitions in the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/Plugin.html"},"Plugin"),") can be used to interact during the canvas event process:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Called before processing the specified 'event'.\n * If any plugin returns false, the event will be discarded.\n * \n * @param chart the chart instance.\n * @param argument instance which contains event context\n * @return false to discard the event.\n */\ndefault boolean onBeforeEvent(IsChart chart, PluginEventArgument argument){\n    return true;\n}\n\n/**\n * Called after the 'event' has been consumed.\n * Note that this hook will not be called if the 'event' has been previously discarded.\n * \n * @param chart the chart instance.\n * @param argument instance which contains event context\n */\ndefault void onAfterEvent(IsChart chart, PluginEventArgument argument){\n}\n")),(0,i.kt)("h3",{id:"resizing-resetting-and-destroying"},"Resizing, resetting and destroying"),(0,i.kt)("p",null,"Plugins are notified during the resize, reset and destroy processes. "),(0,i.kt)("p",null,"The process is triggered when "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"../charts/Api#reset"},"reset method"))," of the chart is invoked."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"../charts/Api#destroy"},"destroy method"))," of the chart is invoked."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"../charts/Api#resize"},"resize method"))," of the chart is invoked."),(0,i.kt)("li",{parentName:"ul"},"a resize event from the browser has been caught by ",(0,i.kt)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS"),".")),(0,i.kt)("p",null,"The following hooks (the following ones are the methods definitions in the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/Plugin.html"},"Plugin"),") can be used to interact during the resize, reset and destroy processes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Called after the chart as been resized.\n * \n * @param chart the chart instance.\n * @param argument argument of method which contains the new canvas display size.\n */\ndefault void onResize(IsChart chart, PluginResizeArgument argument){\n}\n\n/**\n * Called during chart reset.\n * \n * @param chart the chart instance.\n */\ndefault void onReset(IsChart chart){\n}\n\n/**\n * Called after the chart as been destroyed.\n * \n * @param chart the chart instance.\n */\ndefault void onDestroy(IsChart chart){\n}\n")))}d.isMDXComponent=!0}}]);