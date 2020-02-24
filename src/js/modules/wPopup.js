export default () => {
    $(window).on("scroll load", function () {	
      if (($(window).scrollTop() > $('.unique').offset().top) && ($(window).scrollTop() < $('.fakes').offset().top)) {
				$(".wPopup").fadeIn();
				$('.promo__pay').css({"bottom":  $(".wPopup").outerHeight()});
      } else {
				$(".wPopup").fadeOut();
				$('.promo__pay').css({"bottom":  0});
      }
    });
};
