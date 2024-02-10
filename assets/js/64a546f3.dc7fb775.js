"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[10372],{95788:(e,s,n)=>{n.d(s,{Iu:()=>p,yg:()=>h});var r=n(11504);function t(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function a(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?a(Object(n),!0).forEach((function(s){t(e,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}))}return e}function o(e,s){if(null==e)return{};var n,r,t=function(e,s){if(null==e)return{};var n,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],s.indexOf(n)>=0||(t[n]=e[n]);return t}(e,s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],s.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=r.createContext({}),g=function(e){var s=r.useContext(l),n=s;return e&&(n="function"==typeof e?e(s):i(i({},s),e)),n},p=function(e){var s=g(e.components);return r.createElement(l.Provider,{value:s},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var s=e.children;return r.createElement(r.Fragment,{},s)}},u=r.forwardRef((function(e,s){var n=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=g(n),u=t,h=c["".concat(l,".").concat(u)]||c[u]||d[u]||a;return n?r.createElement(h,i(i({ref:s},p),{},{components:n})):r.createElement(h,i({ref:s},p))}));function h(e,s){var n=arguments,t=s&&s.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=u;var o={};for(var l in s)hasOwnProperty.call(s,l)&&(o[l]=s[l]);o.originalType=e,o[c]="string"==typeof e?e:t,i[1]=o;for(var g=2;g<a;g++)i[g]=n[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70104:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(45072),t=(n(11504),n(95788)),a=n(70964);const i={id:"Regressions",title:"Regressions",hide_title:!0,sidebar_label:"Regressions"},o=void 0,l={unversionedId:"Regressions",id:"version-6.0/Regressions",title:"Regressions",description:"Regressions",source:"@site/versioned_docs/version-6.0/Regressions.md",sourceDirName:".",slug:"/Regressions",permalink:"/Charba-Wiki/docs/6.0/Regressions",draft:!1,tags:[],version:"6.0",frontMatter:{id:"Regressions",title:"Regressions",hide_title:!0,sidebar_label:"Regressions"},sidebar:"docs",previous:{title:"Google Chart",permalink:"/Charba-Wiki/docs/6.0/coloring/tables/GoogleChartColors"},next:{title:"JavaScript utilities",permalink:"/Charba-Wiki/docs/6.0/utilities/Javascript"}},g={},p=[{value:"Regressions",id:"regressions",level:2},{value:"Prediction",id:"prediction",level:3},{value:"Formula",id:"formula",level:3},{value:"Score",id:"score",level:3},{value:"Using regressions on charts",id:"using-regressions-on-charts",level:3},{value:"Simple linear",id:"simple-linear",level:2},{value:"Creating a linear regression",id:"creating-a-linear-regression",level:4},{value:"Power",id:"power",level:2},{value:"Creating a power regression",id:"creating-a-power-regression",level:4},{value:"Exponential",id:"exponential",level:2},{value:"Creating an exponential regression",id:"creating-an-exponential-regression",level:4},{value:"Polynomial",id:"polynomial",level:2},{value:"Creating a polynomial regression",id:"creating-a-polynomial-regression",level:4},{value:"Robust polynomial",id:"robust-polynomial",level:2},{value:"Creating a robust polynomial regression",id:"creating-a-robust-polynomial-regression",level:4},{value:"TheilSen",id:"theilsen",level:2},{value:"Creating a TheilSen regression",id:"creating-a-theilsen-regression",level:4}],c={toc:p},d="wrapper";function u(e){let{components:s,...n}=e;return(0,t.yg)(d,(0,r.c)({},c,n,{components:s,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"regressions"},"Regressions"),(0,t.yg)("p",null,"(quoted from ",(0,t.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Regression_analysis"},"Regression analysis")," definition in Wikipedia)"),(0,t.yg)("p",null,"Regression analysis is a set of statistical processes for estimating the relationships between a dependent variable (often called the 'outcome' or 'response' variable) and one or more independent variables (often called 'predictors', 'covariates', 'explanatory variables' or 'features'). "),(0,t.yg)("p",null,"The most common form of regression analysis is linear regression, in which one finds the line (or a more complex linear combination) that most closely fits the data according to a specific mathematical criterion."),(0,t.yg)("p",null,"Regression analysis is primarily used for two conceptually distinct purposes."),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"regression analysis is widely used for prediction and forecasting, where its use has substantial overlap with the field of machine learning."),(0,t.yg)("li",{parentName:"ol"},"in some situations regression analysis can be used to infer causal relationships between the independent and dependent variables. Importantly, regressions by themselves only reveal relationships between a dependent variable and a collection of independent variables in a fixed dataset. To use regressions for prediction or to infer causal relationships, respectively, a researcher must carefully justify why existing relationships have predictive power for a new context or why a relationship between two variables has a causal interpretation. The latter is especially important when researchers hope to estimate causal relationships using observational data. ")),(0,t.yg)("img",{src:(0,a.c)("/img/regressions.png")}),(0,t.yg)("br",null),(0,t.yg)("br",null),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Charba")," provides out of the box the feature to enable regressions leveraging on ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/mljs/ml"},"ML regression library"),"."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Charba")," provides the following regressions models:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Simple linear regression."),(0,t.yg)("li",{parentName:"ul"},"Power regression."),(0,t.yg)("li",{parentName:"ul"},"Exponential regression."),(0,t.yg)("li",{parentName:"ul"},"Polynomial regression."),(0,t.yg)("li",{parentName:"ul"},"Robust polynomial regression."),(0,t.yg)("li",{parentName:"ul"},"TheilSen regression.")),(0,t.yg)("p",null,"The regressions feature is ",(0,t.yg)("em",{parentName:"p"},"native javascript")," implementation and ",(0,t.yg)("strong",{parentName:"p"},"Charba")," provides the wrapper in order to be able to use it."),(0,t.yg)("admonition",{type:"info"},(0,t.yg)("p",{parentName:"admonition"},"The regression utility can be used even if the ",(0,t.yg)("a",{parentName:"p",href:"./getting-started/GettingStarted#embedded-resources"},(0,t.yg)("strong",{parentName:"a"},"Charba.enable"))," or ",(0,t.yg)("a",{parentName:"p",href:"./getting-started/GettingStarted#deferred-resources"},(0,t.yg)("strong",{parentName:"a"},"DeferredCharba.enable"))," are not called because it doesn't depend on CHART.JS.")),(0,t.yg)("h3",{id:"prediction"},"Prediction"),(0,t.yg)("p",null,"All regression instances can predict Y values by a single or a list of X values:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'// creates samples\nList<Double> x = Arrays.asList(0.5D, 1D, 1.5D, 2D, 2.5D);\nList<Double> y = Arrays.asList(0D, 1D, 2D, 3D, 4D);\n// creates regression\nLinearRegression regression = RegressionBuilder.create(x, y).buildLinearRegression();\n// predicts the Y value with x = 3\nConsole.log(regression.predict(3)); // emit "5"\n')),(0,t.yg)("h3",{id:"formula"},"Formula"),(0,t.yg)("p",null,"All regression instances can show the formula which represents the regression model:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'// creates samples\nList<Double> x = Arrays.asList(0.5D, 1D, 1.5D, 2D, 2.5D);\nList<Double> y = Arrays.asList(0D, 1D, 2D, 3D, 4D);\n// creates regression\nLinearRegression regression = RegressionBuilder.create(x, y).buildLinearRegression();\n// shows formula\nConsole.log(regression.toFormula()); // emit "f(x) = 2 * x - 1"\n// shows formula, with precision\nConsole.log(regression.toFormula(3)); // emit "f(x) = 2.00 * x - 1.00"\n')),(0,t.yg)("h3",{id:"score"},"Score"),(0,t.yg)("p",null,"The ",(0,t.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/ml/RegressionScore.html"},"regression score")," provides the estimation and inference in the regressions. It can provide some  methods which differ in computational simplicity of algorithms, presence of a closed-form solution, robustness with respect to heavy-tailed distributions, and theoretical assumptions needed to validate desirable statistical properties such as consistency and asymptotic efficiency."),(0,t.yg)("p",null,"The ",(0,t.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/ml/RegressionScore.html"},"regression score")," provides:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"R (R)"),", which is the proportion of variation in the outcome that is explained by the predictor variables. In multiple regression models, R corresponds to the correlation between the observed outcome values and the predicted values by the model. The higher the ",(0,t.yg)("em",{parentName:"li"},"R"),", the better the model"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"R-squared (R2)"),", which is the proportion of variation in the outcome that is explained by the predictor variables. In multiple regression models, ",(0,t.yg)("em",{parentName:"li"},"R2")," corresponds to the squared correlation between the observed outcome values and the predicted values by the model. The Higher the R-squared, the better the model"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"Pearson's chi-squared (Chi2)"),", which is the sum of differences between observed and expected outcome frequencies (that is, counts of observations), each squared and divided by the expectation"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"Root Mean Squared Error (RMSD)"),", which measures the average error performed by the model in predicting the outcome for an observation. Mathematically, the RMSE is the square root of the mean squared error (MSE), which is the average squared difference between the observed actual outcome values and the values predicted by the model")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"// creates samples\nList<Double> x = Arrays.asList(0.5D, 1D, 1.5D, 2D, 2.5D);\nList<Double> y = Arrays.asList(0D, 1D, 2D, 3D, 4D);\n// creates regression\nLinearRegression regression = RegressionBuilder.create(x, y).buildLinearRegression();\n// calculates the score\nRegressionScore score = regression.score(x, y);\n// shows R\nConsole.log(score.getR()); // emit 1\n// shows R2\nConsole.log(score.getR2()); // emit 1\n// shows Chi2\nConsole.log(score.getChi2()); // emit 0\n// shows Rmsd\nConsole.log(score.getRmsd()); // emit 0\n")),(0,t.yg)("h3",{id:"using-regressions-on-charts"},"Using regressions on charts"),(0,t.yg)("p",null,"The provided regression instances can be used separately from charts or can be used in order to add to the chart a specific dataset with the predicted data."),(0,t.yg)("p",null,"To create a specific ",(0,t.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/ml/RegressionDataset.html"},"regression dataset"),", which is an extended ",(0,t.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/data/LineDataset.html"},"line dataset"),", ",(0,t.yg)("strong",{parentName:"p"},"Charba")," provides a specific builder in order to create the dataset which is created implementing a regression."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'// creates chart\nLineChart chart = new LineChart();\n// creates data set for chart\nLineDataset dataset = chart.newDataset();\n// data points list instance\nList<DataPoint> dataPoints = new LinkedList<>();\n// loads data points\n...\n// sets the data points to chart dataset\ndataset.setDataPoints(dataPoints);\n\n// creates a regression dataset\n// using a list of samples by data points\n// and creating a linear regression\n// and loads the samples as data of dataset\nRegressionDataset trend = RegressionDatasetBuilder.create()\n    .setSamplesByDataPoints(dataPoints)\n    .buildLinearRegression();\n// sets label\ntrend.setLabel("Linear trend");\n// sets dataset options\n...\n// adds datasets to chart\nchart.getData().setDatasets(dataset, trend);\n')),(0,t.yg)("img",{src:(0,a.c)("/img/regressionTrend.png")}),(0,t.yg)("br",null),(0,t.yg)("br",null),(0,t.yg)("p",null,"A regression ",(0,t.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/ml/RegressionDataset.html"},"regression dataset")," can also be used to add a forecast line to show in the chart."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'// creates chart\nLineChart chart = new LineChart();\n// creates data set for chart\nLineDataset dataset = chart.newDataset();\n// data points list instance\nList<DataPoint> dataPoints = new LinkedList<>();\n// loads data points\n...\n// sets the data points to chart dataset\ndataset.setDataPoints(dataPoints);\n\n// creates a regression dataset\n// using a list of samples by data points\n// and creating a linear regression\n// and loads the samples as data of dataset\nRegressionDataset trend = RegressionDatasetBuilder.create()\n    .setSamplesByDataPoints(dataPoints)\n    .buildLinearRegression();\n// sets label\ntrend.setLabel("Linear trend");\n// sets dataset options\n...\n// creates the forecast dataset\n// cloning an existing regression dataset set\n// and leveraging on already calculated regression\nRegressionDataset forecast = RegressionDatasetBuilder.build(trend);\n// predicts the values adding a list of dates\n// which are representing the X values\nforecast.addXDates(forecastDates);\n// sets label\nforecast.setLabel("Linear forecast");\n// sets dataset options\n...\n// adds datasets to chart\nchart.getData().setDatasets(dataset, trend, forecast);\n')),(0,t.yg)("img",{src:(0,a.c)("/img/regressions.png")}),(0,t.yg)("br",null),(0,t.yg)("br",null),(0,t.yg)("h2",{id:"simple-linear"},"Simple linear"),(0,t.yg)("p",null,"(quoted from ",(0,t.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Simple_linear_regression"},"Simple linear regression")," definition in Wikipedia)"),(0,t.yg)("p",null,"Simple linear regression is a linear regression model with a single explanatory variable. That is, it concerns two-dimensional sample points with one independent variable and one dependent variable (conventionally, the x and y coordinates in a Cartesian coordinate system) and finds a linear function (a non-vertical straight line) that, as accurately as possible, predicts the dependent variable values as a function of the independent variable. The adjective simple refers to the fact that the outcome variable is related to a single predictor."),(0,t.yg)("p",null,"It is common to make the additional stipulation that the ordinary least squares (OLS) method should be used: the accuracy of each predicted value is measured by its squared residual (vertical distance between the point of the data set and the fitted line), and the goal is to make the sum of these squared deviations as small as possible."),(0,t.yg)("p",null,"The simple linear regression model can be represented using the below equation:"),(0,t.yg)("br",null),(0,t.yg)("b",{style:{font:"italic bold 24px courier"}},"y = a",(0,t.yg)("sub",null,"0")," + a",(0,t.yg)("sub",null,"1"),"x"),(0,t.yg)("br",null),(0,t.yg)("br",null),(0,t.yg)("img",{src:(0,a.c)("/img/linearRegression.png")}),(0,t.yg)("br",null),(0,t.yg)("br",null),(0,t.yg)("h4",{id:"creating-a-linear-regression"},"Creating a linear regression"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Charba")," provides a ",(0,t.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/ml/RegressionBuilder.html"},"builder")," to create a ",(0,t.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/ml/LinearRegression.html"},"simple linear regression"),", passing the samples, in order to enable the use to predict values."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"// creates samples\nList<Double> x = Arrays.asList(0.5D, 1D, 1.5D, 2D, 2.5D);\nList<Double> y = Arrays.asList(0D, 1D, 2D, 3D, 4D);\n// creates regression\nLinearRegression regression = RegressionBuilder.create(x, y).buildLinearRegression();\n// coefficients\nConsole.log(regression.getSlope()); // emit 2\nConsole.log(regression.getIntercept()); // emit -1\nConsole.log(regression.getCoefficients().toString()); // emit [-1, 2]\n// predicts the Y value with x = 3\nConsole.log(regression.predict(3)); // emit 5\n// computes the X value with Y = 3.5\nConsole.log(regression.computeX(3.5)); // emit 2.25\n")),(0,t.yg)("h2",{id:"power"},"Power"),(0,t.yg)("p",null,"Power regression is a generalized linear model form of regression analysis used to model count data and contingency tables. It assumes the logarithm of its expected value can be modeled by a linear combination of unknown parameters. "),(0,t.yg)("p",null,"Power regression is a non-linear regression technique that looks like this:"),(0,t.yg)("br",null),(0,t.yg)("b",{style:{font:"italic bold 24px courier"}},"y = A * x",(0,t.yg)("sup",{style:{font:"italic bold 20px courier",marginLeft:"5px"}},"B")),(0,t.yg)("br",null),(0,t.yg)("br",null),(0,t.yg)("img",{src:(0,a.c)("/img/powerRegression.png")}),(0,t.yg)("br",null),(0,t.yg)("br",null),(0,t.yg)("h4",{id:"creating-a-power-regression"},"Creating a power regression"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Charba")," provides a ",(0,t.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/ml/RegressionBuilder.html"},"builder")," to create a ",(0,t.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/ml/PowerRegression.html"},"power regression"),", passing the samples, in order to enable the use to predict values."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"// creates samples\nList<Double> x = Arrays.asList(1D, 2D, 3D, 4D, 5D, 6D, 7D, 8D, 9D, 10D, 11D, 12D);\nList<Double> y = Arrays.asList(159.9, 320.9, 326.8, 329.9, 360.6, 361.6, 361.7, 367.6, 374.1, 375.2, 376.7, 400.2);\n// creates regression\nPowerRegression regression = RegressionBuilder.create(x, y).buildPowerRegression();\n// coefficients\n// coefficients\nConsole.log(regression.getA()); // emit 212.63671484070557\nConsole.log(regression.getB()); // emit 0.2736903998810649\n// predicts the Y value with x = 2\nConsole.log(regression.predict(2)); // emit 257.0557209615831\n")),(0,t.yg)("h2",{id:"exponential"},"Exponential"),(0,t.yg)("p",null,"Exponential regression is a generalized linear model form of regression analysis used to model count data and contingency tables. It assumes the logarithm of its expected value can be modeled by a linear combination of unknown parameters. "),(0,t.yg)("p",null,"Exponential regression is a non-linear regression technique that looks like this:"),(0,t.yg)("br",null),(0,t.yg)("b",{style:{font:"italic bold 24px courier"}},"y = A * ",(0,t.yg)("i",null,"e"),(0,t.yg)("sup",{style:{font:"italic bold 24px courier",marginLeft:"5px"}},"B * x")),(0,t.yg)("br",null),(0,t.yg)("br",null),(0,t.yg)("img",{src:(0,a.c)("/img/exponentialRegression.png")}),(0,t.yg)("br",null),(0,t.yg)("br",null),(0,t.yg)("h4",{id:"creating-an-exponential-regression"},"Creating an exponential regression"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Charba")," provides a ",(0,t.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/ml/RegressionBuilder.html"},"builder")," to create an ",(0,t.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/ml/ExponentialRegression.html"},"exponential regression"),", passing the samples, in order to enable the use to predict values."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"// creates samples\nList<Double> x = Arrays.asList(0D, 1D, 2D, 3D, 4D);\nList<Double> y = Arrays.asList(1.5D, 2.5D, 3.5D, 5D, 7.5D);\n// creates regression\nExponentialRegression regression = RegressionBuilder.create(x, y).buildExponentialRegression();\n// coefficients\nConsole.log(regression.getA()); // emit 0.391202\nConsole.log(regression.getB()); // emit 1.579909\n// predicts the Y value with x = 2\nConsole.log(regression.predict(2)); // emit 3.454825\n")),(0,t.yg)("h2",{id:"polynomial"},"Polynomial"),(0,t.yg)("p",null,"(quoted from ",(0,t.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Polynomial_regression"},"Polynomial regression")," definition in Wikipedia)"),(0,t.yg)("p",null,"Polynomial regression is a form of regression analysis in which the relationship between the independent variable x and the dependent variable y is modelled as an n",(0,t.yg)("sup",null,"th")," degree polynomial in x."),(0,t.yg)("p",null,"Polynomial regression fits a nonlinear relationship between the value of x and the corresponding conditional mean of y. Although polynomial regression fits a nonlinear model to the data, as a statistical estimation problem it is linear, in the sense that the regression function is linear in the unknown parameters that are estimated from the data. For this reason, polynomial regression is considered to be a special case of multiple linear regression."),(0,t.yg)("p",null,"The polynomial regression model can be represented using the below equation:"),(0,t.yg)("br",null),(0,t.yg)("b",{style:{font:"italic bold 24px courier"}},"y = b",(0,t.yg)("sub",null,"0")," + b",(0,t.yg)("sub",null,"1"),"x",(0,t.yg)("sub",null,"1")," + b",(0,t.yg)("sub",null,"2"),"x",(0,t.yg)("sub",null,"1"),(0,t.yg)("sup",{style:{font:"italic bold 24px courier",marginLeft:"5px"}},"2")," + * b",(0,t.yg)("sub",null,"2"),"x",(0,t.yg)("sub",null,"1"),(0,t.yg)("sup",{style:{font:"italic bold 24px courier",marginLeft:"5px"}},"3")," +...... b",(0,t.yg)("sub",null,"n"),"x",(0,t.yg)("sub",null,"1"),(0,t.yg)("sup",{style:{font:"italic bold 24px courier",marginLeft:"5px"}},"n")),(0,t.yg)("br",null),(0,t.yg)("br",null),(0,t.yg)("img",{src:(0,a.c)("/img/polynomialRegression.png")}),(0,t.yg)("br",null),(0,t.yg)("br",null),(0,t.yg)("h4",{id:"creating-a-polynomial-regression"},"Creating a polynomial regression"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Charba")," provides a ",(0,t.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/ml/RegressionBuilder.html"},"builder")," to create a ",(0,t.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/ml/PolynomialRegression.html"},"polynomial regression"),", passing the samples, in order to enable the use to predict values."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"// creates samples\nList<Double> x = Arrays.asList(50D, 50D, 50D, 70D, 70D, 70D, 80D, 80D, 80D, 90D, 90D, 90D, 100D, 100D, 100D);\nList<Double> y = Arrays.asList(3.3, 2.8, 2.9, 2.3, 2.6, 2.1, 2.5, 2.9, 2.4, 3.0, 3.1, 2.8, 3.3, 3.5, 3.0);\n// setup the maximum degree of the polynomial\nint degree = 5; \n// creates regression\nPolynomialRegression regression = RegressionBuilder.create(x, y).buildPolynomialRegression(degree);\n// prints the coefficients in increasing order of power (from 0 to degree).\nConsole.log(regression.getCoefficients().toString());\n// predicts the Y value with x = 80\nConsole.log(regression.predict(80)); // emit 2.6\n")),(0,t.yg)("h2",{id:"robust-polynomial"},"Robust polynomial"),(0,t.yg)("p",null,"(quoted from ",(0,t.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Robust_regression"},"Robust polynomial regression")," definition in Wikipedia)"),(0,t.yg)("p",null,"Robust regression is a form of regression analysis designed to overcome some limitations of traditional parametric and non-parametric methods. Regression analysis seeks to find the relationship between one or more independent variables and a dependent variable. Certain widely used methods of regression, such as ordinary least squares, have favourable properties if their underlying assumptions are true, but can give misleading results if those assumptions are not true; thus ordinary least squares is said to be not robust to violations of its assumptions."),(0,t.yg)("p",null,"Robust regression methods are designed to be not overly affected by violations of assumptions by the underlying data-generating process."),(0,t.yg)("p",null,"In particular, least squares estimates for regression models are highly sensitive to outliers.\nWhile there is no precise definition of an outlier, outliers are observations that do not follow the pattern of the other observations.\nThis is not normally a problem if the outlier is simply an extreme observation drawn from the tail of a normal distribution, but if the outlier results from non-normal measurement error or some other violation of standard ordinary least squares assumptions, then it compromises the validity of the regression results if a non-robust regression technique is used."),(0,t.yg)("p",null,"The robust polynomial regression model can be represented using the below equation:"),(0,t.yg)("br",null),(0,t.yg)("b",{style:{font:"italic bold 24px courier"}},"y = b",(0,t.yg)("sub",null,"0")," + b",(0,t.yg)("sub",null,"1"),"x",(0,t.yg)("sub",null,"1")," + b",(0,t.yg)("sub",null,"2"),"x",(0,t.yg)("sub",null,"1"),(0,t.yg)("sup",{style:{font:"italic bold 24px courier",marginLeft:"5px"}},"2")," + * b",(0,t.yg)("sub",null,"2"),"x",(0,t.yg)("sub",null,"1"),(0,t.yg)("sup",{style:{font:"italic bold 24px courier",marginLeft:"5px"}},"3")," +...... b",(0,t.yg)("sub",null,"n"),"x",(0,t.yg)("sub",null,"1"),(0,t.yg)("sup",{style:{font:"italic bold 24px courier",marginLeft:"5px"}},"n")),(0,t.yg)("br",null),(0,t.yg)("br",null),(0,t.yg)("h4",{id:"creating-a-robust-polynomial-regression"},"Creating a robust polynomial regression"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Charba")," provides a ",(0,t.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/ml/RegressionBuilder.html"},"builder")," to create a ",(0,t.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/ml/RobustPolynomialRegression.html"},"robust polynomial regression"),", passing the samples, in order to enable the use to predict values."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"// creates samples\nList<Double> x = Arrays.asList(50D, 50D, 70D, 70D, 80D, 80D, 90D, 90D, 100D, 100D);\nList<Double> y = Arrays.asList(2.8, 2.9, 2.3, 2.1, 2.5, 2.4, 3.0, 2.8, 3.3, 3.0);\n// setup the maximum degree of the polynomial\nint degree = 2; \n// creates regression\nRobustPolynomialRegression regression = RegressionBuilder.create(x, y).buildRobustPolynomialRegression(degree);\n// prints the coefficients in increasing order of power (from 0 to degree).\nConsole.log(regression.getCoefficients().toString()); // emit [0.6666666666666661,0.023333333333333338]\n// predicts the Y value with x = 80\nConsole.log(regression.predict(80)); // emit 2.533333333333333\n")),(0,t.yg)("h2",{id:"theilsen"},"TheilSen"),(0,t.yg)("p",null,"(quoted from ",(0,t.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Theil%E2%80%93Sen_estimator"},"TheilSen regression")," definition in Wikipedia)"),(0,t.yg)("p",null,"In TheilSen Regression, the estimation of the model is done by calculating the slopes and intercepts of a subpopulation of all possible combinations of subsample points. The final slope and intercept is then defined as the spatial median of these slopes and intercepts."),(0,t.yg)("p",null,'This regression can be computed efficiently, and is insensitive to outliers. It can be significantly more accurate than non-robust simple linear regression (least squares) for skewed and heteroskedastic data, and competes well against least squares even for normally distributed data in terms of statistical power.\nIt has been called "the most popular nonparametric technique for estimating a linear trend".'),(0,t.yg)("p",null,"The TheilSen regression model can be represented using the below equation:"),(0,t.yg)("br",null),(0,t.yg)("b",{style:{font:"italic bold 24px courier"}},"y = a",(0,t.yg)("sub",null,"0")," + a",(0,t.yg)("sub",null,"1"),"x"),(0,t.yg)("br",null),(0,t.yg)("br",null),(0,t.yg)("h4",{id:"creating-a-theilsen-regression"},"Creating a TheilSen regression"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Charba")," provides a ",(0,t.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/ml/RegressionBuilder.html"},"builder")," to create a ",(0,t.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/ml/TheilSenRegression.html"},"TheilSen regression"),", passing the samples, in order to enable the use to predict values."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"// creates samples\nList<Double> x = Arrays.asList(0.5D, 1D, 1.5D, 2D, 2.5D);\nList<Double> y = Arrays.asList(0D, 1D, 2D, 3D, 4D);\n// creates regression\nTheilSenRegression regression = RegressionBuilder.create(x, y).buildTheilSenRegression();\n// coefficients\nConsole.log(regression.getSlope()); // emit 2\nConsole.log(regression.getIntercept()); // emit -1\nConsole.log(regression.getCoefficients().toString()); // emit [-1, 2]\n// predicts the Y value with x = 3\nConsole.log(regression.predict(3)); // emit 5\n// computes the X value with Y = 3.5\nConsole.log(regression.computeX(3.5)); // emit 2.25\n")))}u.isMDXComponent=!0}}]);