let n = 5

// for loop
for (let i = 0; i <= 10; i++) {
    console.log(n * i)
}

console.log("\n")


let j = 1
// while loop
while (j <= 20) {
    console.log(n * j)
    j++
}

console.log("\n")


let k = 1, n1 = 3
// do-while loop
do {
    console.log(n1 * k)
    k++
} while (k <= 10)


console.log("\n")

// Working of continue property
for (let i = 10; i >= 1; i--) {
    if (i === 6) {
        continue; // it will skip 6
    }
    console.log(i)
}


console.log("\n")


// Working of break property
for (let i = 9; i >= 2; i--) {
    console.log(i)
    if (i === 6) {
        break; // it will not print after 6
    }
}
