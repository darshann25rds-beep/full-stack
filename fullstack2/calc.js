let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let result=document.getElementById("result");


function add(){
    result.textContent=`${num1.value} + ${num2.value} = ${parseInt(num1.value)+parseInt(num2.value)}`;
}

function subtract(){
    result.textContent=`${num1.value} - ${num2.value} = ${parseInt(num1.value)-parseInt(num2.value)}`;
}

function multiply(){
    result.textContent=`${num1.value} x ${num2.value} = ${parseInt(num1.value)*parseInt(num2.value)}`;
}

function divide(){
    result.textContent=`${num1.value} / ${num2.value} = ${parseInt(num1.value)/parseInt(num2.value)}`;
}

