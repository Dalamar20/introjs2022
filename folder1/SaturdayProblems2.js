// FizzBuzz

// function fizzBuzz() {
//     for(let i = 0; i <= 100; i++) {
//         if(i % 3 === 0 && i % 5 === 0) {
//             console.log("Fizz")
//         } else if(i % 5 === 0) {
//         console.log("Buzz")
//         } else if (i % 3 === 0) {
//             console.log("FizzBuzz")
//         } else {
//             console.log(i)
//         }
//     }
// }

// fizzBuzz()



// function fizzBuzz(num, x, y) {
//     for(let i = 1; i <= num; i++) {
//         if(i % x === 0 && i % y === 0) {
//             console.log("Fizz")
//         } else if(i % y === 0) {
//         console.log("Buzz")
//         } else if (i % x === 0) {
//             console.log("FizzBuzz")
//         } else {
//             console.log(i)
//         }
//     }
// }



// Check to see if a string has the same number of 'X's and 'O's

// function stringChecker(stringEx) {
//     let xNumber = 0;
//     let oNumber = 0;
//     for (let i = 0; i < stringEx.length; i++) {
//         if (stringEx[i].toLowerCase() === "o") {
//             oNumber++;
//         } else if (stringEx[i].toLowerCase() === "x") {
//             xNumber++;
//         }
//     if (oNumber === xNumber) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }


// stringChecker('xxoo')


// arrayOfNUms1 = [1,2,3,5,2,4,9,0,5,8]

// function createPhoneNumber(arr1) {
//     let phoneNumberString = "";
//     arr1.map(function (number) {
//         phoneNumberString += number
//     })
//     phoneNumberString.concat
//     console.log(phoneNumberString)
//     }

// createPhoneNumber(arrayOfNUms1)


// Create a function that takes a number as an argument. 
// Add up all the numbers from 1 to the number you passed to the function. 
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// function addUp(num) {
//     let sum = 0
//     for(let i = 1; i <= num; i++) {
//         sum += i
//     }
//     return sum
// }

// console.log(addUp(4))



    // arrA = [4,5,6,7]

// arr2A = arrA.map(number => number * 2)

// console.log(arr2A)



// let num = 10
// let str = num + " "

// console.log(str)




// array1 = [1,15, 0, 9]



// function arrMaxMin (arr1) {
//     let newArray = []
//     let ArrayMin = Math.min(...arr1)
//     let ArrayMax = Math.max(...arr1)
//     newArray.push(ArrayMax, ArrayMin)
//     console.log(newArray)
// }


// arrMaxMin(array1)


function returnFirstNumber (arr1) {
    return arr1[0]
}

console.log(returnFirstNumber([1, 4, 6]))