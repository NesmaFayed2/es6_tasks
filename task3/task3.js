//object iterator

let object = {
  name: "nesma",
  age: 23,
  track: "mearn",
  [Symbol.iterator]: function () {
    const keys = Object.keys(this);
    let index = 0;
    return {
      next: () => {
        if (keys.length > index) {
          const key = keys[index++];
          return { value: [key, this[key]], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (let [key, value] of object) {
  console.log(`${key} is : ${value}`);
}
