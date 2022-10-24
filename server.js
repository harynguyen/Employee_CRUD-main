require('./models/db');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
const employeeController = require('./controller/employeeController');
const productController = require('./controller/productController');
// const supplierController = require('./controller/supplierController');
const categoryController = require('./controller/categoryController');
//  var Category = require("../models/category"); [[category]]
 
var app = express();
 
app.use(express.static(__dirname + '/public'));
// app.use('css', express.static(__dirname + 'public/css'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.set('views', path.join(__dirname, '/views/'))

app.engine('hbs', expressHandlebars({
    extname: 'hbs', 
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname + '/views/layouts/',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))


app.set('view engine', 'hbs');
const port = process.env.PORT || 4111
app.listen(port, () => {
    console.log("Server is listening on Port 4111");
})
app.use('/employee', employeeController);
app.use('/product', productController);
// app.use('/supplier', supplierController);
app.use('/category', categoryController);
// app.use('/home', homeController);

