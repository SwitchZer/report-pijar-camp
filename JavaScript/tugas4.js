const storedObjects = {};

const addObjectToStoredObjects = (key, value) => {
  storedObjects[key] = value;
};

addObjectToStoredObjects("nama", "Pratama");
addObjectToStoredObjects("kota", "Jakarta");

console.log(storedObjects);

const printSquare = (num) => {
  for (let i = 0; i < num; i++) {
    let row = "";

    for (let j = 0; j < num; j++) {
      row += "*";
    }

    console.log(row);
  }
};

printSquare(6);

const returnFirstName = (fullname) => {
  const firstName = fullname.split(" ")[0];
  return firstName;
};
console.log(returnFirstName("Alfred Zagoto"));

const returnDay = (clock) => {
  if (clock >= 5 && clock <= 12) {
    return "pagi";
  } else if (clock >= 13 && clock <= 15) {
    return "siang";
  } else if (clock >= 16 && clock <= 18) {
    return "sore";
  } else if ((clock >= 19 && clock <= 24) || (clock >= 0 && clock <= 4)) {
    return "malam";
  } else {
    return "jam tidak valid";
  }
};
console.log(returnDay(9));
