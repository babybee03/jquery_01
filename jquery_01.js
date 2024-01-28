$(function(){
    var obj = [
        {"area":"서울"},
        {"area":"부산"},
        {"area":"전주"}
    ];
    $("#menu2 li").each(function(i, object){
        console.log(i);
        console.log(object);
    })

    $.each(obj, function(i, object) {
        console.log(i + ":", object);
    })

    console.log("====The End====")
})

console.log("====The End 2====")