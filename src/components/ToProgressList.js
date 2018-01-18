import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const ToProgressList = ({ todos, onToProgressClick,onBackTodo }) => (
  <div className="container">
  
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onToProgressClick(todo.id)}
        BackClick={()=>onBackTodo(todo.id)}
      />
    )}
  </div>
)

ToProgressList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,  
  }).isRequired).isRequired, 
}

export default ToProgressList
