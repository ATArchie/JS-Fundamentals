// Declarative function
function helloOne(){
    console.log('Hello one!')
}
helloOne()

//Anonymous function
var helloTwo = function(){
console.log('Hello two!')
}
helloTwo()

//ES6 function syntax or arrow function
var helloThree = () => {
    console.log('Hello three!')
}
helloThree()

//Function with arguments
function printName(name, lastName){
console.log(name + ' ' + lastName)
}
printName('Gaylord', 'Focker')

//Function with return
function multiplyByTwo(number){
    var result = number * 2
    return result
}
var myResult = multiplyByTwo(10)
console.log(myResult)

//import function
import {printAge} from '../helpers/printHelper.js'
printAge(18)

//import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(100)