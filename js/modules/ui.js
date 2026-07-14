import { FetchStudentData } from "./students.js";
import { createStudent } from "../components/studentCard.js";   
import { filterStudents } from "./filter.js";
const container = document.querySelector('#student_grid')
const search_input = document.querySelector('#search_student')

const renderStudent = async () => {
    const  students = await FetchStudentData()

    const cards = students.map(student => {
        return createStudent(student)
    });

     container.innerHTML = cards.join("")
}

const searchStudent = () => {
   search_input.addEventListener('input',  async (e) => {
    
 const result = await filterStudents(e.target.value)
 const cards = result.map(student => {
 return createStudent(student)
    });
    container.innerHTML = cards.join("")     
     
})}



searchStudent()
renderStudent(); 