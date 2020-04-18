$(document).ready(function() {
  // all js goes here
  console.log("we loaded");

  let titleClicked = false;
  $("#heading").click(function() {
    if (titleClicked == false) {

      $("heading").html("Best Places to Go");

      titleClicked = true;
    } else if (titleClicked == true) {

      $("#heading").html("Olbrine's Favorite Places to Go");

      titleClicked = false;
    }
  })
  $("#hide").click(function() {
    $("h4").hide();
  });

  $("#show").click(function() {
    $("h4").show();
  });
  $("p").mouseover(function() {
    $("p").css("font-size", "45px");
    $("p").css("background-color", "purple");
  })

  $("p").mouseleave(function() {
    $("p").css("font-size", "40px");
    $("p").css("background-color", "transparent");
  })

  $("h4").mouseover(function() {
    $("h4").css("background-color", "white");
    $("h4").css("font-size", "45px");
  })

  $("h4").mouseleave(function() {
    $("h4").css("background-color", "transparent");
    $("h4").css("font-size", "40px");
  })
})