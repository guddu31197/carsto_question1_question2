import React from 'react'

export const Question1 = () => {
  // Your task is to implement a custom extension method groupBy for arrays in JavaScript. This method should allow users to group elements of an array by a specified key selector function.

// Your implementation should closely resemble the behavior of JavaScript's reduce method for grouping elements. Here are the detailed requirements for your implementation:

// Method Signature:

// The extension method should be named groupBy.
// It should be applicable to arrays in JavaScript.
// The method should accept a single parameter: A callback function representing the key selector function.
// This function will determine the grouping key for each element in the array.
// Grouping Operation:

// Your groupBy method should group elements of the array based on the keys returned by the key selector function.
// It should return an object where each property represents a group identified by its key.
// Each group should contain an array of elements that share the same key.
// Handling Null Values:

// Your implementation should handle null values gracefully.
// If the input array is null or empty, the method should return an empty object.
// If any element within the array is null or undefined, it should be considered as a distinct group with a null key.
// Example Usage: const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // Example 1: Grouping by even and odd numbers

// const groupsByEvenOdd = numbers.groupBy(x => x % 2 === 0 ? 'Even' : 'Odd');

// console.log(groupsByEvenOdd);

// { "Even": [2,4,6,8], "Odd": [1, 3,5,7,9] }

// // Example 2: Grouping by the first digit

// const groupsByFirstDigit = numbers.groupBy(x => String(x)[0]);

// console.log(groupsByFirstDigit);

// Constraints:

// Your implementation should be efficient and handle large arrays gracefully.
// Ensure that your solution works for arrays containing different types of elements.
// Make sure to write meaningful variable names and include comments to explain your code logic.


Array.prototype.groupBy = function (keySelector) {
  if(!Array.isArray(this) || this.length === 0){
    return {};
  }
  const result = {};

  for(const item of this){
    const key = item != null ? keySelector(item) : null;
    const groupKey = String(key);

    if(!result[groupKey]) {
      result[groupKey] = []
    }
    result[groupKey].push(item);
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const groupsByEvenOdd = numbers.groupBy(x => x % 2 === 0 ? 'Even' : 'Odd');
console.log(groupsByEvenOdd);

const groupsByFirstDigit = numbers.groupBy(x => String(x)[0]);

console.log(groupsByFirstDigit);
  return (
    <></>
  )
}
