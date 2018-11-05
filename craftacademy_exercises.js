///excercise 1

let numbers = [1,2,3]
let num = numbers[1];

if(1 == 1){
    return true;
};

myArray = ['Thomas', 'Amber', 'Raoul'];
emptyArray = [];

for(let i = 0; i<myArray.length; i++){
    emptyArray.push(myArray[i])
};

///exercise 2
class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName(){
        return `${firstName} ${lastName}`
    }
}
