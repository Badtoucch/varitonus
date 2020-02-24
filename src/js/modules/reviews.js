export default () => {
  $(".reviews-item__btn").on("click", function() {
    $(this)
      .parent()
      .toggleClass("active");
  });
  (function($) {
    $(window).on("load", function() {
      $(".reviews-list").mCustomScrollbar();
    });
  })(jQuery);
  $(".star1").on("click", function() {
    $(this)
      .parent()
      .removeClass("active1 active2 active3 active4 active5")
      .addClass("active1");
  });
  $(".star2").on("click", function() {
    $(this)
      .parent()
      .removeClass("active1 active2 active3 active4 active5")
      .addClass("active2");
  });
  $(".star3").on("click", function() {
    $(this)
      .parent()
      .removeClass("active1 active2 active3 active4 active5")
      .addClass("active3");
  });
  $(".star4").on("click", function() {
    $(this)
      .parent()
      .removeClass("active1 active2 active3 active4 active5")
      .addClass("active4");
  });
  $(".star5").on("click", function() {
    $(this)
      .parent()
      .removeClass("active1 active2 active3 active4 active5")
      .addClass("active5");
  });

  $(".feedback-btn").click(function() {
    var reviewInput1 = $(".input__val-1").val().length,
      reviewInput3 = $(".input__val-3").val().length;
    if (reviewInput1 !== 0 && reviewInput3 !== 0) {
      $(".input__val-1").val("");
      $(".input__val-3").val("");
      $(".feedback-modal").fadeIn();
      setTimeout('$(".feedback").fadeOut(); $(".feedback-modal").fadeOut();', 3000);
    } else {
      alert("Заполните все поля!");
    }
  });
  $(".feedback").fadeOut();
  $(".feedback-modal").fadeOut();
  $(".reviews-btn").click(function() {
    $(".feedback").fadeIn();
  });
};
