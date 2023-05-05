$(document).ready ->
  menuArray = ['진단 목적', '건물 외벽 진단 안내', '관련 법령 & 규칙', '진단 사례', '시공 후기']

  swiper = new Swiper ".mySwiper1", {
    # effect: 'flip',
    spaceBetween: 50,
    touchRatio: 0,
    keyboard: {
      enabled: true,
    }
  }

  $('.home-btn').click ->
    swiper.slideTo(0);

  $('.navigation-btn1').click ->
    swiper.slideTo(1);
    swiper2.slideTo(0);
  
  $('.navigation-btn2').click ->
    swiper.slideTo(2);

  $('.navigation-btn3').click ->
    swiper.slideTo(3);

  $('.navigation-btn4').click ->
    swiper.slideTo(4);

  $('.navigation-btn5').click ->
    swiper3.slideTo(0);
    swiper.slideTo(5);

  swiper2 = new Swiper ".mySwiper2", {
    direction: "vertical",
    keyboard: {
      enabled: true,
    }
  }

  swiper3 = new Swiper ".mySwiper3", {
    direction: "vertical",
    keyboard: {
      enabled: true,
    }
  }

  swiper4 = new Swiper ".mySwiper4", {
    direction: "vertical",
    keyboard: {
      enabled: true,
    }
  }

  swiper5 = new Swiper ".mySwiper5", {
    direction: "vertical",
    keyboard: {
      enabled: true,
    }
  }

  swiper6 = new Swiper ".mySwiper6", {
    direction: "vertical",
    keyboard: {
      enabled: true,
    }
  }

  $(document).on 'click', '.navigation-down', ->
    $('.navigation-btn-box2').animate ({
      bottom: '-=50px'
    })
    $('.navigation-down').animate ({
      bottom: '-=50px'    
    })
    $(this).removeClass()
    $(this).addClass 'navigation-up'

  $(document).on 'click', '.navigation-up', ->
    $('.navigation-btn-box2').animate ({
      bottom: '+=50px'
    })
    $('.navigation-up').animate ({
      bottom: '+=50px'    
    })
    $(this).removeClass()
    $(this).addClass 'navigation-down'

  $(document).on 'touchstart', '.swiper', ->
    $('.navigation-down').click()

  $('.popup-closebtn').click ->
    $('.popup').fadeOut(300)
    $('.popup-background').fadeOut(300)

  $('.introbtn').click ->
    $('.intro-popup').fadeIn(300)
    $('.popup-background').fadeIn(300)

  $('.programintrobtn').click ->
    $('.program-intro-popup').fadeIn(300)
    $('.popup-background').fadeIn(300)

  $('.step-1-btn').click ->
    $('.step-1').fadeIn(300)
    $('.popup-background').fadeIn(300)

  $('.step-2-btn').click ->
    $('.step-2').fadeIn(300)
    $('.popup-background').fadeIn(300)

  $('.step-3-btn').click ->
    $('.step-3').fadeIn(300)
    $('.popup-background').fadeIn(300)

  $('.step-4-btn').click ->
    $('.step-4').fadeIn(300)
    $('.popup-background').fadeIn(300)

  $('.step-5-btn').click ->
    $('.step-5').fadeIn(300)
    $('.popup-background').fadeIn(300)

  $('.pdf-closebtn').click ->
    $('.pdf-viewr-box').fadeOut(100)
    $('.popup-background').fadeOut(300)

  $('.slide1-step1').click ->
    $('.slide1-step1-popup').fadeIn(300)
  
  $('.slide1-step2').click ->
    $('.slide1-step2-popup').fadeIn(300)

  $('.slide1-step3').click ->
    $('.slide1-step3-popup').fadeIn(300)

  $('.pdf-btn').click ->
    if $(this).data('path')
      $('.pdf-viewr').attr 'src', $(this).data 'path'
      $('.pdf-viewr-box').fadeIn(100)
      $('.popup-background').fadeIn(300)

  $('.ex-btn1').click ->
    swiper4.slideTo(0);
    $('.ex-popup1').fadeIn(300);
    $('.popup-background').fadeIn(300)

  $('.ex-btn2').click ->
    swiper5.slideTo(0);
    $('.ex-popup2').fadeIn(300);
    $('.popup-background').fadeIn(300)

  $('.ex-btn3').click ->
    swiper6.slideTo(0);
    $('.ex-popup3').fadeIn(300);
    $('.popup-background').fadeIn(300)

  $('.popup-close-box').click ->
    $('.ex-popup').fadeOut(300);
    $('.popup-background').fadeOut(300)