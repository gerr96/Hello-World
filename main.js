"use strict" //silent errors that will be loud errors, always define the document with this

console.log("this should be running")



let fantasyGod
console.log(fantasyGod)
fantasyGod = 'The Raven Queen'


let nickname = ''

// leftOperand = rightOperand
//             ^ operator
// https://mdn.io/operators

console.log(nickname)


//Data types in Javascript
//Number: 0, 2, -3, 0.123, -0.123


let tipPercentage = 0.18
let bill = 13.00
let tip = bill * tipPercentage
let total = bill * tipPercentage
let message = "the tip on a " + bill + " food bill is" + tip 

console.log(message)

//Output: "The tip on a $some-number food bills is $some-other-number"

//IF there are four eggs in the fridge, the make scrambled eggs
//ELSE IF there is oatmeal in the cabinet, the make oatmeal
//ELSE IF there is breakfast cereal in the cabinet AND milk in the fridge, then make breakfast cereal
//ELSE go out and find some food at a restaurant

let playerName = 'Luis'
if (playerName.startsWith("L")) {
    //code that runs if the conditions is turthy
    
} else {
    //code that runs if the condition is falsy
}

let userAge = 76
let minDrinkingAge = 21
let isDrinkingAge = userAge >= minDrinkingAge
let isFriend = getFriendshipStatus() // either true or false


if (isDrinkingAge && isFriend) {
    console.log("Congratulations: You have been invited to our Autumn Bar Crawl!")
    
} else {
    console.log("Sorry, but you're either too young or we don't really know you.")
    
}