const namaLengkap = "Alfred Cristian Nugraha Zagoto";
const email = "alfredcnzagoto@gmail.com";
const noHandphone = "082272106860";
const biodata = {
  namaLengkap,
  email,
  noHandphone,
};

const storedObjects = {};

const addObjectToStoredObjects = (key, value) => {
  storedObjects[key] = value;
};

addObjectToStoredObjects("printNama", biodata.namaLengkap);
addObjectToStoredObjects("printEmail", biodata.email);
addObjectToStoredObjects("printPhoneNumber", biodata.noHandphone);

console.log(storedObjects);

const greeting = (
  clock,
  functionReturnDay,
  fullName,
  functionReturnFirstName
) => {
  const dayGreeting = functionReturnDay(clock);
  const firstName = functionReturnFirstName(fullName);
  console.log(`Selamat ${dayGreeting}, ${firstName}`);
};
const functionReturnDay = (clock) => {
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
const functionReturnFirstName = (fullName) => {
  const firstName = fullName.split(" ")[0];
  return firstName;
};

const fullName = "Alfred Zagoto";
const clock = 0;

greeting(clock, functionReturnDay, fullName, functionReturnFirstName);

const printTriangleWithNumber = (n) => {
  if (typeof n !== "number" || isNaN(n)) {
    console.log("Parameter harus angka!");
    return;
  }

  let output = "";

  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      output += j + " ";
    }
    output += "\n";
  }

  console.log(output);
};

printTriangleWithNumber(5);
printTriangleWithNumber(3);
printTriangleWithNumber("7");
printTriangleWithNumber("tiga");
printTriangleWithNumber([]);
printTriangleWithNumber(NaN);
