"use strict";
//Enums
//  enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }
// enum Direction {
//     Up1 =10,
//     Down2= "hi",
//     Left3 = "wassup",
//     Right4 = "sup"
// }
// let move : Direction = Direction.Up1
//console.log(Direction[move])
// console.log(move)
// let move2 : Direction = Direction.Down2
// console.log(move2)
//Data types (any, unknown ,never)
// let value : any 
// value = ' hi'
// value = true
// let value2 : unknown
// value = 'hello'
// if (typeof value === 'string'){
//     console.log(value.toUpperCase())
// }
// let value3 : never 
// function error(message: string): never {
//     throw new Error(message); // This function never returns
//}
// function infiniteLoop(): never {
//     while (true) {} // This function never ends
// }
//Type Assertion
// let myBio : any = "hania";
// let MyBio = <string>myBio.length
// console.log(MyBio)
// let mystatus : any = 338;
// let Mystatus = (mystatus as number)-99
// console.log(Mystatus)
// //Tuples
// let mydata : [string, number, boolean]
// mydata = ['hania' , 18, false]
// console.log (mydata)
// let numerics : [number, number , number]
// numerics = [11, 7 , 19]
// console.log(numerics[1])
//DEFAULT PARAMETER
function myname(name = 'hania') {
    console.log('hello,' + name);
}
myname();
//OPTIONAL PARAMETER
function pizza(size, toppings) {
    if (toppings) {
        console.log('you have added  ,' + toppings + " with" + size);
    }
    else {
        console.log('you order a pizza in this,' + size);
    }
}
pizza("cheese", "medium");
pizza('medium');
//REST OPERATOR
function addNumbers(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
console.log(addNumbers(1, 2, 3)); // Output: 6
function guestlist(...GUESTS) {
    console.log("your guest list is," + GUESTS.join(", "));
}
guestlist('alice', 'bob', 'david');
guestlist();
//FUNCTION OVERLOAD
function greet(name) {
    if (name) {
        console.log('welcome,' + name);
    }
    else {
        console.log('hi everyone!');
    }
}
greet('ahmad');
greet();
