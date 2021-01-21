---
id: Animation
title: Animation
hide_title: true
sidebar_label: Animation
---
## Animation

[Chart.JS](http://www.chartjs.org/) animates charts out of the box and **Charba** does not change this behavior. A number of options are provided to configure how the animation looks and how long it takes

The animation configuration is passed to a chart as following:

```java
// example
chart.getOptions().getAnimation().setDuration(1000);
chart.getOptions().getAnimation().setEasing(Easing.EASE_OUT_QUART);
```

The following animation options are available. 

| Name | Type | Default | Description
| :- | :- | :- | :-
| animateRotate | boolean | `true` | If `true`, the chart will animate in with a rotation animation.  
| animateScale | boolean | `false` | If `true`, will animate scaling the chart from the center outwards.
| duration | int | 1000 | The number of milliseconds an animation takes.
| easing | [Easing](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Easing.html) | Easing.EASE_OUT_QUART | Easing function to use.

To disable any kind of animation, set `duration` to 0.

## Events

A chart can emits events during the animation phases, when it's the animation is progressing and completed.

### onProgress event

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

### onComplete event

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
