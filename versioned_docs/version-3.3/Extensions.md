**Charba** provides out of the box the feature to enable some available plugins for [Chart.JS](http://www.chartjs.org/), with all their capabilities.

The plugins are *native javascript* implementation and **Charba** provides the wrapper in order to be able to use them.

Currently the extensions, ready to use inside **Charba**, are the following:

  * [DataLabels](https://github.com/chartjs/chartjs-plugin-datalabels) which is a highly customizable plugin that displays labels on data for any type of charts.
  * [Labels](https://github.com/emn178/chartjs-plugin-labels) which is a light weight plugin to display labels on pie, doughnut and polar area chart. Original PieceLabel.

In this way, the user doesn't have to take care about compatibility of different versions because they are provided as components of **Charba** and they can be activate on demand.

It is **NOT necessary** to import these plugins as external ones (as described [here](Plugins#importing-existing-chartjs-plugins)) anymore.

See the wiki page for each plugin which is explaining how to activate them.