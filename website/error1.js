try{
    const dividend = Number(window.prompt("Enter a dividend: "));
const divisor = Number(window.prompt("Enter a divisor: "));
if(divisor == 0){
    throw new Error("You cannot divide with a zero!");
}
if(isNaN(dividend) || isNaN(divisor)){
    throw new Error("The value must be a number!");
}
const result = dividend / divisor;
console.log(`${result.toFixed(2)}`);
}
catch(error){
    console.error(error);9
}
console.log("You reached the end!");