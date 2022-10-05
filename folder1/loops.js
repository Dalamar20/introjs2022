// let i = 0
// do {
//     console.log(`This is iteration # ${i}`)
//     i++
// } while (i<10)

// in a for 

// let person = {
//     firstName: 'Todd',
//     age: 45,
//     awesome: true
// }
   
// for (let i in person) {
//     console.log(i + ' = ' + person[i])
// }


const mentors = [
    'Peter',
    'Cassandra',
    'Bridgette',
    'Arthur',
    'Sebas',
    'Nerissa',
]

for(let i=0; i < mentors.length; i++) {
    const name = mentors[i]    
    console.log(`${name} is an awesome mentor!`)
}