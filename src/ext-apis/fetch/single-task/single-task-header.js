import fetchFn from "fetch-ponyfill"

import commonHeaders from "../common-headers"

const { fetch, Headers, Request, Response } = fetchFn();

export let stHeader = (headerObj, overwrite) => {
  let newHeader = headerObj || {};
  let headers = Object.assign({}, commonHeaders, newHeader);
  if(overwrite) {
    headers = newHeader
  }
  return new Headers(headers);
}
