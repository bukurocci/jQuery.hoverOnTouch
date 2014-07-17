
/*!
 *	jQuery.hoverOnTouch
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

				$element.off('touchmove', handleTouchMove);
				$element.removeClass(params.hoverClass);
				isMoveDetected = true;
			}

			function handleTouchEnd(evt) {

				if(!isMoveDetected) {

					$element.removeClass(params.hoverClass);

					if(params.cancelOnTouchMove) {
						
						$element.off('touchmove', handleTouchMove);
					}
				}
			}

			function handleTouchCancel(evt) {

				if(!isMoveDetected) {

					$element.removeClass(params.hoverClass);

					if(params.cancelOnTouchMove) {

						$element.off('touchmove', handleTouchMove);
					}
				}
			}

		});
	};

	$.fn.hoverOnTouch.defaultParams = {
		hoverClass: 'hover',
		cancelOnTouchMove: true
	};


})(jQuery, window);
