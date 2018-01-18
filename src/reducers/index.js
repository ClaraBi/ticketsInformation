import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
//import messages from './messages';

const todoApp = combineReducers(
{
  todos,
  visibilityFilter,
  //messages
}
)

export default todoApp