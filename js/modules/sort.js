
export const sort = (data,value) => {
    const students = [...data]

    if (value !== 'asc' && value !== 'desc' && value !== 'gpa-asc') {
    return students
        }
    students.sort((a,b) => {
        if(value === 'asc'){
             return  a.name.localeCompare(b.name)
        }else if(value === 'desc'){
             return  b.name.localeCompare(a.name)
        }else if(value === 'gpa-asc'){
                return a.gpa - b.gpa
        }
    })
    
   
    return students;
}