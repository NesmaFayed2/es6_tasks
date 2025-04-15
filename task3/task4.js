// array as generator

let arr = ["nesma", "essam", "fayed"];

arr[Symbol.iterator] = function* displayHandel() {
  let i = 0;
  while (i < this.length) {
    yield this[i++];
  }
};

for (let val of arr) {
  console.log(val);
}
