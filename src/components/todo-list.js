import React, {Component} from "react"
import { connect } from "react-redux"

import { Todo } from "./todo"
import { toggleTodo } from "../actions"

@connect(
  (state) => {
    return {
      todos: state.todos
    }
  },
 (dispatch) => {
   return {
     onTodoClick: (id) => {
        dispatch(toggleTodo(id))
      }
   }
 }
)
export class TodoList extends Component {
  makeTodo(todo) {
    return (
      <Todo
        key={todo.id}
        {...todo}
        onClick={(e) => { onTodoClick(todo.id) }} />
    )
  }
  render() {
    return (
      <ul>
        {
          this.props.todos.map((todo) => {
            this.makeTodo(todo)
          })
        }
      </ul>
    )
  }
}
