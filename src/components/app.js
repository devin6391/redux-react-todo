import React, {Component} from "react"

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
