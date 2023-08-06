// Concatination and Interpolation
var price = 1000000
var itemName = "Car"
var messageToPrint = "The price for your "+itemName+" is "+price+" dollar" //Concatination
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars` //Interpolation
console.log(messageToPrint)
console.log(messageToPrint2)