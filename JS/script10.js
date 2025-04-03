// let num=-3
// if(num>0){
//     console.log("The given number is positive")
// }
// else if(num==0){
//     console.log("The given number is Zero")
// }
// else{
//     console.log("The given number is negative")
// }





// If n is odd , print Weird<
// if n is even, in range of 2 - 5 print not weird
// if n is even, in range of 6-20 print weird
// if n is even, greater than 20 , print not weird 


let num = 17

if (num % 2 != 0) {
    console.log("Weird<");
}

// else if (num >= 2 && num <= 5 && num % 2 == 0) {
//     console.log("Not weird!")
// }
// else if (num >= 6 && num <= 20 && num % 2 == 0) {
//     console.log("Weird!")
// }
// else if (num > 20 && num % 2 == 0) {
//     console.log("Not weird!")
// }


else {
    if (num >= 2 && num <= 5) {
        console.log("Not weird!")
    }
    else if (num >= 6 && num <= 20) {
        console.log("Weird!")
    }
    else if (num > 20) {
        console.log("Not weird!")
    }
}
