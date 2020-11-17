const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql')

app.use(bodyParser.json())

// DB
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api_curd_user'
})

// connect to DB
connection.connect((err) => {
    if (err) throw err;
    console.log('MysQL Konek');
})

// Server listening on port
app.listen(3000, () => {
    console.log('Server started on port 3000...');
});

app.get('/', (req, res) => {
    return res.json({
        "message": "Selamat datang di RESTful API buatan Dhiyo",
        "getUser": "/api/users - DONE",
        "getUserByID": "/api/users/:id - DONE",
        "postUser": "/api/users - DONE",
        "updateUser": "/api/users/:id - Unfinished",
        "deleteUser": "/api/users/:id - Unfinisihed",
    })
})

// get all data user
app.get('/api/users', (req, res) => {
    let sql = "SELECT * FROM user";
    let query = connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify({
            "status": 200,
            "error": null,
            "data": result
        }))
    })
})

// get user by id
app.get('/api/users/:id', (req, res) => {
    let sql = "SELECT * FROM user WHERE id=" + req.params.id;
    let query = connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify({
            "status": 200,
            "error": null,
            "data": result
        }))
    })
})

// post data user 
app.post('/api/users', (req, res) => {
    let data = {
        username: req.body.username,
        full_name: req.body.full_name,
        username_github: req.body.username_github,
        class: req.body.class,
        description: req.body.description
    }
    let sql = "INSERT INTO user SET ?";
    let query = connection.query(sql, data, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify({
            "status": 200,
            "error": null,
            "data": result
        }))
    })
})