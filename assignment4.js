let background = document.querySelector("body")
background.style.backgroundImage = "url('lesfruitsetleslegumes.jpg')";
background.style.backgroundRepeat = "no-repeat";
background.style.backgroundSize = "100%";

let textBackground = document.getElementById("content")
textBackground.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
textBackground.style.textAlign = "left";
textBackground.style.padding = "10px";
textBackground.style.marginTop = "8%";
textBackground.style.marginLeft = "33%";
textBackground.style.width = "30%";
textBackground.style.border = "5px solid silver";
console.log(textBackground);

let titleColor = document.getElementsByTagName("h1")[0].style.color = "green";
console.log(titleColor);
let subTitleColor = document.getElementsByTagName("p")[0].style.color = "blue";
console.log(subTitleColor);
let subTitleFont = document.getElementsByTagName("p")[0].style.fontStyle = "italic";
console.log(subTitleFont);

let titleCase = document.querySelectorAll("h3").forEach(item=>
   item.innerHTML=item.textContent.toLocaleUpperCase() )
console.log(titleCase);

let fruit = document.createElement("li")
fruit.appendChild(document.createTextNode("Passion fruit"))
let newFruit = document.getElementById("fruList").appendChild(fruit)
console.log(newFruit.children);

let fruitOne = document.createElement("li")
fruitOne.appendChild(document.createTextNode("Lemon"))
let newFruitOne = document.getElementById("fruList").appendChild(fruitOne)
console.log(newFruitOne.children);

let vegetable = document.createElement("li")
vegetable.appendChild(document.createTextNode("Celery"))
let newVeg = document.getElementById("vegList").appendChild(vegetable)
console.log(newVeg.children);

let vegetableOne = document.createElement("li")
vegetableOne.appendChild(document.createTextNode("Bell pepper"))
let newVegOne = document.getElementById("vegList").appendChild(vegetableOne)
console.log(newVegOne.children);