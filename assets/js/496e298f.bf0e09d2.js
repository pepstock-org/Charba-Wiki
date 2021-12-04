"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[7532],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,m=d["".concat(c,".").concat(u)]||d[u]||h[u]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},44996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return l}});var r=n(52263),a=n(13919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,l=o.forcePrependBaseUrl,i=void 0!==l&&l,c=o.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(i)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+p:p}(o,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},86046:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return h},default:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=n(44996),i=["components"],c={id:"Controllers",title:"Controllers",hide_title:!0,sidebar_label:"Controllers"},s=void 0,p={unversionedId:"Controllers",id:"version-3.3/Controllers",isDocsHomePage:!1,title:"Controllers",description:"Controllers",source:"@site/versioned_docs/version-3.3/Controllers.md",sourceDirName:".",slug:"/Controllers",permalink:"/Charba-Wiki/docs/3.3/Controllers",tags:[],version:"3.3",frontMatter:{id:"Controllers",title:"Controllers",hide_title:!0,sidebar_label:"Controllers"},sidebar:"version-3.3/docs",previous:{title:"Plugins",permalink:"/Charba-Wiki/docs/3.3/Plugins"},next:{title:"Colors and filling",permalink:"/Charba-Wiki/docs/3.3/Colors"}},h=[{value:"Controllers",id:"controllers",children:[],level:2},{value:"Controller type",id:"controller-type",children:[],level:2},{value:"Extending",id:"extending",children:[],level:2}],d={toc:h};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"controllers"},"Controllers"),(0,o.kt)("p",null,"Controllers are able to extend existing chart types or creating new one implementing a specific interface. Leveraging on ",(0,o.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," implementation, ",(0,o.kt)("strong",{parentName:"p"},"Charba")," provides the features to set a controller."),(0,o.kt)("img",{src:(0,l.Z)("/img/controller.png")}),(0,o.kt)("p",null,"A controller must implement the ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/Controller.html"},"Controller")," interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface Controller {\n\n   /**\n    * Controller must define a unique id in order to be configurable\n    * Returns the controller id.\n    * \n    * @return the controller id.\n    */\n   ControllerType getType();\n\n   /**\n    * Initializes the controller.\n    * \n    * @param context context of controller\n    * @param chart chart instance\n    * @param datasetIndex dataset index\n    */\n   void initialize(ControllerContext context, IsChart chart, int datasetIndex);\n\n   /**\n    * Create elements for each piece of data in the dataset. Store elements in an array on the dataset.\n    * \n    * @param context context of controller\n    * @param chart chart instance\n    */\n   void addElements(ControllerContext context, IsChart chart);\n\n   /**\n    * Create a single element for the data at the given index and reset its state.\n    * \n    * @param context context of controller\n    * @param chart chart instance\n    * @param index dataset index\n    */\n   void addElementAndReset(ControllerContext context, IsChart chart, int index);\n\n   /**\n    * Draw the representation of the dataset.\n    * \n    * @param context context of controller\n    * @param chart chart instance\n    * @param ease if specified, this number represents how far to transition elements.\n    */\n   void draw(ControllerContext context, IsChart chart, double ease);\n\n   /**\n    * Remove hover styling from the given element.\n    * \n    * @param context context of controller\n    * @param chart chart instance\n    * @param element element to be removed.\n    */\n   void removeHoverStyle(ControllerContext context, IsChart chart, StyleElement element);\n\n   /**\n    * Add hover styling to the given element.\n    * \n    * @param context context of controller\n    * @param chart chart instance\n    * @param element element to be set.\n    */\n   void setHoverStyle(ControllerContext context, IsChart chart, StyleElement element);\n\n   /**\n    * Update the elements in response to new data.\n    * \n    * @param context context of controller\n    * @param chart chart instance\n    * @param reset if `true`, put the elements into a reset state so they can animate to their final values\n    */\n   void update(ControllerContext context, IsChart chart, boolean reset);\n}\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"PAY ATTENTION")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Not all methods of ",(0,o.kt)("a",{parentName:"p",href:"https://www.chartjs.org/docs/2.9.4/developers/charts.html"},"Chart.JS controller")," are implemented and furthermore the few documentation about what every method should do for enabling new chart, is suggesting to implement controllers ONLY extending existing chart types. "))),(0,o.kt)("p",null,"The easy way to implement a controller is to extends the ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/controllers/AbstractController.html"},"AbstractController")," class and implement ",(0,o.kt)("inlineCode",{parentName:"p"},"getType")," which returns the new chart type to register."),(0,o.kt)("p",null,"A controller must be registered at global level as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// REGISTER\nDefaults.get().getControllers().extend(new MyController());\n")),(0,o.kt)("h2",{id:"controller-type"},"Controller type"),(0,o.kt)("p",null,"Controllers must define a unique id in order to be configurable."),(0,o.kt)("p",null,"This id should follow the name convention  (otherwise an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalArgumentException.html"},"illegal argument")," exception will be thrown):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"can not start with a dot or an underscore"),(0,o.kt)("li",{parentName:"ul"},"can not contain any non-URL-safe characters")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/controllers/ControllerType.html"},"ControllerType")," is an entity which must be implemented for every controller you want to implement. A controller type implements ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/Type.html"},"Type")," interface like all other chart types available out-of-the-box. "),(0,o.kt)("p",null,"Here are the way how to create a controller type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// in this case the scale type of chart is MULTI scale by default\nControllerType chartFromScratch = new ControllerType("completelynew");\n\n// in this case is creating a chart with single scale\nControllerType chartFromScratchWithScale = new ControllerType("completelynewwithscale", ScaleType.SINGLE);\n\n// in this case is creating a chart extending the existing chart LINE\nControllerType chartExtendLine = new ControllerType("extendedline", ChartType.LINE);\n')),(0,o.kt)("h2",{id:"extending"},"Extending"),(0,o.kt)("p",null,"The usual usage of a controller is to extend an existing chart and change the behavior of it."),(0,o.kt)("p",null,"The controller is implementing the behavior but you should extend the current chart (for instance line) extending LineChart and its options and datasets (if needed). "),(0,o.kt)("p",null,"Here is an example."),(0,o.kt)("p",null,"First of all, creates and registers a controller:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Defaults.get().getControllers().extend(new AbstractController() {\n\n   @Override\n   public ControllerType getType() {\n      return LineMyChart.TYPE;\n   }\n\n   @Override\n   public void draw(ControllerContext jsThis, IsChart chart, double ease) {\n      super.draw(jsThis, chart, ease);\n      // Now we can do some custom drawing for this dataset. Here we'll draw a red box around the first point in each dataset\n         \n      DatasetMetaItem metaItem = chart.getDatasetMeta(jsThis.getIndex());\n      List<DatasetItem> items = metaItem.getDatasets();\n      for (DatasetItem item : items) {\n         DatasetViewItem view = item.getView();\n         Context2dItem ctx = chart.getCanvas().getContext2d();\n         ctx.save();\n         ctx.setStrokeStyle(view.getBorderColorAsString());\n         ctx.setLineWidth(1D);\n         ctx.strokeRect(view.getX() - 10, view.getY() - 10,  20, 20);\n         ctx.restore();\n      }\n   }\n});\n")),(0,o.kt)("p",null,"The best practice, extending existing chart, is to call ",(0,o.kt)("inlineCode",{parentName:"p"},"super.draw(jsThis, chart, ease);")," (or whatever other method) in order that the parent chart can do own work."),(0,o.kt)("p",null,"Then you can extend the chart with your chart type, as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class LineMyChart extends LineChart {\n   \n   public static final ControllerType TYPE = new ControllerType("myline", ChartType.LINE);\n\n   public LineMyChart() {\n      super(TYPE);\n   }\n\n}\n')),(0,o.kt)("p",null,"Now you have a chart with type ",(0,o.kt)("inlineCode",{parentName:"p"},"myline")," that you can use into your project."))}u.isMDXComponent=!0}}]);