var kiosk=[
    {
        name :"Orange",
        price : 30,
    },
    {
        name :"Mango",
        price : 15,
    },
    {
        name :"Avocado",
        price : 40,
    }]
 function getTotalCost(name,quantity){
    let a=kiosk.find(item=>item.name===name)
    console.log(`${quantity} ${name} for KES ${a.price*quantity}`)
     
}
getTotalCost("Orange",2)

class KioskCalc {                                        
    constructor(fruit, quantity){
        this.fruit = fruit
        this.quantity = quantity
        this.fruitPriceList = {"orange": 30, "mango": 15, "avocado": 40 }; 
        this.getTotalCost = function () {
            return ` ${quantity} ${fruit} for KES ${quantity * this.fruitPriceList[fruit]}`
        }
    }
}
var kiosk = new KioskCalc('mango ', 2);
console.log(kiosk.getTotalCost());