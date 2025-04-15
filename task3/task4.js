// array as generator

let arr = ["nesma", "essam", "fayed"];

arr[Symbol.iterator] = function* displayHandel() {
  let i = 0;
  while (i < this.length) {
    yield this[i++];
  }
};

for (let value of arr) {
  console.log(value);
}
