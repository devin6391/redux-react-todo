import React, {Component} from "react"
import { NavLink } from 'react-router-dom'

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          path: "/",
          text: "Todo List - All"
        }
      ]
    }
  }
  render() {
    return (
      <div className='app-header'>
        <ul>
          {this.state.list.map(todoPath => (
            <li key={`${todoPath.id}`}>
              <NavLink
                to={`${todoPath.path}`}
                activeClassName='active-route'>
                {`${todoPath.text}`}</NavLink>
              </li>
          ))}
        </ul>
      </div>
    )
  }
}
