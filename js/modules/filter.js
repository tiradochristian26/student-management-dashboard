import { FetchStudentData } from "./students.js"

export const filterStudents = (data,value) => {

    const filtered=  data.filter(student => {
    const trimmed =  student.name.trim().toLowerCase()
    return trimmed.includes(value.trim().toLowerCase())

})

   return filtered
}