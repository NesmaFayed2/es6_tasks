// Create an iterable object by implementing @@iterator method
// i.e. Symbol.iterator, so that you can use for..of and retrieve its
// properties. retrieving the object properties and its values.

let object = {
  name: "nesma",
  age: 23,
  track: "mearn",
};

function* handleDisplay() {
  for (let key in this) {
    yield this[key];
  }
  return;
}

object[Symbol.iterator] = handleDisplay;
let iterator = object[Symbol.iterator];

for (let value of object) {
  console.log(value);
}
