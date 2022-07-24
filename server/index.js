const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'visionaryforums'
});

const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
app.use(cors(corsOpts));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/get/users', (req, res) => {
  const sqlQuery = "SELECT * FROM users"
  db.query(sqlQuery, [], (err, result) => {
    res.send(result);
  });
});

app.post('/api/insert/user', (req, res) => {
    const values = req.body.values

    const sqlInsert = "INSERT INTO users (username, password, email) VALUES (?);";
    db.query(sqlInsert, [values], (err, result) => {});
});

app.listen(3001, () => {
    console.log('running')
});