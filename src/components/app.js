import React, {Component} from "react"

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
