var express = require('express');
var todoController = require('./controllers/todoController');
//whatever is in the module.exports of the controller will be stored here
var app = express();
app. set('view engine','ejs');
app.use(express.static('./public'));
app.listen(3000);
//fire the contoller
todoController(app);
console.log('listening from port 3000');