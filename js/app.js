let open = document.querySelector(".burger-btn");
let close = document.querySelector(".menu__close-icon")
let menu = document.querySelector(".menu");
/*
let burgerMenu = function(){
    if(menu.classList.contains("showMenu")){
        menu.classList.remove("showMenu");
    } else{
        menu.classList.add("showMenu")
    }
}*/

open.addEventListener("click", function(){
    menu.classList.add("showMenu");
})
close.addEventListener("click", function(){
    menu.classList.remove("showMenu");
})


let burger = document.querySelector(".menuBtn")
let burgerMenu = document.querySelector(".dropMenu")

let dropMenu = function (){
    if(burgerMenu.classList.contains("showDrop")){
        burgerMenu.classList.remove("showDrop")
    } else{
        burgerMenu.classList.add("showDrop")
    }
};

burger.addEventListener("click", dropMenu);