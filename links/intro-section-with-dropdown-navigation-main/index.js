var c=true;
var v;
$(".burger").click(function(){
    if(c){
        $(".navbar").toggleClass("show");
        $(".burger img").attr("src", "./images/icon-close-menu.svg");
        $(".shadow").toggleClass("hide");
        c=false;
    }
    else{
        $(".navbar").toggleClass("show");
        $(".burger img").attr("src", "./images/icon-menu.svg");
        $(".shadow").toggleClass("hide");
        c=true;
    }
});

$(".arrow").click(function(){
    v=$(this).attr("alt");
    $(this).toggleClass("rotate");
    $("."+v).toggleClass("hide");
});



