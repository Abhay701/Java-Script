let uList = document.createElement("ul")
uList.textContent = "Fruits list:"

let li1 = document.createElement("li")
let li2 = document.createElement("li")
let li3 = document.createElement("li")
let li4 = document.createElement("li")
let li5 = document.createElement("li")

li1.textContent = "Apple"
li2.textContent = "Banana"
li3.textContent = "Mango"
li4.textContent = "Kiwi"
li5.textContent = "Orange"

li1.className = "list"
li2.className = "list"
li3.className = "list"
li4.className = "list"
li5.className = "list"

uList.appendChild(li1)
uList.appendChild(li2)
uList.appendChild(li3)
uList.appendChild(li4)
uList.appendChild(li5)

document.body.appendChild(uList)

let a = document.getElementsByClassName("list")
// a[0].style.color="red"
// a[1].style.color="green"
// a[2].style.color="violet"
// a[3].style.color="blue"
// a[4].style.color="rgb(17, 255, 0)"


// Rndom color

for(let i=0;i<=4;i++){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    console.log(x);
    console.log(y);
    console.log(z);
    a[i].style.color=`rgb(${x}, ${y}, ${z})`
}
