'use strict'
let par;
par = document.querySelector('p');

function hide() {
    par.classList.toggle('shadow');
}

par.onclick = hide;