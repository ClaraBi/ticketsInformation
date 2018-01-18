import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo' 
const TodoList = ({ todos, onTodoClick }) => (
  <div className="container">
    
    {todos.map(todo =>
      <Todo
      
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )} 
  </div>
)
// class TodoList extends React.Component{
//   render() {
//     const { todos, onTodoClick }=this.props;
//     return (
//       <div className="container">
    
//         {todos.map(todo =>
//         <Todo
//           key={todo.id}
//           {...todo}
//           onClick={() => onTodoClick(todo.id)}
//         />
//         )} 
//       </div>
//     )
//   }


// }


TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,  
  }).isRequired).isRequired,
  //onTodoClick: PropTypes.func.isRequired
}

export default TodoList
