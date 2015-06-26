var main = function () {
    "use strict";

    console.log("hello world!");

    var toDos = [
        "Finish reading book.",
        "Take dog to vet.",
        "Wash car.",
        "Buy groceries",
        "Get oil changed"
    ];

    $(".tabs a span").toArray().forEach(function (element) {
        var $element = $(element);

        // create a click handler for this element
        $element.on("click", function () {
            var $element = $(element), $content;
            //make all the tabs inactive
            $(".tabs span").removeClass("active");
            //make the 1st tab active
            $element.addClass("active");
            //empty the main content so we can re-create it
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                console.log("1st tab clicked!")
                $content = $("<ul>");
                var i=0;
                for (i=toDos.length-1; i>=0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
                $("main .content").append($content);
            }
            else if ($element.parent().is(":nth-child(2)")) {
                console.log("2nd child clicked!");
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
                $("main .content").append($content);
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