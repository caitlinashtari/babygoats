$(function() {
  $(".clickable").click(function() {
    $(".initially-showing").fadeToggle();
    $(".initially-hidden").fadeToggle();
    $("body").addClass("purple-background");
  });
});
