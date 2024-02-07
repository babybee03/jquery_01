/*
$(function(){
    photo_all = $(".photo_all");
    photo_all_list = $(".photo_all > div");
    dot_all = $(".dot_all");
    dot_all_list = $(".dot_all > div");
    timer = null;

    function var_set() {
        photo_width = $(".photo").width();
        index_now = $(".dot_all > div.open").index();
        dot_count = dot_all_list.length;
    }

    function dot_click() {
        $(".dot_all > div").on("click", function(){
            index_now = $(this).index();
            slide_move();
        })
    }

    function slide_move() {
        $(".photo_all").animate({
            left: -(photo_width * index_now)
        }, 2000, "swing")

        dot_all_list.removeClass("open");
        dot_all_list.eq(index_now).addClass("open");
    }

    $(".prev").on("click", function(){
        prev_move();
    })
    function prev_move() {
        if(index_now == 0) {
            index_now = dot_count -1;
        } else {
            index_now--;
        }
        slide_move();
    }
    $(".next").on("click", function(){
        next_move();
    })

    function next_move() {
        if(index_now == dot_count -1) {
            index_now = 0;
        } else {
            index_now++;
        }
        slide_move();
    }
    function start_timer() {
        timer = setInterval(next_move, 3000);
    }
    function stop_timer() {
        clearInterval(timer);
    }
    $(".photo_wrap").hover(stop_timer, start_timer);
    var_set();
    dot_click();
    start_timer();
})
*/
$(function(){
    photo_all = $(".photo_all");
    photo_all_list = $(".photo_all > div");
    timer = null;

    function var_set() {
        photo_width = $(".photo").width();
        index_now = 0;
        photo_count = photo_all_list.length;
    }

    function slide_move() {
        $(".photo_all").animate({
            left: -(photo_width * index_now)
        }, 2000, "swing")
    }
    function next_move() {
        if(index_now == photo_count -1) {
            index_now = 0;
        } else {
            index_now++;
        }
        slide_move();
    }
    function start_timer() {
        timer = setInterval(next_move, 3000);
    }
    var_set();
    start_timer();
})