let save=[];
const txt=document.getElementById("input");
const btn=document.getElementById("btn");
const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
let lis=document.getElementById("list");


btn.addEventListener("click",function(){
    save.push(txt.value);
    txt.value="";
    localStorage.setItem("save",JSON.stringify(save));
    render();
})

btn1.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        save.push(tabs[0].url);
        localStorage.setItem("save",JSON.stringify(save));
        render();
    })
})

btn2.addEventListener("click",function(){
    localStorage.clear();
    save=[];
    render();
})

function render(){
    let listItems="";
    for(let i=0;i<save.length;i++){
        listItems+=`<li><a href="${save[i]}" target="_blank">${save[i]}</a></li>`;
    }
    lis.innerHTML=listItems;
}

let leads=JSON.parse(localStorage.getItem("save"))
if(leads){
    save=leads;
    render();
}
    
