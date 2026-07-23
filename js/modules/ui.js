import { fetchData } from "./students.js";
import { createStudent } from "../components/studentCard.js";
import { filterStudents } from "./filter.js";
import { sort } from "./sort.js";
import { filterByCourse } from "./courseFilter.js";
import { statistics } from "./statistics.js";
import { addStudentModal } from "../components/modal.js";
import { formValidation } from "./validation.js";
import { createStudentObject } from "../helpers/dataBuilder.js";
import { generateId } from "../helpers/utils.js";
// students modal
const app = document.getElementById('app')
app.innerHTML = addStudentModal()
const showModal = document.getElementById('show_modal')
const closeModal = document.getElementById('close_modal')
const modal = document.getElementById('modal')
const modalForm = document.getElementById('modal_form')
const submitStudent = document.getElementById('submit_student')

// students grid
const container_grid = document.querySelector("#student_grid")
const searchEngine = document.querySelector("#search_student")
const courseOption = document.getElementById('course')
// dashboard Cards
const sortvalue = document.getElementById('sort')
const  totalActive = document.getElementById('active_students')
const totalStudents = document.getElementById('total_students')
const averageGpa = document.getElementById('average_gpa')
const totalCourses = document.getElementById('total_courses')

const toggleModal = () => {
    modal.classList.toggle('hidden')    
    modal.classList.contains('hidden') ? document.body.style.overflow ='auto': document.body.style.overflow ='hidden'
}
showModal.addEventListener('click',toggleModal )
closeModal.addEventListener('click',toggleModal)

let studentData =[]
const fetchedData = async () => {
    const data =  await fetchData()
      studentData = data
}

const renderData = (students) => {
    const cards = students.map(profile => {
        return createStudent(profile)
    });
    container_grid.innerHTML = cards.join("")
}

modalForm.addEventListener('submit',(e) =>{
    e.preventDefault()
    const newForm = new FormData(modalForm)
    const fullname = newForm.get('fullname')
    const email  = newForm.get('email')
    const course = newForm.get('course')
    const year  = newForm.get('year')
    const gpa = newForm.get('gpa')
    const  status = newForm.get('status')
    const isValid = formValidation(fullname,email,course,year,gpa,status)

    if(isValid){
    const newStudent =  createStudentObject(fullname,email,course,year,gpa,status)
    const newId = generateId(studentData)
    const completeStudent ={...newStudent, id:newId}
    studentData = [...studentData ,completeStudent]
    renderData(studentData)
    renderStatistics(studentData)
    modalForm.reset()
    toggleModal()

       
    }else{
        alert('please fill out all fields with valid value')
    }
})

const renderStatistics = (students) => {
    const stats = statistics(students)
    totalStudents.textContent =stats.totalStudents
    totalActive.textContent = stats.active
    averageGpa.textContent=stats.averageGpa
    totalCourses.textContent=stats.totalCourse        
}


const updateStudents = () => {
    const searchValue = searchEngine.value
    const courseValue = courseOption.value
    const sortValueSelected = sortvalue.value
    

let result = studentData;
result = filterByCourse(result,courseValue);
result = filterStudents(result,searchValue);
result = sort(result,sortValueSelected);
renderData(result)
renderStatistics(result)
}


const init = async () => {
    await fetchedData()
    renderStatistics(studentData)
    renderData(studentData)
    searchEngine.addEventListener('input',updateStudents)
    courseOption.addEventListener('change',updateStudents)
    sortvalue.addEventListener('change',updateStudents)

}


init()

