let his=document.getElementById("history");
let countl=document.getElementById("countl");
let count=0;
function increment(){
    count++;
    countl.innerText=count;
}

function decrement(){
    count--;
    countl.innerText=count;
}

function save(){
    let countstr=count+" - ";
    his.textContent+=countstr;

    count=0;
    countl.innerText=count;
}
