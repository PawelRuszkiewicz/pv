"use strict";
const switchMenu = document.querySelector('.mainSwither__js');

switchMenu.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__cont--contUl-js');

    if(navigationList.classList.toggle('navigation__cont--contUl-visible')){
        switchMenu.innerHTML='<span style="color: red;">x</span>';
    }
    else{
        switchMenu.innerHTML="&#9776";
    };

})
// obsluga submenu po klik, rozwijane menu
const menuMain = document.querySelectorAll('.navigation__cont--item--a');

menuMain.addEventListener('click', (e) =>{
    const menuSub = document.querySelectorAll('.submenu');
     menuSub.classList.toggle('submenu-js');

})