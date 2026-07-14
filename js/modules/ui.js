import { FetchStudentData } from "./students.js";
import { createStudent } from "../components/studentCard.js";   
import { filterStudents } from "./filter.js";
const container = document.querySelector('#student_grid')
const search_input = document.querySelector('#search_student')
let students = []

const fetchStudents = async () => {
 const studentData = await FetchStudentData()
  students = studentData     
  return studentData

}

const renderStudent = (students) => {
    const cards = students.map(student => {
        return createStudent(student)
    });
     container.innerHTML = cards.join("")
}

const searchStudent =  (studentList) => {
search_input.addEventListener('input', (e) => {
const filteredStudent = filterStudents(studentList,e.target.value)
    renderStudent(filteredStudent)
     
})}

const init = async () => {
 await  fetchStudents()
renderStudent(students); 
searchStudent(students)

}

init()
