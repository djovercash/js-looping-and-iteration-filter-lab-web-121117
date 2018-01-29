// Code your solution in this file

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (collection, name) {
  return collection.filter(function (dName) {
    return dName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (collection, letters) {
  return collection.filter(function (nLetters) {
    return nLetters.startsWith(letters);
  });
}

function matchName (collection, name) {
  return collection.filter(function (driver) {
    return driver.name === name;
  });
}
