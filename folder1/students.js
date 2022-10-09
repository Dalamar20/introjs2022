


const students = require("./students.json")

// display all the students' first names one at a time, one per line
// example 
function showStudents(studentList) {
    for(let i = 0; i < studentList.length; i++) {
        console.log(studentList[i].firstName)
    }

}

showStudents(students)