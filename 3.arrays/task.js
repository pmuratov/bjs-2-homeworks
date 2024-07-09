function compareArrays(arr1, arr2) {
  return arr1.every(function (element, index) {
    return element === arr2[index] && arr1.length === arr2.length;
  });
}
//    значением элемента, индексом элемента и массивом, по которому осуществляется проход.
module.exports = {
  compareArrays,
};

function getUsersNamesInAgeRange(users, gender) {
  let peopleFiltered = users.filter((person) => person.gender === gender);

  if (peopleFiltered.length) {
    return (
      peopleFiltered.reduce((acc, person) => acc + person.age, 0) /
      peopleFiltered.length
    );
  } else {
    return 0;
  }
}

module.exports = {
  getUsersNamesInAgeRange,
};
