---
id: Toast
title: Toast
hide_title: true
sidebar_label: Toasting
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Toast

(quoted from [Pop-up notification](https://en.wikipedia.org/wiki/Pop-up_notification) definition in Wikipedia)

The terms pop-up notification, **toast**, passive pop-up, snackbar, desktop notification, notification bubble, or simply notification all refer to a graphical control element that communicates certain events to the user without forcing them to react to this notification immediately, unlike conventional pop-up windows. 

Desktop notifications usually disappear automatically after a short amount of time. Often their content is then stored in some widget that allows the users to access past notifications at a more convenient time. 

<img src={useBaseUrl('/img/toastByEvent.png')} />

<br/>
<br/>

<p align="center">
<img src={useBaseUrl('/img/toastSingle.png')} />
</p>

<br/>
<br/>

**Charba** provides out of the box the feature to enable toast.

The toasting is *native javascript* implementation and **Charba** provides the wrapper in order to be able to use it.

:::info
The toast utility can be used even if the [**Charba.enable**](../getting-started/GettingStarted#embedded-resources) or [**DeferredCharba.enable**](../getting-started/GettingStarted#deferred-resources) are not called because it doesn't depend on CHART.JS.
:::

You could show a toast simply using one of the following sample:

options.getTitle().setContent();

```java
// shows a toast with default type and without title
Toaster.get().show("This is my toast content");
...
// shows a toast, multiple lines, with default type and without title
Toaster.get().show(Arrays.asList("This is my toast content (row 1)", "This is my toast content (row2)"));
...
// shows a toast with default type ERROR (red) and without title
Toaster.get().show(DefaultToastType.ERROR, "This is my toast content");
...
// shows a toast, multiple lines, with default type INFO (blue) and without title
Toaster.get().show(DefaultToastType.INFO, 
              Arrays.asList("This is my toast content (row 1)", "This is my toast content (row2)"));
...
// creates a toast options	
ToastOptions options = new ToastOptions();
// sets type
options.setType(DefaultToastType.ERROR);
// shows a toast with user options and without title
Toaster.get().show(options, "This is my toast content");
...
// creates a toast options	
ToastOptions options = new ToastOptions();
// sets type
options.setType(DefaultToastType.INFO);
// shows a toast, multiple lines, with user options and without title
Toaster.get().show(options, 
              Arrays.asList("This is my toast content (row 1)", "This is my toast content (row2)"));
...
// shows a toast with default type and title
Toaster.get().show("This is my toast title", "This is my toast content");
...
// shows a toast, multiple lines, with default type and title
Toaster.get().show("This is my toast title",
              Arrays.asList("This is my toast content (row 1)", "This is my toast content (row2)"));
...
// shows a toast with default type ERROR (red) and title
Toaster.get().show(DefaultToastType.ERROR, "This is my toast title", "This is my toast content");
...
// shows a toast, multiple lines, with default type ERROR (red) and title
Toaster.get().show(DefaultToastType.ERROR, "This is my toast title",
              Arrays.asList("This is my toast content (row 1)", "This is my toast content (row2)"));
...
// creates a toast options	
ToastOptions options = new ToastOptions();
// sets type
options.setType(DefaultToastType.ERROR);
// shows a toast with user options and title
Toaster.get().show(options, "This is my toast title", "This is my toast content");
...
Toaster.get().show(ToastOptions options, String title, List<String> label);
// creates a toast options	
ToastOptions options = new ToastOptions();
// sets type
options.setType(DefaultToastType.INFO);
// shows a toast with user options and title
Toaster.get().show(options, "This is my toast title",
              Arrays.asList("This is my toast content (row 1)", "This is my toast content (row2)"));
```

Both title and label can contain HTML code.

The `show` method is returning a [status](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/enums/Status.html) instance which report if the toast is showing, on queue, invalid or discard.

```java
// shows a toast with default type and without title
Status status = Toaster.get().show("This is my toast content");
// checks status
if (Status.INVALID.equals(status) || Status.DISCARDED.equals(status)) {
  // the toast is not shown and will not
}
```


## Options

The toast utility allows to define the properties that a toast could have to render the toast, by a [toast options](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/ToastOptions.html).

```java
// creates a toast options  
ToastOptions options = new ToastOptions();
// sets type
options.setType(DefaultToastType.INFO);
// sets progress bar type
options.setProgressBarType(DefaultProgressBarType.ERROR);
// sets icon
options.setIcon(ImagesHelper.toImg(Images.INSTANCE.fingerprintWhite()));
// shows toast
Status status = Toaster.get().show(options, "This is my toast title", "This is my toast content");
```

This is the structure and main components of a toast:

<p align="center">
<img src={useBaseUrl('/img/toastStructure.png')} />
</p>

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| autoHide | boolean | `true` | Set to `false` to avoid that the toast will disappear automatically. To close it, you must click on the toast.
| borderRadius | int | 8 | The border radius of the toast element.
| hideProgressBar | boolean | `false` | Set to `true` to hide the progress bar on the toast element.
| hideShadow | boolean | `false` | Set to `true` to hide the shadow on the toast element.
| icon | [Img](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/dom/elements/Img.html) | `null` | To add an icon on the toast.
| progressBarType | [IsProgressBarType](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/IsProgressBarType.html) | DefaultProgressBarType.DEFAULT | The type of the progress bar to show on the toast element.
| timeout | int | 4000 | The duration of toast, after that the toast will be hide automatically, according with `autoHide` option. 
| type | [IsToastType](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/IsToastType.html) | DefaultToastType.DEFAULT | The type of the toast.

### Defaults

You can set default options to use for all toasts you want to show in your application, without replicating the same configuration on several part of the application, by the [default toast options](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/DefaultToastOptions.html), accessible by the [toaster](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/Toaster.html).

```java
// gets the default toast options  
DefaultToastOptions options = Toaster.get().getDefaults();
// sets type
options.setType(DefaultToastType.INFO);
// sets progress bar type
options.setProgressBarType(DefaultProgressBarType.ERROR);
// sets icon
options.setIcon(ImagesHelper.toImg(Images.INSTANCE.fingerprintWhite()));
```

## Content

Based on the toast structure, you can set two different kinds of options to render the toast elements:

  * [Title](#title), which is a text, highlighted on the top of the toast
  * [Label](#label), which is a text, on the bottom of the toast

### Title

The [toast title](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/Title.html) is a text which is located on the top of toast in order to provide a synthetic information about the toast.

```java
// creates a toast options  
ToastOptions options = new ToastOptions();
// gets title
Title title = options.getTitle();
// sets color (overriding the toast type)
title.setColor(HtmlColor.BLACK);
// sets font
title.getFont().setSize(16);
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| color | String - [IsColor](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html) | #616161 - <span style={{backgroundColor: '#616161', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | Set the font color of title content. Setting it, you override the color that a [toast type](#type) has been configured to use.
| font | [IsFont](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/options/IsFont.html) | see description | Font of text of title.<br/>The default font of the title has got the `weight` set to `Weight.BOLD` and the `size` to `15`.<br/>See [Font](../defaults/DefaultsCharts#font).

### Label

The [toast label](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/Label.html) is a text which is located on the bottom of toast in order to provide the message to the user.

```java
// creates a toast options  
ToastOptions options = new ToastOptions();
// gets label
Label label = options.getLabel();
// sets color (overriding the toast type)
label.setColor(HtmlColor.RED);
// sets font
label.getFont().setSize(12);
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| color | String - [IsColor](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html) | #616161 - <span style={{backgroundColor: '#616161', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | Set the font color of label content. Setting it, you override the color that a [toast type](#type) has been configured to use.
| font | [IsFont](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/options/IsFont.html) | see description | Font of text of label.<br/>The default font of the title has got the `lineHeight` set to `20px` and the `size` to `14`.<br/>See [Font](../defaults/DefaultsCharts#font).

## Type

Every toast has got own type, which will provide the information how to color the toast, both background and font color. 

```java
// DIRECTLY
// shows toast
Status status = Toaster.get().show(DefaultToastType.INFO, "This is my toast title", "This is my toast content");
...
// by OPTIONS
// creates a toast options  
ToastOptions options = new ToastOptions();
// sets type
options.setType(DefaultToastType.INFO);
// sets other options
...
// shows toast
Status status = Toaster.get().show(options, "This is my toast title", "This is my toast content");
```

There are some types provided out of the box, by the [default type enumeration](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/enums/DefaultToastType.html).

The following table shows the different colors for each default type.

| Type | Background | Color
| :- | :- | :-
| DEFAULT | HtmlColor.WHITE - <span style={{backgroundColor: 'white', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | #616161 - <span style={{backgroundColor: '#616161', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
| SUCCESS | #51C625 - <span style={{backgroundColor: '#51C625', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | HtmlColor.WHITE - <span style={{backgroundColor: 'white', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
| WARNING | #DB9215 - <span style={{backgroundColor: '#DB9215', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | HtmlColor.WHITE - <span style={{backgroundColor: 'white', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
| ERROR | #DB2B1D - <span style={{backgroundColor: '#DB2B1D', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | HtmlColor.WHITE - <span style={{backgroundColor: 'white', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
| INFO | #27ABDB - <span style={{backgroundColor: '#27ABDB', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | HtmlColor.WHITE - <span style={{backgroundColor: 'white', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
| DARK | HtmlColor.BLACK - <span style={{backgroundColor: 'black', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | HtmlColor.WHITE - <span style={{backgroundColor: 'white', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 

### Custom type

Where the default types are not enough and you want to use own colors for your toast, you can create your own type, by a [toast type builder](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/ToastTypeBuilder.html).

<p align="center">
<img src={useBaseUrl('/img/toastMyType.png')} />
</p>

Here is the code to created it.

```java
// creates my type
// passing own name, font and background colors
IsToastType myType = ToastTypeBuilder.create("myType", HtmlColor.BROWN, HtmlColor.ORANGE).build();
// shows toast
Status status = Toaster.get().show(myType, "This is my toast title", "This is my toast content");
...
// by OPTIONS
// creates my type
// passing own name, font and background colors
IsToastType myType = ToastTypeBuilder.create("myType", HtmlColor.BROWN, HtmlColor.ORANGE).build();
// creates a toast options  
ToastOptions options = new ToastOptions();
// sets type
options.setType(myType);
// sets other options
...
// shows toast
Status status = Toaster.get().show(options, "This is my toast title", "This is my toast content");
```

:::caution
The name of the type must follow the following rule, otherwise an exception will occur:
  * must start with a letter, `[a-zA-Z]+`
  * must contains whatever letter, number, underscore, hyphen, `[_a-zA-Z0-9-]*`
:::

## ProgressBar type

Every toast can have own progress bar in order to show to the user how much time is remaining before hiding the toast. A progress bar has got own type which will provide the information how to color the bar. 

```java
// creates a toast options  
ToastOptions options = new ToastOptions();
// sets progress bar type
options.setProgressBarType(DefaultProgressBarType.ERROR);
...
// shows toast
Toaster.get().show(options, "This is my toast title", "This is my toast content");
```

There are some progress bar types provided out of the box, by the [default type enumeration](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/enums/DefaultProgressBarType.html).

The following table shows the different colors for each default type.

| Type | Background 
| :- | :-
| DEFAULT | HtmlColor.BLACK - <span style={{backgroundColor: 'black', border: '1px solid', opacity: 0.9}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
| SUCCESS | #51C625 - <span style={{backgroundColor: '#51C625', border: '1px solid', opacity: 0.9}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
| WARNING | #DB9215 - <span style={{backgroundColor: '#DB9215', border: '1px solid', opacity: 0.9}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
| ERROR | #DB2B1D - <span style={{backgroundColor: '#DB2B1D', border: '1px solid', opacity: 0.9}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
| INFO | #27ABDB - <span style={{backgroundColor: '#27ABDB', border: '1px solid', opacity: 0.9}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
| RAINBOW | not color but a gradient: <span style={{background: 'linear-gradient(45deg, #002024 0%, #a72c86 48%, #00d4ff 100%)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

### Custom progress bar type

Where the default progress bar types are not enough and you want to use own colors for your bar, you can create your own type, by a [toast progress bar type builder](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/ProgressBarTypeBuilder.html).

<p align="center">
<img src={useBaseUrl('/img/toastMyProgressBarType.png')} />
</p>

Here is the code to created it.

```java
// creates my type
// passing own name and background colors
IsProgressBarType myType = ProgressBarTypeBuilder.create("myType", HtmlColor.ORANGE).build();
// creates a toast options  
ToastOptions options = new ToastOptions();
// sets my progress bar 
options.setProgressBarType(myType);
...
// shows toast
Toaster.get().show(options, "This is my toast title", "This is my toast content");
```

:::caution
The name of the type must follow the following rule, otherwise an exception will occur:
  * must start with a letter, `[a-zA-Z]+`
  * must contains whatever letter, number, underscore, hyphen, `[_a-zA-Z0-9-]*`
:::

## Handlers

The toast utility provides the capabilities to listen when some status or actions are changed on the toast instance.

The status or actions are:

  * [Open toast](#open-handler), when the toast is open, the handler is engaged
  * [Click event](#click-event-handler), when a click event is fired on the toast, the handler is engaged
  * [Close toast](#close-handler), when the toast is close, the handler is engaged

### Open handler

The [open handler](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/handlers/OpenHandler.html) is triggered when a toast is open and shown on the user interface.

```java
// creates a toast options  
ToastOptions options = new ToastOptions();
...
// sets open handler
options.setOpenHandler(new OpenHandler(){

	/**
	 * Invoked to be notified of toast item opening.
	 * 
	 * @param item toast item affected
	 */
	public void onOpen(ToastItem item) {
	   // my logic
	}
});
...
// shows toast
Toaster.get().show(options, "This is my toast title", "This is my toast content");
```

The handler provides a [toast item](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/ToastItem.html) which contains all options of the toast and additional information related to the runtime context where the toast is shown. See [here](#toast-item) the [toast item](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/ToastItem.html) details.

### Close handler

The [close handler](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/handlers/CloseHandler.html) is triggered when a toast is close and removed from the user interface.

```java
// creates a toast options  
ToastOptions options = new ToastOptions();
...
// sets close handler
options.setCloseHandler(new CloseHandler(){

	/**
	 * Invoked to be notified of toast item closing.
	 * 
	 * @param item toast item affected
	 */
	public void onClose(ToastItem item){
	   // my logic
	}
});
...
// shows toast
Toaster.get().show(options, "This is my toast title", "This is my toast content");
```

The handler provides a [toast item](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/ToastItem.html) which contains all options of the toast and additional information related to the runtime context where the toast was shown. See [here](#toast-item) the [toast item](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/ToastItem.html) details.

### Click event handler

The [click event handler](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/handlers/ClickEventHandler.html) is triggered when a click event is fired on the shown toast in the user interface.

```java
// creates a toast options  
ToastOptions options = new ToastOptions();
...
// sets click event handler
options.setClickEventHandler(new ClickEventHandler(){

	/**
	 * Invoked to manage CLICK events on toast item.
	 * 
	 * @param item toast item affected by event
	 * @param event event fired on item
	 */
	void onClick(ToastItem item, BaseNativeEvent event){
	   // my logic
	}
});
...
// shows toast
Toaster.get().show(options, "This is my toast title", "This is my toast content");
```

The handler provides a [toast item](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/ToastItem.html) which contains all options of the toast and additional information related to the runtime context where the toast was shown and the event fired on the toast. See [here](#toast-item) the [toast item](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/ToastItem.html) details.

## Maximum shown notifications

The toast utility provides the capability to limit the amount of toast you want to show in the user interface, at the same time.

This is because many toasts could waste the user interface making it chaotic.

You can decide how to manage new message to show when the maximum amount of open toasts is already reached, by the 2 policies, enumerated by [maximum open items policy](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/enums/MaximumOpenItemsPolicy.html).

  * `MaximumOpenItemsPolicy.QUEUE`, as **default**, when new message is requested to be shown, the message is put in a queue and when the open items will be close, it will show. 
  * `MaximumOpenItemsPolicy.DISCARD`, when new message is requested to be shown, the message is discard and never shown. 

```java
// sets "queue" policy (default)
Toaster.get().setMaxOpenItemsPolicy(MaximumOpenItemsPolicy.QUEUE);
...
// sets "discard" policy
Toaster.get().setMaxOpenItemsPolicy(MaximumOpenItemsPolicy.DISCARD);
```

By default, the maximum amount of open toast is **`100`** and you can not increment it. But you can decrease this value, by the [toaster](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/Toaster.html). And the minimum amount is **`1`** because at least 1 toast must be shown.

```java
// reduces the amount of open toasts
// in this case, 4 messages
Toaster.get().setMaxOpenItems(4);
// resets to the default (100)
Toaster.get().setMaxOpenItems(Toaster.MAXIMUM_OPEN_ITEMS);
```

When new message is requested to be shown but there are already the maximum amount of open items, new messages are put in a queue and show when open items will be closed. 

## History

The toast utility can store in a local history a certain amount of toast (in FIFO approach), shown during the application utilization, in order to provide to the user visibility on all notifications you received.
By default, the history is not enabled but it can, setting the amount of messages you want to maintain, by the [toaster](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/Toaster.html).

```java
// -------------------------
// ENABLE history
// -------------------------
// sets the amount of toast to maintain in the history
// in this case, 20 messages
Toaster.get().setMaxHistoryItems(20);
// -------------------------
// DISABLE history
// -------------------------
// sets the amount of toast to 0
Toaster.get().setMaxHistoryItems(0);
```

The [toaster](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/Toaster.html) provides the list of toast items in the history in order to enable to create an own panel where to show all the toast items.

```java
// gets the toast history
List<ToastItem> history = Toaster.get().getHistoryItems();
```

### Toast item

The history provides a unmodifiable list of a [toast item](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/ToastItem.html).

A [toast item](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/ToastItem.html) contains all the options of a [toast options](#options) and in addition the following ones, result of the context where the toast has been shows.

| Name | Type | Description
| :- | :- | :-
| dateTime | java.util.Date | Every change status is recorded with the date time when occurs. By [Status](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/enums/Status.html), you can get the date time.<br/>For instance, `Date whenOpened = toastItem.getDateTime(Status.OPENEND);` returns the date time when the toast was openend. If the toast haven't had the passed status, returns `null`.
| element | [Div](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/dom/elements/Div.html) | The DOM element of the shown toast.
| id | int | The unique id of the toast.
| label | String | `null` | The text of the toast label. Can contain HTML code.
| options | [ToastItemOptions](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/ToastItemOptions.html) | The immutable options used to emit the toast.
| status | [Status](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/enums/Status.html) | The last status of the toast.
| title | String | `null` | The text of the toast title. Can contain HTML code.

## Options builder

**Charba** provides a builder to create options using the **set** methods in sequence and get the [toast options](https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/utils/toast/ToastOptions.html) at the end of configuration, by `build` method.

```java
// creates a simple toast options and shows it
ToastOptions options = ToastOptionsBuilder.create(DefaultProgressBarType.ERROR).build();
```

You can also use the builder to create toast with more configuration.

```java
// creates a toast options  
ToastOptions options = ToastOptionsBuilder.create(DefaultToastType.INFO)
	.setProgressBarType(DefaultProgressBarType.ERROR)
	.setIcon(ImagesHelper.toImg(Images.INSTANCE.fingerprintWhite()))
	.setClickEventHandler(new ClickEventHandler(){
		void onClick(ToastItem item, BaseNativeEvent event){
		   // my logic
		}
	})
	.build();
// shows toast
Toaster.get().show(options, "This is my toast title", "This is my toast content");
```
