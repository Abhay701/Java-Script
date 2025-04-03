// for-each loop

let arr = [10, 20, 30]

arr.forEach((value, index) => {
    console.log("Number ", value, " Index: ", index)
})



// for-in loop

// Object
let obj = {
    name: "Abhay",
    fullName: "Abhay Thakur",
    age: 21,
    wieght: 65,
    height: "5ft 11in",

    greet: function () {
        console.log("Hello!, this is Abhay Thakur")
    }
}

for (let key in obj) {
    console.log(key, ":", obj[[key]])
}


// for-of loop
let brr = [2, 5, 9, 1, 3, 7, 6]

for (let value of brr) {
    console.log(value)
}

let fullName = "Abhay Thakur"

for (let val of fullName) {
    console.log(val)
}
