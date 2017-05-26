import React, {Component} from "react"
import { connect } from "react-redux"

import { Todo } from "./todo"
import { toggleTodo, fetchTodos, VisibilityFilters } from "../actions"

@connect(
  (state) => {
    return {
      todos: state.todos,
      visibility: state.visibilityFilter
    }
  },
 (dispatch) => {
   return {
     onTodoClick: (task) => {
       dispatch(toggleTodo(task))
     },
     getTodo: () => {
       dispatch(fetchTodos())
     }
   }
 }
)
export class TodoList extends Component {
  componentDidMount() {
    this.props.getTodo();
  }
  makeTodo(todo) {
    let jsx = (
      <Todo
        key={todo.id}
        {...todo}
        onClick={(e) => { this.props.onTodoClick(todo) }} />
    )

    if(
      (this.props.visibility == VisibilityFilters.SHOW_ALL) ||
      (this.props.visibility == VisibilityFilters.SHOW_COMPLETED && todo.completed) ||
      (this.props.visibility == VisibilityFilters.SHOW_ACTIVE && !todo.completed)
    ) {
      return jsx;
    }
  }
  render() {
    return (
      <ul style={{listStyle: "none"}}>
        {
          this.props.todos.items.map((todo) => {
            return this.makeTodo(todo)
          })
        }
      </ul>
    )
  }
}
