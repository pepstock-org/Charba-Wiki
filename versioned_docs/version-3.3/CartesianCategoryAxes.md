---
id: CartesianCategoryAxes
title: Cartesian category
hide_title: true
sidebar_label: Cartesian category
---
## Cartesian Category Axes

The [category axis](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/CartesianCategoryAxis.html) will draw the labels from one of the label arrays included in the chart data.

## Ticks

The category axis provides the following options for configuring [tick marks](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/CartesianCategoryTick.html). These options extend the [common tick configuration](CartesianAxes#tick-configuration).

Table with options:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| labels | String[] | [] | An array of labels to display.
| min | String |  | The minimum item to display.
| max | String |  | The maximum item to display.

For both the `min` and `max` properties, the value must be in the `labels` array.

The further customization of ticks, a callback is provided.

### Callback

It is also common to want to change the tick marks to include information about the data type. 

To apply a custom callback, you can set a [CategoryTickCallback](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/CategoryTickCallback.html) instance to the axis options, as following:

```java
axis.getTicks().setCallback(new CategoryTickCallback() {

   /**
    * Changes the tick marks to include information about the data type.
    * 
    * @param axis axis instance where this callback as been defined
    * @param value value of tick
    * @param index index of tick
    * @param values list of all tick values
    * @return the tick to apply or if the callback returns null the associated grid line will be hidden.
    */
   public String onCallback(Axis axis, String value, int index, List<String> values){
      // add a label
      return value + myLabel;
   }
         
});
```

### BuildTicks callback

This callback can be used to change parameters in the scale during ticks building. To implement this callback, you must implement [this interface](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/CategoryAxisBuildTicksCallback.html). 

```java
public interface CategoryAxisBuildTicksCallback {

   /**
    * Callback that runs before ticks are created.
    * 
    * @param axis axis instance where this callback as been defined
    * @param item axis item instance
    */
   void onBeforeBuildTicks(Axis axis, AxisItem item);

   /**
    * Callback that runs after ticks are created. Useful for filtering ticks.
    * 
    * @param axis axis instance where this callback as been defined
    * @param item axis item instance
    * @param ticks list of created ticks
    */
    void onAfterBuildTicks(Axis axis, AxisItem item, List<String> ticks);

}
```
