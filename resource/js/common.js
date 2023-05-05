(function() {
  $(document).ready(function() {
    var menuArray, swiper, swiper2, swiper3, swiper4, swiper5, swiper6;
    menuArray = ['진단 목적', '건물 외벽 진단 안내', '관련 법령 & 규칙', '진단 사례', '시공 후기'];
    swiper = new Swiper(".mySwiper1", {
      // effect: 'flip',
      spaceBetween: 50,
      touchRatio: 0,
      keyboard: {
        enabled: true
      }
    });
    $('.home-btn').click(function() {
      return swiper.slideTo(0);
    });
    $('.navigation-btn1').click(function() {
      swiper.slideTo(1);
      return swiper2.slideTo(0);
    });
    $('.navigation-btn2').click(function() {
      return swiper.slideTo(2);
    });
    $('.navigation-btn3').click(function() {
      return swiper.slideTo(3);
    });
    $('.navigation-btn4').click(function() {
      return swiper.slideTo(4);
    });
    $('.navigation-btn5').click(function() {
      swiper3.slideTo(0);
      return swiper.slideTo(5);
    });
    swiper2 = new Swiper(".mySwiper2", {
      direction: "vertical",
      keyboard: {
        enabled: true
      }
    });
    swiper3 = new Swiper(".mySwiper3", {
      direction: "vertical",
      keyboard: {
        enabled: true
      }
    });
    swiper4 = new Swiper(".mySwiper4", {
      direction: "vertical",
      keyboard: {
        enabled: true
      }
    });
    swiper5 = new Swiper(".mySwiper5", {
      direction: "vertical",
      keyboard: {
        enabled: true
      }
    });
    swiper6 = new Swiper(".mySwiper6", {
      direction: "vertical",
      keyboard: {
        enabled: true
      }
    });
    $(document).on('click', '.navigation-down', function() {
      $('.navigation-btn-box2').animate({
        bottom: '-=50px'
      });
      $('.navigation-down').animate({
        bottom: '-=50px'
      });
      $(this).removeClass();
      return $(this).addClass('navigation-up');
    });
    $(document).on('click', '.navigation-up', function() {
      $('.navigation-btn-box2').animate({
        bottom: '+=50px'
      });
      $('.navigation-up').animate({
        bottom: '+=50px'
      });
      $(this).removeClass();
      return $(this).addClass('navigation-down');
    });
    $(document).on('touchstart', '.swiper', function() {
      return $('.navigation-down').click();
    });
    $('.popup-closebtn').click(function() {
      $('.popup').fadeOut(300);
      return $('.popup-background').fadeOut(300);
    });
    $('.introbtn').click(function() {
      $('.intro-popup').fadeIn(300);
      return $('.popup-background').fadeIn(300);
    });
    $('.programintrobtn').click(function() {
      $('.program-intro-popup').fadeIn(300);
      return $('.popup-background').fadeIn(300);
    });
    $('.step-1-btn').click(function() {
      $('.step-1').fadeIn(300);
      return $('.popup-background').fadeIn(300);
    });
    $('.step-2-btn').click(function() {
      $('.step-2').fadeIn(300);
      return $('.popup-background').fadeIn(300);
    });
    $('.step-3-btn').click(function() {
      $('.step-3').fadeIn(300);
      return $('.popup-background').fadeIn(300);
    });
    $('.step-4-btn').click(function() {
      $('.step-4').fadeIn(300);
      return $('.popup-background').fadeIn(300);
    });
    $('.step-5-btn').click(function() {
      $('.step-5').fadeIn(300);
      return $('.popup-background').fadeIn(300);
    });
    $('.pdf-closebtn').click(function() {
      $('.pdf-viewr-box').fadeOut(100);
      return $('.popup-background').fadeOut(300);
    });
    $('.slide1-step1').click(function() {
      return $('.slide1-step1-popup').fadeIn(300);
    });
    $('.slide1-step2').click(function() {
      return $('.slide1-step2-popup').fadeIn(300);
    });
    $('.slide1-step3').click(function() {
      return $('.slide1-step3-popup').fadeIn(300);
    });
    $('.pdf-btn').click(function() {
      if ($(this).data('path')) {
        $('.pdf-viewr').attr('src', $(this).data('path'));
        $('.pdf-viewr-box').fadeIn(100);
        return $('.popup-background').fadeIn(300);
      }
    });
    $('.ex-btn1').click(function() {
      swiper4.slideTo(0);
      $('.ex-popup1').fadeIn(300);
      return $('.popup-background').fadeIn(300);
    });
    $('.ex-btn2').click(function() {
      swiper5.slideTo(0);
      $('.ex-popup2').fadeIn(300);
      return $('.popup-background').fadeIn(300);
    });
    $('.ex-btn3').click(function() {
      swiper6.slideTo(0);
      $('.ex-popup3').fadeIn(300);
      return $('.popup-background').fadeIn(300);
    });
    return $('.popup-close-box').click(function() {
      $('.ex-popup').fadeOut(300);
      return $('.popup-background').fadeOut(300);
    });
  });

}).call(this);


//# sourceMappingURL=common.js.map
//# sourceURL=coffeescript