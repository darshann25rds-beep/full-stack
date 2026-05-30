let Passwordr = document.getElementById("confirm");
let Passwordn = document.getElementById("new");
let result = document.getElementById("result");

let ele=[
"A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z",

"a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z",

"0","1","2","3","4","5","6","7","8","9",

"!","@","#","$","%","^","&","*","(",")",
"_","+","-","=","[","]","{","}",";",":",
"'","\"","\\","|",",",".","<",">","/","?"
];

function generate(){
    let msg1 = "";
    for(let i=0; i<8; i++){
        let idx = Math.floor(Math.random() * ele.length);
        msg1 += ele[idx];
    }
    return msg1;
}

function generatePassword(){
    document.getElementById("hidden").style.display = "block";

    document.getElementById("pass1").textContent = generate();

    document.getElementById("pass2").textContent = generate();

    document.getElementById("pass3").textContent = generate();

    document.getElementById("pass4").textContent = generate();

    document.getElementById("pass5").textContent = generate();
}

function checkPassword(){
    if(Passwordn.value === Passwordr.value){
        result.textContent = "Password updated successfully!";
    }
    else{
        result.textContent = "Passwords do not match. Please try again.";
    }
}