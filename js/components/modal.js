export const addStudentModal = () => {
    return `
    <div class="border absolute w-[100%] h-full top-0 left-0 flex justify-center items-center  bg-black/85  hidden" id ="modal">
            <div class="bg-white  min-w-2xl max-w-3xl min-h-fit max-h-140 p-5 rounded-md">
            <form action="" class="grid grid-cols-2 gap-7">
      <div class="col-span-2 flex justify-between items-center">
                    <h1 class="text-2xl capitalize font-medium">add new student</h1>
               <button class=" justify-self-end cursor-pointer" id="close_modal" type="button"> <img src="./assets/images/icons/close-lg-svgrepo-com.svg" alt="close button" class=" h-5"  ></button>
      </div>
                <div class="flex flex-col">
                        <label for="firstname">Full name</label>
                        <input type="text" placeholder="Enter student fullname" class="outline-0 border border-gray-400 p-1 rounded-sm focus:border-amber-500" id="input_fullname">
                </div>  
                 <div class="flex flex-col">
                        <label for="email">Email</label>
                        <input type="email" placeholder="Enter student email" class="outline-0 border border-gray-400 p-1 rounded-sm focus:border-amber-500" id="input_email">
                </div>  
                <div class="flex flex-col">
                        <label for="course">Course</label>
                        <select name="course" id="input_course" class="outline-0 border border-gray-400 p-1 rounded-sm focus:border-amber-500"  >
                            <option value="BSIT">BSIT</option>
                            <option value="BSEd">BSed</option>
                            <option value="BSCS">BSCS</option>
                            <option value="BSA">BSA</option>]
                            <option value="BSN">BSN</option>
                            <option value="BSCE">BSCE</option>
                        </select>
                </div>
                <div class="flex flex-col">
                        <label for="year">Year</label>
                        <select name="year" id="input_year" class="outline-0 border border-gray-400 p-1 rounded-sm focus:border-amber-500">
                            <option value="1">1st</option>
                            <option value="2">2nd</option>
                            <option value="3">3rd</option>
                            <option value="4">4th</option>]
                        </select>
                </div>
                <div class="flex flex-col" >
                        <label for="gpa">GPA</label>
                        <input type="text"  placeholder="Enter student GPA" class="outline-0 border border-gray-400 p-1 rounded-sm focus:border-amber-500" id="input_gpa">
                </div>  
                <div class="flex flex-col">
                        <label for="status">Status</label>
                        <select name="status" id="input_status" class="outline-0 border border-gray-400 p-1 rounded-sm focus:border-amber-500 ">
                            <option value="Active" >Active</option>
                            <option value="Graduated">Graduated</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                </div>  
                <button type="submit" class="col-span-2 bg-blue-500  rounded-md text-white cursor-pointer p-1 disabled:bg-blue-300" disabled id="add_student_btn"  >Add Student</button>
            </form>
             </div>
        </div>`
}