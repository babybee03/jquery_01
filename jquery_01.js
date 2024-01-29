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
    $("#user_id_1, #user_pw_1").on("focus", function(){
        $(this).css({
            "background-color":"pink"
        })
    })
    $("#user_id_1, #user_pw_1").on("blur", function(){
        $(this).css({
            "background-color":"#ff0"
        })
    })
    $("frm_2").on("focusin", function(){
        43p 하자
    })
})