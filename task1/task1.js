const target = {};

const handler = {
  set(obj, prop, value) {
    if (prop === "name") {
      if (typeof value !== "string" || value.length !== 7) {
        throw new Error("Name must be a string of 7 characters");
      }
    } else if (prop === "address") {
      if (typeof value !== "string") {
        throw new Error("Address must be a string");
      }
    } else if (prop === "age") {
      if (typeof value !== "number" || value < 25 || value > 60) {
        throw new Error("Age must be a number between 25 and 60");
      }
    } else {
      throw new Error(`Property "${prop}" is not allowed.`);
    }

    obj[prop] = value;
    return true;
  },

  get(obj, prop) {
    if (prop in obj) {
      console.log(`property: ${prop}`);
      return obj[prop];
    } else {
      return `"${prop}" is not defined.`;
    }
  },
};

const user = new Proxy(target, handler);

user.name = "Nesmafa";
user.address = "shebien";
user.age = 35;

console.log(user.name);
console.log(user.address);
console.log(user.age);
console.log(user.email);
