/* Pyramid problem:
print:  (using a loop)
#
##
###
####
#####

Extra for experts: 
1. Write a function named assignGrade that takes one argument, a number score.
Returns a grade for the score, either  "A," "B," "C," "D," or "F." Call that function for a few different scores and log the result to make sure it works. */

//-----------------------------------------------------


function pyramidPrinter(pyramidArray) {
    for(let i = 0; i < 5; i++) {
        console.log(pyramidArray[i])
    }
    }


    // const pyramidArray1 = ['#', '##', '###', '####', '#####']
    // pyramidPrinter(pyramidArray1)
    // //const pyramidArray2 = ['#####', '####', '###', '##', '#']
    // //pyramidPrinter(pyramidArray2)



//------------------------------------------------------



// function assignGrade(numScore) {
//     switch(true) {
//         case (numScore >= 90):
//             console.log('A')
//             break
//         case (numScore >= 80):
//             console.log('B')
//             break
//         case (numScore >= 70):
//             console.log('C')
//             break
//         case (numScore >= 60):
//             console.log('D')
//             break
//         case (numScore >= 0):
//             console.log('F')
//             break
//     }
// }

// assignGrade(45)
    

