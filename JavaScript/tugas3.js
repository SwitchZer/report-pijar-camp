const printOddNumber = (num) => {
  for (i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};

printOddNumber(100);

function printPijarCamp(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("pijarcamp");
    } else if (i % 3 === 0) {
      console.log("pijar");
    } else if (i % 5 === 0) {
      console.log("camp");
    } else {
      console.log(i);
    }
  }
}

printPijarCamp(21);

const combineArray = (array1, array2) => {
  return [...array1, ...array2];
};

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = combineArray(array1, array2);
console.log(combinedArray);

const combineObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

const obj1 = { name: "John", age: 25 };
const obj2 = { city: "New York", country: "USA" };
const combinedObjects = combineObjects(obj1, obj2);
console.log(combinedObjects);
