import fetchFn from "fetch-ponyfill"
const { fetch, Headers, Request, Response } = fetchFn();

import { todoReq } from "./ext-apis/fetch/todo/todo-req"
import { singleTaskReq } from "./ext-apis/fetch/single-task/single-task-req"

export const REQUEST_TODOS = 'REQUEST_TODOS'
export const CREATE_TODO = "CREATE_TODO";
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const REQUEST_ST = 'REQUEST_ST';
export const GET_ST = 'GET_ST';
export const FAILED_ST = 'FAILED_ST';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

function toggleTaskStatus(index) {
  return { type: TOGGLE_TODO, index }
}

export function toggleTodo(todoTask) {
  return function(dispatch) {
    dispatch(toggleTaskStatus(todoTask.id));
    let headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Origin": "*"
    };
    let { id, completed, text, authorId, description } =  todoTask;
    completed = !completed
    let newTodoTask = { id, completed, text, authorId, description };
    return singleTaskReq(newTodoTask.id, {headers: headers, method: "PUT", body: JSON.stringify(newTodoTask)})
      // .then(res => res.json())
      // .then(json => dispatch(receiveSingleTask(json.body)))
  }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

function requestTodos() {
  return {
    type: REQUEST_TODOS
  }
}

function receiveTodos(todos) {
  return {
    type: CREATE_TODO,
    todos
  }
}

export function fetchTodos() {
  return function(dispatch) {
    dispatch(requestTodos());
    return todoReq()
      .then(res => res.json())
      .then(json => dispatch(receiveTodos(json.body)))
  }
}

function requestSingleTask() {
  return {
    type: REQUEST_ST
  }
}

function receiveSingleTask(task) {
  return {
    type: GET_ST,
    task
  }
}

export function fetchSingleTask(taskId) {
  if(!taskId) {
    return {
      type: FAILED_ST
    }
  }
  return function(dispatch) {
    dispatch(requestSingleTask());
    return singleTaskReq(taskId)
      .then(res => res.json())
      .then(json => dispatch(receiveSingleTask(json.body)))
  }
}
