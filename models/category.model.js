const mongoose = require('mongoose');
var validator = require("email-validator");
var categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required'
    },
    description: {
        type: String
    }

})


mongoose.model('Category', categorySchema);

