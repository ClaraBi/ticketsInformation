import React, { Component} from 'react'
import {connect} from 'react-redux' 
import AddTodo from './AddTodo_form'
import VisibleTodoList from '../containers/VisibleTodoList'
import VisibleToprogressList from '../containers/VisibleToprogressList'
import VisibleToDoneList from '../containers/VisibleToDoneList'
import './components.css'

import { bindActionCreators } from 'redux'; 
import { addTodo } from '../actions';
import AddTodoImport from '../containers/AddTodo_import'

 
//const App = () => (
class App extends Component{

  componentDidMount() {
    <AddTodoImport />
}

 render(){
   return(
  <div className="row">
    <div className="container">
      <h4>Ticket Information</h4>
      <hr/>
      <div ><AddTodoImport /></div>
      <div className="col-lg-6 col-md-6"><AddTodo /></div> 
      <div className="col-6-sm col-md-2">Todo List<VisibleTodoList /> </div>
      <div className="col-6-sm col-md-2">Toprogress List<VisibleToprogressList /></div>
      <div className="col-6-sm col-md-2">ToDone List<VisibleToDoneList /></div>
    </div>
  </div>
   )
 }
}
  
export default App;
//<Footer />