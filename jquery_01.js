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

$(function(){
    $(".menu li").on("mouseenter", function(e){
        e.preventDefault();
        $(".menu li").find("div").css({
            "display": "none"
        })
        $(this).css({
            "backgroundColor":"#ff0"
        })
        $(this).children().css({
            "display":"block"
        })
        $(this).children().animate({
            "top":"50px",
            "backgroundColor":"red"
        }, 300)
    })
    $(".menu li").on("mouseleave", function(e){
        e.preventDefault();
        $(this).children().css({
            "backgroundColor":"pink",
            "color":"#333"
        })
        $(this).find("div").css({
            "display":"none",
            "top":"-200px"
        })
    })
    
})
