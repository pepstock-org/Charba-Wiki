"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[73520],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>y});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,y=h["".concat(s,".").concat(d)]||h[d]||g[d]||o;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[h]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(45072),a=(n(11504),n(95788)),o=n(70964);const l={id:"Controllers",title:"Controllers",hide_title:!0,sidebar_label:"Controllers"},i=void 0,s={unversionedId:"Controllers",id:"version-5.2/Controllers",title:"Controllers",description:"Controllers",source:"@site/versioned_docs/version-5.2/Controllers.md",sourceDirName:".",slug:"/Controllers",permalink:"/Charba-Wiki/docs/5.2/Controllers",draft:!1,tags:[],version:"5.2",frontMatter:{id:"Controllers",title:"Controllers",hide_title:!0,sidebar_label:"Controllers"},sidebar:"docs",previous:{title:"Importing Chart.JS plugins",permalink:"/Charba-Wiki/docs/5.2/plugins/ImportPlugins"},next:{title:"Introduction",permalink:"/Charba-Wiki/docs/5.2/extensions/"}},c={},p=[{value:"Controllers",id:"controllers",level:2},{value:"Creating a controller",id:"creating-a-controller",level:2},{value:"Creating a controller type",id:"creating-a-controller-type",level:3},{value:"Hooks",id:"hooks",level:3},{value:"Initialization",id:"initialization",level:4},{value:"Rendering",id:"rendering",level:4},{value:"Implementing a controller",id:"implementing-a-controller",level:3},{value:"Extending existing dataset",id:"extending-existing-dataset",level:3},{value:"Extending existing chart",id:"extending-existing-chart",level:3},{value:"A simple example",id:"a-simple-example",level:2}],h={toc:p},g="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.c)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"controllers"},"Controllers"),(0,a.yg)("p",null,"Controllers are able to extend existing chart types or creating new one implementing a specific interface. Leveraging on ",(0,a.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," implementation, ",(0,a.yg)("strong",{parentName:"p"},"Charba")," provides the features to extend a controller."),(0,a.yg)("img",{src:(0,o.c)("/img/controller.png")}),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("a",{parentName:"p",href:"https://www.chartjs.org/docs/latest/developers/charts.html"},"Chart.JS controller")," provides as set of hooks to create an own controller but you should implement all internal structure which is not fully documented and depends on each implementation.",(0,a.yg)("br",null),"\nFor this reason, ",(0,a.yg)("strong",{parentName:"p"},"Charba")," provides the interfaces to create controllers ",(0,a.yg)("strong",{parentName:"p"},"ONLY")," extending existing chart types.")),(0,a.yg)("h2",{id:"creating-a-controller"},"Creating a controller"),(0,a.yg)("p",null,"To create own chart type, you need to perform some specific and mandatory steps:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"create a ",(0,a.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/controllers/ControllerType.html"},"controller type")),(0,a.yg)("li",{parentName:"ol"},"implement the ",(0,a.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/Controller.html"},"controller")," interface where all hooks are defined"),(0,a.yg)("li",{parentName:"ol"},"extend the ",(0,a.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/data/Dataset.html"},"dataset")," class of the original chart type"),(0,a.yg)("li",{parentName:"ol"},"extend the ",(0,a.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/IsChart.html"},"chart")," class of the original chart type")),(0,a.yg)("h3",{id:"creating-a-controller-type"},"Creating a controller type"),(0,a.yg)("p",null,"Controllers must define a unique id in order to be configurable."),(0,a.yg)("p",null,"This id should follow the name convention  (otherwise an ",(0,a.yg)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/IllegalArgumentException.html"},"illegal argument")," exception will be thrown):"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"can not start with a dot or an underscore"),(0,a.yg)("li",{parentName:"ul"},"can not contain any non-URL-safe characters")),(0,a.yg)("p",null,"The ",(0,a.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/controllers/ControllerType.html"},"controller type")," is an entity which must be implemented for every controller you want to implement. A controller type implements ",(0,a.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/Type.html"},"Type")," interface like all other chart types available out-of-the-box. "),(0,a.yg)("p",null,"Here are the way how to create a controller type:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'// creates a chart extending the existing chart LINE\nControllerType myLine = new ControllerType("myline", ChartType.LINE, new ControllerProvider(){\n\n    @Override\n    public Controller provide(ControllerType controllerType){\n        // creates an instance of my controller\n        return myController;\n    }\n\n});\n')),(0,a.yg)("p",null,"The controller type constructor is getting a ",(0,a.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/controllers/ControllerProvider.html"},"controller provider")," instance as argument in order to provide the controller during the registration."),(0,a.yg)("p",null,"The controller is usually automatically registered in ",(0,a.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," when used. Anyway the controller type object is providing the method to ",(0,a.yg)("strong",{parentName:"p"},"register")," the controller programmatically in ",(0,a.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// registers the controller in CHART.JS\nmyControllerType.register();\n")),(0,a.yg)("p",null,"You can also be notified when and if the registration of the controller ended correctly. This is done by the implementation of ",(0,a.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/controllers/ControllerRegistrationHandler.html"},"ControllerRegistrationHandler")," interface to set during the controller type creation."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'// creates a chart extending the existing chart LINE\nControllerType myLine = new ControllerType("myline", ChartType.LINE, myControllerProvider,\n    \n    new ControllerRegistrationHandler {\n        /**\n         * Invoked before the controller will be register to CHART.JS.\n         * \n         * @param controllerType the controller type which is registering\n         */\n        @Override\n        public void onBeforeRegister(ControllerType controllerType) {\n            // invoked before registration \n        }\n    \n        /**\n         * Invoked after the controller is registered to CHART.JS.\n         * \n         * @param controllerType the controller type which is registering\n         * @param registered true if the controller has been registered otherwise false\n         */\n        @Override \n        public void onAfterRegister(ControllerType controllerType, boolean registered) {\n            // invoked after registration \n            // with the status, if was registered or not.\n        }\n    }\n});\n')),(0,a.yg)("h3",{id:"hooks"},"Hooks"),(0,a.yg)("p",null,"A controller must implement the ",(0,a.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/Controller.html"},"Controller")," interface which is containing all hooks which will be invoked during the whole chart life cycle."),(0,a.yg)("p",null,"The interface provides ",(0,a.yg)("strong",{parentName:"p"},"before")," and ",(0,a.yg)("strong",{parentName:"p"},"after")," hooks for each phases exposes by ",(0,a.yg)("a",{parentName:"p",href:"https://www.chartjs.org/docs/3.7.1/developers/charts.html"},"Chart.JS controller"),":"),(0,a.yg)("h4",{id:"initialization"},"Initialization"),(0,a.yg)("p",null,"Every controller is initialized every time new chart instance is creating."),(0,a.yg)("p",null,"The following hooks (the following ones are the methods definitions in the ",(0,a.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/Controller.html"},"Controller"),") can be used to initialize the chart:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Called before it initializes the controller.\n * \n * @param context context of controller\n * @param chart chart instance\n */\ndefault void onBeforeInitialize(ControllerContext context, IsChart chart) {\n    // do nothing\n}\n\n/**\n * Called after it initializes the controller.\n * \n * @param context context of controller\n * @param chart chart instance\n */\ndefault void onAfterInitialize(ControllerContext context, IsChart chart) {\n    // do nothing\n}\n")),(0,a.yg)("p",null,"The initialization process is documented in the flowchart below."),(0,a.yg)("img",{src:(0,o.c)("/img/controllerFlowCharts-Chart Init.png")}),(0,a.yg)("h4",{id:"rendering"},"Rendering"),(0,a.yg)("p",null,"Every controller can be rendered after ",(0,a.yg)("a",{parentName:"p",href:"#initialization"},"initialization")," and every time that the chart instance will be updated or rendered."),(0,a.yg)("p",null,"They are 4 main phases:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Linking of scale ensures that the data set represented by a controller is linked to a scale.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Called before it ensures that the data set represented by a controller is linked to a scale.\n * \n * @param context context of controller\n * @param chart chart instance\n */\ndefault void onBeforeLinkScales(ControllerContext context, IsChart chart) {\n    // do nothing\n}\n\n/**\n * Called after it ensures that the data set represented by a controller is linked to a scale.\n * \n * @param context context of controller\n * @param chart chart instance\n */\ndefault void onAfterLinkScales(ControllerContext context, IsChart chart) {\n    // do nothing\n}\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Parsing the data into the controller meta data.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Called before it invokes to parse the data into the controller meta data.\n * \n * @param context context of controller\n * @param chart chart instance\n * @param start start index of metadata\n * @param count count of metadata\n */\ndefault void onBeforeParse(ControllerContext context, IsChart chart, int start, int count) {\n    // do nothing\n}\n\n/**\n * Called after it invokes to parse the data into the controller meta data.\n * \n * @param context context of controller\n * @param chart chart instance\n * @param start start index of metadata\n * @param count count of metadata\n */\ndefault void onAfterParse(ControllerContext context, IsChart chart, int start, int count) {\n    // do nothing\n}\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Updating the elements in response to new data.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Called before it updates the elements in response to new data.\n * \n * @param context context of controller\n * @param chart chart instance\n * @param mode update mode\n */\ndefault void onBeforeUpdate(ControllerContext context, IsChart chart, TransitionKey mode) {\n    // do nothing\n}\n\n/**\n * Called after it updates the elements in response to new data.\n * \n * @param context context of controller\n * @param chart chart instance\n * @param mode update mode\n */\ndefault void onAfterUpdate(ControllerContext context, IsChart chart, TransitionKey mode) {\n    // do nothing\n}\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Drawing the representation of the data set.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Called before it draws the representation of the data set.\n * \n * @param context context of controller\n * @param chart chart instance\n */\ndefault void onBeforeDraw(ControllerContext context, IsChart chart) {\n    // do nothing\n}\n\n/**\n * Called after it draws the representation of the data set.\n * \n * @param context context of controller\n * @param chart chart instance\n */\ndefault void onAfterDraw(ControllerContext context, IsChart chart) {\n    // do nothing\n}\n")),(0,a.yg)("p",null,"The rendering process is documented in the flowchart below."),(0,a.yg)("img",{src:(0,o.c)("/img/controllerFlowCharts-Chart update.png")}),(0,a.yg)("h3",{id:"implementing-a-controller"},"Implementing a controller"),(0,a.yg)("p",null,"The easy way to implement a controller is to extends the ",(0,a.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/controllers/AbstractController.html"},"AbstractController")," class and pass the controller type by the constructor."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'// new controller\npublic class MyHorizontalBarController extends AbstractController {\n\n    // controller type\n    public static final ControllerType TYPE = new ControllerType("myHorizontalBar", \n                                                  ChartType.BAR, \n                                                  controllerType) -> new MyHorizontalBarController()); \n\n    // constructor\n    public MyHorizontalBarController() {\n        super(TYPE);\n    }\n\n}\n')),(0,a.yg)("h3",{id:"extending-existing-dataset"},"Extending existing dataset"),(0,a.yg)("p",null,"To use new controller in ",(0,a.yg)("strong",{parentName:"p"},"Charba"),", you need to implement a dataset object extending the dataset class of your original chart type of the controller."),(0,a.yg)("p",null,"This is mandatory because ",(0,a.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," needs to manage the different types of datasets."),(0,a.yg)("p",null,"See the following example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// extends the horizontal bar dataset\npublic final class MyHorizontalBarDataset extends HorizontalBarDataset {\n\n    // extends the constructor of the horizontal bar dataset\n    public MyHorizontalBarDataset(){\n        super(MyHorizontalBarController.TYPE, Dataset.DEFAULT_HIDDEN);\n    }\n\n}\n")),(0,a.yg)("h3",{id:"extending-existing-chart"},"Extending existing chart"),(0,a.yg)("p",null,"To use new controller in ",(0,a.yg)("strong",{parentName:"p"},"Charba"),", you need to implement a chart object extending the chart class of your original chart type of the controller."),(0,a.yg)("p",null,"See the following example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// extends the horizontal bar chart\npublic class MyHorizontalBarChart extends HorizontalBarChart{\n\n    // extends the constructor of the horizontal bar chart\n    public MyHorizontalBarChart(){\n        super(MyHorizontalBarController.TYPE);\n    }\n\n    @Override\n    public MyHorizontalBarDataset newDataset(){\n        return new MyHorizontalBarDataset();\n    }\n    \n    @Override\n    public MyHorizontalBarDataset newDataset(boolean hidden){\n        return new MyHorizontalBarDataset();\n    }\n\n}\n")),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"You can not set new properties for the controller options in the global or chart type default, only at chart instance.")),(0,a.yg)("h2",{id:"a-simple-example"},"A simple example"),(0,a.yg)("p",null,"The usage of a controller is to extend an existing chart and change the behavior of it."),(0,a.yg)("p",null,"The controller is implementing the behavior but you should extend the current chart (for instance line) extending line chart. "),(0,a.yg)("img",{src:(0,o.c)("/img/controllerSample.png")}),(0,a.yg)("p",null,"Here is an example."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'// -----------------------------------------\n// Creates the chart class of "myLine" chart\n// -----------------------------------------\n// extends the line chart\npublic class MyLineChart extends LineChart {\n\n    // -----------------------------------------\n    // Creates the "myLine" controller type\n    // -----------------------------------------\n    public static final ControllerType TYPE = new ControllerType("myLine", ChartType.LINE, \n        new ControllerProvider(){\n        \n            @Override\n            public Controller provide(ControllerType controllerType){\n                // -----------------------------------------\n                // Creates the "myLine" controller \n                // -----------------------------------------\n                return new AbstractController(){\n    \n                    @Override\n                    public ControllerType getType(){\n                        return MyLineChart.TYPE;\n                    }\n    \n                    @Override\n                    public void draw(ControllerContext jsThis, IsChart chart){\n                        super.draw(jsThis, chart);\n    \n                        DatasetItem item = chart.getDatasetItem(jsThis.getIndex());\n                        \n                        List<DatasetElement> elements = item.getElements();\n                        for (DatasetElement elem : elements){\n                            Context2dItem ctx = chart.getCanvas().getContext2d();\n                            ctx.save();\n                            ctx.setStrokeColor(elem.getOptions().getBorderColorAsString());\n                            ctx.setLineWidth(1D);\n                            ctx.strokeRect(elem.getX() - 10, elem.getY() - 10, 20, 20);\n                            ctx.restore();\n                        }\n                    }\n                };\n            }\n        }\n    );\n\n    public MyLineChart(){\n        super(TYPE);\n    }\n\n    @Override\n    public MyLineDataset newDataset(){\n        return newDataset(false);\n    }\n\n    @Override\n    public MyLineDataset newDataset(boolean hidden){\n        return new MyLineDataset();\n    }\n}\n// -----------------------------------------\n// Creates the dataset class of "myLine" chart\n// -----------------------------------------\npublic final class MyLineDataset extends LineDataset {\n\n    public MyLineDataset(){\n        super(MyLineChart.TYPE, Dataset.DEFAULT_HIDDEN);\n    }\n\n}\n// -----------------------------------------\n// Registers "myLine" controller\n// -----------------------------------------\nMyLineChart.TYPE.register();\n// -----------------------------------------\n// Creates "myLine" chart \n// -----------------------------------------\n// creates the chart\nMyLineChart chart = new MyLineChart();\n// creates the dataset\nMyLineDataset dataset = chart.newDataset();\ndataset.setLabel("dataset 1");\n...\nchart.getData().setDatasets(dataset);\n// add to DOM by Elemental 2\nDomGlobal.document.body.appendChild(chart.getChartElement().as());\n')))}d.isMDXComponent=!0}}]);