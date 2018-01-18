import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import{ toggleToProgress } from '../actions'
//import { getMessages } from '../actions/index'
import TodoList from '../components/TodoList' 

const getVisibleTodos = (todos, filter) => {
  return todos.filter(t => t.new)
}
 

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter), 
})
 

const mapDispatchToProps = {
  onTodoClick: toggleTodo, 

}
  
export const VisibleToDoneList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
 
export default VisibleToDoneList 