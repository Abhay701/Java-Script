// filter inbuilt method

let arr = [10, 20, 30, 11, 21, 44, 53]

let evanArr = arr.filter((number) => {
    if (number % 2 === 0) {
        return true
    }
    else {
        return false
    }
})

console.log(evanArr)


let brr = ['Abhay', "Thakur", null, 10.3]

console.log(brr)

let ans = brr.filter((value) => {
    if (typeof (value) == 'string') {
        return true
    }
    else {
        return false
    }
})

console.log(ans)
