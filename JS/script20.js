// map inbuilt method

let arr = [10, 3, 20]

let ansArr = arr.map((number) => {
    return number * number
})

console.log(ansArr)

let brr = [10, 20, 30]
brr.map((number, index) => {
    console.log(number)
    console.log(index)
})