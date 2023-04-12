const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    username: {
        type: String,
    },
    description: Array,
    isDeleted: Boolean,
    todoStatus: Boolean

});
const User = mongoose.model('User', userSchema);
module.exports = User;