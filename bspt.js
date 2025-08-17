console.log('Welcome to age predictor');
let a = prompt('Enter a age');
if (a > 21 && a > 9) {
    console.log("Your age is between 10 to 20");
}
else if (a < 0) {
    console.log("Enter a valid age");
}
else{
    console.log("You age is not in the range of 10 to 20");
}
BigInt(a)
console.log(typeof(a))