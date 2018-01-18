import { connect } from 'react-redux' 
import{ toggleToProgress } from '../actions' 
import ToProgressList from '../components/ToProgressList'

import {backToTodo} from '../actions/index'

const getVisibleToprogress = (todos, filter) => {
  return todos.filter(t => t.inprogress)
}
 
const mapStateToProps = (state) => ({
  todos: getVisibleToprogress(state.todos, state.visibilityFilter), 
})
 
const mapDispatchToProps = {
  onToProgressClick: toggleToProgress, 
  onBackTodo:backToTodo
}
 
export const VisibleToProgressList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToProgressList)

export default VisibleToProgressList 