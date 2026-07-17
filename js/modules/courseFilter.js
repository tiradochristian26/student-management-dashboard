

export const filterByCourse = (students, value) => {

        if (value === 'all')  {return students}

    return  students.filter(student => {
        return student.course === value
    })
            
}


