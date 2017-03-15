import React, {Component} from "react"
import { connect } from "react-redux"

import { setVisibilityFilter } from "../actions"

@connect(
  (state, ownProps) => {
    return {
      active: ownProps.filter === state.visibilityFilter
    }
  },
  (dispatch, ownProps) => {
    return {
      onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
      }
    }
  }
)
export class FilterLink extends Component {
  render() {
    if (this.props.active) {
      return <span>{this.props.children}</span>
    }
    return (
      <a href="#"
         onClick={e => {
           e.preventDefault();
           this.props.onClick()
         }}
      >
        {this.props.children}
      </a>
    )
  }
}
