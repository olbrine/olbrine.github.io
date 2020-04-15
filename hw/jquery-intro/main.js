$(document).ready(function() {
  // all js goes here
  console.log("we loaded");

  $("p").mouseover(function() {
    $("p").css("font-size", "45px");
    $("p").css("background-color", "purple");
  })
  $("p").mouseleave(function() {
    $("p").css("font-size", "40px")
    $("p").css("background-color", "transparent");
  })

  $("#NOMA").mouseover(function() {
    $("#NOMA").css("backgroud-color", "#4d3219");
  })
})