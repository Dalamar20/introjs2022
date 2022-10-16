// Write a function that returns a newArray with the square of each number

// const array1 = [2, 4, 9, 12, 7, 18, 22, 3];


function newSquaredArray(newArray) {
    let squaredArray = [];
    for(let i = 0; i < newArray.length; i++){
        squaredArray.push(Math.pow(newArray[i],2))
        }
    return squaredArray
 }

// console.log(newSquaredArray(array1))


/* Write a function that adds up each element in the same position and
create a newArray containing the sum of each pair. Assume both arrays are of the same length. */

let arr1 = [4, 6, 7];
let arr2 = [8, 1, 9];

function arrayAdder(arrayA, arrayB) {
    let newArray= [];    
    for(let i = 0; i < arrayA.length; i++) {
        newArray.push(arrayA[i] + arrayB[i])
    } return newArray
}   


console.log(arrayAdder(arr1, arr2))



