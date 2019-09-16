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
fetch("../assets/response.json")
.then(resp => resp.json())
.then(resp => {
console.log(resp);
 const dataSE = resp;
// for(const dataSE of tables){
 place.innerHTML= `<p> "${Math.round(dataSE.envBenefits.gasEmissionSaved.co2 * 100)/100} kilogramów"</p>`

// <p> "${Math.round(dataSE.envBenefits.lightBulbs * 100)/100} ilosć żarówek "</p>
})
.catch(err =>{
    console.log(err);
})


const dataSEphp = "<?= $tabEmiss ?>";
place.innerHTML= `<p> ${Math.round(dataSEphp.envBenefits.gasEmissionSaved.co2 * 100)/100} KILOgramów</p>`;
console.log(dataSEphp);