export const formValidation = (name,email,course,year,gpa,status) => {
    if(!name || !email || !course || !year || !gpa || !status) return false;
    if(isNaN(gpa) || isNaN(parseFloat(gpa))) return false;
        return  true;
}
