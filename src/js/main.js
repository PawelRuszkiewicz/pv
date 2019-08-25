"use strict";
// alert('Narazie nie nadaje się jeszcze do oglądania na małych monitorach poniżej 900 px i urz mobilnych, zobacz jak Ci się podoba delikatna zmiana wyglądy strony.   Jeszcze bym trochę pozmniejszał ilość w menu, np. oświetlenie ogrodowe wrzucić do fotowoltaiki- tak jak jest w tym opisie ofertowym na początku ?? informacje pod INSTALACJA ELEKTRYCZNA - wsadził bym pod AUTOMATYKĘ, i tak samo OGRZEWANIE PODŁOGOWE - czyli by na zostało w menu: Automatyka, sterowanie, fotowoltaika,referencje i kontakt, - myślę ze będzie lepiej- jak popatrzysz i przemyślisz temat to daj znać - P. a jeszce jedno mozesz sobie sprawdzić czy jak klikniesz na maila to otworzy ci program pocztowy do wysłania wiadomości.... :)) ten komunikat wyświetli się za kazdym razem jak odswierzysz srtonę w przeglądarce lub klikniesz na swoje logo na górze strony... ' );
const switchMenu = document.querySelector('.mainSwither__js');

switchMenu.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__cont--contUl-js');

    if(navigationList.classList.toggle('navigation__cont--contUl-visible')){
        switchMenu.innerHTML="x";
    }
    else{
        switchMenu.innerHTML="≣";
    };

})