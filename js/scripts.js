$(function() {
  $(".clickable").click(function() {
    $(".initially-showing").toggle();
    $(".initially-hidden").toggle();
  });

  $("button#purple").click(function(){
    $("body").removeClass();
    $("body").addClass("purple-background");
  });

  $("button#green").click(function(){
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#white").click(function(){
    $("body").removeClass();
    $("body").addClass("white-background");
  });
});
