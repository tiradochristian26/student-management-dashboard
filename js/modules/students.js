

export const fetchData = async () => {
    const url = './data/students.json'

    try {
            const response = await fetch(url)
            if(!response.ok){
                throw new Error('Faile to fetch data from',url);
            }

            const result = await response.json()
            return result
    } catch (error) {
        
    }
}