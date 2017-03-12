import fetchFn from "fetch-ponyfill"
const { fetch, Headers, Request, Response } = fetchFn();

import httpBase from "../../http-base"
import { todoHeader } from "./todo-header"

const todoUrl = `${httpBase}/todos`;

let todoHeaders = todoHeader();
console.log("todo headers: ", todoHeaders);
let baseReqOptions = {
  method: "GET",
  credentials: 'same-origin',
  // headers: todoHeaders,
  mode: "cors",
  cache: "default"
}

export let todoReq = (reqOptions, overwrite) => {
  let newReqOptions = reqOptions || {};
  let options = Object.assign({}, baseReqOptions, newReqOptions);
  if(overwrite) {
    options = newReqOptions;
  }
  return fetch(todoUrl, options);
}
