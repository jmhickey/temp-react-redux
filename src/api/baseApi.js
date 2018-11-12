import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function get(url) {
  return fetch(baseUrl + url).then(onSuccess).catch(onError);
}

export function put(url, obj) {
  const request = new Request(baseUrl + url, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(obj)
  });

  return fetch(request).then(onSuccess).catch(onError);
}

export function post(url, obj) {
  const request = new Request(baseUrl + url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(obj)
  });
  return fetch(request).then(onSuccess).catch(onError);
}

// Can't call func delete since reserved word.
export function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess).catch(onError);
}

function onSuccess(response) {
  if (response.status == 500) {
    return response.json().then(err => {throw err;});
  }
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
  throw error.error;
}
