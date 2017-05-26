import React, { Component } from "react"
import { connect } from "react-redux"

import { toggleTodo, fetchTodos, VisibilityFilters, fetchSingleTask } from "../actions"

@connect(
  (state) => {
    return {
      todos: state.todos,
      visibility: state.visibilityFilter,
      singleTask: state.singleTask
    }
  },
  (dispatch) => {
    return {
      getSingleTask: (taskId) => {
        dispatch(fetchSingleTask(taskId))
      },
      toggleComplete: (task) => {
        dispatch(toggleTodo(task))
      },
    }
  }
)
export class SingleTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {}
    }
  }
  componentDidMount() {
    this.props.getSingleTask(this.props.match.params.taskId);
  }
  checkIfProperTask(taskId) {
    let yes = false;
    this.props.todos.items.forEach((todo) => {
      if(todo.id == taskId) {
        yes = todo;
        return false;
      }
    });
    return yes;
  }
  returnTime(timeStamp) {
    let date = new Date(timeStamp);
    return date.toString();
  }
  returnAuthor() {
    try {
      let name = this.props.singleTask.task.author.firstName + " " + this.props.singleTask.task.author.lastName;
      return (
        <div class='author-detail'>
          <p><b>Autor:</b> <span>{name}</span></p>
        </div>
      )
    }catch(e) {
      return <p>No Author Detail</p>
    }
  }
  returnStatus() {
    try {
      return (
        <div class='task-status'>
          <p><b>Created at:</b> {this.returnTime(this.props.singleTask.task.createdAt)}</p>
          <p><b>Task Status:</b> {this.props.singleTask.task.completed ? "Completed" : "Pending"}</p>
        </div>
      )
    }catch(e) {
      return <p>No Status Detail</p>
    }
  }
  render() {
    return (
      <div id='single-task'>
        <h1>Task: {this.props.singleTask.task.text}</h1>
        <p>Task Desc: {this.props.singleTask.task.description}</p>
        {
          this.returnStatus()
        }
        {
          this.returnAuthor()
        }

        <button onClick={ this.props.toggleComplete.bind(this, this.props.singleTask.task) } >
          { this.props.singleTask.task.completed ? "Change to pending" : "Complete" }
        </button>
      </div>
    )
  }
}
