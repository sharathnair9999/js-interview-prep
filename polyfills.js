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
