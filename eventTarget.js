
//const number = prompt('How many squares would you like to have on-screen?' )
const inp = document.querySelector('input')
inp.onchange = function () {
    const kk = inp.value;

for(let i = 1; i <= kk ; i++) {
    const myDiv = document.createElement('div');
    document.body.appendChild(myDiv);
}

function random(number) {
    return Math.floor(Math.random() * number);
}

function bgChange() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    return rndCol;
}

const divs = document.querySelectorAll('div');

for(let i = 0; i < divs.length; i++) {
    divs[i].onclick = function(e) {
        e.target.style.backgroundColor = bgChange();
    }
}
}