---
id: Animation
title: Animation
hide_title: true
sidebar_label: Animation
---
## Animating charts

[Chart.JS](http://www.chartjs.org/) animates charts out of the box and **Charba** does not change this behavior. A number of options are provided to configure how the animation looks and how long it takes.

The animation configuration consists in 3 different elements:

  1. **[Animation](#animation)** to configure the common animation options.
  2. **[Animations](#animations)** to configure the common animation options for a specific sets of element(like bar, point, arc and line) properties.
  3. **[Transitions](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Transitions.html)** to configure the animation and animations options for a specific update mode.

## Animation

[Animation](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Animation.html) is used to configure the base options to animate the chart.

To get, change and apply own properties, you can invoke the **set** and **get** methods, as following:

```java
// sets and gets duration option to the animation of the chart
chart.getOptions().getAnimation().setDuration(2000);

int duration = chart.getOptions().getAnimation().getDuration();
```

The default values are set in global defaults options, see [default global animation options](../defaults/DefaultsCharts#animation).

The following animation options are available. 

| Name | Type | Description
| :- | :- | :-
| animateRotate | boolean | If `true`, the chart will animate in with a rotation animation.  
| animateScale | boolean | If `true`, will animate scaling the chart from the center outwards.
| delay | int | Delay in milliseconds before starting the animations.
| duration | int | The number of milliseconds an animation takes.
| easing | [Easing](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Easing.html) | Easing function to use.<br/>See [Robert Penner's easing equations](http://robertpenner.com/easing/) for more details.
| loop | boolean | If set to `true`, the animations loop endlessly.

## Animations

[Animations](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Animations.html) options configures which element properties are animated and how.

The animations element is a container of configurations, [AnimationCollection](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/AnimationCollection.html), which can be stored and retrieved by a key, [IsAnimationCollectionKey](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/IsAnimationCollectionKey.html).

To get, change and apply own properties, you can invoke the **set** and **get** methods, as following:

```java
// creates my animations key, setting it as a collection of properties
// which are numbers
IsAnimationCollectionKey key = IsAnimationCollectionKey.create("myKey", AnimationType.NUMBER);
// creates and gets an animation configuration item by my key
AnimationCollection animationConfiguration = chart.getOptions().getAnimations().create(key);
// sets and gets duration option to the animation configuration
animationConfiguration.setDuration(2000);

int duration = animationConfiguration.getDuration();
```

The default values are set in global defaults options, see [default global animations options](../defaults/DefaultsCharts#animations).

The following options are available in [AnimationCollection](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/AnimationCollection.html). 

| Name | Type | Description
| :- | :- | :-
| delay | int | Delay in milliseconds before starting the animations.
| duration | int | The number of milliseconds an animation takes.
| easing | [Easing](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Easing.html) | Easing function to use.<br/>See [Robert Penner's easing equations](http://robertpenner.com/easing/) for more details.
| loop | boolean | If set to `true`, the animations loop endlessly.
| properties | [IsAnimationPropertyKey](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/IsAnimationPropertyKey.html)[] | The properties of elements to use to animate.
| type | [AnimationType](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/AnimationType.html) | Type of property, determines the interpolator used.
| from  | boolean - double - String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | Start value for the animation.
| to  | boolean - double - String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | End value for the animation.

### Default animations

[Chart.JS](http://www.chartjs.org/) provides a default configuration for every specific [animation type](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/AnimationType.html):

| AnimationType | DefaultAnimationCollectionKey | Properties 
| ---- | ------- | ---------
| NUMBERS | [NUMBERS](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/DefaultAnimationCollectionKey.html) | DefaultAnimationPropertyKey.X,<br/>DefaultAnimationPropertyKey.Y,<br/>DefaultAnimationPropertyKey.BORDER_WIDTH,<br/> DefaultAnimationPropertyKey.RADIUS,<br/>DefaultAnimationPropertyKey.TENSION
| COLORS | [COLORS](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/DefaultAnimationCollectionKey.html) | DefaultAnimationPropertyKey.COLOR, DefaultAnimationPropertyKey.BORDER_COLOR, DefaultAnimationPropertyKey.BACKGROUND_COLOR
| BOOLEAN | [VISIBLE](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/DefaultAnimationCollectionKey.html) | DefaultAnimationPropertyKey.VISIBLE

:::note
These default animations are overridden by most of the charts default configuration.
:::

## Transitions

The [transitions](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Transitions.html) are a set of animation configuration related to a specific update mode.

Every [transition animation configuration](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/AnimationTransition.html) contains an instance of [Animation](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Animation.html) and one of [Animations](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Animations.html) to configure the animation for a specific mode.

```java
// creates a custom mode
IsTransitionKey mode = IsTransitionKey.create("myMode");
// creates an animation transitions configuration for my mode
AnimationTransition animationMode = chart.getOptions().getTransitions().create(mode);

// gets animation and animations elements
Animation animation = animationMode.getAnimation();

Animations animations = animationMode.getAnimations();
```

The default values are set in global defaults options, see [default global transitions options](../defaults/DefaultsCharts#transitions).

The defaults modes are mapped in the [DefaultTransitionKey](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/DefaultTransitionKey.html) enumeration and they are:

  * **ACTIVE** uses the animation configuration when an element is hovering
  * **HIDE** uses the animation configuration when a dataset is hidden (by using legend or [hide](../charts/Api#hide) method).
  * **RESET** uses the animation configuration when an element is resetting.
  * **RESIZE** uses the animation configuration when an element is resizing.
  * **SHOW** uses the animation configuration when a dataset is shown (by using legend or [show](../charts/Api#show) method).

```java
// gets animation transitions element
Transitions transitions = chart.getOptions().getTransitions();
// creates an animation transitions configuration for "show"
AnimationTransition animationMode = transitions.create(DefaultTransitionKey.SHOW);
// changes animation configuration setting duration to 10 seconds
animationMode.getAnimation().setDuration(10000);
// updates the chart using "show" mode
chart.update(DefaultTransitionKey.SHOW);
```

A custom transition can be used by passing it to [update](../charts/Api#update) or [reconfigure](../charts/Api#reconfigure) methods of the chart.

```java
// creates a custom mode
IsTransitionKey mode = IsTransitionKey.create("myMode");
// creates an animation transitions configuration for my mode
AnimationTransition animationMode = chart.getOptions().getTransitions().create(mode);
// changes animation configuration setting duration to 10 seconds
animationMode.getAnimation().setDuration(10000);
// updates the chart using my mode
chart.update(mode);
```

## Disabling animation

To disable an animation configuration, the animation node must be set to `false`, with the exception for animation transitions which can be disabled by setting the `duration` to `0`.

```java
// ----------------------------------------
// disables all animations
// ----------------------------------------
chart.getOptions().setAnimationEnabled(false); 
// ----------------------------------------
// disables animation defined by the collection of 'colors' properties
// ----------------------------------------
chart.getOptions().getAnimations().setEnabled(DefaultAnimationCollectionKey.COLORS, false);
// ----------------------------------------
// disables the animation for 'active' mode
// ----------------------------------------
// gets animation transitions element
Transitions transitions = chart.getOptions().getTransitions();
// creates an animation transitions configuration for "active"
AnimationTransition animationMode = transitions.create(DefaultTransitionKey.ACTIVE);
// changes animation configuration setting duration to 0 seconds
animationMode.getAnimation().setDuration(0);
```

## Events

A chart can emits events during the animation phases, when it's the animation is progressing and completed.

### Progressing

The progress event is thrown on each step of an animation. To catch the event and manage it, you can add a [AnimationProgressEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/AnimationProgressEventHandler.html) instance to the chart options, as following:

```java
chart.addHandler(new AnimationProgressEventHandler() {

   /**
    * Invoked when chart animation is progressing.
    * 
    * @param event animation event
    */
   @Override 
   public void onProgress(AnimationProgressEvent event){
      AnitmationItem item = event.getItem();
      // logic
   }
         
}, AnimationProgressEvent.TYPE);
```

The event provides the [animation item](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/AnimationItem.html) object with all information about animation status.

### Completed

The complete event is thrown at the end of an animation. To catch the event and manage it, you can add a [AnimationCompleteEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/AnimationCompleteEventHandler.html) instance to the chart options, as following:

```java
chart.addHandler(new AnimationCompleteEventHandler() {

   /**
    * Invoked when chart animation is complete.
    * 
    * @param event animation event
    */
   @Override 
   public void onComplete(AnimationCompleteEvent event){
      AnitmationItem item = event.getItem();
      // logic
   }
         
}, AnimationCompleteEvent.TYPE);
```

The event provides the [animation item](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/AnimationItem.html) object with all information about animation status.
