$(document).ready(function (){

	$('.slider__box').slick({             // настройка слайдера
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        //autoplay: true,
  		autoplaySpeed: 2000,
  		asNavFor: '.slider__box1',
        nextArrow: '.slider__right',
        prevArrow: '.slider__left'
    });

    $('.slider__box1').slick({             
        slidesToShow: 6,
        centerMode: true,
        centerPadding: '0px',
        dots: false,
        arrows: false,
        asNavFor: '.slider__box',
        focusOnSelect: true,
        responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
     ]
    });

    $( function() {                                       //настройка ползунков
	    $( "#price" ).slider({
	      range: true,
	      min: 10,
	      max: 150,
	      values: [ 10, 150 ],
	      slide: function( event, ui ) {
	        $( "#amount" ).val( ui.values[ 0 ] + "млн." );
	        $( "#amountclone" ).val( ui.values[ 1 ] + "млн." );
	      }
	    });
	    $( "#amount" ).val( $( "#price" ).slider( "values", 0 ) + "млн." );
	    $( "#amountclone" ).val( $( "#price" ).slider( "values", 1 ) + "млн." );

	});

	$( function() {
	    $( "#area" ).slider({
	      range: true,
	      min: 20,
	      max: 500,
	      values: [ 20, 500 ],
	      slide: function( event, ui ) {
	        $( "#amount2" ).val( ui.values[ 0 ] + "М2" );
	        $( "#amountclone2" ).val( ui.values[ 1 ] + "М2" );
	      }
	    });
	    $( "#amount2" ).val( "<" + $( "#area" ).slider( "values", 0 ) + "М2" );
	    $( "#amountclone2" ).val( $( "#area" ).slider( "values", 1 ) + "М2" );
	});
	
	$( function() {
	    $( "#room" ).slider({
	      range: true,
	      min: 1,
	      max: 10,
	      values: [ 1, 10 ],
	      slide: function( event, ui ) {
	        $( "#amount3" ).val( ui.values[ 0 ] );
	        $( "#amountclone3" ).val( ui.values[ 1 ] );
	      }
	    });
	    $( "#amount3" ).val( $( "#room" ).slider( "values", 0 ) );
	    $( "#amountclone3" ).val( $( "#room" ).slider( "values", 1 ) + "+" );
	});

	$( function() {
	    $( "#bathroom" ).slider({
	      range: true,
	      min: 1,
	      max: 5,
	      values: [ 1, 5 ],
	      slide: function( event, ui ) {
	        $( "#amount4" ).val( ui.values[ 0 ] );
	        $( "#amountclone4" ).val( ui.values[ 1 ] );
	      }
	    });
	    $( "#amount4" ).val( $( "#bathroom" ).slider( "values", 0 ) );
	    $( "#amountclone4" ).val( $( "#bathroom" ).slider( "values", 1 ) + "+" );
	});

	$( function() {
	    $( "#bedroom" ).slider({
	      range: true,
	      min: 1,
	      max: 5,
	      values: [ 1, 5 ],
	      slide: function( event, ui ) {
	        $( "#amount5" ).val( ui.values[ 0 ] );
	        $( "#amountclone5" ).val( ui.values[ 1 ] );
	      }
	    });
	    $( "#amount5" ).val( $( "#bedroom" ).slider( "values", 0 ) );
	    $( "#amountclone5" ).val( $( "#bedroom" ).slider( "values", 1 ) + "+" );
	});

	$(window).scroll(function () {                              //управление фоном header
		if ($(this).scrollTop() > 0) {
			$('.header').css("background", "#3B3428");                
		} else if ($('#header').attr('class') === 'header headerDuplicat') {
			$('.header').css("background", "#3B3428"); 
		} else {
			$('.header').css("background", "transparent");
		}
	});

    
	var right = $(window).width() - $('.header__content-menu-navbutton').offset().left - 40;   //появление бокового меню
    $('.navigate__hide').css("right", right );

    $(window).resize(function(){
        var right = $(window).width() - $('.header__content-menu-navbutton').offset().left - 40;   //появление бокового меню
        $('.navigate__hide').css("right", right );
    });

    $('.header__content-menu-navbutton').on('click', function(){
		$('.navigate').css("right", "0%");
        //$('.navigate__hide').css("left", "0px" );
		$('.maskAll').css("display", "block");
	});

	$('.navigate__hide').on('click', function(){                //скрытие бокового меню
		$('.navigate').css("right", "-36%");
        //$('.navigate__hide').css("left", navigateTranslate + 20 + "px" );
		$('.maskAll').css("display", "none");
	});

	$('.request__item').on('click', function(){                //включение/выключение запросов на страница ПРОДАВЦАМ
		$(this).toggleClass('request__bg');
	});

    ymaps.ready(init);                                          //подключение карт

    var placemarks = [
    	{
    		latitude: 55.8753,
    		longitude: 37.4457,
    		hintContent: 'Цена: 126 млн. рублей'
    	},
    	{
    		latitude: 55.8626,
    		longitude: 37.84533,
    		hintContent: 'Цена: 126 млн. рублей'
    	},
    	{
    		latitude: 55.8595,
    		longitude: 38.1667,
    		hintContent: 'Цена: 126 млн. рублей'
    	},
    	{
    		latitude: 55.7454,
    		longitude: 38.1028,
    		hintContent: 'Цена: 126 млн. рублей'
    	},
    	{
    		latitude: 55.7245,
    		longitude: 37.7876,
    		hintContent: 'Цена: 126 млн. рублей'
    	},
    	{
    		latitude: 55.7798,
    		longitude: 37.6551,
    		hintContent: 'Цена: 126 млн. рублей'
    	},
    	{
    		latitude: 55.7558,
    		longitude: 37.5232,
    		hintContent: 'Цена: 126 млн. рублей'
    	},
    	{
    		latitude: 55.7783,
    		longitude: 37.4333,
    		hintContent: 'Цена: 126 млн. рублей'
    	},
    	{
    		latitude: 55.6946,
    		longitude: 37.1998,
    		hintContent: 'Цена: 126 млн. рублей'
    	},
    	{
    		latitude: 55.7275,
    		longitude: 37.5335,
    		hintContent: 'Цена: 126 млн. рублей'
    	},
    	{
    		latitude: 55.6849,
    		longitude: 37.4848,
    		hintContent: 'Цена: 126 млн. рублей'
    	},
    	{
    		latitude: 55.7101, 
    		longitude: 37.5995,
    		hintContent: 'Цена: 126 млн. рублей'
    	},
    	{
    		latitude: 55.6992,
    		longitude: 37.6489,
    		hintContent: 'Цена: 126 млн. рублей'
    	},
    	{
    		latitude: 55.6791,
    		longitude: 37.6475,
    		hintContent: 'Цена: 126 млн. рублей'
    	},
    	{
    		latitude: 55.7248,
    		longitude: 37.7876,
    		hintContent: 'Цена: 126 млн. рублей'
    	},
    	{
    		latitude: 55.6822,
    		longitude: 37.9098,
    		hintContent: 'Цена: 126 млн. рублей'
    	},
    	{
    		latitude: 55.6368,
    		longitude: 37.8350,
    		hintContent: 'Цена: 126 млн. рублей'
    	},
    	{
    		latitude: 55.6445,
    		longitude: 37.7086,
    		hintContent: 'Цена: 126 млн. рублей'
    	},
    	{
    		latitude: 55.6263,
    		longitude: 37.6297,
    		hintContent: 'Цена: 126 млн. рублей'
    	},
    	{
    		latitude: 55.6457,
    		longitude: 37.5473,
    		hintContent: 'Цена: 126 млн. рублей'
    	},
    	{
    		latitude: 55.6092,
    		longitude: 37.4711,
    		hintContent: 'Цена: 126 млн. рублей'
    	},
    	{
    		latitude: 55.5967,
    		longitude: 37.2925,
    		hintContent: 'Цена: 126 млн. рублей'
    	},
    	{
    		latitude: 55.515,
    		longitude: 37.3358,
    		hintContent: 'Цена: 126 млн. рублей'
    	},
    	{
    		latitude: 55.5458,
    		longitude: 37.5699,
    		hintContent: 'Цена: 126 млн. рублей'
    	},
    	{
    		latitude: 55.5539,
    		longitude: 37.6743,
    		hintContent: 'Цена: 126 млн. рублей'
    	}

    ];

    function init (ymaps) {
    	if ($('#mapMain').get(0)) {
    		var myMap = new ymaps.Map("mapMain", {
	            center: [55.75,37.62],
	            zoom: 14,
	            controls: ["zoomControl"],
	            behaviors: ["drag"]
	        });

	        var placemark = new ymaps.Placemark([55.753,37.62],{
	        	hintContent: 'Цена: 126 млн. рублей'
	        },{
	        	iconLayout: 'default#image',
	        	iconImageHref: 'img/point.svg',
	        	iconImageSize: [50, 78],
	        	iconImageOffset: [-25, -78]
	        });

	        myMap.geoObjects.add(placemark);
    	}
    	if ($('#mapPage').get(0)) {
    		var myMap1 = new ymaps.Map("mapPage", {
	            center: [55.75,37.62],
	            zoom: 10,
	            controls: ["zoomControl"],
	            behaviors: ["drag"]
	        });

    		placemarks.forEach(function(obj){
				var placemark1 = new ymaps.Placemark([obj.latitude, obj.longitude],{
			        	hintContent: obj.hintContent
			        },{
			        	iconLayout: 'default#image',
			        	iconImageHref: 'img/point.svg',
			        	iconImageOffset: [-25, -78]
			        });

		        myMap1.geoObjects.add(placemark1);
    		});
	        
    	}
    	if ($('#mapCard').get(0)) {
    		var myMap2 = new ymaps.Map("mapCard", {
	            center: [55.432,37.549],
	            zoom: 16,
	            controls: ["zoomControl"],
	            behaviors: ["drag"]
	        });

	        var placemark2 = new ymaps.Placemark([55.4315,37.551],{
	        	hintContent: 'Цена: 126 млн. рублей'
	        },{
	        	iconLayout: 'default#image',
	        	iconImageHref: 'img/point.svg',
	        	iconImageSize: [50, 78],
	        	iconImageOffset: [-25, -78]
	        });

	        myMap2.geoObjects.add(placemark2);
    	}
    }

});