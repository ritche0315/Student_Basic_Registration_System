const DatabaseQuery = require('../Database/DbConnection');

const insertStudent = async (data)=>{
    let sql = "INSERT INTO students(fullname, yearLevel, course)VALUES(?,?,?)";
    let result = await DatabaseQuery(sql, data)
    return result;
}

const updateStudent = async (data)=>{
    let sql = "UPDATE students SET fullname=?, yearLevel=?, course=?"
            + " WHERE id=?";
    let result = await DatabaseQuery(sql, data);
    return result;
}

const deleteStudent = async (id) =>{
    let sql = "DELETE FROM students WHERE id=?";
    let result = await DatabaseQuery(sql, id);
    return result;
}

const getAllStudents = async () => {
    let sql = "SELECT * FROM students;"
    let result = await DatabaseQuery(sql, {});
    return result;
}


module.exports = {
    getAllStudents,
    insertStudent,
    updateStudent,
    deleteStudent
}