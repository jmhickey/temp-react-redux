import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function put(url, obj) {
  const request = new Request(baseUrl + url, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(obj)
  });

  return fetch(request).then(onSuccess, onError);
}

function post(url, obj) {
  const request = new Request(baseUrl + url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(obj)
  });
  return fetch(request).then(onSuccess, onError);
}

// Can't call func delete since reserved word.
function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}

class CourseApi {
  static getAllCourses() {
    return get('courses');
  }

  static saveCourse(course) {
    return course.id ? put(`courses/${course.id}`, course) : post('courses', course);
  }

  static deleteCourse(courseId) {
    return del(`courses/${courseId}`);
  }
}

export default CourseApi;
