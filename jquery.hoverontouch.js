
/*!
 *	jQuery.hoverOnTouch
 *	Copyright 2014 Naokazu Shimabukuro
 *	MIT License
 *
 *	https://github.com/bukurocci/jQuery.hoverOnTouch
 */
;(function($, window, undefined) {

	var $window = $(window);
	var $document = $(window.document);

	$.fn.hoverOnTouch = function(settingParams) {

		return this.each(function(index, element) {
			var	$element = $(element);
			var params = $.extend(true, {}, $.fn.hoverOnTouch.defaultParams, settingParams);
			var isMoveDetected = false;

			$element.addClass(params.hoverClass + '-enabled');
			$element.on('touchstart', handleTouchStart)
			$element.on('touchend', handleTouchEnd);
			$document.on('touchcancel', handleTouchCancel);

			//Event Handlers
			function handleTouchStart(evt) {

				isMoveDetected = false;
				$element.addClass(params.hoverClass);

				if(params.cancelOnTouchMove) {
					$element.on('touchmove', handleTouchMove);
				}
			}

			function handleTouchMove(evt) {

				if(isMoveDetected) {

					$element.off('touchmove', handleTouchMove);
					return;
				}

				$element.removeClass(params.hoverClass);
				isMoveDetected = true;
			}

			function handleTouchEnd(evt) {

				if(!isMoveDetected) {

					$element.removeClass(params.hoverClass);
				}
			}

			function handleTouchCancel(evt) {

				if(!isMoveDetected) {

					$element.removeClass(params.hoverClass);
				}
			}

		});
	};

	$.fn.hoverOnTouch.defaultParams = {
		hoverClass: 'hover',
		cancelOnTouchMove: true
	};


})(jQuery, window);
