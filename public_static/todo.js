/**
 * Created by anmol on 12/7/17.
 */


$(function () {


    let newtodo=$('#todoText');
    let addBtn=$('#addTodo');
    let listTodo=$('#listTodo');
    let deleteAll=$('#deleteTodo');

    function refreshTodos(){

        listTodo.empty();

        $.get('/todos',function(data){

            for (i of data){
                listTodo.append('<li>'+i.task+'</li>')
            }

        })

    }

    refreshTodos();

    addBtn.click(function () {

        $.post('/todos',{task:newtodo.val()},function (data) {

             if (data.success){
                 refreshTodos();
             }

        })

    })


    deleteAll.click(function () {

        $.post('/deleteAlltodos',function (data) {

            if (data.success){
                refreshTodos();
            }

        })


    })

});