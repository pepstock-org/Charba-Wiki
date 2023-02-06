"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[66354],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=h(a),u=i,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var h=2;h<r;h++)s[h]=a[h];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5782:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(87462),i=(a(67294),a(3905)),r=a(44996);const s={id:"Api",title:"Api",hide_title:!0,sidebar_label:"Api"},o=void 0,l={unversionedId:"charts/Api",id:"version-5.3/charts/Api",title:"Api",description:"Chart API",source:"@site/versioned_docs/version-5.3/charts/Api.md",sourceDirName:"charts",slug:"/charts/Api",permalink:"/Charba-Wiki/docs/5.3/charts/Api",draft:!1,tags:[],version:"5.3",frontMatter:{id:"Api",title:"Api",hide_title:!0,sidebar_label:"Api"},sidebar:"docs",previous:{title:"Sankey",permalink:"/Charba-Wiki/docs/5.3/charts/ChartSankey"},next:{title:"Introduction",permalink:"/Charba-Wiki/docs/5.3/axes/"}},h={},c=[{value:"Chart API",id:"chart-api",level:2},{value:"draw",id:"draw",level:3},{value:"destroy",id:"destroy",level:3},{value:"update",id:"update",level:3},{value:"reconfigure",id:"reconfigure",level:3},{value:"reset",id:"reset",level:3},{value:"render",id:"render",level:3},{value:"stop",id:"stop",level:3},{value:"resize",id:"resize",level:3},{value:"clear",id:"clear",level:3},{value:"toBase64Image",id:"tobase64image",level:3},{value:"getDatasetItem",id:"getdatasetitem",level:3},{value:"getDatasetAtEvent",id:"getdatasetatevent",level:3},{value:"isDatasetVisible",id:"isdatasetvisible",level:3},{value:"getVisibleDatasetCount",id:"getvisibledatasetcount",level:3},{value:"setDatasetVisibility",id:"setdatasetvisibility",level:3},{value:"toggleDataVisibility",id:"toggledatavisibility",level:3},{value:"isDataVisible",id:"isdatavisible",level:3},{value:"hide",id:"hide",level:3},{value:"show",id:"show",level:3},{value:"Active elements",id:"active-elements",level:3},{value:"Extended chart API",id:"extended-chart-api",level:2},{value:"isInitialized()",id:"isinitialized",level:4},{value:"getId()",id:"getid",level:4},{value:"getCanvas()",id:"getcanvas",level:4},{value:"getChartElement()",id:"getchartelement",level:4},{value:"getNode()",id:"getnode",level:4},{value:"getBaseType()",id:"getbasetype",level:4},{value:"getDefaultChartOptions()",id:"getdefaultchartoptions",level:4},{value:"getWholeOptions()",id:"getwholeoptions",level:4},{value:"Chart life cycle",id:"chart-life-cycle",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"chart-api"},"Chart API"),(0,i.kt)("p",null,"For each chart, there are a set of methods which are wrapping the ",(0,i.kt)("a",{parentName:"p",href:"http://www.chartjs.org/docs/latest/developers/api.html"},"Chart.JS API"),". These are available on all charts created with ",(0,i.kt)("strong",{parentName:"p"},"Charba"),"."),(0,i.kt)("h3",{id:"draw"},"draw"),(0,i.kt)("p",null,"Use this to draw the chart instance that is created. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// draws a specific chart instance\nchart.draw();\n")),(0,i.kt)("p",null,"This method works with ",(0,i.kt)("strong",{parentName:"p"},"drawOnAttach")," options which can be used setting ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," to draw the chart when the chart has been attached to the parent GWT element."),(0,i.kt)("h3",{id:"destroy"},"destroy"),(0,i.kt)("p",null,"Use this to destroy any chart instances that are created. This will clean up any references stored within ",(0,i.kt)("strong",{parentName:"p"},"Charba"),", along with any associated event listeners attached."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// destroys a specific chart instance\nchart.destroy();\n")),(0,i.kt)("p",null,"This method works with ",(0,i.kt)("strong",{parentName:"p"},"destroyOnDetach")," options which can be used setting ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," to destroy the chart when the chart has been detached from the parent GWT element."),(0,i.kt)("h3",{id:"update"},"update"),(0,i.kt)("p",null,"Triggers an update of the chart. This can be safely called after updating the data or options object. This will update all scales, legends, and then re-render the chart."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// gets all datasets of chart\nList<Dataset> datasets = chart.getData().getDatasets();\n// updates the data of datasets\nfor (Dataset ds : datasets){\n   ds.getData().add(getRandomDigit(negative));\n}\n// updates the chart\nchart.update();\n")),(0,i.kt)("p",null,"The update method can also be invoked providing a mode key or a mode configuration."),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/options/TransitionKey.html"},"mode key")," can be provided to indicate what should be updated and what animation configuration should be used. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// creates a custom mode\nTransitionKey mode = TransitionKey.create("myMode");\n// creates an animation transitions configuration for my mode\nAnimationTransition animationMode = chart.getOptions().getTransitions().create(mode);\n// changes animation configuration setting duration to 10 seconds\nanimationMode.getAnimation().setDuration(10000);\n// gets all datasets of chart\nList<Dataset> datasets = chart.getData().getDatasets();\n// updates the data of datasets\nfor (Dataset ds : datasets){\n   ds.getData().add(getRandomDigit(negative));\n}\n// updates the chart using my mode\nchart.update(mode);\n')),(0,i.kt)("p",null,"The defaults modes are mapped in the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/enums/DefaultTransitionKey.html"},"DefaultTransitionKey")," enumeration and they are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ACTIVE")," uses the animation configuration when an element is hovering"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"HIDE")," uses the animation configuration when a dataset is hidden (by using legend or ",(0,i.kt)("a",{parentName:"li",href:"#hide"},"hide")," method)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RESET")," uses the animation configuration when an element is resetting."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RESIZE")," uses the animation configuration when an element is resizing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SHOW")," uses the animation configuration when a dataset is shown (by using legend or ",(0,i.kt)("a",{parentName:"li",href:"#show"},"show")," method)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"NONE")," used to ignore any animation configuration.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// gets all datasets of chart\nList<Dataset> datasets = chart.getData().getDatasets();\n// updates the data of datasets\nfor (Dataset ds : datasets){\n   ds.getData().add(getRandomDigit(negative));\n}\n// updates the chart using "hide" mode\nchart.update(DefaultTransitionKey.HIDE);\n')),(0,i.kt)("p",null,"The update can be also invoke providing a specific animation configuration, created at runtime and not assigned to any mode."),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/UpdateConfiguration.html"},"configuration object")," can be provided with additional configuration for the update process. This is useful when ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," is manually called inside an event handler and some different animation is desired."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates an update configuration\nUpdateConfiguration configuration = new UpdateConfiguration();\n// sets easing and duration to 4 seconds\nconfiguration.setEasing(Easing.EASE_IN_OUT_QUART);\nconfiguration.setDuration(4000);\n// updates the chart using my configuration\nchart.update(configuration);\n")),(0,i.kt)("h3",{id:"reconfigure"},"reconfigure"),(0,i.kt)("p",null,"To update the options changing the configuration at runtime, mutating the options property in place."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// changes the title directly on chart options\nchart.getOptions().getTitle().setText("new Title");\n// reconfigures and updates the chart\nchart.reconfigure();\n')),(0,i.kt)("p",null,"The reconfigure method can also be invoked providing a mode key or a mode configuration."),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/options/IsAnimationModeKey.html"},"mode key")," can be provided to indicate what should be updated and what animation configuration should be used. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// creates a custom mode\nTransitionKey mode = TransitionKey.create("myMode");\n// creates an animation transitions configuration for my mode\nAnimationTransition animationMode = chart.getOptions().getTransitions().create(mode);\n// changes animation configuration setting duration to 10 seconds\nanimationMode.getAnimation().setDuration(10000);\n// changes the title directly on chart options\nchart.getOptions().getTitle().setText("new Title");\n// reconfigures and updates the chart using my mode\nchart.reconfigure(mode);\n')),(0,i.kt)("p",null,"The defaults modes are mapped in the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/enums/DefaultTransitionKey.html"},"DefaultTransitionKey")," enumeration and they are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ACTIVE")," uses the animation configuration when an element is hovering"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"HIDE")," uses the animation configuration when a dataset is hidden (by using legend or ",(0,i.kt)("a",{parentName:"li",href:"#hide"},"hide")," method)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RESET")," uses the animation configuration when an element is resetting."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RESIZE")," uses the animation configuration when an element is resizing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SHOW")," uses the animation configuration when a dataset is shown (by using legend or ",(0,i.kt)("a",{parentName:"li",href:"#show"},"show")," method)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"NONE")," used to ignore any animation configuration.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// changes the title directly on chart options\nchart.getOptions().getTitle().setText("new Title");\n// updates the chart using "hide" mode\nchart.reconfigure(DefaultTransitionKey.HIDE);\n')),(0,i.kt)("p",null,"The update can be also invoke providing a specific animation configuration, created at runtime and not assigned to any mode."),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/UpdateConfiguration.html"},"configuration object")," can be provided with additional configuration for the update process. This is useful when ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," is manually called inside an event handler and some different animation is desired."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// changes the title directly on chart options\nchart.getOptions().getTitle().setText("new Title");\n// creates an update configuration\nUpdateConfiguration configuration = new UpdateConfiguration();\n// sets easing and duration to 4 seconds\nconfiguration.setEasing(Easing.EASE_IN_OUT_QUART);\nconfiguration.setDuration(4000);\n// reconfigures and updates the chart using my configuration\nchart.reconfigure(configuration);\n')),(0,i.kt)("h3",{id:"reset"},"reset"),(0,i.kt)("p",null,"Resets the chart to it's state before the initial animation. A new animation can then be triggered using ",(0,i.kt)("a",{parentName:"p",href:"#update"},"update"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// resets the chart\nchart.reset();\n")),(0,i.kt)("h3",{id:"render"},"render"),(0,i.kt)("p",null,"Triggers a redraw of all chart elements. Note, this does not update elements for new data. Use ",(0,i.kt)("a",{parentName:"p",href:"#update"},"update")," in that case."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// forces the chart rendering\nchart.render();\n")),(0,i.kt)("h3",{id:"stop"},"stop"),(0,i.kt)("p",null,"Uses this to stop any current animation loop. This will pause the chart during any current animation frame. Call ",(0,i.kt)("a",{parentName:"p",href:"#render"},"render")," to re-animate."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// stops the charts animation loop at its current frame\nchart.stop();\n")),(0,i.kt)("h3",{id:"resize"},"resize"),(0,i.kt)("p",null,"Use this to manually resize the canvas element. This is run each time the canvas container is resized, but you can call this method manually if you change the size of the canvas nodes container element."),(0,i.kt)("p",null,"You can call ",(0,i.kt)("inlineCode",{parentName:"p"},".resize()")," with no parameters to have the chart take the size of its container element, or you can pass explicit dimensions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// resizes and redraws the chart to fill its container element\nchart.resize();\n// resizes and redraws the chart to a specific size (in pixels)\nchart.resize(400, 200);\n")),(0,i.kt)("h3",{id:"clear"},"clear"),(0,i.kt)("p",null,"Will clear the chart canvas. Used extensively internally between animation frames, but you might find it useful."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// clears the canvas that chart instance is drawn on\nchart.clear();\n")),(0,i.kt)("h3",{id:"tobase64image"},"toBase64Image"),(0,i.kt)("p",null,"Returns a base 64 encoded string of the chart  which containing a representation of the image in the different format and quality."),(0,i.kt)("p",null,"The method can accept the image format that you want by an ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/enums/ImageMimeType.html"},"ImageMimeType")," instance and a number between 0 and 1 indicating the image quality to use for image formats that use lossy compression."),(0,i.kt)("p",null,"The default image type is in ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Portable_Network_Graphics"},"PNG")," format and the default image quality is 0.92."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// gets the PNG image of the chart and default quality\nString image = chart.toBase64Image();\n// gets the JPEG image of the chart and default quality\nString imageJpeg = chart.toBase64Image(ImageMimeType.JPEG);\n// gets the PNG image of the chart and maximum quality\nString imagePngMaxQuality = chart.toBase64Image(ImageMimeType.PNG, 1);\n// or\nString imagePngMaxQuality1 = chart.toBase64Image(1);\n")),(0,i.kt)("h3",{id:"getdatasetitem"},"getDatasetItem"),(0,i.kt)("p",null,"Looks for the dataset that matches the current index and returns that the dataset item."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/items/DatasetItem.html"},"dataset item")," will contain information about the dataset, depending on the chart type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// gets the dataset item at index 0\nDatasetItem item = chart.getDatasetItem(0);\n// uses the item \nif (item.isHidden() || !item.isVisible()){\n   ...\n   ...\n}\n")),(0,i.kt)("h3",{id:"getdatasetatevent"},"getDatasetAtEvent"),(0,i.kt)("p",null,"Looks for the datasets that matches the position of the event and returns a list of dataset referencef."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/items/DatasetReference.html"},"dataset reference")," will contain information about indexes of dataset and the element which depends on the chart type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// gets the dataset references by event instance\nList<DatasetReference> references = chart.getDatasetAtEvent(event);\n// uses the references\nfor (DatasetReference reference : references){\n   ...\n   ...\n}\n")),(0,i.kt)("h3",{id:"isdatasetvisible"},"isDatasetVisible"),(0,i.kt)("p",null,"Looks for the dataset if it's visible or not, selected by index. It returns ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," if index of out of range or if the dataset is hidden."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// checks if the dataset at index 0 is visible\nif (chart.isDatasetVisible(0)){\n   ...\n   ...\n}\n")),(0,i.kt)("h3",{id:"getvisibledatasetcount"},"getVisibleDatasetCount"),(0,i.kt)("p",null,"Returns the amount of visible datasets on the chart. If chart is not initiated, it returns a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/items/Undefined.html#INTEGER"},"undefined value"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// gets the amount of visible datasets of chart\nint amount = chart.getVisibleDatasetCount();\nif (amount > 0){\n   ...\n   ...\n}\n")),(0,i.kt)("h3",{id:"setdatasetvisibility"},"setDatasetVisibility"),(0,i.kt)("p",null,"Sets the visibility for a given dataset. This can be used to build a chart legend in HTML. During click on one of the HTML items, you can call ",(0,i.kt)("inlineCode",{parentName:"p"},"setDatasetVisibility")," to change the appropriate dataset."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// hides dataset at index 1\nchart.setDatasetVisibility(1, false);\n// chart now renders with dataset hidden\nchart.update(); \n")),(0,i.kt)("h3",{id:"toggledatavisibility"},"toggleDataVisibility"),(0,i.kt)("p",null,"Toggles the visibility of an item in all datasets. A dataset needs to explicitly support this feature for it to have an effect."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// toggles the item in all datasets, at index 2\nchart.toggleDataVisibility(2);\n// chart now renders with item hidden\nchart.update(); \n")),(0,i.kt)("h3",{id:"isdatavisible"},"isDataVisible"),(0,i.kt)("p",null,"Returns the stored visibility state of an data index for all datasets. Set by ",(0,i.kt)("a",{parentName:"p",href:"#toggledatavisibility"},"toggleDataVisibility"),". A dataset should use this method to determine if an item should not be visible."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// checks if dataset 2 is visible\nboolean visible = chart.isDataVisible(2);\n")),(0,i.kt)("h3",{id:"hide"},"hide"),(0,i.kt)("p",null,"If the data index is not specified, sets the visibility for the given dataset to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". Updates the chart and animates the dataset with ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/enums/DefaultTransitionKey.html#HIDE"},"DefaultTransitionKey.HIDE")," mode."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// hides dataset at index 1 and does 'hide' animation.\nchart.hide(1);\n")),(0,i.kt)("p",null,"If the data index is specified, sets the hidden flag of that element to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". Updates the chart and animates the dataset with ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/enums/DefaultTransitionKey.html#HIDE"},"DefaultTransitionKey.HIDE")," mode."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// hides data at index 1 of dataset at index 0 and does 'hide' animation.\nchart.hide(0, 1);\n")),(0,i.kt)("h3",{id:"show"},"show"),(0,i.kt)("p",null,"If the data index is not specified, sets the visibility for the given dataset to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". Updates the chart and animates the dataset with ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/enums/DefaultTransitionKey.html#SHOW"},"DefaultTransitionKey.SHOW")," mode."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// shows dataset at index 1 and does 'show' animation.\nchart.show(1); \n")),(0,i.kt)("p",null,"If the data index is specified, sets the hidden flag of that element to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". Updates the chart and animates the dataset with ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/enums/DefaultTransitionKey.html#SHOW"},"DefaultTransitionKey.SHOW")," mode."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// shows data at index 1 of dataset at index 0 and does 'show' animation.\nchart.show(0, 1); \n")),(0,i.kt)("h3",{id:"active-elements"},"Active elements"),(0,i.kt)("p",null,"Sets the active (hovered) elements for the chart. You can create a list of ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/items/ActiveDatasetElement.html"},"ActiveDatasetElement")," and set which dataset and/or data must be active, programmatically."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates a active element for data set at index 0 and for data at index 2\nActiveDatasetElement active0 = new ActiveDatasetElement(0, 2);\n// creates a active element for data set at index 1 and for data at index 2\nActiveDatasetElement active1 = new ActiveDatasetElement(1, 2);\n// sets the elements\nchart.setActiveElements(active0, active1);\n\nchart.update();\n")),(0,i.kt)("img",{src:(0,r.Z)("/img/activeElements.png")}),(0,i.kt)("p",null,"You can activate the tooltip programmatically. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates a active element for data set at index 0 and for data at index 2\nActiveDatasetElement active0 = new ActiveDatasetElement(0, 2);\n// creates a active element for data set at index 1 and for data at index 2\nActiveDatasetElement active1 = new ActiveDatasetElement(1, 2);\n// sets the elements\nchart.setTooltipActiveElements(active0, active1);\n\nchart.update();\n")),(0,i.kt)("p",null,"For tooltip, you can also pass a point used to pass to the positioners. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates a active element for data set at index 0 and for data at index 2\nActiveDatasetElement active0 = new ActiveDatasetElement(0, 2);\n// creates a active element for data set at index 1 and for data at index 2\nActiveDatasetElement active1 = new ActiveDatasetElement(1, 2);\n// create a point\nPoint point = new Point(200, 200);\n// sets the point and elements\nchart.setTooltipActiveElements(point, active0, active1);\n\nchart.update();\n")),(0,i.kt)("p",null,"To reset the existing active elements, you can invoke as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// resets the elements\nchart.resetActiveElements();\n// resets the tooltip's elements \nchart.resetTooltipActiveElements();\n\nchart.update();\n")),(0,i.kt)("h2",{id:"extended-chart-api"},"Extended chart API"),(0,i.kt)("p",null,"For each chart, there are a set of methods which are available on all charts created with ",(0,i.kt)("strong",{parentName:"p"},"Charba"),"."),(0,i.kt)("h4",{id:"isinitialized"},"isInitialized()"),(0,i.kt)("p",null,"Provides ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if ",(0,i.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," chart instance has been initialized, otherwise ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("h4",{id:"getid"},"getId()"),(0,i.kt)("p",null,"Returns the unique ID assigned to the chart which is set to DOM ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/dom/elements/Div.html"},"DIV element"),". This is NOT the same id property, used by ",(0,i.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),"."),(0,i.kt)("h4",{id:"getcanvas"},"getCanvas()"),(0,i.kt)("p",null,"Provides the DOM ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/dom/elements/Canvas.html"},"CANVAS element")," instance used by ",(0,i.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," to draw the chart. This is helpful when a plugin or controller is created to work directly on the canvas."),(0,i.kt)("h4",{id:"getchartelement"},"getChartElement()"),(0,i.kt)("p",null,"Provides the the object's underlying DOM ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/dom/elements/Div.html"},"DIV element")," used by ",(0,i.kt)("strong",{parentName:"p"},"Charba")," to wrap the chart."),(0,i.kt)("h4",{id:"getnode"},"getNode()"),(0,i.kt)("p",null,"Provides an object which maps all ",(0,i.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," internal objects used at runtime to draw and manage the chart. This is helpful when a plugin or controller is created to work directly on the canvas. The root object is mapped by ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/ChartNode.html"},"ChartNode")," class."),(0,i.kt)("h4",{id:"getbasetype"},"getBaseType()"),(0,i.kt)("p",null,"Provides the type which has been extended when a chart is a controller implementation. In case the chart is not a controller implementation, it will return the original type, if the controller is not extending any existing type, it will return ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),". "),(0,i.kt)("h4",{id:"getdefaultchartoptions"},"getDefaultChartOptions()"),(0,i.kt)("p",null,"Provides the default options created based on chart type of the chart instance."),(0,i.kt)("h4",{id:"getwholeoptions"},"getWholeOptions()"),(0,i.kt)("p",null,"Provides the default options by a chart instance, merging global, chart type global and chart options."),(0,i.kt)("h2",{id:"chart-life-cycle"},"Chart life cycle"),(0,i.kt)("p",null,"It could be helpful to listen when the life-cycle of charts instances is changing, without activating a plugin to all charts, avoiding that someone can activate or deactivate the plugins, programmatically."),(0,i.kt)("p",null,"For this reason, a life cycle listener interface has been implemented in order to be able to catch when a chart has been created and/or destroy, and when is configured."),(0,i.kt)("p",null,"The interface ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/ChartsLifecycleListener.html"},"ChartsLifecycleListener")," is the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Called before initializing 'chart'.\n * \n * @param chart the chart instance.\n */\ndefault void onBeforeInit(IsChart chart) {\n    // your logic\n}\n\n/**\n * Called after 'chart' has been initialized.\n * \n * @param chart the chart instance.\n */\ndefault void onAfterInit(IsChart chart) {\n    // your logic\n}\n\n/**\n * Called before configuring 'chart'.\n * \n * @param chart the chart instance.\n */\ndefault void onBeforeConfigure(IsChart chart) {\n    // your logic\n}\n\n/**\n * Called after 'chart' has been configured.\n * \n * @param chart the chart instance.\n */\ndefault void onAfterConfigure(IsChart chart) {\n    // your logic\n}\n\n/**\n * Called before the chart has been destroyed.\n * \n * @param chart the chart instance.\n */\ndefault void onBeforeDestroy(IsChart chart) {\n    // do nothing\n}\n\n/**\n * Called after the chart has been destroyed.\n * \n * @param chart the chart instance.\n */\ndefault void onAfterDestroy(IsChart chart) {\n    // do nothing\n}\n")),(0,i.kt)("p",null,"To enable the life cycle listener, you must add the listener instance as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates a listener\nChartsLifecycleListener listener = new ChartsLifecycleListener(){\n\n    @Override\n    public void onBeforeConfigure(IsChart chart){\n        // my logic\n    }\n\n};\n// Charts object contains all live charts instances\n// adds new listener\nCharts.addLifecycleListener(listener);\n// removes existing listener\nCharts.removeLifecycleListener(listener); \n")))}u.isMDXComponent=!0}}]);