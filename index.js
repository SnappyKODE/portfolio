let nav_items = $(".navbar a");
let effect_hover = $(".blur");
let bar = $(".bar");
let c=0;
nav_items.click(function(){
    $(this).addClass("cc");
    nav_items.not(this).removeClass("cc");
    bar.text("menu");
    $(".navbar").addClass("hide_menu");
    $("#home,#skill,#project").removeClass("shadow");
    c=0;
})

effect_hover.mouseover(function(){
    $(this).removeClass("hide");

})

effect_hover.mouseleave(function(){
    $(this).addClass("hide");
})

bar.click(function(){
    if(c==0){
        bar.text("close");
        $(".navbar").removeClass("hide_menu");
        $("#home,#skill,#project").addClass("shadow");
        c=1;
    }
    else{
        bar.text("menu");
        $(".navbar").addClass("hide_menu");
        $("#home,#skill,#project").removeClass("shadow");
        c=0;
    }
    
})