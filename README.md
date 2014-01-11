#jQuery.hoverOnTouch

A simple :hover emulation for touch devices


##How to use
```javascript
$('a.example').hoverOnTouch();
```

##Options
```javascript
$('a.example').hoverOnTouch({
	/*
		specify a class name that is added to element when element is touched.
		default: hover
	*/
	hoverClass: 'hover-example',
	/*
		cancel :hover emulation when touchmove event is dispatched
		default: true
	*/
	cancelOnTouchMove: true 
});
```

##Demo
[http://bukurocci.github.io/jQuery.hoverOnTouch/demo/](http://bukurocci.github.io/jQuery.hoverOnTouch/demo/)

##License
MIT License

