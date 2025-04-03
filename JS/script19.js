// Arrays

let arr = [1, 2, 3, 4, 5, 6]

console.log(arr[2])

for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i])
}

// Creating arrays using Array constructor

let brr = new Array('Abhay', '071', 4, 6, 7, 9, 0, true)

console.log(brr)


for (let i = 0; i <= brr.length - 1; i++) {
    console.log(brr[i])
}

console.log(typeof (arr))
console.log(typeof (brr))

// Inbuilt array methods/functions
brr.push("Thanks")
brr.push("Buddy")
console.log(brr)
brr.pop()
console.log(brr)

let crr = [2, 3, 4, 5, 9]
console.log(crr)

//slice
console.log(crr.slice(2, 4))
console.log(crr)

//shift
crr.shift()

//unshift
crr.unshift("Abhay Thakur")
console.log(crr)


//splice
crr.splice(1, 2, "Kunal")
console.log(crr)
