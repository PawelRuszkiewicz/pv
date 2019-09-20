"use strict";
const switchMenu = document.querySelector('.mainSwither__js');

switchMenu.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__cont--contUl-js');

    if (navigationList.classList.toggle('navigation__cont--contUl-visible')) {
        switchMenu.innerHTML = '<span style="color: red;">x</span>';
    }
    else {
        switchMenu.innerHTML = "&#9776";
    };

})

// api solar edge saved in assets
const place = document.querySelector(".co2--js");
fetch("assets/response.json")
.then(resp => resp.json())
.then(resp => {
console.log(resp);
 const dataSE = resp;
// for(const dataSE of tables){
 place.innerHTML= `<p> ${Math.round(dataSE.envBenefits.gasEmissionSaved.co2 * 100)/100} kilogramów</p>`


})
.catch(err =>{
    console.log(err);
})
//przewijanie strony
const piecz = document.querySelector('.pieczS');
const komp = document.querySelector('.kompS');

function scroll(){
if(piecz){
    document.getElementById('piecz').scrollIntoView({behavior: 'smooth'});
}


    document.querySelector('#komp').scrollIntoView({behavior: 'smooth'});
}

document.querySelector('.pieczS').addEventListener("click", () =>  {
    scroll();
    console.log('kliknieto przycisk');
})