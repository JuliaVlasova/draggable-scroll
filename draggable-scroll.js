"use strict";

function draggableScroll(draggedItem) {
	let draggedBlock = $(draggedItem);
	$('#draggable').draggable({ containment:'parent' });

	$(draggedBlock).each(function() {
		let scrollBar = $(this).parents('.slider-mobile').find('#draggable');
		let container = $(this).parents('.slider-mobile').find(".p-table");
		let outerContainer = $(this).parents('.popup-window_table');
		let swipeLine = $(this).parents('.slider-mobile').find(".scroll-thumb");
		let offsetContLeft = $(container).offset().left;

		$(scrollBar).draggable({
			drag: function(){
				let swipeLineWidth = $(swipeLine).width();
				let scrollBarWidth = $(scrollBar).width();
				let offsetEl = $(this).offset();
				let offsetOuterCont = $(outerContainer).offset();
				let additionalNumber = (offsetContLeft - offsetOuterCont.left) * (swipeLineWidth / scrollBarWidth);
				let xPos = offsetEl.left * (swipeLineWidth / scrollBarWidth);
				console.log(offsetOuterCont.left);
				$(this).parents('.slider-mobile').find(draggedBlock).css('margin-left', -xPos + additionalNumber + 'px');
			}
		});

		function showSwipeLine() {
			let scrollBarWidth = $(scrollBar).width();
			let swipeLineWidth = $(swipeLine).width();

			if(scrollBarWidth >= swipeLineWidth) {
				$(swipeLine).addClass('scroll-thumb_invisible');
				$(draggedBlock).css('margin-left', '0');
				offsetContLeft = $(container).offset().left;
			} else {
				$(swipeLine).removeClass('scroll-thumb_invisible');
			}
		}

		showSwipeLine();

		$(window).on('resize', function() {
			showSwipeLine();
		});
	});
}

draggableScroll('.dragged-block');
