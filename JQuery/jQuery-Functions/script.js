$(document).ready(function () {
  //Click
  $("h1").click(function () {
    alert("Clicked");
  });

  //hide
  $("h1").hide();

  //show
  $("h1").show();

  //toggle
  $("#first").click(function () {
    $("h1").toggle();
  });

  //slideDown
  $("#sec").click(function () {
    $(".div1").slideDown("slow", function () {});
  });

  //slideUp
  $("#third").click(function () {
    $(".div1").slideUp("slow", function () {});
  });

  //slidetoggle
  $("#fourth").click(function () {
    $(".div1").slideToggle("slow", function () {});
  });

  //fadeIn
  $("#fadein").click(function () {
    $(".div2").fadeIn("slow", function () {});
  });

  //fadeOut
  $("#fadeout").click(function () {
    $(".div2").fadeOut("slow", function () {});
  });

  //addClass
  $("p").addClass("omar");

  //Before
  $("h2").before("before");

  //After
  $("h2").after("after");

  //Append
  $("h2").append(" append");

  //Html
  $("h3").html("this is the new text for h3");

  $("img").attr({
    alt: "Hello World img",
    title: "Hello World",
  });

  //Val
  var gendervalue = $("#gender").val();
  $("p").html(" gender: " + gendervalue);

  //Text
  $("h5").text("<b>Some</b> new text.");
});
