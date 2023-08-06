//objects

var customer = {
    firstName: 'Joe',
    lastName: 'Doe',
    cars: ["Ford", "Tesla,", "Jeep"]
}
customer.firstName = "Roman"
//bracket notation
customer['lastName'] = "Polak"
console.log(`${customer.firstName} ${customer.lastName}`)

//arrays
var cars = ["Ford", "Tesla,", "Jeep"]
cars[1] = "BMW"
console.log(cars[1])
console.log(customer.cars[2])