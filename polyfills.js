// polyfill for Array map method
const myMap = (Array.prototype.myMap = function (cb) {
  const myArr = this;
  const res = [];
  for (let index = 0; index < myArr.length; index++) {
    const eachRes = cb(myArr[index], index, myArr);
    res.push(eachRes);
  }
  return res;
});

// Polyfill for filter method
const myFilter = (Array.prototype.myFilter = function (cb) {
  const myArr = this;
  const res = [];
  for (let index = 0; index < myArr.length; index++) {
    if (cb(myArr[index], index, myArr)) {
      res.push(myArr[index]);
    }
  }
  return res;
});

// Polyfill for forEach
const myforEach = (Array.prototype.myforEach = function (cb) {
  const myArr = this;
  for (let index = 0; index < myArr.length; index++) {
    cb(myArr[index], index, myArr);
  }
});

// Polyfill for asynchronous forEach
const myAsyncforEach = (Array.prototype.myAsyncforEach = async function (cb) {
  const myArr = this;
  for (let index = 0; index < myArr.length; index++) {
    await cb(myArr[index], index, myArr);
  }
});

export { myMap, myforEach, myAsyncforEach, myFilter };
