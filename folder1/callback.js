

function slowThing(callback) {
    console.log('Hi, I am slow')
    callback()
}


// slowThing(() => {
//     console.log('This is CALLBACK!')
// })

function doSecond() {
    console.log('Do this after slowthing.')
}

slowThing(doSecond)