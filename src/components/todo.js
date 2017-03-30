import React, {Component} from "react"

export class Todo extends Component {
  render() {
    return (
      <li
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
        }}
        className="todo-list-item"
      >
        <span style={{margin: "auto"}}>
          {this.props.text}
        </span>
        <input
          type='checkbox'
          checked={this.props.completed}
          onChange={this.props.onClick} />
      </li>
    )
  }
}
