"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[6734],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),g=s(a),m=n,u=g["".concat(p,".").concat(m)]||g[m]||h[m]||o;return a?r.createElement(u,l(l({ref:e},c),{},{components:a})):r.createElement(u,l({ref:e},c))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=g;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3919:function(t,e,a){function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!r(t)}a.d(e,{b:function(){return r},Z:function(){return n}})},4996:function(t,e,a){a.d(e,{C:function(){return o},Z:function(){return l}});var r=a(2263),n=a(3919);function o(){var t=(0,r.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,o=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,r){var o=void 0===r?{}:r,l=o.forcePrependBaseUrl,i=void 0!==l&&l,p=o.absolute,s=void 0!==p&&p;if(!a)return a;if(a.startsWith("#"))return a;if((0,n.b)(a))return a;if(i)return e+a;var c=a.startsWith(e)?a:e+a.replace(/^\//,"");return s?t+c:c}(o,a,t,e)}}}function l(t,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(t,e)}},7e3:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return h},default:function(){return m}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),l=a(4996),i=["components"],p={id:"Patterns",title:"Patterns",hide_title:!0,sidebar_label:"Patterns and tiles"},s=void 0,c={unversionedId:"coloring/Patterns",id:"version-4.1/coloring/Patterns",isDocsHomePage:!1,title:"Patterns",description:"Patterns",source:"@site/versioned_docs/version-4.1/coloring/Patterns.md",sourceDirName:"coloring",slug:"/coloring/Patterns",permalink:"/Charba-Wiki/docs/4.1/coloring/Patterns",tags:[],version:"4.1",frontMatter:{id:"Patterns",title:"Patterns",hide_title:!0,sidebar_label:"Patterns and tiles"},sidebar:"version-4.1/docs",previous:{title:"Colors and filling",permalink:"/Charba-Wiki/docs/4.1/coloring/Colors"},next:{title:"Gradients",permalink:"/Charba-Wiki/docs/4.1/coloring/Gradients"}},h=[{value:"Patterns",id:"patterns",children:[]},{value:"Tiles",id:"tiles",children:[{value:"Image shape",id:"image-shape",children:[]},{value:"Character shape",id:"character-shape",children:[]},{value:"Point style shape",id:"point-style-shape",children:[]},{value:"Builder",id:"builder",children:[]}]}],g={toc:h};function m(t){var e=t.components,a=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"patterns"},"Patterns"),(0,o.kt)("p",null,"A pattern represents an opaque object, based on an image, that it can be used to fill or stroke properties of a dataset chart."),(0,o.kt)("p",null,"Apart of the image, to create a pattern you could decide how to repeat the pattern's image. Possible values are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/dom/enums/Repetition.html#REPEAT"},"repeat"))," (both directions)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/dom/enums/Repetition.html#REPEAT_X"},"repeat-x"))," (horizontal only)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/dom/enums/Repetition.html#REPEAT_Y"},"repeat-y"))," (vertical only)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/dom/enums/Repetition.html#NO_REPEAT"},"no-repeat"))," (neither direction)")),(0,o.kt)("p",null,"If repetition is not specified creating a pattern, a value of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/dom/enums/Repetition.html#REPEAT"},"repeat"))," will be used."),(0,o.kt)("p",null,"A pattern is an alternative option to configure a dataset by ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")," object, instead of using a color."),(0,o.kt)("img",{src:(0,l.Z)("/img/pattern.png")}),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")," can be created only by a ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/PatternBuilder.html"},"patter builder")," in order to optimize the cache used for them. "),(0,o.kt)("p",null,"For example, if you wanted to fill a dataset with a pattern from an image, you could do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// creates a dataset\nLineDataset dataset = new LineDataset();\n// converts a "ImageResource" in "Img" class\nImg img = ImagesHelper.toImg(Images.INSTANCE.pattern());\n// creates a pattern by the image     \nPattern pattern = PatternBuilder.create(img).build();\n// sets the pattern as background color of the dataset      \ndataset.setBackgroundColor(pattern);\n// fills the dataset\ndataset.setFill(Fill.origin);\n')),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"Images.INSTANCE.pattern()")," is a method of a ",(0,o.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/resources/client/ClientBundle.html"},"ClientBundle"),", where the image is inside the project and using the ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/gwt/ImagesHelper.html"},"ImagesHelper")," can be cast of a ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/dom/elements/Img.html"},"Img"),", as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public interface Images extends ClientBundle {\n\n   Images INSTANCE = GWT.create(Images.class);\n\n   @Source("/images/crossline-lines.png")\n   ImageResource pattern();\n}\n')),(0,o.kt)("p",null,"To avoid to have patterns without loaded images, it's suggested to prefetch the images at starting of application, leveraging on GWT ",(0,o.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/user/client/ui/Image.html#prefetch-com.google.gwt.safehtml.shared.SafeUri-"},"Image")," as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// loads images\nImage.prefetch(Images.INSTANCE.pattern().getSafeUri());\n")),(0,o.kt)("h2",{id:"tiles"},"Tiles"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Charba")," provides a tile builders which can easily generate canvas or ",(0,o.kt)("strong",{parentName:"p"},"Charba")," patterns with a set of shapes in order to use them in datasets, instead of colors."),(0,o.kt)("img",{src:(0,l.Z)("/img/tiles.png")}),(0,o.kt)("p",null,"The main class to use this feature is ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/tiles/TilesFactory.html"},"TilesFactory")," which provides a set of methods to get a tile as canvas pattern or as ",(0,o.kt)("strong",{parentName:"p"},"Charba")," pattern which can be used in the datasets."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// creates a dataset\nDoughnutDataset dataset = chart.newDataset();\n// creates 4 tiles patterns for each data of the dataset\nPattern p1 = TilesFactory.createPattern(Shape.square, "#0000FF");\nPattern p2 = TilesFactory.createPattern(Shape.verticalZigzag, "#FFFFFF");\nPattern p3 = TilesFactory.createPattern(Shape.diagonal, "#FF0000");\nPattern p4 = TilesFactory.createPattern(Shape.ring, "#OOFFOO");\n// sets the patterns as background color fo dataset\ndataset.setBackgroundColor(p1, p2, p3, p4);\n')),(0,o.kt)("p",null,"The tiles factory can also create canvas patterns to use wherever you want in your application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// creates a DOM canvas pattern\nCanvasPatternItem canvasPattern = TilesFactory.createTile(Shape.square, "#0000FF");\n')),(0,o.kt)("p",null,"The tiles factory has got a default configuration which can be updated in order that new configuration can be used for all tiles."),(0,o.kt)("p",null,"The complete configuration items are described by following table:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"shape"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/tiles/Shape.html"},"Shape")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Shape.SQUARE"),(0,o.kt)("td",{parentName:"tr",align:"left"},"the shape to apply on tile")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,o.kt)("td",{parentName:"tr",align:"left"},"rgba(100, 100, 100, 0.7) - ",(0,o.kt)("span",{style:{backgroundColor:"rgba(100,100,100,0.7)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,o.kt)("td",{parentName:"tr",align:"left"},"the background color of tile")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"shapeColor"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,o.kt)("td",{parentName:"tr",align:"left"},"rgba(255, 255, 255, 0.8) - ",(0,o.kt)("span",{style:{backgroundColor:"rgba(255,255,255,0.8)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,o.kt)("td",{parentName:"tr",align:"left"},"the shape color on tile")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"size"),(0,o.kt)("td",{parentName:"tr",align:"left"},"int"),(0,o.kt)("td",{parentName:"tr",align:"left"},"20"),(0,o.kt)("td",{parentName:"tr",align:"left"},"the size of the tile (always a square). The minimum size for a tile is ",(0,o.kt)("strong",{parentName:"td"},"10"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"lineCap"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/CapStyle.html"},"CapStyle")),(0,o.kt)("td",{parentName:"tr",align:"left"},"CapStyle.ROUND"),(0,o.kt)("td",{parentName:"tr",align:"left"},"determines the shape used to draw the end points of lines")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"lineJoin"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/JoinStyle.html"},"JoinStyle")),(0,o.kt)("td",{parentName:"tr",align:"left"},"JoinStyle.ROUND"),(0,o.kt)("td",{parentName:"tr",align:"left"},"determines the shape used to join two line segments where they meet")))),(0,o.kt)("p",null,"This is the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/tiles/Shape.html"},"list of shapes")),", available out-of-the-box:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"back slashed line"),(0,o.kt)("li",{parentName:"ul"},"box"),(0,o.kt)("li",{parentName:"ul"},"cross"),(0,o.kt)("li",{parentName:"ul"},"cross dash"),(0,o.kt)("li",{parentName:"ul"},"dash"),(0,o.kt)("li",{parentName:"ul"},"diagonal"),(0,o.kt)("li",{parentName:"ul"},"diamond"),(0,o.kt)("li",{parentName:"ul"},"diamond box"),(0,o.kt)("li",{parentName:"ul"},"disc"),(0,o.kt)("li",{parentName:"ul"},"dot"),(0,o.kt)("li",{parentName:"ul"},"dot dash"),(0,o.kt)("li",{parentName:"ul"},"double diagonal"),(0,o.kt)("li",{parentName:"ul"},"empty star"),(0,o.kt)("li",{parentName:"ul"},"inverted diagonal"),(0,o.kt)("li",{parentName:"ul"},"inverted double diagonal"),(0,o.kt)("li",{parentName:"ul"},"inverted triangle"),(0,o.kt)("li",{parentName:"ul"},"line"),(0,o.kt)("li",{parentName:"ul"},"plus"),(0,o.kt)("li",{parentName:"ul"},"ring"),(0,o.kt)("li",{parentName:"ul"},"slashed line"),(0,o.kt)("li",{parentName:"ul"},"solid"),(0,o.kt)("li",{parentName:"ul"},"star"),(0,o.kt)("li",{parentName:"ul"},"square"),(0,o.kt)("li",{parentName:"ul"},"triangle"),(0,o.kt)("li",{parentName:"ul"},"weave"),(0,o.kt)("li",{parentName:"ul"},"zigzag"),(0,o.kt)("li",{parentName:"ul"},"vertical line"),(0,o.kt)("li",{parentName:"ul"},"vertical zigzag")),(0,o.kt)("h3",{id:"image-shape"},"Image shape"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/tiles/ImageShape.html"},"ImageShape")," enables to use an image and apply (scaling it) to the tile. The vantage is that we can decide the background of the image if it has got a transparent background."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'ImageShape imageShape = new ImageShape(ImagesHelper.toImg(Images.INSTANCE.myImage()));\n...     \nPattern pattern = TilesFactory.createPattern(imageShape, "#990099");\n...\n')),(0,o.kt)("img",{src:(0,l.Z)("/img/tilesImages.png")}),(0,o.kt)("h3",{id:"character-shape"},"Character shape"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/tiles/CharacterShape.html"},"CharacterShape")," enables to use a character (ONLY 1 otherwise you will get an exception) and apply to tile. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// creates a custom shape\nCharacterShape charShape = new CharacterShape("m");\n// creates a tile by the custom shape\nPattern pattern = TilesFactory.createPattern(charShape, "#990099");\n')),(0,o.kt)("img",{src:(0,l.Z)("/img/tilesCharacter.png")}),(0,o.kt)("h3",{id:"point-style-shape"},"Point style shape"),(0,o.kt)("p",null,"It is also possible to use ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/PointStyle.html"},"PointStyle")," as shape for a tile."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// creates a shape by a point style\nPattern pattern = TilesFactory.createPattern(PointStyle.CIRCLE, "#990099");\n')),(0,o.kt)("img",{src:(0,l.Z)("/img/tilesPointStyles.png")}),(0,o.kt)("h3",{id:"builder"},"Builder"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Charba")," provides a ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/tiles/TilesBuilder.html"},"TilesBuilder")," to create tiles using the ",(0,o.kt)("strong",{parentName:"p"},"set")," methods in sequence and get a ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/Pattern.html"},"pattern")," or ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html"},"CanvasPatternItem")," at the end of configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// creates a CHARBA pattern\nPattern pattern = TilesBuilder.create().setShape(Shape.EMPTY_STAR).setBackgroundColor("#990099").asPattern();\n// creates a canvas pattern\nCanvasPatternItem canvasPattern = TilesBuilder.create()\n                                              .setShape(Shape.EMPTY_STAR)\n                                              .setBackgroundColor("#990099")\n                                              .asTile();\n')))}m.isMDXComponent=!0}}]);