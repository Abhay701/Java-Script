let str = "Babbar"
console.log(str.substring(2))
console.log(str.substring(2, 4))


let sentence = "Hello! I am Abhay Thakur"
let words1 = sentence.split(' ')
let words2 = sentence.split('  ')
console.log(words1)
console.log(words2)

let sen = "Hello! I am \"Abhay\" Thakur"
console.log(sen)


let sent = "Hello! \\I \\am \\Abhay \\Thakur"
let words3 = sent.split('\\')
console.log(words3)

console.log(words3.join(','))
console.log(words3.join('_'))
