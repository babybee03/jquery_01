/*
$(function(){
    $(".btn1").on("click",function(e) {
        e.preventDefault();
        $(".txt1")
        .css({"background-color":"#ff0"});
    });
    $(".btn2").on("click",function(e) {
        e.preventDefault();
        $(".txt2")
        .css({"background-color":"#0ff"});
    });
    $(".btn3").on("dblclick",function(e) {
        e.preventDefault();
        $(".txt3")
        .css({"background-color":"#0f0"});
    });
})

*/
/*
$(function(){
    var i = 0;
    $(".button").on("click", function(){
        i++;
        if(i % 2 == 1) {
            $(".menu_all").animate({
                "top":"0",
                "left":  "370px"
            },1000)
        } else {
            $(".menu_all").animate({
                "top": "0",
                "left": "520px"
            },1000)
        }
    })

    $("img").on("click",function(){
        $(".menu_all").animate({
            "top": "0",
            "left": "520px"
        },1000)
        i = 0;
    })
})
*/
$(function(){
    $(window).on("scroll", function(){
        $(".layout_01").each(function(){
            var location_01 = $(window).scrollTop() + $(window).height();
            var location_02 = $(this).offset().top + ($(this).height()/2);

            if(location_01 > location_02) {
                $("#box_01_left").animate({
                  "left"   : "0",
                  "opacity" : "1"
                }, 2000)

                $("#box_01_right").animate({
                    "left": "500px",
                    "opacity":"1"
                }, 2000)
            }
        })
    })
})

$(function(){
    $(window).on("scroll", function(){
        $(".layout_02").each(function(){
            var location_03 = $(window).scrollTop() + $(window).height();
            var location_04 = $(this).offset().top + ($(this).height()/2);

            if(location_03 > location_04) {
                $("#box_02_left").animate({
                    "top":"0",
                    "opacity": "1"
                },2000)
                $("#box_02_right").animate({
                    "top": "100px",
                    "opacity":"1"
                },2000)
            }
        })
    })
})