//Multiplication Table with Skips
let multiplier = parseInt(prompt("Enter a number to multiply"));
for(let i = 1; i<11; i++){
    product = multiplier * i;

    if (product % 5 ===0){
        continue;
    }

    console.log(`${multiplier} x ${i} = ${product}`);
}