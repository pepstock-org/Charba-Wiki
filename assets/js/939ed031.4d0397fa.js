"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[1350],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=s(a),m=n,g=h["".concat(p,".").concat(m)]||h[m]||u[m]||l;return a?r.createElement(g,o(o({ref:t},c),{},{components:a})):r.createElement(g,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3919:function(e,t,a){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,{b:function(){return r},Z:function(){return n}})},4996:function(e,t,a){a.d(t,{C:function(){return l},Z:function(){return o}});var r=a(2263),n=a(3919);function l(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var l=void 0===r?{}:r,o=l.forcePrependBaseUrl,i=void 0!==o&&o,p=l.absolute,s=void 0!==p&&p;if(!a)return a;if(a.startsWith("#"))return a;if((0,n.b)(a))return a;if(i)return t+a;var c=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+c:c}(l,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},284:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),o=a(4996),i=["components"],p={id:"Patterns",title:"Patterns",hide_title:!0,sidebar_label:"Patterns"},s=void 0,c={unversionedId:"Patterns",id:"version-3.3/Patterns",isDocsHomePage:!1,title:"Patterns",description:"Patterns",source:"@site/versioned_docs/version-3.3/Patterns.md",sourceDirName:".",slug:"/Patterns",permalink:"/Charba-Wiki/docs/3.3/Patterns",tags:[],version:"3.3",frontMatter:{id:"Patterns",title:"Patterns",hide_title:!0,sidebar_label:"Patterns"},sidebar:"version-3.3/docs",previous:{title:"Colors and filling",permalink:"/Charba-Wiki/docs/3.3/Colors"},next:{title:"Gradients",permalink:"/Charba-Wiki/docs/3.3/Gradients"}},u=[{value:"Patterns",id:"patterns",children:[]},{value:"Tiles",id:"tiles",children:[]}],h={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"patterns"},"Patterns"),(0,l.kt)("p",null,"A pattern represents an opaque object, based on an image, that it can be used to fill or stroke properties of a dataset chart."),(0,l.kt)("p",null,"Apart of the image, to create a pattern you could decide how to repeat the pattern's image. Possible values are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/enums/Repetition.html#REPEAT"},'"repeat"')," (both directions)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/enums/Repetition.html#REPEAT_X"},'"repeat-x"')," (horizontal only)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/enums/Repetition.html#REPEAT_Y"},'"repeat-y"')," (vertical only)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/enums/Repetition.html#NO_REPEAT"},'"no-repeat"')," (neither direction)")),(0,l.kt)("p",null,"If repetition is not specified creating a pattern, a value of ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/enums/Repetition.html#REPEAT"},'"repeat"')," will be used."),(0,l.kt)("p",null,"A pattern is an alternative option to configure a dataset by ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")," object, instead of using a color."),(0,l.kt)("img",{src:(0,o.Z)("/img/pattern.png")}),(0,l.kt)("p",null,"For example, if you wanted to fill a dataset with a pattern from an image, you could do the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"LineDataset dataset = new LineDataset();\n// convert a ImageResource into Img\nImg img = ImagesHelper.toImg(Images.INSTANCE.pattern());      \nPattern pattern = new Pattern(img);\n      \ndataset.setBackgroundColor(pattern);\ndataset.setBorderColor(HtmlColor.BLACK);\n...\ndataset.setFill(Fill.origin);\n")),(0,l.kt)("p",null,"where ",(0,l.kt)("inlineCode",{parentName:"p"},"Images.INSTANCE.pattern()")," is a method of a ",(0,l.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/resources/client/ClientBundle.html"},"ClientBundle"),", where the image is inside the project and using the ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/gwt/ImagesHelper.html"},"ImagesHelper")," can be cast of a ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html"},"Img"),", as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public interface Images extends ClientBundle {\n\n   /**\n    * Static reference to be used everywhere.\n    */\n   Images INSTANCE = GWT.create(Images.class);\n\n   /**\n    */\n   @Source("/images/crossline-lines.png")\n   ImageResource pattern();\n')),(0,l.kt)("p",null,"To avoid to have patterns without loaded images, it's suggested to prefetch the images at starting of application, leveraging on GWT ",(0,l.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/user/client/ui/Image.html#prefetch-com.google.gwt.safehtml.shared.SafeUri-"},"Image")," as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// loads images\nImage.prefetch(Images.INSTANCE.pattern().getSafeUri());\n")),(0,l.kt)("h2",{id:"tiles"},"Tiles"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Charba")," provides a tile builders which can easily generate canvas or ",(0,l.kt)("strong",{parentName:"p"},"Charba")," patterns with a set of shapes in order to use them in datasets, instead of colors."),(0,l.kt)("img",{src:(0,o.Z)("/img/tiles.png")}),(0,l.kt)("p",null,"The main class to use this feature is ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/tiles/TilesFactory.html"},"TilesFactory")," which provides a set of methods to get a tile as canvas pattern or as ",(0,l.kt)("strong",{parentName:"p"},"Charba")," pattern which can be used into datasets."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'DoughnutDataset dataset = chart.newDataset();\n\nPattern p1 = TilesFactory.createPattern(Shape.square, "#0000FF");\nPattern p2 = TilesFactory.createPattern(Shape.verticalZigzag, "#FFFFFF");\nPattern p3 = TilesFactory.createPattern(Shape.diagonal, "#FF0000");\nPattern p4 = TilesFactory.createPattern(Shape.ring, "#OOFFOO");\n\ndataset.setBackgroundColor(p1, p2, p3, p4);\n')),(0,l.kt)("p",null,"The tiles factory can also create canvas patterns to use wherever you want in your application:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'CanvasPatternItem canvasPattern = TilesFactory.createTile(Shape.square, "#0000FF");\n')),(0,l.kt)("p",null,"This is the ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/tiles/Shape.html"},"list")," of shapes out-of-the-box:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"back slashed line"),(0,l.kt)("li",{parentName:"ul"},"box"),(0,l.kt)("li",{parentName:"ul"},"cross"),(0,l.kt)("li",{parentName:"ul"},"cross dash"),(0,l.kt)("li",{parentName:"ul"},"dash"),(0,l.kt)("li",{parentName:"ul"},"diagonal"),(0,l.kt)("li",{parentName:"ul"},"diamond"),(0,l.kt)("li",{parentName:"ul"},"diamond box"),(0,l.kt)("li",{parentName:"ul"},"disc"),(0,l.kt)("li",{parentName:"ul"},"dot"),(0,l.kt)("li",{parentName:"ul"},"dot dash"),(0,l.kt)("li",{parentName:"ul"},"double diagonal"),(0,l.kt)("li",{parentName:"ul"},"empty star"),(0,l.kt)("li",{parentName:"ul"},"inverted diagonal"),(0,l.kt)("li",{parentName:"ul"},"inverted double diagonal"),(0,l.kt)("li",{parentName:"ul"},"inverted triangle"),(0,l.kt)("li",{parentName:"ul"},"line"),(0,l.kt)("li",{parentName:"ul"},"plus"),(0,l.kt)("li",{parentName:"ul"},"ring"),(0,l.kt)("li",{parentName:"ul"},"slashed line"),(0,l.kt)("li",{parentName:"ul"},"solid"),(0,l.kt)("li",{parentName:"ul"},"star"),(0,l.kt)("li",{parentName:"ul"},"square"),(0,l.kt)("li",{parentName:"ul"},"triangle"),(0,l.kt)("li",{parentName:"ul"},"weave"),(0,l.kt)("li",{parentName:"ul"},"zigzag"),(0,l.kt)("li",{parentName:"ul"},"vertical line"),(0,l.kt)("li",{parentName:"ul"},"vertical zigzag")),(0,l.kt)("p",null,"There are other 2 additional shapes, available out of the box."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/tiles/ImageShape.html"},"ImageShape")," enables to use an image and apply (scaling it) into tile. The vantage is that we can decide the background of the image if it has got a transparent background."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'ImageShape imageShape = new ImageShape(ImagesHelper.toImg(Images.INSTANCE.myImage()));\n...     \nPattern pattern = TilesFactory.createPattern(imageShape, "#990099");\n...\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/tiles/CharacterShape.html"},"CharacterShape")," enables to use a character (ONLY 1 otherwise you will get an exception) and apply into tile. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'CharacterShape charShape = new CharacterShape("m");\n...     \nPattern pattern = TilesFactory.createPattern(charShape, "#990099");\n...\n')),(0,l.kt)("p",null,"It is also possible to use ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/PointStyle.html"},"PointStyle")," as shape for a tile."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Pattern pattern = TilesFactory.createPattern(PointStyle.CIRCLE, "#990099");\n')),(0,l.kt)("p",null,"The tiles factory has got a default configuration which can be updated in order that new configuration can be used for all tiles."),(0,l.kt)("p",null,"The complete configuration items are described by following table:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shape"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/tiles/Shape.html"},"Shape")),(0,l.kt)("td",{parentName:"tr",align:null},"Shape.SQUARE"),(0,l.kt)("td",{parentName:"tr",align:null},"the shape to apply on tile")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"backgroundColor"),(0,l.kt)("td",{parentName:"tr",align:null},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:null},"rgba(100, 100, 100, 0.7)"),(0,l.kt)("td",{parentName:"tr",align:null},"the background color of tile")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shapeColor"),(0,l.kt)("td",{parentName:"tr",align:null},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:null},"rgba(255, 255, 255, 0.8)"),(0,l.kt)("td",{parentName:"tr",align:null},"the shape color on tile")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"the size of the tile (always a square). The minimum size for a tile is ",(0,l.kt)("strong",{parentName:"td"},"10"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lineCap"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/CapStyle.html"},"CapStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"CapStyle.ROUND"),(0,l.kt)("td",{parentName:"tr",align:null},"determines the shape used to draw the end points of lines")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lineJoin"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/JoinStyle.html"},"JoinStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"JoinStyle.ROUND"),(0,l.kt)("td",{parentName:"tr",align:null},"determines the shape used to join two line segments where they meet")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Charba")," provides a ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/tiles/TilesBuilder.html"},"TilesBuilder")," to create tiles using the ",(0,l.kt)("strong",{parentName:"p"},"set")," methods in sequence and get a ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"pattern")," or ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html"},"CanvasPatternItem")," at the end of configuration."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// creates a CHARBA pattern\nPattern pattern = TilesBuilder.create().setShape(Shape.EMPTY_STAR).setBackgroundColor("#990099").asPattern();\n// creates a canvas pattern\nCanvasPatternItem canvasPattern = TilesBuilder.create().setShape(Shape.EMPTY_STAR).setBackgroundColor("#990099").asTile();\n')))}m.isMDXComponent=!0}}]);