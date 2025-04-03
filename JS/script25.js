let arr = [10, 20, 30, 40, 50]

function getSum(arr) {
    // let len = arr.length;
    // let sum = 0

    // for (let i = 0; i < len; i++) {
    //     sum = sum + arr[i]
    // }
    // return sum


    // Using for-each loop
    let sum = 0
    arr.forEach((value) => {
        sum = sum + value
    });
    return sum
}

let totalSum = getSum(arr)
console.log(totalSum)