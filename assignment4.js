let backgroundColor = document.getElementsByTagName("body")[0].style.backgroundColor = "silver";
console.log(backgroundColor);

let titleColor = document.getElementsByTagName("h1")[0].style.backgroundColor = "green";
console.log(titleColor);

let titleCase = document.querySelectorAll("h3").forEach(item=>
   item.innerHTML=item.textContent.toLocaleUpperCase() )

// console.log(titleCase);

let fruit = document.createElement("li")
fruit.appendChild(document.createTextNode("Passion fruit"))
let newFruit = document.getElementById("fruList").appendChild(fruit)
console.log(newFruit.children);

let vegetable = document.createElement("li")
vegetable.appendChild(document.createTextNode("Celery"))
let newVeg = document.getElementById("vegList").appendChild(vegetable)
console.log(newVeg.children);

