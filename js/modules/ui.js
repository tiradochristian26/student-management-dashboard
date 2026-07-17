import { fetchData } from "./students.js";
import { createStudent } from "../components/studentCard.js";
import { filterStudents } from "./filter.js";
import { sort } from "./sort.js";
import { filterByCourse } from "./courseFilter.js";
const container_grid = document.querySelector("#student_grid")
const searchEngine = document.querySelector("#search_student")
const courseOption = document.getElementById('course')
const sortvalue = document.getElementById('sort')


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

const  initializeSearch =(filteredData) => {
        searchEngine.addEventListener('input', (e) => {
            const filtered = filterStudents(filteredData,e.target.value)
             renderData(filtered)
        })
} 

const sortStudent = (students) => {
    sortvalue.addEventListener('change',(e) => {
        const sortedStudents = sort(students,e.target.value)
        renderData(sortedStudents)
               
    })
}

const courseFilter = (students) => {
    courseOption.addEventListener('change', (e) => {
            const courses = filterByCourse(students,e.target.value)
           renderData(courses)
    })
}
const init = async () => {
    await fetchedData()
    renderData(studentData)
    initializeSearch(studentData)
    sortStudent(studentData)
    courseFilter(studentData)
}

init()

