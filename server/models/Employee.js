const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    firstname: String,
    secondname: String,
    email: String,
    phonenumber: String,
    fromaddress: String,
    toaddress: String,
    toluggage: String
})

const EmployeeModel = mongoose.model("employees", EmployeeSchema)
module.exports = EmployeeModel