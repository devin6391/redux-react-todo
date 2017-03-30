import React, {Component} from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import fontAwesome from "../styles/fontawesome/font-awesome.scss"
import mystyle from "../styles/mystyle.scss"

import { TodoList } from "./todo-list"
import { Footer } from "./footer"

export class App extends Component {
  render() {
    return (
      <div>
      <TodoList />
      <Footer />
      </div>
    );
  }
}
