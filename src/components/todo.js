import React, {Component} from "react"

export class Todo extends Component {
  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
        }}
        className="todo-list-item"
      >
        <span style={{margin: "auto"}}>
          {this.props.text}
        </span>
      </li>
    )
  }
}
