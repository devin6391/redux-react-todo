import React, {Component} from "react"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import fontAwesome from "../styles/fontawesome/font-awesome.scss"
import mystyle from "../styles/mystyle.scss"

import { Header } from "./header"
import { TodoList } from "./todo-list"
import { Footer } from "./footer"

export class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={TodoList} />
            <Route render={props => (
              <div className='not-found'>
                <h1>`Couldn't find this route`</h1>
              </div>
            )} />
          </Switch>
        </div>
      </Router>
      <Footer />
      </div>
    );
  }
}
