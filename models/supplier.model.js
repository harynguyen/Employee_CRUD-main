const mongoose = require('mongoose');
var validator = require("email-validator");

var supplierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required'
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    description: {
        type: String
    },
    
})

// custom validation for email

// supplierSchema.path('email').validate((val) => {
//     return validator.validate(val);
// }, 'Invalid Email');

mongoose.model('Supplier', supplierSchema);