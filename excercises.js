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

// Problem

/* - Input : a21b23c45a34d56
- Output : a55b23c34d56
- Explanation : Each 3 characters are key : value pairs of letter and its value, so in the input , ‘a’ is encountered twice its corresponding value is added and given out in the result
*/

const input = "a21b23c45a34d56";

const getKeysAndValues = (str) => {
  const res = {};
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (isNaN(element)) {
      if (res[element]) {
        res[element] += 1;
      } else {
        res[element] = 1;
      }
    }
  }
  return res;
};

console.log(getKeysAndValues(input));

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
