/**
 * Created by anmol on 12/7/17.
 */

const express=require('express');
const bp=require('body-parser');
const Todos=require('./db').Todos;

const app=express();

app.use('/',express.static("__dirname","/public_static"));


app.use(bp.urlencoded({extended:true}));

app.use(bp.json());

app.get('/todos',(req,res)=>{

 Todos.findAll().then(function (todos) {
     res.send(todos);
 }).catch(function (err) {
     res.send({error:"Could Not retrieve Todos"});
 })

})

app.post('/todos', (req, res) => {
    Todos.create({
        task: req.body.task
    }).then(function () {

        res.send({success: true})

    }).catch(function (err) {

    })
})

app.listen(7890, function () {
    console.log("Server started on http://localhost:7890");
});