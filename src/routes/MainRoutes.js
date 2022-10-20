const express = require('express');
const app = express();
const router = express.Router();
                router.get('/', (request, response)=>{
                    response.status(200).render('index', {pageName: "index"});
                })
                router.get('/about', (request, response)=>{
                    response.status(200).render('about', {pageName: "about"});
                })

                router.get('/update-student/:student', (request, response)=>{
                    response.status(200).render('update', {pageName: "update", 
                    studentParams: JSON.parse(atob(request.params.student))})
                })

                router.use((request, response)=>{
                    response.status(404).render('404', {pageName: "404"});
                })

module.exports = router