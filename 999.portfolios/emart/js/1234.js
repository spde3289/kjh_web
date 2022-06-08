$(document).ready(function(){	
	emart.ui.setDefaults('BasicBanner', {
		effectType: emart.ui.EffectType.SLIDE_HORIZONTAL,//모션 타입
	});
	
	var mainBanner = $(".d-main-banner").BasicBanner({
		selectors: {
			listContainer : ".d-list",
			contentList : ".d-list li",
			indicator : ".d-indicator ol a",
			playButton:".d-play",
			pauseButton: ".d-pause"
		},						
		indicatorType: emart.ui.IndicatorType.NORMAL,		
		loop: true,
		onClass: "on",//컨트롤 클래스
		autoPlay: true,//오토롤링 적용 여부
		duration: 700,//애니메이션 속도
		intervalTime: 5000,//자동 롤링 속도
		startIndex: 0,// 처음에 노출할 인덱스
		isToggle: true,
		easing: "easeOutQuad"
	}).BasicBanner('instance');
	
	
	var isPlay;
	emart.PubSub.on("favoemart_open", function(){
		isPlay = mainBanner.getIsPlay();
		if( isPlay ){
			mainBanner.pause();	
		}
	});
	
	emart.PubSub.on("favoemart_close", function(){
		if( isPlay ){
			mainBanner.play();	
		}
	});
	
	// 헤더배너 쿠키 처리
	$('#top_banner').on('click', 'a.close', function(e) {
		e.preventDefault();
		var isHideToday = $('#today_no').prop('checked'),
			$wrap = $('#wrap');

		if(isHideToday) {
			var todayDate = new Date();
			todayDate.setDate( todayDate.getDate() + 1 );

			emart.Cookie.set('hideHeadBanner', 'Y', {
				path: '/',
				expires: todayDate.toGMTString()
			});
		}
		$wrap.removeClass('top_ban_on');
	});

    /* 메인 상단 비주얼 */
   //버튼모양 play로 바꾸기
   function swiperStop(){  
        $('.main-visual .stop').removeClass('on');
        $('.main-visual .start').addClass('on');
    }
    var mySwiper = new Swiper('.main-visual .swiper-container',{ 
        loop:true,
        grabCursor: true,
        pagination: {
            el: '.pagination',
            clickable: true,
			disableOnInteraction:true,
        },
        autoplay: {
            delay: 2000,
        },
        simulateTouch: false,
    });
    $('.main-visual .arrow-left').on('click', function(e){
        e.preventDefault();
        mySwiper.slidePrev();
        swiperStop();

    });
	$(document).on('click','.main-visual .swiper-pagination-bullet',function(){
		swiperStop(); 
	});	
     
    $('.main-visual .arrow-right').on('click', function(e){
        e.preventDefault();
        mySwiper.slideNext();
        swiperStop();

    });
    $('.main-visual .stop').on('click', function(e){
        e.preventDefault();
        mySwiper.autoplay.stop();
        $(this).removeClass('on');
        $('.main-visual .start').addClass('on'); 
    });
    $('.main-visual .start').on('click', function(e){
        e.preventDefault();
        mySwiper.autoplay.start();
        $(this).removeClass('on');
        $('.main-visual .stop').addClass('on'); 
    });
    $(document).on('focus','.main-visual .swiper-container .swiper-slide:first-child a', function(e){
        e.preventDefault();
        mySwiper.autoplay.stop();
        $('.main-visual .stop').removeClass('on');
        $('.main-visual .start').addClass('on');
        
    });
    $(document).on('focusout','.main-visual .swiper-container .swiper-slide:last-child a', function(e){
        e.preventDefault();
        mySwiper.slideTo(1);
        mySwiper.update();
        mySwiper.autoplay.start();
        $('.main-visual .start').removeClass('on');
        $('.main-visual .stop').addClass('on');
        
       
    });

    /* 기분좋은 혜택 */
    var $marquee = $('.main-benefit .marquee').marquee({
        allowCss3Support: true,
        css3easing: 'linear',
        easing: 'linear',
        delayBeforeStart: 1000,
        direction: 'left',
        duplicated: true, //복사 여부
        duration: 20000,
        gap: 0,
        startVisible: true
    });

    $('.main-benefit .control .stop').on('click', function(){
        $marquee.marquee('pause');
        $(this).removeClass('on');
        $('.main-benefit .control .start').addClass('on');

        return false;
    });
    $('.main-benefit .control .start').on('click', function(){
        $marquee.marquee('resume');
        $(this).removeClass('on');
        $('.main-benefit .control .stop').addClass('on');

        return false;
    });
/*
    var leafletNum =3;
    if($('.main-leaflet .swiper-slide').size() == 4){
        leafletNum = 4; 
    } 
    /* 이마트 고객이라면 장보기 전 체크*/
/*    
    var leafletSwiper = new Swiper('.main-leaflet .swiper-container',{
        grabCursor: true,
        slidesPerView: leafletNum,
        spaceBetween: 16,
        resizeReInit: true,
        watchActiveIndex: true,
        DOMAnimation: true,
        slidesPerViewFit: true,
        simulateTouch: false,
        onFirstInit: function () {  
            if ($('.main-leaflet .swiper-slide').last().index() < 5) {
                $('.main-leaflet .arrow-left, .main-leaflet .arrow-right').hide();
            }
        }
    }); 
    $('.main-leaflet .arrow-left').on('click', function(e){
        e.preventDefault();
        leafletSwiper.swipePrev();

        if (leafletSwiper.activeIndex > 0) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }

        $('.main-leaflet .arrow-right').addClass('active');
    });
    $('.main-leaflet .arrow-right').on('click', function(e){
        e.preventDefault();
        leafletSwiper.swipeNext();

        var idx = $('.main-leaflet .swiper-slide').last().index() - 4;

        if (leafletSwiper.activeIndex < idx) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }

        $('.main-leaflet .arrow-left').addClass('active');
    });
    $('.main-leaflet .stop').on('click', function(e){
        e.preventDefault();
        leafletSwiper.stopAutoplay();
        $(this).removeClass('on');
        $('.main-leaflet .start').addClass('on');
    });
    $('.main-leaflet .start').on('click', function(e){
        e.preventDefault();
        leafletSwiper.startAutoplay();
        $(this).removeClass('on');
        $('.main-leaflet .stop').addClass('on');
    });
*/
    /* 언제 어디서나 즐거운 콘텐츠 */
    $(".grid").gridalicious({
        gutter: 16,
        width: 296
    });
});