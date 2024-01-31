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
    position = 0;
    $(".button_01").on("click", function(){
        position++;
        if(position % 2 ==1) {
            $(".box_01").animate({
                scale: "1.2"
            }, 1000, "swing")
        } else {
            $(".box_01").animate({
                scale:"1"
            }, 1000, "swing")
        }
    })
})