export const generateId = (students) => {


    
    const nextId =  students.length > 0 ?
    Math.max(...students.map(student =>student.id)) + 1
    : 1
    
   console.log(nextId)
   return nextId
}