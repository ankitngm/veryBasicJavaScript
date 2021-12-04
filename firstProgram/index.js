

let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');


console.log(countEl);

let count = 0;

console.log(count)


function increment() {
    count = count + 1;
    countEl.textContent = count;
    console.log(countEl);
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


