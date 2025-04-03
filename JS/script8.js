let num = 4;
let age = 17;

if (num == 1) {
    console.log('A')
}

else if (num == 2) {
    console.log('B')
}

else if (num == 3) {
    console.log('C')
}

else if (num == 4) {
    console.log('D')
    if (age >= 18) {
        console.log("Can Vote")
    }
    else {
        console.log("Can't Vote")
    }
}

else {
    console.log("NOthing matched!")
}
