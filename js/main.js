$(function() {
  $(window).scroll(function(){
    var pos = $(window).scrollTop();
    if (200 < pos) {
      $("#page-top").fadeIn("slow");
    } else {
      $("#page-top").fadeOut("slow");
    }
  });

  $("#page-top").click(function(){
    $("html,body").animate({scrollTop : 0}, 1000);
  });
});