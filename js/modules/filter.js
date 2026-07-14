import { fetchData } from "../../../upSkill/js/modules/profile"

export const filterStudents = async (value) => {
   const students = await fetchData()
    const filtered=  students.filter(student => {
    const trimed =  student.name.trim().toLowerCase()
    return trimed.includes(value.trim().toLowerCase())

})

   return filtered
}