
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


