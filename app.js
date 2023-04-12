const mongoose = require('mongoose');
const express = require('express');
var bodyParser = require('body-parser');
const User = require('./user')
const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const { findTodoData, addTodoData, updateData, updateArrStatus, updateStatus } = require('./manage/controlData');

mongoose.connect("mongodb://localhost:27017/TodoList");
const connection = mongoose.connection;
connection.on('open', () => {
    console.log('connected..');
})
app.get('/', findTodoData)
app.post('/insertData', addTodoData)
app.put('/updateArrStatus', updateArrStatus)
app.put('/updateData', updateData)
app.put('/updateStatus', updateStatus)

app.listen(port, () => {
    console.log(`port running on.. ${port}`);
})