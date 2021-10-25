$(document).ready(function(){
    $("#seeAll").click(function(){
      $(".hiden").css('visibility', 'visible');
    });
  });


// wraps

$(document).ready(function () {
    var docWidth = $("body").width(),
      $wrap = $("#wrap"),
      $images = $("#wrap .hb"),
      slidesWidth = $wrap.width();
  
    $(window).on("resize", function () {
      docWidth = $("body").width();
      slidesWidth = $wrap.width();
    });
  
    $(document).mousemove(function (e) {
      var mouseX = e.pageX,
        offset = (mouseX / docWidth) * slidesWidth - mouseX / 2;
  
      $images.css({
        "-webkit-transform": "translate3d(" + -offset + "px,0,0)",
        transform: "translate3d(" + -offset + "px,0,0)"
      });
    });
});

$(document).ready(function () {
    var docWidth = $("body").width(),
      $wrap = $("#wrap1"),
      $images = $("#wrap1 .hb"),
      slidesWidth = $wrap.width();
  
    $(window).on("resize", function () {
      docWidth = $("body").width();
      slidesWidth = $wrap.width();
    });
  
    $(document).mousemove(function (e) {
      var mouseX = e.pageX,
        offset = (mouseX / docWidth) * slidesWidth - mouseX / 2;
  
      $images.css({
        "-webkit-transform": "translate3d(" + -offset + "px,0,0)",
        transform: "translate3d(" + -offset + "px,0,0)"
      });
    });
});

$(document).ready(function () {
    var docWidth = $("body").width(),
      $wrap = $("#wrap2"),
      $images = $("#wrap2 .hb"),
      slidesWidth = $wrap.width();
  
    $(window).on("resize", function () {
      docWidth = $("body").width();
      slidesWidth = $wrap.width();
    });
  
    $(document).mousemove(function (e) {
      var mouseX = e.pageX,
        offset = (mouseX / docWidth) * slidesWidth - mouseX / 2;
  
      $images.css({
        "-webkit-transform": "translate3d(" + -offset + "px,0,0)",
        transform: "translate3d(" + -offset + "px,0,0)"
      });
    });
});

$(document).ready(function () {
    var docWidth = $("body").width(),
      $wrap = $("#wrap3"),
      $images = $("#wrap3 .hb"),
      slidesWidth = $wrap.width();
  
    $(window).on("resize", function () {
      docWidth = $("body").width();
      slidesWidth = $wrap.width();
    });
  
    $(document).mousemove(function (e) {
      var mouseX = e.pageX,
        offset = (mouseX / docWidth) * slidesWidth - mouseX / 2;
  
      $images.css({
        "-webkit-transform": "translate3d(" + -offset + "px,0,0)",
        transform: "translate3d(" + -offset + "px,0,0)"
      });
    });
  });




// /////////

// see all product

$(document).ready(function(){
  $("#see").click(function(){
    $("#list").show();
    $("#see").hide();
    $("#procards").addClass("col-10");
  });
});

//  ////////////


// jack daniels

$(document).ready(function(){
  $("#seeAll").click(function(){
    $(this).text($(this).text() == 'see all' ? 'Go back' : 'see all');
    $("#hidecard").toggle();
    $(".jackj, #hidecard").addClass("mb-5");
    $(".hiddens").toggle();
    $(".all").css('visibility', 'hidden');
  });
});




  