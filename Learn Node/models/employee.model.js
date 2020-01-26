//Require the data base connection
require('../models/db');

//Require mongoose with the constant mongoose
const mongoose = require('mongoose'); 

//Create an object for the employeee Schema (employeeSchema) and inside the constructor specify the structure 
var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    city: {
        type: String
    }
});

/*Register the Schema inside mongoose by calling the model function,pass in parameters ,
specify the name of the Schema "Employee" and the Schema Object (employeeSchema)*/
mongoose.model('Employee', employeeSchema);
