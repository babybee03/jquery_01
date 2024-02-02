$(function(){
    var i = 0;
    $(".click").on("click", function(){
        i++;
        if(i % 2 == 1) {
            $(".wrap").animate({
                "left" : "1200px"
            },1200)
        } else {
            $(".wrap").animate({
                "left" : "1450px"
            },1200)
        }
    })

    $(".main").on("click", function(){
        $(".wrap").animate({
            "left" : "1450px"
        },1200)
        i = 0;
    })
})