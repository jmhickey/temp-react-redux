import * as rest from './baseApi';

class GenderApi {
  static getAllGenders() {
    return rest.get('genders');
  }
}

export default GenderApi;
