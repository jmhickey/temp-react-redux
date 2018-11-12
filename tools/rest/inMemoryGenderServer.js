import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const genders = [
  {
    id: "F",
    gender: "Female"
  },
  {
    id: "M",
    gender: "Male",
  }
];

class InMemoryGenderServer {
  static getAllGenders() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], genders));
      }, delay);
    });
  }
 }

export default InMemoryGenderServer;
