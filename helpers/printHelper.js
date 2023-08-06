export function printAge(age){
    console.log(age)
}

export class CustomerDetails {

    printFirsName(firstName){
        console.log(firstName)
    }
    /**
     * This method will print last name
     * @param {string} lastName 
     */
    printLastName(lastName){
        console.log(lastName)
    }
} 

export const customerDetails = new CustomerDetails()