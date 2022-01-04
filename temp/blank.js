

document.getElementById("para1").innerText = "javascript changed this paragraph's content";

let h1 = document.createElement('h1');
document.getElementById("div1").appendChild(h1);
h1.innerHTML = "hello <span>world</span>";

function test(){
    document.write("hello again");
}

test();

let test1 = () => document.write("<br>hello from arrow function")

test1()