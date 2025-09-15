//Positive/Negative Number Checker
let num = parseInt(prompt("Enter a number that is positive, negative, or zero"));
if (num < 0){
    alert("The number is negative.");
}
else if (num > 0){
    alert("The number is positive.");
}
else{
    alert("The number is 0.");
}