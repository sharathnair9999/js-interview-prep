import {
  myMap,
  myforEach,
  myAsyncforEach,
  myFilter,
  myReduce,
} from "./polyfills.js";
//------------------- Default Array Methods Results in Javascript ---------------------------

// A sample array of numbers
const sampleArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// A sample array of objects
const details = [
  { name: "Sharath", delay: 1000 },
  { name: "Tanay", delay: 2000 },
  { name: "Akanksha", delay: 500 },
];

// A sample promise that resolves after a certain time
const asyncOperation = async (name, delay = 1000) => {
  return new Promise((res) =>
    setTimeout(() => {
      res(`Hey ${name}! This will resolve after ${delay / 1000} seconds`);
    }, delay)
  );
};

// map
const defaultMapResult = sampleArr.map((item) => item + 1);

// console.log("Default map result  : " + defaultMapResult);

// filter
const defaultFilterResult = sampleArr.filter((item) => item % 2 !== 0);

// console.log(`Default Filter Result : ${defaultFilterResult}`);

// reduce
const defaultReduceResult = sampleArr.reduce((acc, curr) => {
  return curr % 2 === 0 ? (acc += curr) : acc;
});

console.log(`Default Reduce Result : ${defaultReduceResult}`);

// forEach
const actualForEachReturns = [];
details.forEach(({ name, delay }) => {
  const ans = `Hey ${name}! This will return after ${delay / 1000} seconds`;
  actualForEachReturns.push(ans);
});
// console.log(actualForEachReturns);

//------------------- Polyfill Array Methods Results by Me ---------------------------

// Polyfill result for Map
const myMapResult = sampleArr.myMap((item) => item + 1);

// console.log("My map result  : " + myMapResult);

// Polyfill result for filter
const myFilterResult = sampleArr.myFilter((item) => item % 2 !== 0);
// console.log(`My Filter Result ${myFilterResult} `);

// --------------------------------------------------------------------------------------

// Polyfill result for forEach

const myForEachResults = [];
details.myforEach(({ name, delay }) => {
  const ans = `Hey ${name}! This will return after ${delay / 1000} seconds`;
  myForEachResults.push(ans);
});
// console.log(myForEachResults);

// async operation on array prototype methods doesnt work as internally they dont support async await

// For example - using the async function written in line number 14 :

// Async forEach polyfill results
const polyfillForEachReturns = [];
(async () => {
  await details.myAsyncforEach(async ({ name, delay }) => {
    const ans = await asyncOperation(name, delay);
    polyfillForEachReturns.push(ans);
  });
  // console.log(polyfillForEachReturns);
})();

// Polyfill for reduce

const myReduceResult = sampleArr.myReduce((acc, curr) => {
  return curr % 2 === 0 ? (acc += curr) : acc;
});

console.log(`My Reduce Result : ${myReduceResult}`);
