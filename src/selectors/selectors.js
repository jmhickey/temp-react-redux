export function gendersFormattedForDropdown(genders) {
  return genders.map(g => {
    return {
      value: g.id,
      text: g.gender
    };
  });
}

export function genderForDisplay(genders, genderId) {
  return genders.find(gender => gender.id == genderId).gender;
}
