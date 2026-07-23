
export const createStudentObject = (fullname,email,course,year,gpa,status) =>{
    const newStudentData  = {
            name: fullname,
            email: email,
            course:course,
            year:year,
            gpa:gpa,
            status:status
    }
    
    return newStudentData
}