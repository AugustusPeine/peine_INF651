//Pin Validator
const pin="4321";
let guess;

do{
    guess = prompt("Enter 4-digit PIN");

    if(guess !== pin){
        alert("Incorrect!");
    }
}while(guess!==pin);
alert("Correct!");