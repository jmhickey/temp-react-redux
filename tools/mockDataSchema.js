export const schema = {
  "type": "object",
  "properties": {
    "members": {
      "type": "array",
      "minItems": 4,
      "maxItems": 8,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName"
          },
          "genderId": {
            "type": "string",
            "pattern": "M|F"
          },
          "birthDate": {
            "type": "string",
            "pattern": "^(0[1-9]|1[012])/(0[1-9]|[12][0-9]|3[01])/19[3-9]\\d$"
          }
        },
        required: ['id', 'firstName', 'lastName', 'genderId', 'birthDate']
      }
    },
    "genders": {
      "type": "array",
      "minItems": 2,
      "maxItems": 2,
      "uniqueItems": true,
      "items": {
        "enum": [
          {
            "id": "F",
            "gender": "Female"
          },
          {
            "id": "M",
            "gender": "Male"
          }
        ]
      }
    }
  },
  required: ['members','genders']
};
