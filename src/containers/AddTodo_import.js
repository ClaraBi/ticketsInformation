import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import '../components/components.css'

//let AddTodoImport = ({ dispatch }) => {
let AddTodoImport = ({ dispatch }) => {
  
  console.log('AddTodoImport') 
  var file = require('../data/db.json');
  //dispatch(addTodo(title.value, description.value, assignee.value, critically.value, date.value))
  console.log(file.todos.length)
  for (var i=0;i<file.todos.length;i++){
    //console.log(file.todos[i].title)
    dispatch(addTodo(file.todos[i].title, file.todos[i].description, file.todos[i].assignee, file.todos[i].critically, file.todos[i].date, file.todos[i].new, file.todos[i].inprogress,file.todos[i].complete));
  };
 
  return null;
}
AddTodoImport = connect()(AddTodoImport)

export default AddTodoImport
