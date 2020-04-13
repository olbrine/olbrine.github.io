$(document).ready(function() {
  // all js goes here
  console.log("we loaded");

  $("p").mouseover(function() {
    $("p").css("font-size", "37px");
    $("p").css("background-color", "white");

  })
  $("p").mouseleave(function() {
    $("p").css("font-size", "30px")
    $("p").removeClass("background-color");
  })

})