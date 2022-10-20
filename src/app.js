const express = require('express')
const morgan = require('morgan')
const MainRoutes = require('./routes/MainRoutes.js')
const StudentRoutes = require('./routes/StudentRoutes.js')
const app = express();
const port = 3000;

// register view engine
app.set('view engine', 'ejs')

app.listen(port, (err)=>{
    if(err) throw err;
    console.log('listening on port', port+" ...");
})

// middleware & static files
app.use(express.static('public/css'));
app.use(express.static('public/img'));
app.use(express.static('public/AJAX'));
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(morgan('dev'));

// routes
app.use(StudentRoutes);
app.use(MainRoutes);
