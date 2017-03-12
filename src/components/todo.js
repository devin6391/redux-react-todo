import React, {Component} from "react"

export class Todo extends Component {
  render() {
    console.log(this.props);
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          display: 'flex',
          width: '300px',
          height: '40px',
          backgroundColor: '#ead320',
          marginTop: "5px",
          boxShadow: '1px 1px 7px rgba(0,0,0,0.5)'
        }}
      >
        <span style={{margin: "auto"}}>
          {this.props.text}
        </span>
      </li>
    )
  }
}
