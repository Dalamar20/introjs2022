

function fizzbuzz(num) {
    for (i = 1; i <= num; i++) {
        switch (true) {
            case (i % 3 === 0 && i % 5 === 0):
                console.log("FizzBuzz")
                break
            case (i % 3 === 0):
                console.log("Fizz")
                break
            case (i % 5 === 0):
                console.log("Buzz")
                break
            default:
                console.log(i)
                break
        }
        }
    }

// fizzbuzz(15)


function palindromePrinter(x) 
    let str = String(x)
    let splitStr = str.split("")
    let reverseArray = splitStr.reverse()
    let joinArray = reverseArray.join("")
    if(str === joinArray) {
        return true
    } else {
        return false
}


// console.log(palindromePrinter(18))


let numArray1 = [2 , 4, 6, 8]
let target1 = 8

function indexTargetPrinter(numArray, target) {
    for(i = 0; i < numArray.length; i++) {
        for(j = i +1; j < numArray.length; j++) {
            if (numArray[i] + numArray[j] === target){
                return [i, j];
            }
            }
}
}

//console.log(indexTargetPrinter(numArray1, target1))