import { REQUEST_ST, GET_ST, FAILED_ST, TOGGLE_TODO } from '../actions';

const initialState = {
  isFetching: false,
  invalid: false,
  task: {}
}

export function singleTask(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ST:
      return Object.assign({}, state, {
        isFetching: true,
        invalid: false
      });
      break;
    case GET_ST:
      return Object.assign({}, state, {
        isFetching: false,
        task: Object.assign({}, action.task)
      });
      break;
    case FAILED_ST:
      return Object.assign({}, state, {
        invalid: true
      });
      break;
    case TOGGLE_TODO:
      let task = Object.assign({}, state.task, {
        completed: !state.task.completed,
        createdAt: (new Date()).getTime()
      });
      return Object.assign({}, state, {
        task: task
      })
    default:
      return state;
  }
}
