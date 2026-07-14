export const createStudent = (student) => {
    return ` 
    <div
                        class="min-w-60 min-h-50 max-w-60 max-h-fit rounded-lg p-2  border border-gray-400 space-y-3   ">
                        <img src="./assets/images/logo/student-svgrepo-com.svg" alt="Profile picture of ${student.name}" class="h-12">
                        <div>
                            <h3 class="font-medium text-xl">${student.name}</h3>
                            <p class=" text-gray-500">${student.email}</p>
                        </div>
                        <div>
                            <p>Course: <strong>${student.course}</strong></p>
                            <p>Year: <strong>${student.year}</strong></p>
                            <p>GPA: <strong>${student.gpa}</strong></p>
                            <p class="flex gap-2 ">Status: <strong class="text-green-600 flex  items-center gap-1"><img src="./assets/images/status/icons8-round-67.png" alt="status" class="h-2">${student.status}</strong></p>
                        </div>
                        <div class=" w-full flex gap-1 ">
                            <button
                                class="bg-blue-600 rounded-sm flex-1 font-medium text-white cursor-pointer hover:bg-blue-800 py-1" type="button">Edit</button>
                            <button
                                class=" border border-red-600 text-red-600 rounded-sm flex-1 cursor-pointer hover:bg-red-600 transition hover:text-white py-1 " type="button">Delete</button>
                        </div>
                    </div>
`
}
