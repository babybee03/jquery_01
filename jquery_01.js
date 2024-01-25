/*
$(function(){
        var obj = [
                {"area" : "서울"},
                {"area" : "부산"},
                {"area" : "전주"}
        ];
        $(obj).each(function(i, object){
                console.log(i);
                console.log(object)
        });
        console.log("====The End 1 ====");
        
})
*/

$(function(){
        var duration = 500;
        /*button 1행*/
        $('#button_all button:nth-child(-n+4)')
        .on('mouseover',function(){
                $(this).stop(true).animate({
                        backgroundColor: "#ae5e9b",
                        color: '#fff'
                }, duration);
        })
        .on('mouseout', function(){
                $(this).stop(true).animate({
                        backgroundColor: "#fff",
                        color: '#ebc000'
                }, duration);
        });

         /*button 2행*/
         $('#button_all button:nth-child(n+5):nth-child(-n+8)')
         .on('mouseover',function(){
                 $(this).stop(true).animate({
                        borderWidth: '10px',
                        lineHeight: '60px',
                         color: '#ae5e9b'
                 }, duration);
         })
         .on('mouseout', function(){
                 $(this).stop(true).animate({
                        borderWidth: '0px',
                         color: '#ebc000'
                 }, duration);
         })

          /*button 3행*/
          $('#button_all button:nth-child(n+9)')
          .on('mouseover',function(){
                  $(this).stop(true).animate({
                        'width': '300px',
                        'backgroundColor': '#333',
                        'color': '#ddd'
                  }, duration);
          })
          .on('mouseout', function(){
                  $(this).stop(true).animate({
                        'width': '200px',
                        'backgroundColor': '#fff',
                        'color': '#333'
                  }, duration);
          })
})