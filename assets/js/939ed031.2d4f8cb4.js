(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(8),l=(a(0),a(209)),o=a(210),i={id:"Patterns",title:"Patterns",hide_title:!0,sidebar_label:"Patterns"},c={unversionedId:"Patterns",id:"version-3.3/Patterns",isDocsHomePage:!1,title:"Patterns",description:"Patterns",source:"@site/versioned_docs/version-3.3/Patterns.md",sourceDirName:".",slug:"/Patterns",permalink:"/Charba-Wiki/docs/3.3/Patterns",version:"3.3",sidebar_label:"Patterns",frontMatter:{id:"Patterns",title:"Patterns",hide_title:!0,sidebar_label:"Patterns"},sidebar:"version-3.3/docs",previous:{title:"Colors",permalink:"/Charba-Wiki/docs/3.3/Colors"},next:{title:"Gradients",permalink:"/Charba-Wiki/docs/3.3/Gradients"}},p=[{value:"Patterns",id:"patterns",children:[]},{value:"Tiles",id:"tiles",children:[]}],b={toc:p};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"patterns"},"Patterns"),Object(l.b)("p",null,"A pattern represents an opaque object, based on an image, that it can be used to fill or stroke properties of a dataset chart."),Object(l.b)("p",null,"Apart of the image, to create a pattern you could decide how to repeat the pattern's image. Possible values are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/enums/Repetition.html#REPEAT"},'"repeat"')," (both directions)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/enums/Repetition.html#REPEAT_X"},'"repeat-x"')," (horizontal only)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/enums/Repetition.html#REPEAT_Y"},'"repeat-y"')," (vertical only)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/enums/Repetition.html#NO_REPEAT"},'"no-repeat"')," (neither direction)")),Object(l.b)("p",null,"If repetition is not specified creating a pattern, a value of ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/enums/Repetition.html#REPEAT"},'"repeat"')," will be used."),Object(l.b)("p",null,"A pattern is an alternative option to configure a dataset by ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")," object, instead of using a color."),Object(l.b)("img",{src:Object(o.a)("/img/pattern.png")}),Object(l.b)("p",null,"For example, if you wanted to fill a dataset with a pattern from an image, you could do the following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"LineDataset dataset = new LineDataset();\n// convert a ImageResource into Img\nImg img = ImagesHelper.toImg(Images.INSTANCE.pattern());      \nPattern pattern = new Pattern(img);\n      \ndataset.setBackgroundColor(pattern);\ndataset.setBorderColor(HtmlColor.BLACK);\n...\ndataset.setFill(Fill.origin);\n")),Object(l.b)("p",null,"where ",Object(l.b)("inlineCode",{parentName:"p"},"Images.INSTANCE.pattern()")," is a method of a ",Object(l.b)("a",{parentName:"p",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/resources/client/ClientBundle.html"},"ClientBundle"),", where the image is inside the project and using the ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/gwt/ImagesHelper.html"},"ImagesHelper")," can be cast of a ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html"},"Img"),", as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'public interface Images extends ClientBundle {\n\n   /**\n    * Static reference to be used everywhere.\n    */\n   Images INSTANCE = GWT.create(Images.class);\n\n   /**\n    */\n   @Source("/images/crossline-lines.png")\n   ImageResource pattern();\n')),Object(l.b)("p",null,"To avoid to have patterns without loaded images, it's suggested to prefetch the images at starting of application, leveraging on GWT ",Object(l.b)("a",{parentName:"p",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/user/client/ui/Image.html#prefetch-com.google.gwt.safehtml.shared.SafeUri-"},"Image")," as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"// loads images\nImage.prefetch(Images.INSTANCE.pattern().getSafeUri());\n")),Object(l.b)("h2",{id:"tiles"},"Tiles"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Charba")," provides a tile builders which can easily generate canvas or ",Object(l.b)("strong",{parentName:"p"},"Charba")," patterns with a set of shapes in order to use them in datasets, instead of colors."),Object(l.b)("img",{src:Object(o.a)("/img/tiles.png")}),Object(l.b)("p",null,"The main class to use this feature is ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/tiles/TilesFactory.html"},"TilesFactory")," which provides a set of methods to get a tile as canvas pattern or as ",Object(l.b)("strong",{parentName:"p"},"Charba")," pattern which can be used into datasets."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'DoughnutDataset dataset = chart.newDataset();\n\nPattern p1 = TilesFactory.createPattern(Shape.square, "#0000FF");\nPattern p2 = TilesFactory.createPattern(Shape.verticalZigzag, "#FFFFFF");\nPattern p3 = TilesFactory.createPattern(Shape.diagonal, "#FF0000");\nPattern p4 = TilesFactory.createPattern(Shape.ring, "#OOFFOO");\n\ndataset.setBackgroundColor(p1, p2, p3, p4);\n')),Object(l.b)("p",null,"The tiles factory can also create canvas patterns to use wherever you want in your application:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'CanvasPatternItem canvasPattern = TilesFactory.createTile(Shape.square, "#0000FF");\n')),Object(l.b)("p",null,"This is the ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/tiles/Shape.html"},"list")," of shapes out-of-the-box:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"back slashed line"),Object(l.b)("li",{parentName:"ul"},"box"),Object(l.b)("li",{parentName:"ul"},"cross"),Object(l.b)("li",{parentName:"ul"},"cross dash"),Object(l.b)("li",{parentName:"ul"},"dash"),Object(l.b)("li",{parentName:"ul"},"diagonal"),Object(l.b)("li",{parentName:"ul"},"diamond"),Object(l.b)("li",{parentName:"ul"},"diamond box"),Object(l.b)("li",{parentName:"ul"},"disc"),Object(l.b)("li",{parentName:"ul"},"dot"),Object(l.b)("li",{parentName:"ul"},"dot dash"),Object(l.b)("li",{parentName:"ul"},"double diagonal"),Object(l.b)("li",{parentName:"ul"},"empty star"),Object(l.b)("li",{parentName:"ul"},"inverted diagonal"),Object(l.b)("li",{parentName:"ul"},"inverted double diagonal"),Object(l.b)("li",{parentName:"ul"},"inverted triangle"),Object(l.b)("li",{parentName:"ul"},"line"),Object(l.b)("li",{parentName:"ul"},"plus"),Object(l.b)("li",{parentName:"ul"},"ring"),Object(l.b)("li",{parentName:"ul"},"slashed line"),Object(l.b)("li",{parentName:"ul"},"solid"),Object(l.b)("li",{parentName:"ul"},"star"),Object(l.b)("li",{parentName:"ul"},"square"),Object(l.b)("li",{parentName:"ul"},"triangle"),Object(l.b)("li",{parentName:"ul"},"weave"),Object(l.b)("li",{parentName:"ul"},"zigzag"),Object(l.b)("li",{parentName:"ul"},"vertical line"),Object(l.b)("li",{parentName:"ul"},"vertical zigzag")),Object(l.b)("p",null,"There are other 2 additional shapes, available out of the box."),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/tiles/ImageShape.html"},"ImageShape")," enables to use an image and apply (scaling it) into tile. The vantage is that we can decide the background of the image if it has got a transparent background."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'ImageShape imageShape = new ImageShape(ImagesHelper.toImg(Images.INSTANCE.myImage()));\n...     \nPattern pattern = TilesFactory.createPattern(imageShape, "#990099");\n...\n')),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/tiles/CharacterShape.html"},"CharacterShape")," enables to use a character (ONLY 1 otherwise you will get an exception) and apply into tile. "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'CharacterShape charShape = new CharacterShape("m");\n...     \nPattern pattern = TilesFactory.createPattern(charShape, "#990099");\n...\n')),Object(l.b)("p",null,"It is also possible to use ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/PointStyle.html"},"PointStyle")," as shape for a tile."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'Pattern pattern = TilesFactory.createPattern(PointStyle.CIRCLE, "#990099");\n')),Object(l.b)("p",null,"The tiles factory has got a default configuration which can be updated in order that new configuration can be used for all tiles."),Object(l.b)("p",null,"The complete configuration items are described by following table:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Default"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"shape"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/tiles/Shape.html"},"Shape")),Object(l.b)("td",{parentName:"tr",align:null},"Shape.SQUARE"),Object(l.b)("td",{parentName:"tr",align:null},"the shape to apply on tile")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"backgroundColor"),Object(l.b)("td",{parentName:"tr",align:null},"String - ",Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(l.b)("td",{parentName:"tr",align:null},"rgba(100, 100, 100, 0.7)"),Object(l.b)("td",{parentName:"tr",align:null},"the background color of tile")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"shapeColor"),Object(l.b)("td",{parentName:"tr",align:null},"String - ",Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(l.b)("td",{parentName:"tr",align:null},"rgba(255, 255, 255, 0.8)"),Object(l.b)("td",{parentName:"tr",align:null},"the shape color on tile")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"size"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"20"),Object(l.b)("td",{parentName:"tr",align:null},"the size of the tile (always a square). The minimum size for a tile is ",Object(l.b)("strong",{parentName:"td"},"10"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lineCap"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/CapStyle.html"},"CapStyle")),Object(l.b)("td",{parentName:"tr",align:null},"CapStyle.ROUND"),Object(l.b)("td",{parentName:"tr",align:null},"determines the shape used to draw the end points of lines")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lineJoin"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/JoinStyle.html"},"JoinStyle")),Object(l.b)("td",{parentName:"tr",align:null},"JoinStyle.ROUND"),Object(l.b)("td",{parentName:"tr",align:null},"determines the shape used to join two line segments where they meet")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Charba")," provides a ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/tiles/TilesBuilder.html"},"TilesBuilder")," to create tiles using the ",Object(l.b)("strong",{parentName:"p"},"set")," methods in sequence and get a ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"pattern")," or ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html"},"CanvasPatternItem")," at the end of configuration."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'// creates a CHARBA pattern\nPattern pattern = TilesBuilder.create().setShape(Shape.EMPTY_STAR).setBackgroundColor("#990099").asPattern();\n// creates a canvas pattern\nCanvasPatternItem canvasPattern = TilesBuilder.create().setShape(Shape.EMPTY_STAR).setBackgroundColor("#990099").asTile();\n')))}s.isMDXComponent=!0},209:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),b=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=b(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(a),h=r,m=s["".concat(o,".").concat(h)]||s[h]||u[h]||l;return a?n.a.createElement(m,i(i({ref:t},p),{},{components:a})):n.a.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},210:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return o}));var r=a(16),n=a(211);function l(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var l=void 0===r?{}:r,o=l.forcePrependBaseUrl,i=void 0!==o&&o,c=l.absolute,p=void 0!==c&&c;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(i)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return p?e+b:b}(l,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},211:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))}}]);