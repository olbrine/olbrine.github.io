$(document).ready(function() {
  // all js goes here
  console.log("we loaded");

  $("#button1").click(function() {
    $("#title").css("color", "pink");
    // $("#title").css("font-size", "500px");
    $("#title").addClass("big-text");
  })

  $("#button2").click(function() {
    $("#title").css("color", "MediumSpringGreen");
    $("#title").removeClass("big-text");

  })

  $("p").mouseover(function() {
    $("p").css("font-size", "21px");

  })

  $("p").mouseleave(function() {
    // $("p").css("background-color", "pink");
    // $("p").css("font-size", "16px")

  })

  // $("#title").css("color", "MediumSpringGreen");
  // $("#title").css("font-size", "95px");



})