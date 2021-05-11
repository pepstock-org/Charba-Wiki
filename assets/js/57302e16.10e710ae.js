(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{116:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return i})),a.d(e,"metadata",(function(){return b})),a.d(e,"toc",(function(){return c})),a.d(e,"default",(function(){return s}));var o=a(3),n=a(8),l=(a(0),a(209)),r=a(210),i={id:"Tooltip",title:"Tooltip",hide_title:!0,sidebar_label:"Tooltip"},b={unversionedId:"configuration/Tooltip",id:"configuration/Tooltip",isDocsHomePage:!1,title:"Tooltip",description:"Tooltip",source:"@site/docs/configuration/Tooltip.md",sourceDirName:"configuration",slug:"/configuration/Tooltip",permalink:"/Charba-Wiki/docs/configuration/Tooltip",version:"current",sidebar_label:"Tooltip",frontMatter:{id:"Tooltip",title:"Tooltip",hide_title:!0,sidebar_label:"Tooltip"},sidebar:"docs",previous:{title:"Legend",permalink:"/Charba-Wiki/docs/configuration/Legend"},next:{title:"Title",permalink:"/Charba-Wiki/docs/configuration/Title"}},c=[{value:"Tooltip",id:"tooltip",children:[{value:"Positioning",id:"positioning",children:[]}]},{value:"Items callbacks",id:"items-callbacks",children:[{value:"Sorting",id:"sorting",children:[]},{value:"Filtering",id:"filtering",children:[]}]},{value:"Elements callbacks",id:"elements-callbacks",children:[{value:"Title",id:"title",children:[]},{value:"Body",id:"body",children:[]},{value:"Footer",id:"footer",children:[]},{value:"Label",id:"label",children:[]}]},{value:"External rendering callback",id:"external-rendering-callback",children:[]}],p={toc:c};function s(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(l.b)("wrapper",Object(o.a)({},p,a,{components:e,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"tooltip"},"Tooltip"),Object(l.b)("p",null,"A tooltip is a text description near an object. The tooltip is displayed when the user hovers the mouse cursor over the object."),Object(l.b)("p",null,"Tooltips are helpful for new users because they enable the user to learn about each icon or object by hovering their mouse over them. "),Object(l.b)("img",{src:Object(r.a)("/img/tooltip-base.png")}),Object(l.b)("p",null,"To get, change and apply own properties, you can invoke the ",Object(l.b)("strong",{parentName:"p"},"set")," and ",Object(l.b)("strong",{parentName:"p"},"get")," methods, as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"// enables tooltip, setting the interaction mode\nchart.getOptions().getTooltips().setEnabled(true);\nchart.getOptions().getTooltips().setMode(InteractionMode.AVERAGE);\n\nboolean enabled = chart.getOptions().getTooltips().isEnabled();\nInteractionMode mode = chart.getOptions().getTooltips().getMode();\n")),Object(l.b)("p",null,"The default values are set in global defaults options, see ",Object(l.b)("a",{parentName:"p",href:"../defaults/DefaultsCharts#tooltip"},"default global tooltip options"),"."),Object(l.b)("p",null,"The following are the attributes that you can set:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Name"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"backgroundColor"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(l.b)("td",{parentName:"tr",align:"left"},"Background color of the tooltips.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"bodyColor"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(l.b)("td",{parentName:"tr",align:"left"},"Color of body text.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"bodyFont"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/options/Font.html"},"Font")),Object(l.b)("td",{parentName:"tr",align:"left"},"Font of body text. The default value is the global font with the style set to FontStyle.NORMAL.",Object(l.b)("br",null),"See ",Object(l.b)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"bodyAlign"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/TextAlign.html"},"TextAlign")),Object(l.b)("td",{parentName:"tr",align:"left"},"Alignment of body element of the tooltips.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"bodySpacing"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"Spacing to add to top and bottom of each tooltip item.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"borderColor"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(l.b)("td",{parentName:"tr",align:"left"},"Color of the border.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"borderWidth"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"Size of the border.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"boxWidth"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"Width of the color box if ",Object(l.b)("inlineCode",{parentName:"td"},"displayColors")," is true.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"boxHeight"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"Height of the color box if ",Object(l.b)("inlineCode",{parentName:"td"},"displayColors")," is true.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"caretPadding"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"Extra distance to move the end of the tooltip arrow away from the tooltip point.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"caretSize"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"Size, in px, of the tooltip arrow.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"cornerRadius"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"Radius of tooltip corner curves.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"displayColors"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", color boxes are shown in the tooltip.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"enabled"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", the tooltips are enabled.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"events"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/Event.html"},"Event"),"[]"),Object(l.b)("td",{parentName:"tr",align:"left"},"The events option defines the browser events that the tooltip should listen to.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"footerColor"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(l.b)("td",{parentName:"tr",align:"left"},"Color of the footer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"footerFont"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/options/Font.html"},"Font")),Object(l.b)("td",{parentName:"tr",align:"left"},"Font of footer text. The default value is the global font with the style set to FontStyle.BOLD.",Object(l.b)("br",null),"See ",Object(l.b)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"footerAlign"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/TextAlign.html"},"TextAlign")),Object(l.b)("td",{parentName:"tr",align:"left"},"Alignment of footer element of the tooltips.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"footerMarginTop"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"Margin to add before drawing the footer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"footerSpacing"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"Spacing to add to top and bottom of each footer line.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"intersect"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"if ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", the tooltip mode applies only when the mouse position intersects with an element. If ",Object(l.b)("inlineCode",{parentName:"td"},"false"),", the mode will be applied at all times.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"mode"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/InteractionMode.html"},"InteractionMode")),Object(l.b)("td",{parentName:"tr",align:"left"},"Sets which elements appear in the tooltip.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"multiKeyBackground"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(l.b)("td",{parentName:"tr",align:"left"},"Color to draw behind the colored boxes when multiple items are in the tooltip.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"padding"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/configuration/Padding.html"},"Padding")),Object(l.b)("td",{parentName:"tr",align:"left"},"The padding to add inside the tooltip.",Object(l.b)("br",null),"See ",Object(l.b)("a",{parentName:"td",href:"Commons#padding"},"padding documentation")," for more details.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"position"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/TooltipPosition.html"},"TooltipPosition")),Object(l.b)("td",{parentName:"tr",align:"left"},"The mode for positioning the tooltip.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"rtl"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"true")," for rendering the tooltips from right to left.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"textDirection"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/TextDirection.html"},"TextDirection")),Object(l.b)("td",{parentName:"tr",align:"left"},"This will force the text direction on the canvas for rendering the tooltips, regardless of the CSS specified on the canvas")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"titleColor"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(l.b)("td",{parentName:"tr",align:"left"},"Color of the footer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"titleFont"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/options/Font.html"},"Font")),Object(l.b)("td",{parentName:"tr",align:"left"},"Font of title text. The default value is the global font with the style set to FontStyle.BOLD.",Object(l.b)("br",null),"See ",Object(l.b)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"titleAlign"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/TextAlign.html"},"TextAlign")),Object(l.b)("td",{parentName:"tr",align:"left"},"Alignment of title element of the tooltips.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"titleMarginBottom"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"Margin to add on bottom of title section.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"titleSpacing"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"Spacing to add to top and bottom of each title line.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"usePointStyle"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"Use the corresponding point style (from dataset options) instead of color boxes (size is based on the minimum value between box width and box height).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"xAlign"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/TooltipAlign.html"},"TooltipAlign")),Object(l.b)("td",{parentName:"tr",align:"left"},"Position of the tooltip caret in the X direction.",Object(l.b)("br",null),"Can accept only TooltipAlign.LEFT, TooltipAlign.CENTER and TooltipAlign.RIGHT.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"yAlign"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/TooltipAlign.html"},"TooltipAlign")),Object(l.b)("td",{parentName:"tr",align:"left"},"Position of the tooltip caret in the Y direction.",Object(l.b)("br",null),"Can accept only TooltipAlign.TOP, TooltipAlign.CENTER and TooltipAlign.BOTTOM.")))),Object(l.b)("h3",{id:"positioning"},"Positioning"),Object(l.b)("p",null,"Possible ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/TooltipPosition.html"},"tooltip position")," out-of the box are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"TooltipPosition.AVERAGE"),", it will place the tooltip at the average position of the items displayed in the tooltip."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"TooltipPosition.NEAREST"),", it will place the tooltip at the position of the element closest to the event position.")),Object(l.b)("p",null,"New modes can be defined by adding a custom implementation, by a ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/positioner/TooltipPositioner.html"},"TooltipPositioner")," which can provide the tooltip position based on own logic."),Object(l.b)("p",null,"By the ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/positioner/Positioner.html"},"Positioner")," singleton, you could register and unregister custom positioners. "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'// creates my tooltip position\nfinal CustomTooltipPosition myPosition = new CustomTooltipPosition("myPosition");\n// registers new tooltip positioner\nPositioner.get().register(new TooltipPositioner(){\n\n   /**\n    * Returns the tooltip position\n    * which must be used in chart options.\n    * \n    * @return the tooltip position.\n    */\n   @Override\n   public CustomTooltipPosition getName(){\n       return myPosition;\n   }\n\n   /**\n    * Applies own logic to returns the point where the tooltip must be showed.\n    * \n    * @param chart chart instance\n    * @param items list of dataset reference items\n    * @param eventPoint the point of event when the method has been invoked\n    * @return the point where the tooltip must be showed.\n    */\n   @Override\n   public Point computePosition(IsChart chart, List<DatasetReference> items, Point eventPoint){\n       ChartAreaNode area = chart.getNode().getChartArea();\n       Point p = new Point();\n       p.setX(area.getLeft());\n       p.setY(area.getTop());\n       return p;\n       }\n   });\n} \n....\n// sets new tooltip position to chart options\nchart.getOptions().getTooltips().setPosition(myPosition);\n')),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"PAY ATTENTION")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"If you unregister a positioner and a chart still is configured with the custom tooltip position, ",Object(l.b)("strong",{parentName:"p"},"Charba")," will throw an exception when the chart will be updated."))),Object(l.b)("h2",{id:"items-callbacks"},"Items callbacks"),Object(l.b)("p",null,"A chart tooltips can be configured at runtime, providing some interfaces for a specific purpose."),Object(l.b)("h3",{id:"sorting"},"Sorting"),Object(l.b)("p",null,"The implementation of ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/callbacks/TooltipItemSortCallback.html"},"TooltipItemSortCallback")," allows sorting of tooltip items. "),Object(l.b)("p",null,"To apply the callback, you can set a instance to the chart options, as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"chart.getOptions().getTooltips().setItemSortCallback(new TooltipItemSortCallback(){\n\n   /**\n    * Allows sorting of tooltip items.\n    * \n    * @param chart chart instance\n    * @param item1 the first object to be compared.\n    * @param item2 the second object to be compared.\n    * @return a negative integer, zero, or a positive integer as the first argument \n    *         is less than, equal to, or greater than the second.\n    */\n   @Override \n   public int onItemSort(IsChart chart, TooltipItem item1, TooltipItem item2){\n      // logic\n      return 0;\n   }\n         \n});\n")),Object(l.b)("p",null,"The callback uses a couple of ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/items/TooltipItem.html"},"TooltipItem")," to enable the sort."),Object(l.b)("h3",{id:"filtering"},"Filtering"),Object(l.b)("p",null,"The implementation of ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/callbacks/TooltipFilterCallback.html"},"TooltipFilterCallback")," allows filtering of tooltip items."),Object(l.b)("p",null,"To apply the callback, you can set a instance to the chart options, as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"chart.getOptions().getTooltips().setFilterCallback(new TooltipFilterCallback(){\n\n   /**\n    * Allows filtering of tooltip items.\n    * \n    * @param chart chart instance\n    * @param item item to be filtered\n    * @return false to remove the item\n    *         from the container, otherwise true.\n    */\n   @Override \n   public boolean onFilter(IsChart chart, TooltipItem item){\n      // logic\n      return true;\n   }\n         \n});\n")),Object(l.b)("p",null,"The callback uses ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/items/TooltipItem.html"},"TooltipItem")," to enable filtering."),Object(l.b)("h2",{id:"elements-callbacks"},"Elements callbacks"),Object(l.b)("p",null,"There are a set of available callbacks to configure and customize own tooltips. The tooltip callbacks configuration is nested in the tooltip configuration. "),Object(l.b)("p",null,"To simplify the implementation of all callbacks available in ",Object(l.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),", ",Object(l.b)("strong",{parentName:"p"},"Charba")," splits the callbacks in 4 main ones, to manage every single element of a tooltip separately:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Title"),Object(l.b)("li",{parentName:"ul"},"Body"),Object(l.b)("li",{parentName:"ul"},"Footer"),Object(l.b)("li",{parentName:"ul"},"Labels")),Object(l.b)("img",{src:Object(r.a)("/img/tooltip.png")}),Object(l.b)("p",null,"All callbacks must be set in a inner element of tooltip configuration, as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"// gets the inner callbacks element\nTooltipsCallbacks callbacks = chart.getOptions().getTooltips().getCallbacks();\n")),Object(l.b)("p",null,"To invoke the default behavior of the chart, you can use ",Object(l.b)("a",{parentName:"p",href:"../defaults/Defaults#methods"},"defaults")," methods of ",Object(l.b)("inlineCode",{parentName:"p"},"Defaults")," object."),Object(l.b)("h3",{id:"title"},"Title"),Object(l.b)("p",null,"The ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/callbacks/TooltipTitleCallback.html"},"TooltipTitleCallback")," is triggered for providing text of title."),Object(l.b)("p",null,"All methods must return a list of strings which are treated as multiple lines of text."),Object(l.b)("p",null,"This callback takes care about labels to apply to the title, all methods are implemented by own defaults in order that you can implement only the method where you are interested in:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"public interface TooltipTitleCallback {\n\n   /**\n    * Returns the text to render before the title.\n    * If returns null or empty list, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param items list of all tooltip items\n    * @return a list of labels to apply to the title.\n    */\n   default List<String> onBeforeTitle(IsChart chart, List<TooltipItem> items){\n      return Collections.emptyList();\n   }\n\n   /**\n    * Returns text to render as the title of the tooltip.\n    * If returns null or empty list, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param items list of all tooltip items\n    * @return a list of labels to apply to the title.\n    */\n   default List<String> onTitle(IsChart chart, List<TooltipItem> items){\n      return Defaults.get().invokeTooltipsCallbackOnTitle(chart, items);\n   }\n\n   /**\n    * Returns text to render after the title.\n    * If returns null or empty list, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param items list of all tooltip items\n    * @return a list of labels to apply to the title.\n    */\n   default List<String> onAfterTitle(IsChart chart, List<TooltipItem> items){\n      return Collections.emptyList();\n   }\n\n}\n")),Object(l.b)("p",null,"To apply the callback, you can set a ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/callbacks/TooltipTitleCallback.html"},"TooltipTitleCallback")," instance to the chart options, as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"chart.getOptions().getTooltips().getCallbacks().setTitleCallback(new TooltipTitleCallback){\n\n// implementation\n         \n});\n")),Object(l.b)("h3",{id:"body"},"Body"),Object(l.b)("p",null,"The ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/callbacks/TooltipBodyCallback.html"},"TooltipBodyCallback")," is triggered for providing text of body."),Object(l.b)("p",null,"All methods must return a list of strings which are treated as multiple lines of text."),Object(l.b)("p",null,"This callback takes care about labels to apply to the body, all methods are implemented by own defaults in order that you can implement only the method where you are interested in:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"public interface TooltipBodyCallback {\n\n   /**\n    * Returns text to render before the body section.\n    * If returns null or empty list, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param items list of all tooltip items\n    * @return a list of labels to apply to the body.\n    */\n   default List<String> onBeforeBody(IsChart chart, List<TooltipItem> items){\n      return Collections.emptyList();\n   }\n\n   /**\n    * Returns text to render after the body section.\n    * If returns null or empty list, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param items list of all tooltips items\n    * @return a list of labels to apply to the body.\n    */\n   default List<String> onAfterBody(IsChart chart, List<TooltipItem> items){\n      return Collections.emptyList();\n   }\n}\n")),Object(l.b)("p",null,"To apply the callback, you can set a ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/callbacks/TooltipBodyCallback.html"},"TooltipBodyCallback")," instance to the chart options, as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"chart.getOptions().getTooltips().getCallbacks().setBodyCallback(new TooltipBodyCallback){\n\n// implementation\n         \n});\n")),Object(l.b)("h3",{id:"footer"},"Footer"),Object(l.b)("p",null,"The ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/callbacks/TooltipFooterCallback.html"},"TooltipFooterCallback")," is triggered for providing text of footer."),Object(l.b)("p",null,"All methods must return a list of strings which are treated as multiple lines of text."),Object(l.b)("p",null,"This callback takes care about labels to apply to the footer, all methods are implemented by own defaults in order that you can implement only the method where you are interested in:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"public interface TooltipFooterCallback {\n\n   /**\n    * Returns text to render before the footer section.\n    * If returns null or empty list, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param items list of all tooltip items\n    * @return a list of labels to apply to the title.\n    */\n   default List<String> onBeforeFooter(IsChart chart, List<TooltipItem> items){\n      return Collections.emptyList();\n   }\n\n   /**\n    * Returns text to render as the footer of the tooltip.\n    * If returns null or empty list, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param items list of all tooltip items\n    * @return a list of labels to apply to the title.\n    */\n   default List<String> onFooter(IsChart chart, List<TooltipItem> items){\n      return Collections.emptyList();\n   }\n\n   /**\n    * Text to render after the footer section.\n    * If returns null or empty list, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param items list of all tooltip items\n    * @return a list of labels to apply to the title.\n    */\n   default List<String> onAfterFooter(IsChart chart, List<TooltipItem> items){\n      return Collections.emptyList();\n   }\n}\n")),Object(l.b)("p",null,"To apply the callback, you can set a ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/callbacks/TooltipFooterCallback.html"},"TooltipFooterCallback")," instance to the chart options, as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"chart.getOptions().getTooltips().getCallbacks().setFooterCallback(new TooltipFooterCallback){\n\n// implementation\n         \n});\n")),Object(l.b)("h3",{id:"label"},"Label"),Object(l.b)("p",null,"The ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/callbacks/TooltipLabelCallback.html"},"TooltipLabelCallback")," is triggered for providing the text and colors that displays for a given data point."),Object(l.b)("p",null,"This callback takes care about labels and styles  to apply to the tooltip items, all methods are implemented by own defaults in order that you can implement only the method where you are interested in:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"public interface TooltipLabelCallback {\n\n   /**\n    * Returns text to render before an individual label.\n    * This will be called for each item in the tooltip.\n    * If returns null, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param item tooltip item\n    * @return label to be applied.\n    */\n   default String onBeforeLabel(IsChart chart, TooltipItem item){\n      return Constants.EMPTY_STRING;\n   }\n\n   /**\n    * Returns text to render for an individual item in the tooltip.\n    * If returns null, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param item tooltip item\n    * @return label to be applied.\n    */\n   default String onLabel(IsChart chart, TooltipItem item){\n      return Defaults.get().invokeTooltipsCallbackOnLabel(chart, item);\n   }\n\n   /**\n    * Returns the colors and borders to render for the tooltip item.\n    * If returns null, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param item tooltip item\n    * @return label color to be applied.\n    */\n   default TooltipLabelColor onLabelColor(IsChart chart, TooltipItem item){\n      return Defaults.get().invokeTooltipsCallbackOnLabelColor(chart, item);\n   }\n\n   /**\n    * Returns the point style to use instead of color boxes if usePointStyle is true.\n    * Default implementation uses the point style from the dataset points.\n    * \n    * @param chart chart instance\n    * @param item tooltip item\n    * @return point style to be applied.\n    */\n   default TooltipLabelPointStyle onLabelPointStyle(IsChart chart, TooltipItem item){\n      return Defaults.get().invokeTooltipsCallbackOnLabelPointStyle(chart, item);\n   }\n\n   /**\n    * Returns the colors for the text of the label for the tooltip item.\n    * If returns null, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param item tooltip item\n    * @return label text color to be applied.\n    */\n   default IsColor onLabelTextColor(IsChart chart, TooltipItem item){\n      return chart.getOptions().getTooltips().getBodyColor();\n   }\n\n   /**\n    * Returns text to render after an individual label.\n    * If returns null, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param item tooltip item\n    * @return label to be applied.\n    */\n   default String onAfterLabel(IsChart chart, TooltipItem item){\n      return Constants.EMPTY_STRING;\n   }\n}\n")),Object(l.b)("p",null,"To apply the callback, you can set a ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/callbacks/TooltipLabelCallback.html"},"TooltipLabelCallback")," instance to the chart options, as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"chart.getOptions().getTooltips().getCallbacks().setLabelCallback(new TooltipLabelCallback){\n\n// implementation\n         \n});\n")),Object(l.b)("p",null,"To set the color or borders of labels, there is ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/items/TooltipLabelColor.html"},"TooltipLabelColor")," class which enable the setting of colors and borders."),Object(l.b)("p",null,"To set the point style of labels, there is ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/items/TooltipLabelPointStyle.html"},"TooltipLabelPointStyle")," class which enable the setting of point style and the rotation to apply."),Object(l.b)("h2",{id:"external-rendering-callback"},"External rendering callback"),Object(l.b)("p",null,"The implementation of ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/callbacks/TooltipExternalCallback.html"},"TooltipExternalCallback")," allows you to hook in the tooltip rendering process so that you can render the tooltip in own custom way. "),Object(l.b)("table",null,Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,Object(l.b)("img",{src:Object(r.a)("/img/externalTooltipCallabck.png")}))))),Object(l.b)("p",null,"Generally this is used to create an HTML tooltip and you can enable custom tooltips in the chart configuration as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"chart.getOptions().getTooltips().setExternalCallback(new TooltipExternalCallback(){\n\n   /**\n    * External tooltips callback allows you to hook in the tooltip \n    * rendering process so that you can render the tooltip in your own\n    * custom way.\n    * \n    * @param chart chart instance\n    * @param model all info about tooltip to create own HTML tooltip.\n    */\n   @Override \n   public onCustom(IsChart chart, TooltipModel model){\n      // logic\n   }\n         \n});\n")),Object(l.b)("p",null,"The callback can use the ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/items/TooltipModel.html"},"tooltip model"),", with the complete model about the tooltip."))}s.isMDXComponent=!0},209:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return d}));var o=a(0),n=a.n(o);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function b(t,e){if(null==t)return{};var a,o,n=function(t,e){if(null==t)return{};var a,o,n={},l=Object.keys(t);for(o=0;o<l.length;o++)a=l[o],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)a=l[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=n.a.createContext({}),p=function(t){var e=n.a.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return n.a.createElement(c.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},m=n.a.forwardRef((function(t,e){var a=t.components,o=t.mdxType,l=t.originalType,r=t.parentName,c=b(t,["components","mdxType","originalType","parentName"]),s=p(a),m=o,d=s["".concat(r,".").concat(m)]||s[m]||h[m]||l;return a?n.a.createElement(d,i(i({ref:e},c),{},{components:a})):n.a.createElement(d,i({ref:e},c))}));function d(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=a.length,r=new Array(l);r[0]=m;var i={};for(var b in e)hasOwnProperty.call(e,b)&&(i[b]=e[b]);i.originalType=t,i.mdxType="string"==typeof t?t:o,r[1]=i;for(var c=2;c<l;c++)r[c]=a[c];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},210:function(t,e,a){"use strict";a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return r}));var o=a(16),n=a(211);function l(){var t=Object(o.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,l=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,o){var l=void 0===o?{}:o,r=l.forcePrependBaseUrl,i=void 0!==r&&r,b=l.absolute,c=void 0!==b&&b;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(i)return e+a;var p=a.startsWith(e)?a:e+a.replace(/^\//,"");return c?t+p:p}(l,a,t,e)}}}function r(t,e){return void 0===e&&(e={}),(0,l().withBaseUrl)(t,e)}},211:function(t,e,a){"use strict";function o(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!o(t)}a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return n}))}}]);