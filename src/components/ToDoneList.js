import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const ToDoneList = ({ todos,onBackToProgress }) => (
  <div className="container">
   
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo} 
        BackClick={()=>onBackToProgress(todo.id)}
       
      />
    )}
  </div>
)

ToDoneList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,  
  }).isRequired).isRequired, 
}

export default ToDoneList
