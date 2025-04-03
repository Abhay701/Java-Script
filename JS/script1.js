var age = 25;
if (age != 26) {
    console.log(age);
}
else {
    console.log("Error!");
}

function solve() {
    var ages = 25;
    console.log(ages);
}

// console.log(ages); // ages is not accessible here, because it is declared in solve function.
solve()

var x = 12;
var x = 15;
// x = 20;
console.log(x)

{
    let a = 10;
    console.log(a)
}

let b = 20
// let b = 21 // re-declaration of let is not possible but updation is possible

b = 28
console.log("b = " + b)

let c = 10
c = "Abhay"
c = true
c = null
console.log(c)

const d = 110
// d = 111 // IN const we can't change it further after declaration first time
console.log(d)