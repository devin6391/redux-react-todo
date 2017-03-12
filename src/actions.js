import fetchFn from "fetch-ponyfill"
const { fetch, Headers, Request, Response } = fetchFn();

import { todoReq } from "./ext-apis/fetch/todo/todo-req"

export const REQUEST_TODOS = 'REQUEST_TODOS'
export const CREATE_TODO = "CREATE_TODO";
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

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

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
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
