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

// api solar edge

fetch("https://monitoringapi.solaredge.com/site/773805/envBenefits?systemUnits=Metrics&api_key=ETC41O3HJUC3ACS3TJI17ODKEBVM3AI3")
.then(resp => resp.json())
.then(resp =>{
document.querySelector(".co2--js").innerHTML='resp';
console.log(resp);
return resp;
})