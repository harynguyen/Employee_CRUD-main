const mongoose = require('mongoose');
var validator = require("email-validator");

var productSchema = new mongoose.Schema({
   name: {
        type: String,
        // required: 'This field is required'
    },
    description: {
        type: String
    },
    // image: {
    //     type: String
    // },
    price: {
        type: String
    }
})

// custom validation for email

// productSchema.path('email').validate((val) => {
//     return validator.validate(val);
// }, 'Invalid Email');

mongoose.model('Product', productSchema);