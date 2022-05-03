var bodyParser = require('body-parser');
var data = [{item: 'get milk'}, {item: 'walk dog'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});
module.exports = function(app){
//set up request handlers
app.get('/todo',(req,res) =>{
    res.render('todo',{todos: data});
});
//a post request eg when the user wants to add a todo
app.post('/todo', urlencodedParser, (req,res) =>{
    console.log(req.body);
    data.push(req.body);
    res.json(data);
});
app.delete('/todo/:item',(req,res) =>{
    data = data.filter((todo) =>{
        return todo.item.replace(/ /g, '-') != req.params.item;
    });
    res.json({todos: data});
});
};
//the app param is the express app made in the app.js