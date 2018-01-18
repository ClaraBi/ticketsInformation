import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import '../components/components.css'

let AddTodo = ({ dispatch }) => {
  let title,description,assignee,critically,date;

  return (
    <div className="container">
      
      <form onSubmit={e => {
        e.preventDefault()
        if (!title.value.trim()) {
          return
        }
        dispatch(addTodo(title.value, description.value, assignee.value, critically.value, date.value,true,false,false))
        title.value = '',
        description.value = ''
        assignee.value = ''
        critically.value = ''
        date.value = ''
      }}>
        <div className="form-group form-block">
          <label className="col-sm-2 control-label" htmlFor="title">Title (required): </label>
          <input className="form-control input-area" ref={node=>{title=node}} />
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor="description">Description: </label>
          <input className="form-control input-area" ref={node=>{description=node}} />
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor="assignee">Assignee: </label>
          <input className="form-control input-area" ref={node=>{assignee=node}} />
        </div>
        <div className="form-group">
           <label className="col-sm-2 control-label" htmlFor="critically">Critically: </label>
           <input className="form-control input-area" ref={node=>{critically=node}} />
        </div>
        <div className="form-group">
           <label className="col-sm-2 control-label" htmlFor="date">Date: </label>
           <input type="datetime-local" className="form-control input-area" ref={node=>{date=node}} />
        </div>
        <div className="col-md-5">
          <button className="btn btn-primary" type="submit">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
