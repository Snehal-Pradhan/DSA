/*
create an array with 5 student names, after that 
create a function which takes 2 parameters(allStudents & studentName) 
iterate over all the students and find that specific user "studentName".

*/ 


const studentDatabase =["a","b","c","d","e"]
const findStudent =(allStudent,studentName)=>{
    for(let i=0;i<allStudent.length;i++){
        if(allStudent[i]===studentName){
            console.log(`found ${studentName}`)
            return
        }
    }
    return console.log(`${studentName} not found`);
}
findStudent(studentDatabase,"b")