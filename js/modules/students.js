
export const FetchStudentData = async () => {
    const url = "./data/students.json"

    try {
            const response = await fetch(url)
            if(!response.ok){
                throw new Error('Failed to fetch data')
            }
            const result = response.json()
            return result;
    } catch (error) {
            console.log(error.message)
    }
}