import fetchFn from "fetch-ponyfill"
const { fetch, Headers, Request, Response } = fetchFn();

import httpBase from "../../http-base"
import { stHeader } from "./single-task-header"

const todoUrl = (taskId) => {
  return `${httpBase}/todos/${taskId}?_expand=author`;
}

const singleTaskUpdate = (taskId) => {
  return `${httpBase}/todos/${taskId}`;
}

let stHeaders = stHeader();
let baseReqOptions = {
  method: "GET",
  // credentials: 'omit',
  mode: "cors",
  // cache: "default"
}

export let singleTaskReq = (taskId, reqOptions, overwrite) => {
  let newReqOptions = reqOptions || {};
  let options = Object.assign({}, baseReqOptions, newReqOptions);
  if(overwrite) {
    options = newReqOptions;
  }
  let url = options.method == "GET" ? todoUrl(taskId) : singleTaskUpdate(taskId);
  return fetch(url, options);
}
