module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'Overview',
    },
    {
      type: 'doc',
      id: 'GettingStarted',
    },
    {
      type: 'doc',
      id: 'Integration',
    },
    {
      type: 'doc',
      id: 'Defaults',
    },
    {
      type: 'category',
      label: 'Configuring charts',
      collapsed: true,
      items: ['General', 'Configuration'],
    },
    {
      type: 'category',
      label: 'Using charts',
      collapsed: true,
      items: ['Charts', 'ChartBar', 'ChartHorizontalBar', 'ChartLine', 'ChartRadar', 'ChartPie', 'ChartDoughnut', 'ChartPolarArea', 'ChartScatter', 'ChartStackedArea', 'ChartStackedBar',
      'ChartBubble'],
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