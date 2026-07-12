import { FetchStudentData } from "./students.js";
import { createStudent } from "../components/studentCard.js";

const renderStudent = async () => {
    const container = document.querySelector('#student_grid')

    const  students = await FetchStudentData()

    const cards = students.map(student => {
        return createStudent(student)
    });

     container.innerHTML = cards.join("")
}

renderStudent(); 