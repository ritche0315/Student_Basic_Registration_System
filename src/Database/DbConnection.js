const mysql = require('mysql2');


const dbConfig = (sql, data) =>{

    return new Promise((resolve, reject)=>{
        const conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "student_db"
        })
    
    
        conn.connect((err)=>{
            if(err){
                reject(err);
            }else{
                conn.query(sql, Object.values(data), (err, result)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(result)
                    }

                })
            }
        })

    })
}


module.exports = dbConfig