import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const members = [
  {
    id: 1,
    lastName: "Doe",
    firstName: "John",
    genderId: "M",
    birthDate: "06/15/1972"
  },
  {
    id: 2,
    lastName: "Smith",
    firstName: "Bob",
    genderId: "M",
    birthDate: "10/10/1951"
  },
  {
    id: 3,
    lastName: "Roe",
    firstName: "Jane",
    genderId: "F",
    birthDate: "02/01/1985"
  }
];

const generateId = (member) => {
  return Math.max(...members.map(m => m.id))+1;
};

class InMemoryMemberServer {
  static getAllMembers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], members));
      }, delay);
    });
  }

  static saveMember(member) {
    member = Object.assign({}, member); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minLastNameLength = 2;
        if (member.lastName.length < minLastNameLength) {
          reject(`Last Name must be at least ${minLastNameLength} characters.`);
        }

        if (member.id) {
          //Update member
          const existingMemberIndex = members.findIndex(a => a.id == member.id);
          members.splice(existingMemberIndex, 1, member);
        } else {
          //Create member
          member.id = generateId(member);
          members.push(member);
        }

        resolve(member);
      }, delay);
    });
  }

  static deleteMember(memberId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfMemberToDelete = members.findIndex(member => {
          member.id == memberId;
        });
        members.splice(indexOfMemberToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default InMemoryMemberServer;
