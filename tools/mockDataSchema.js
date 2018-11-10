export const schema = {
  "type": "object",
  "properties": {
    "authors": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
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
          "birthdate": {
            "type": "string",
            "chance": {
              "birthday": {
                "string": true
              }
            }
          }
        },
        required: ['id', 'firstName', 'lastName', 'birthdate']
      }
    },
    "courses": {
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
          "title": {
            "type": "string",
            "minLength": 5,
            "maxLength:": 30,
            "faker": "commerce.productName"
          },
          "watchHref": {
            "type": "string",
            "chance": {
              "url": {
                "domain": "pluralsight.com"
              }
            }
          },
          "authorId": {
            "type": "string",
            "pattern": "^[a-zA-Z]{5,10}$"
          },
          "length": {
            "type": "string",
            "pattern": "\\d\\d:\\d\\d"
          },
          "category": {
            "type": "string",
            "faker": "commerce.department"
          }
        },
        required: ['id', 'title', 'watchHref', 'authorId', 'length', 'category']
      }
    }
  },
  required: ['courses']
};
