import { REQUEST_TODOS, CREATE_TODO, ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
  isFetching: false,
  invalid: false,
  items: []
}

export function todos(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TODOS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case CREATE_TODO:
      return Object.assign({}, state, {
        isFetching: false,
        items: [...action.todos]
      })
    case ADD_TODO:
      return Object.assign({}, state, {
        items: [...state.itmes, {
          text: action.text,
          completed: false,
          createdAt: Date.now()
        }]
      })
    case TOGGLE_TODO:
      let items = state.items.map((todo) => {
        if (todo.id === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
      return Object.assign({}, state, {items})
    default:
      return state
  }
}
