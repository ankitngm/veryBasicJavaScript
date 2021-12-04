

let countEl = document.getElementById('count-el');

console.log(countEl);

let count = 0;
console.log(count);


function increment() {
    count = count + 1;
    countEl.innnerHtml = count;
    console.log(countEl);
}

function decrement() {
    count = count - 1;
    if(count<0)
    count = 0;
    countEl.innnerText = count;
    console.log(countEl);
}




