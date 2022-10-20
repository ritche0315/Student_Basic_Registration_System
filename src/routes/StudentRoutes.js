const express = require('express');
const StudentController = require('../controllers/StudentController.js');
const Student = require('../models/Student.js');

const router = express.Router();
                router.get('/students', StudentController.studentListPage)
                router.get('/students-ajax', StudentController.studentListAjax)
                router.get('/student-registration', StudentController.studentRegisterPage)
                router.post('/insert', StudentController.studentInsertQuery)
                router.put('/update/:id', StudentController.studentUpdateQuery)
                router.delete('/delete/:student', StudentController.studentDeleteQuery)
module.exports = router