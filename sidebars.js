module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'Home',
    },
    {
      type: 'doc',
      id: 'Overview',
    },
    {
      type: 'doc',
      id: 'Requirements',
    },
    {
      type: 'category',
      label: 'Getting started',
      collapsed: true,
      items: ['getting-started/Building', 'getting-started/GettingStarted', 'getting-started/Integration'],
    },
    {
      type: 'category',
      label: 'Defaults configuration',
      collapsed: true,
      items: ['defaults/Defaults', 'defaults/DefaultsCharts', 'defaults/DefaultsScales'],
    },
    {
      type: 'category',
      label: 'Configuring charts',
      collapsed: true,
      items: ['configuration/Commons', 'configuration/Interaction', 'configuration/Animation', 'configuration/Datasets', 'configuration/Legend', 'configuration/Tooltip', 'configuration/Title', 'configuration/Elements', 'configuration/Layout', 'configuration/ScriptableOptions',
      'configuration/FillerAndDecimation'],
    },
    {
      type: 'category',
      label: 'Using charts',
      collapsed: true,
      items: ['charts/Charts', 'charts/ChartBar', 'charts/ChartHorizontalBar', 'charts/ChartLine', 'charts/ChartVerticalLine', 'charts/ChartRadar', 'charts/ChartPie', 'charts/ChartDoughnut', 'charts/ChartPolarArea', 'charts/ChartScatter', 'charts/ChartBubble', 'charts/ChartStackedArea', 
      'charts/ChartStackedBar', 'charts/ChartTimeSeries', 'charts/ChartMeter', 'charts/ChartGauge', 'charts/Api'],
    },
    {
      type: 'category',
      label: 'Using axes',
      collapsed: true,
      items: ['axes/Axes',
        {
          "Cartesian axes": ['axes/CartesianAxes', 'axes/CartesianCategoryAxes', 'axes/CartesianLinearAxes', 'axes/CartesianLogarithmicAxes', 'axes/CartesianTimeAxes', 'axes/CartesianTimeSeriesAxes'],
        }, 
        'axes/RadialAxes', 'axes/Grid', 'axes/ScaleTitle', 'axes/AngleLines', 'axes/PointLabels'],
    },
    {
      type: 'category',
      label: 'INTL',
      collapsed: true,
      items: ['intl/Locale', 'intl/NumberFormat', 'intl/DateTimeFormat'],
    },
    {
      type: 'doc',
      id: 'DateAdapters',
    },
    {
      type: 'category',
      label: 'Plugins',
      collapsed: true,
      items: ['plugins/Plugins', 'plugins/PluginBackgroundColor', 'plugins/PluginPointer', 'plugins/PluginColorSchemes', 'plugins/PluginDatasetsItemsSelector', 'plugins/PluginHTMLLegend', 'plugins/ImportPlugins'],
    },
    {
      type: 'doc',
      id: 'Controllers',
    },       
    {
      type: 'category',
      label: 'Extensions',
      collapsed: true,
      items: ['extensions/Extensions', 'extensions/Annotation', 'extensions/DataLabels', 'extensions/Labels', 'extensions/Zoom'],
    },
    {
      type: 'category',
      label: 'Coloring',
      collapsed: true,
      items: ['coloring/Colors', 'coloring/Patterns', 'coloring/Gradients', 
        {
          "Colors tables": ['coloring/tables/HTMLColorsNames', 'coloring/tables/GWTMaterialColors', 'coloring/tables/GoogleChartColors'],
        }, 
      ],
    },
    {
      type: 'doc',
      id: 'Utilities',
    },
    {
      "type": "link",
      "href": "http://www.pepstock.org/Charba/4.0/index.html",
      "label": "Javadoc API"
    }
],
};