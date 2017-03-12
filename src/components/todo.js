import React, {Component} from "react"

export class Todo extends Component {
  render() {
    console.log(this.props);
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none'
        }}
      >
        {this.props.text}
      </li>
    )
  }
}
