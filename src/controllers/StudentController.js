const services = require('../services/CRUD.js');
const Student = require('../models/Student.js');

const studentRegisterPage = (request, response) =>{
    response.status(200).render('register', {pageName: "register"})
}

const studentListPage = async (request, response) =>{
    let result = await services.getAllStudents();
    response.status(200).render('student-list', {pageName: "students", dataSource: JSON.stringify(result)})
}

const studentListAjax = async (request, response) =>{
    let result = await services.getAllStudents();
    
    response.status(200).send(btoa(JSON.stringify(result)));
}
const studentInsertQuery = async (request, response) => {
    // Get the POST request data from the body
    let data = request.body
    // And then, store it to the Student model
    let student = new Student(0, data.fullname, data.yearLevel, data.course);
    // create an object 
    let dataFromStudentModel = {
        fullname: student.fullname,
        yearLevel: student.yearLevel,
        course: student.course
    }
    // call insertStudent method from services module
    let result = await services.insertStudent(dataFromStudentModel);
    response.status(200).json(result);
}


const studentUpdateQuery = async (request, response) =>{
    let data = request.body;
    let id = request.params.id

    let student = new Student(id, data.fullname, data.yearLevel, data.course);
    let dataFromStudentModel = {
       
        fullname: student.fullname,
        yearLevel: student.yearLevel,
        course: student.course,
        id: student.id,
    }

    let result = await services.updateStudent(dataFromStudentModel);
    response.status(200).json(result)
}


const studentDeleteQuery = async (request, response) =>{
    // get id param
    let data = JSON.parse(atob(request.params.student))
    let student = new Student(data.id, 0,0,0);
    let result = await services.deleteStudent({id: student.id});
    response.status(200).json(result)
}


module.exports = {
    studentListPage,
    studentRegisterPage,
    studentInsertQuery,
    studentUpdateQuery,
    studentDeleteQuery,
    studentListAjax
}
