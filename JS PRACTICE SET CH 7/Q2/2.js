// // Create table element
// let table = document.createElement("table");
// table.border = "1"; // Add border for visibility

// // Create table header row
// let headerRow = document.createElement("tr");
// let th1 = document.createElement("th");
// let th2 = document.createElement("th");

// th1.textContent = "Name";
// th2.textContent = "Age";

// headerRow.appendChild(th1);
// headerRow.appendChild(th2);
// table.appendChild(headerRow); // Append header row directly to table

// // Create data row
// let row = document.createElement("tr");
// let td1 = document.createElement("td");
// let td2 = document.createElement("td");

// td1.textContent = "Alice";
// td2.textContent = "25";

// row.appendChild(td1);
// row.appendChild(td2);
// table.appendChild(row); // Append data row directly to table

// // Append table to body
// document.body.appendChild(table);






let table=document.createElement("table")
table.border="3"

// Create table header row
let headerRow=document.createElement("tr")
let th1=document.createElement("th")
let th2=document.createElement("th")
let th3=document.createElement("th")

th1.textContent="Name"
th2.textContent="Age"
th3.textContent="Passion"

headerRow.appendChild(th1)
headerRow.appendChild(th2)
headerRow.appendChild(th3)
table.appendChild(headerRow)

// Create table data row1
let row1=document.createElement("tr")
let td1=document.createElement("td")
let td2=document.createElement("td")
let td3=document.createElement("td")

td1.textContent="Muskan"
td2.textContent="20"
td3.textContent="Marketing"

row1.appendChild(td1)
row1.appendChild(td2)
row1.appendChild(td3)
table.appendChild(row1)

// Create table data row2
let row2=document.createElement("tr")
let td2_1=document.createElement("td")
let td2_2=document.createElement("td")
let td2_3=document.createElement("td")

td2_1.textContent="Abhay"
td2_2.textContent="20"
td2_3.textContent="Coding💀"

row2.appendChild(td2_1)
row2.appendChild(td2_2)
row2.appendChild(td2_3)
table.appendChild(row2)

// Create table data row3
let row3=document.createElement("tr")
let td3_1=document.createElement("td")
let td3_2=document.createElement("td")
let td3_3=document.createElement("td")

td3_1.textContent="Eden"
td3_2.textContent="21"
td3_3.textContent="Football"

row3.appendChild(td3_1)
row3.appendChild(td3_2)
row3.appendChild(td3_3)
table.appendChild(row3)

document.body.appendChild(table)

