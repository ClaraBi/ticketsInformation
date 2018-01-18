import { connect } from 'react-redux' 
// import ToDoneList from '../components/ToProgressList'

import {backToProgress} from '../actions/index'
import ToDoneList from '../components/ToDoneList'

const getVisibleToDone = (todos, filter) => {
  return todos.filter(t => t.completed)
}
 
const mapStateToProps = (state) => ({
  todos: getVisibleToDone(state.todos, state.visibilityFilter), 
})
 

const mapDispatchToProps = {
  onBackToProgress: backToProgress, 
}

 
export const VisibleToDoneList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoneList)

export default VisibleToDoneList 