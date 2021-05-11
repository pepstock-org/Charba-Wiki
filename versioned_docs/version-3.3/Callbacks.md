---
id: Callbacks
title: Callbacks
hide_title: true
sidebar_label: Callbacks
---
## CHARBA callbacks implementations

**Charba** provides some callbacks or events out-of-the-box implementation, developed for common purposes.

## AtLeastOneDatasetHandler event

**Charba** provides a common implementation for legend click event handler to enable the control about how many datasets are hidden, in order to have at least 1 dataset visible and avoid to have an empty chart.

The class is named [AtLeastOneDatasetHandler](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/callbacks/AtLeastOneDatasetHandler.html).

To apply the event handler, you can set to the chart, as following:

```java
chart.addHandler(new AtLeastOneDatasetHandler(), LegendClickEvent.TYPE);
```

## NoSelectedDatasetTicksCallback callback

**Charba** provides a common implementation for tick callback to set the decimal digits of ticks in case of all datasets are hidden, to avoid the annoying standard format of doubles.

The class is named [NoSelectedDatasetTicksCallback](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/callbacks/NoSelectedDatasetTicksCallback.html).

To apply the callback, you can set an instance to the axis options, as following:

```java
axis.getTicks().setCallback(new NoSelectedDatasetTicksCallback());
```

The default decimal precision is `2`. A custom precision can be set by the constructor of callback, as following:

```java
// 3 decimal digits 
axis.getTicks().setCallback(new NoSelectedDatasetTicksCallback(3));
```

## DataLabelsPointerHandler handler

**Charba** provides a common listener handler for [DATALABELS listener](DataLabels#listeners-element) to change the cursor type when the labels are clickable.

The class is named [DataLabelsPointerHandler](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/callbacks/DataLabelsPointerHandler.html).

To apply the handler, you can set an instance to the DATALABEL options, as following:

```java
DataLabelsPointerHandler handler = new DataLabelsPointerHandler();

DataLabelsOptions options = new DataLabelsOptions();
options.setListenersHandler(handler);
```

The handler can be customized at constructor level, setting which [cursor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/enums/CursorType.html) must be used hovering the labels, as following:

```java
// uses the CursorType.POINTER
DataLabelsPointerHandler handler = new DataLabelsPointerHandler();

// uses the CursorType.CROSSHAIR
DataLabelsPointerHandler handler = new DataLabelsPointerHandler(CursorType.CROSSHAIR);
```

## DataLabelsSelectionHandler handler

**Charba** provides a common listener handler for [DATALABELS listener](DataLabels#listeners-element) to invoke dataset selection handlers if there were defined. The handler accepts [DatasetSelectionEventHandler](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/events/DatasetSelectionEventHandler.html) instances in order to notify which dataset has been selected clicking on the label.

The class is named [DataLabelsSelectionHandler](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/callbacks/DataLabelsSelectionHandler.html).

To apply a callback, you can set an instance to the DATALABEL options, as following:

```java
DataLabelsSelectionHandler handler = new DataLabelsSelectionHandler();

handler.addDatasetSelectionEventHandler(new DatasetSelectionEventHandler() {
	
	/**
	 * Invoked when the user clicks on the chart to select a dataset.
	 * 
	 * @param event chart dataset selection event
	 */			
	@Override
	public void onSelect(DatasetSelectionEvent event) {
		// logic
	}
});

DataLabelsOptions options = new DataLabelsOptions();
options.setListenersHandler(handler);
```

Against to the [dataset selection event handler](General#onselect-event-for-dataset-selection), at chart level, this invocation is synchronous.

The handler can be customized at constructor level, setting which [cursor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/enums/CursorType.html) must be used hovering the labels, as following:

```java
// uses the CursorType.POINTER
DataLabelsSelectionHandler handler = new DataLabelsSelectionHandler();

// uses the CursorType.CROSSHAIR
DataLabelsSelectionHandler handler = new DataLabelsSelectionHandler(CursorType.CROSSHAIR);
```

## PercentageCallback formatter 

**Charba** provides a common callback for [DATALABELS formatter](DataLabels#formatting) in order to provide the percentage of the value for each data index per dataset.

The class is named [PercentageCallback](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/callbacks/PercentageCallback.html).

To apply the callback, you can set an instance to the DATALABEL options, as following:

```java
PercentageCallback callback = new PercentageCallback();

DataLabelsOptions options = new DataLabelsOptions();
options.setFormatter(callback);
```

The handler can be customized at constructor level, setting:

   * decimal precision, in order to have a good number of decimal digits of percentage to show. Default is **2**;
   * stacked, as boolean argument, in order to calculate the percentage on the total of the dataset (`false`) or using the same data index of stacked datasets (`true`). Default is `false`. 
