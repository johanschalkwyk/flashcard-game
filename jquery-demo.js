var $ = require('jquery');
var console = require('console');

// create a callback that executes onces the document is ready
$(document).ready(function() {

    // for each click on a paragraph element in the dom, hide it
    //  # for id
    //  . for class
    //  * for All
    //  p for paragraphs
    $("#clickme").click(function() {
        $("p").toggle(500);
    });

    $("#clickme").dblclick(function() {
        $("p").hide(500);
    });

    // fade
    $("#boxme").click(function() {
      $("#div1").fadeIn();
      $("#div2").fadeIn("slow");
      $("#div3").fadeIn(3000);
    });

    // slide Up, Down, Toggle
    $("#flip").click(function() {
      $("#panel").slideToggle("slow");
    });

    // attach multiple event handlers with .on()
    $("p").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(this).css("background-color", "lightblue");
        },
        click: function(){
            $(this).css("background-color", "yellow");
        }
    });

    // animate properties of a div
    // each animate is queued and then executed
    // Use a callback to execute after last animation
    // Chain actions with .function().function()
    $("#animate").click(function() {
      console.log("animating");
      var div = $("#animatediv");
      div.animate({height: '300px', opacity: '0.4'}, "slow")
         .animate({width: '300px', opacity: '0.8'}, "slow")
         .animate({height: '100px', opacity: '0.4'}, "slow")
         .animate({width: '100px', opacity: '0.8'}, "slow", function() {
           alert("The animation is now complete");
         });
    });
});
