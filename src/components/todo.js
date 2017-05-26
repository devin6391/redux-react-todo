import React, {Component} from "react"
import { Link } from 'react-router-dom'

export class Todo extends Component {
  render() {
    return (
      <li
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
        }}
        className="todo-list-item"
      >
        <Link to={"/" + this.props.id} style={{margin: "auto"}}>
          {this.props.text}
        </Link>
        <input
          type='checkbox'
          checked={this.props.completed}
          onChange={this.props.onClick} />
      </li>
    )
  }
}
