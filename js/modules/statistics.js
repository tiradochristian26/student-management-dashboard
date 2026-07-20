export const  statistics = (students) => {

    const activeStudents = students.filter(student =>  student.status === 'Active')

    const totalGpa = students.reduce((accumulator,currentValue) =>  { return accumulator + currentValue.gpa},0)


    const averageGpa = students.length > 0
        ? Math.round((totalGpa / students.length) * 100) / 100
        : 0

    const courses = new Set(students.map(student => student.course ))

    return  {
        totalStudents: students.length,
        active: activeStudents.length,
        averageGpa: averageGpa,
        totalCourse:courses.size
    }
}