$(function(){
        $(window).scroll(function(){
                var scroll_height = $(window).scrollTop();
                console.log(scroll_height);

                if(scroll_height >= 400) {
                        $("#box_02").animate({
                                "left" : "0",
                                "opacity" : "1"
                        }, 1000)
                }
                if(scroll_height >= 1000) {
                        $("#box_03").animate({
                                "left" : "0",
                                "opacity" : "1"
                        }, 1000)
                }
                if(scroll_height >= 1400) {
                        $("#box_04").animate({
                                "left" : "0",
                                "opacity" : 1
                        }, 1000)
                }
                if(scroll_height >= 2000) {
                        $("#box_05").animate({
                                "left":"0",
                                "opacity": 1
                        },1000)
                }
        })
})