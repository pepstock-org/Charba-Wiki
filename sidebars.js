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
      items: ['configuration/Commons', 'configuration/Interaction', 'configuration/Animation', 'configuration/Datasets', 'configuration/Legend', 'configuration/Tooltip', 'configuration/Title', 'configuration/Elements', 'configuration/Layout', 'configuration/ScriptableOptions'],
    },
    {
      type: 'category',
      label: 'Using charts',
      collapsed: true,
      items: ['charts/Introduction', 'charts/ChartBar', 'charts/ChartHorizontalBar', 'charts/ChartLine', 'charts/ChartVerticalLine', 'charts/ChartRadar', 'charts/ChartPie', 'charts/ChartDoughnut', 'charts/ChartPolarArea', 'charts/ChartScatter', 'charts/ChartBubble', 'charts/ChartStackedArea', 
      'charts/ChartStackedBar', 'charts/Api'],
    },
    {
      type: 'category',
      label: 'Using axes',
      collapsed: true,
      items: ['Axes', 
        {
          "Cartesian axes": ['CartesianAxes', 'CartesianLinearAxes', 'CartesianCategoryAxes', 'CartesianLogarithmicAxes', 'CartesianTimeAxes', 'DateAdapters'],
        }, 
        'RadialAxes'],
    },
    {
      type: 'doc',
      id: 'Plugins',
    },
    {
      type: 'doc',
      id: 'Controllers',
    },       
    {
      type: 'category',
      label: 'Coloring',
      collapsed: true,
      items: ['Colors', 'Patterns', 'Gradients', 
        {
          "Colors tables": ['HTMLColorsNames', 'GWTMaterialColors', 'GoogleChartColors'],
        }, 
      ],
    },
    {
      type: 'category',
      label: 'Implementations',
      collapsed: true,
      items: [        
        {
          "Charts": ['ChartTimeSeries', 'ChartMeter', 'ChartGauge'],
        }, 
        {
          "Plugins": ['PluginBackgroundColor', 'PluginPointer', 'PluginColorSchemes', 'PluginDatasetsItemsSelector', 'PluginHTMLLegend'],
        }, 
        "Callbacks"
	  ],
    },
    {
      type: 'category',
      label: 'Extensions',
      collapsed: true,
      items: ['DataLabels', 'Labels', 'Zoom', 'Annotation'],
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