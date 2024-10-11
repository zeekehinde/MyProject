const mongoose = require("mongoose")
const user = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    selectType:  {
        type: String
    }
})

module.exports = mongoose.model("User", user)