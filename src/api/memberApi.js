import * as rest from './baseApi';

class MemberApi {
  static getAllMembers() {
    return rest.get('members');
  }

  static saveMember(member) {
    return member.id ? rest.put(`members/${member.id}`, member) : rest.post('members', member);
  }

  static deleteMember(memberId) {
    return rest.del(`members/${memberId}`);
  }
}

export default MemberApi;
