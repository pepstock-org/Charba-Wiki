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
      items: ['configuration/Commons', 'configuration/Interaction', 'configuration/Animation', 'configuration/Datasets', 'configuration/Legend', 'configuration/Tooltip', 'configuration/Title', 'configuration/Subtitle', 'configuration/Elements', 'configuration/Layout', 'configuration/FillerAndDecimation',
      'configuration/ScriptableOptions'],
    },
    {
      type: 'category',
      label: 'Using charts',
      collapsed: true,
      items: ['charts/Charts', 'charts/ChartBar', 'charts/ChartHorizontalBar', 'charts/ChartLine', 'charts/ChartVerticalLine', 'charts/ChartRadar', 'charts/ChartPie', 'charts/ChartDoughnut', 'charts/ChartPolarArea', 'charts/ChartScatter', 'charts/ChartBubble', 'charts/ChartArea', 'charts/ChartStackedLine', 'charts/ChartStackedArea', 
      'charts/ChartStackedBar', 'charts/ChartTimeSeries',  { "Geographic map": ['charts/geo/Geo', 'charts/geo/ChartChoropleth', 'charts/geo/ChartBubbleMap']}, 'charts/ChartMeter', 'charts/ChartGauge', 'charts/ChartTreeMap', 'charts/ChartMatrix', 'charts/ChartSankey', 'charts/Api'],
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
      items: ['plugins/Plugins', 'plugins/PluginBackgroundColor', 'plugins/PluginPointer', 'plugins/PluginCrosshair', 'plugins/PluginColorSchemes', 'plugins/PluginDatasetsItemsSelector', 'plugins/PluginHTMLLegend', 'plugins/ImportPlugins'],
    },
    {
      type: 'doc',
      id: 'Controllers',
    },       
    {
      type: 'category',
      label: 'Extensions',
      collapsed: true,
      items: ['extensions/Extensions', 'extensions/Annotation', 'extensions/DataLabels', 'extensions/Gradient', 'extensions/Labels', 'extensions/Zoom'],
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
      id: 'Regressions',
    },
    {
      type: 'category',
      label: 'Utilities',
      collapsed: true,
      items: ['utilities/Javascript', 'utilities/Toast', 'utilities/AnnotationBuilder'],
    },
    {
      "type": "link",
      "href": "https://github.com/pepstock-org/Charba/releases/tag/6.5",
      "label": "Release note"
    },
    {
      "type": "link",
      "href": "https://pepstock-org.github.io/Charba/6.5/index.html",
      "label": "Javadoc API"
    }
],
};