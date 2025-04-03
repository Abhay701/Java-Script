function sayMyName() {
    console.log("Abhay Thakur")
}

function prtNumber(num) {
    console.log("The Number is:", num)
}

function prtNumbers(num1, num2, word) {
    console.log("The sentence is:", num1, num2, word)
}

sayMyName()

prtNumber(5)
prtNumbers(2, 6, "Abhay")


//Return functions

function getSum(n1, n2, n3) {
    let sum = n1 + n2 + n3
    return sum
}

let res = getSum(2, 5, 10)
console.log(res)

function getMyName(firstName, lastName) {
    let fullName = firstName + " " + lastName
    return fullName
}

let name = getMyName("Abhay", "Thakur")
console.log(name)