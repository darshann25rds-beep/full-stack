import company from "./stocsfn.js";

let prevprice=null;

const data = company();
updateStock(data);

setInterval(function(){
    const data = company();
    updateStock(data);
},1500);

function updateStock(data) {
    const namee = document.getElementById("name");
    const symboll = document.getElementById("symbol");
    const pricee = document.getElementById("price");
    const timee = document.getElementById("time");
    const icon = document.getElementById("icon");

    const {name, symbol, price, time} = data;

    namee.textContent = name;
    symboll.textContent = symbol;
    pricee.textContent = price;
    timee.textContent = time;

    const currprice=parseFloat(price);
    const pricedir=currprice>prevprice?"📈": currprice<prevprice?"📉":"➡️";
    icon.textContent=pricedir;

    prevprice=currprice;
}

