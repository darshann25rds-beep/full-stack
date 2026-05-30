let cards = [getrandom(), getrandom()];

let sum = cards[0] + cards[1];

let hasBlackJack = false;
let isAlive = true;

let message = "";

let earnedel = document.getElementById("earned");
earned=0;

function startGame(){

    if(sum < 21){
        message = "Do you want to draw a new card?";
    } 
    else if(sum === 21){
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
        earned+=100;
    } 
    else{
        message = "You're out of the game!";
        isAlive = false;
        earned-=50;
    }
    earnedel.textContent = "Earned: $" + earned;
    document.getElementById("message").textContent = message;
    document.getElementById("sum").textContent = "Sum: " + sum;
    document.getElementById("cards").textContent = "Cards: " + cards.join(" ");
}

function getrandom(){
    let randomnumber = Math.floor(Math.random() * 13) + 1;
    if(randomnumber > 10){
        return 10;
    }
    if(randomnumber === 1){
        return 11;
    }
    else{
        return randomnumber;
    }
}

function newCard(){
    if(isAlive==true && hasBlackJack==false){
        let newcard=getrandom();
        sum+=newcard;
        cards.push(newcard);
        startGame();
    }
}