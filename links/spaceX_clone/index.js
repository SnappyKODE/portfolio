const bg = document.querySelector(".section");
const menu = document.querySelector(".pop-menu");
const icon = document.querySelector(".nav-links span");

icon.addEventListener("click",function(){
    
    if(icon.innerHTML == "menu"){
        icon.innerHTML="close";
        menu.classList.remove("hide");
        bg.classList.add("shadow");
    }
    else{
        icon.innerHTML="menu";
        menu.classList.add("hide");
        bg.classList.remove("shadow");
    }
    
});