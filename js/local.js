
"use strict";

$('.single-item').slick({
	dots: true,
	slidesToShow: 3,
  slidesToScroll: 3,
  rows: 2,
  responsive: [
    { breakpoint: 1199,
      settings: {
      	slidesToShow: 2,
       slidesToScroll: 2
      }
    },
    { breakpoint: 767,
      settings: {
        slidesToShow: 1,
        arrows: false,
        rows: 1 ,
	  	centerMode: true,
		variableWidth: true,
	  	centerPadding: "0px",
	  	focusOnSelect: true
      }
    }]
});