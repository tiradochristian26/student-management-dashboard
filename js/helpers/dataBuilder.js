
export const createStudentObject = (name,email,course,year,gpa,status) =>{
    const newStudentData  = {
            fullname: name,
            email: email,
            course:course,
            year:year,
            gpa:gpa,
            status:status
    }
    
    return newStudentData
}