import { combineReducers } from 'redux';
import { todos } from "./reducers/todos";
import { singleTask } from "./reducers/single-task";
import { visibilityFilter } from "./reducers/visibility-filter";

const todoApp = combineReducers({
  visibilityFilter,
  todos,
  singleTask
})

export default todoApp
