// Remove duplicate elements from Array

const arr = [1, 1, 1, 2, 3, 4, 4, 5, 6, 7, 7, 7];

// Mutation
function deduplicate(givenArr) {
  for (let index = 0; index < givenArr.length; index++) {
    while (givenArr[index] === givenArr[index + 1]) {
      givenArr.splice(givenArr[index], 1);
    }
  }
}

deduplicate(arr);
// console.log(`By mutating:  ${arr}`);

// Without mutating
const arr2 = [1, 1, 1, 2, 3, 44, 44, 33, 21, 44, 21, 19];
const res = arr2.filter((ele, ind) => arr2.lastIndexOf(ele) === ind);
// console.log(`Pure result ${res}`);

// ---------------------------------------
// Ex : Add a div in the dom, on click on the div, it should be edittable, and the content written in the edittable field should be saved in localstorage when clicked outside the edittable div

// const body = document.querySelector("body");

// const theDiv = document.createElement("div");
// theDiv.setAttribute("id", "theDiv");
// let previousText = localStorage.getItem("details");
// theDiv.innerText =
//   previousText?.length > 0 ? previousText : "Click me to add text";
// body.appendChild(theDiv);
// const theElem = document.getElementById("theDiv");
// const makeDivEdittable = () => {
//   theElem.setAttribute("contenteditable", true);
//   theElem.addEventListener("blur", () => {
//     localStorage.setItem("details", `${theElem.innerText}`);
//   });
// };
// theElem.addEventListener("click", makeDivEdittable);

// -------------------------------------------------------------------------------------------------------

// -------------------------Shallow Copy Vs Deep Copy----------------------------------------------------
// let obj1 = {
//   person1: {
//     firstName: "Sharath",
//   },
//   a: 2,
// };

// let shallowCopy = JSON.parse(JSON.stringify(obj1));

// shallowCopy.a = 5;
// shallowCopy.person1.firstName = 8;

// console.log(obj1);
// console.log(shallowCopy);

// --------------------------------------------------------------------------------------------------------

const arr3 = [2, 3, 4, 5];

// o/p: [12,15,18,21]

// Array.prototype.sum = function (num) {
//   let arr = this;
//   return arr.map((each) => each + num);
// };

// Array.prototype.multiply = function (num) {
//   let arr = this;
//   return arr.map((each) => each * num);
// };

// console.log(arr3.sum(2).multiply(3));

// --------------------------------------------------------------------------------------------------------

// Count the numbers present inside this array till the very last nested array.
const nestedArray = [
  "a",
  1,
  function () {},
  [2, "b", function () {}, [4, function () {}, "sharath"]],
  3,
  "A",
];

// output : 4

// Function to flatten an array
const returnNestedElementsIntoArray = (arr, ans = []) => {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (typeof element === "object") {
      returnNestedElementsIntoArray(element, ans);
    } else {
      ans.push(element);
    }
  }
  return ans;
};

console.log();
const customFlattenedArray = returnNestedElementsIntoArray(nestedArray);
const defaultFlatArray = nestedArray.flat(Infinity);

console.log(customFlattenedArray);
console.log(defaultFlatArray);

const totalNums1 = customFlattenedArray.filter((ele) => !isNaN(ele)).length;
const totalNums2 = customFlattenedArray.filter((ele) => !isNaN(ele)).length;

console.log(totalNums1);
console.log(totalNums2);

// ----------------------------------------------------------------------------------------------------

/* - Input : a21b23c45a34d56
- Output : a55b23c34d56
- Explanation : Each 3 characters are key : value pairs of letter and its value, so in the input , ‘a’ is encountered twice its corresponding value is added and given out in the result
*/

const testStr = "a21b23c45a34d56";

const reverseNum = (num = "") => {
  if (num === "") return "";
  return [...num].reverse().join("");
};

const convertFromMaptoString = (map) => {
  let res = "";
  for (let [key, value] of Object.entries(map)) {
    res += `${key}${value}`;
  }

  return res;
};

const test = (str = "") => {
  if (str === "") return 0;
  const map = {};
  let num = "";

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] >= "a" && str[i] <= "z") {
      let revNum = reverseNum(num);
      num = "";
      if (map[str[i]]) {
        map[str[i]] = map[str[i]] + Number(revNum);
      } else {
        map[str[i]] = Number(revNum);
      }
    } else {
      num += str[i];
    }
  }
  return convertFromMaptoString(map);
};

console.log(test(testStr));

// ----------------------------------------------------------------------------------------------------

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const c1 = new Person("Sharath", 23);
const c2 = Person("Sharath Nair", 23);

// console.log(c1);
// console.log(c2);

// -------------------------------------------------------------------------------------------------------

// Return the elements that are not repeated from the array

const sample = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6];
function lonelyinteger(arr) {
  // Write your code here
  return arr.filter((ele, ind) => arr.indexOf(ele) === arr.lastIndexOf(ele));
}

console.log(lonelyinteger(sample));

// ------------------------------------------------------------------------------------------------

