

let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');


let count = 0;


function increment() {
    count = count + 1;
    countEl.innerHTML = count;
}

function decrement() {
    count = count - 1;
    if(count<0)
    count = 0;
    countEl.innerText = count;
}

function save() {
    let saveStr = count + ' - '
    saveEl.textContent += saveStr;

}


