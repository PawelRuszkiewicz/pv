!function(e){var n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(a,i,function(n){return e[n]}.bind(null,i));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n// alert('Narazie nie nadaje się jeszcze do oglądania na małych monitorach poniżej 900 px i urz mobilnych, zobacz jak Ci się podoba delikatna zmiana wyglądy strony.   Jeszcze bym trochę pozmniejszał ilość w menu, np. oświetlenie ogrodowe wrzucić do fotowoltaiki- tak jak jest w tym opisie ofertowym na początku ?? informacje pod INSTALACJA ELEKTRYCZNA - wsadził bym pod AUTOMATYKĘ, i tak samo OGRZEWANIE PODŁOGOWE - czyli by na zostało w menu: Automatyka, sterowanie, fotowoltaika,referencje i kontakt, - myślę ze będzie lepiej- jak popatrzysz i przemyślisz temat to daj znać - P. a jeszce jedno mozesz sobie sprawdzić czy jak klikniesz na maila to otworzy ci program pocztowy do wysłania wiadomości.... :)) ten komunikat wyświetli się za kazdym razem jak odswierzysz srtonę w przeglądarce lub klikniesz na swoje logo na górze strony... ' );\nconst switchMenu = document.querySelector('.mainSwither__js');\n\nswitchMenu.addEventListener('click', (e) => {\n    const navigationList = document.querySelector('.navigation__cont--contUl-js');\n\n    if(navigationList.classList.toggle('navigation__cont--contUl-visible')){\n        switchMenu.innerHTML=\"x\";\n    }\n    else{\n        switchMenu.innerHTML=\"≣\";\n    };\n\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vIGFsZXJ0KCdOYXJhemllIG5pZSBuYWRhamUgc2nEmSBqZXN6Y3plIGRvIG9nbMSFZGFuaWEgbmEgbWHFgnljaCBtb25pdG9yYWNoIHBvbmnFvGVqIDkwMCBweCBpIHVyeiBtb2JpbG55Y2gsIHpvYmFjeiBqYWsgQ2kgc2nEmSBwb2RvYmEgZGVsaWthdG5hIHptaWFuYSB3eWdsxIVkeSBzdHJvbnkuICAgSmVzemN6ZSBieW0gdHJvY2jEmSBwb3ptbmllanN6YcWCIGlsb8WbxIcgdyBtZW51LCBucC4gb8Wbd2lldGxlbmllIG9ncm9kb3dlIHdyenVjacSHIGRvIGZvdG93b2x0YWlraS0gdGFrIGphayBqZXN0IHcgdHltIG9waXNpZSBvZmVydG93eW0gbmEgcG9jesSFdGt1ID8/IGluZm9ybWFjamUgcG9kIElOU1RBTEFDSkEgRUxFS1RSWUNaTkEgLSB3c2FkemnFgiBieW0gcG9kIEFVVE9NQVRZS8SYLCBpIHRhayBzYW1vIE9HUlpFV0FOSUUgUE9ExYFPR09XRSAtIGN6eWxpIGJ5IG5hIHpvc3RhxYJvIHcgbWVudTogQXV0b21hdHlrYSwgc3Rlcm93YW5pZSwgZm90b3dvbHRhaWthLHJlZmVyZW5jamUgaSBrb250YWt0LCAtIG15xZtsxJkgemUgYsSZZHppZSBsZXBpZWotIGphayBwb3BhdHJ6eXN6IGkgcHJ6ZW15xZtsaXN6IHRlbWF0IHRvIGRhaiB6bmHEhyAtIFAuIGEgamVzemNlIGplZG5vIG1vemVzeiBzb2JpZSBzcHJhd2R6acSHIGN6eSBqYWsga2xpa25pZXN6IG5hIG1haWxhIHRvIG90d29yenkgY2kgcHJvZ3JhbSBwb2N6dG93eSBkbyB3eXPFgmFuaWEgd2lhZG9tb8WbY2kuLi4uIDopKSB0ZW4ga29tdW5pa2F0IHd5xZt3aWV0bGkgc2nEmSB6YSBrYXpkeW0gcmF6ZW0gamFrIG9kc3dpZXJ6eXN6IHNydG9uxJkgdyBwcnplZ2zEhWRhcmNlIGx1YiBrbGlrbmllc3ogbmEgc3dvamUgbG9nbyBuYSBnw7NyemUgc3Ryb255Li4uICcgKTtcbmNvbnN0IHN3aXRjaE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpblN3aXRoZXJfX2pzJyk7XG5cbnN3aXRjaE1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IG5hdmlnYXRpb25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX2NvbnQtLWNvbnRVbC1qcycpO1xuXG4gICAgaWYobmF2aWdhdGlvbkxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2aWdhdGlvbl9fY29udC0tY29udFVsLXZpc2libGUnKSl7XG4gICAgICAgIHN3aXRjaE1lbnUuaW5uZXJIVE1MPVwieFwiO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBzd2l0Y2hNZW51LmlubmVySFRNTD1cIuKJo1wiO1xuICAgIH07XG5cbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);