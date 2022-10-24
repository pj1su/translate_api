
/** 버튼 클릭 시 전체메뉴 펼치기 **/
$('.menu_btn').click(function() {
	$(this).toggleClass('off');
		if($(this).hasClass('off')) {
			$('.menu_wrap').stop(true, false).fadeIn(300);
			$('.logo').addClass( 'on' );
		}else {
			$('.menu_wrap').stop(true, false).fadeOut(300);
			$('.logo').removeClass( 'on' );
		}
	return false;
});
/*************************/



$(document).ready(function () {



  var swiper = new Swiper(".swiper-container", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    speed: 500,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      init: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("animate");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionEnd: function () {
        $(".swiper-progress-bar").eq(0).addClass("animate");
      }
    }
  });
  $(".swiper-container").hover(function () {
    swiper.autoplay.stop();
    $(".swiper-progress-bar").removeClass("animate");
  }, function () {
    swiper.autoplay.start();
    $(".swiper-progress-bar").addClass("animate");
  });
});







