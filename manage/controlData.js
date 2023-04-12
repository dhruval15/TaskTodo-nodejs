const express = require('express');
const User = require('../user')
const app = express();

exports.findTodoData = async (req, res) => {
    const data = await User.find({isDeleted:true})
    res.send(data)
}

exports.addTodoData = async (req, res) => {
    const insertData = new User(req.body)
    let savedData = await insertData.save({ insertData });
    res.send(savedData);
}
exports.updateData = async (req, res) => {
    let modifyData = await User.updateOne({ _id: req.body._id },
        {
            $set: {
                description: req.body.description
            }
        })
    res.send(modifyData)
}
exports.updateArrStatus = async (req, res) => {
    let count = 0;
    const { _id, username, description } = req.body

    const descLength = description.length
    description.forEach(({ status }) => {
        if (status) {
            count += 1
        }
    })
    let todoStatus = "";
    if (descLength === count) {
        todoStatus = true
    } else {
        todoStatus = false
    }
    const updatedData = await User.updateOne({ _id },
        {
            $set: {
                description, username, todoStatus
            }
        })
    res.send(updatedData);
}
exports.updateStatus = async (req, res) => {
    let delData = await User.updateOne({ _id: req.body._id },
        {
            $set: { isDeleted: true }
        })
    res.send(delData);
}

