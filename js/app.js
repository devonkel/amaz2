var main = function () {
    "use strict";

    console.log("hello world!");

    $(".tabs a span").toArray().forEach(function (element) {
        var $element = $(element);

        // create a click handler for this element
        $element.on("click", function () {
            //make all the tabs inactive
            $(".tabs span").removeClass("active");
            //make the 1st tab active
            $element.addClass("active");
            //empty the main content so we can re-create it
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                console.log("1st tab clicked!")
            }
            else if ($element.parent().is(":nth-child(2)")) {
                console.log("2nd child clicked!");
            }
            else if ($element.parent().is(":nth-child(3)")) {
                console.log("3rd child clicked!");
            }
            else {
                console.log("Something bad happened in the .tabs onClick event")
            }

            //return false so we don't follow the link
            return false;
        });
    });    
};

$(document).ready(main);