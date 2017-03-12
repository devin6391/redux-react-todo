import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';
import { todos } from "./reducers/todos";
import { visibilityFilter } from "./reducers/visibility-filter";

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
