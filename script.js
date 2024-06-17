'use strict'

let inputDes = document.querySelector(".input-desc");


inputDes.addEventListener("keyup", function(){
    let text = inputDes.value;

    if(text != ''){
        inputDes.classList.remove("desc");
    }else{
        inputDes.classList.add("desc");
    }
});

const navBar = document.querySelector(".btn-mobile-nav");

navBar.addEventListener("click", function(){
    document.querySelector(".header").classList.toggle("nav-open");
    
})
