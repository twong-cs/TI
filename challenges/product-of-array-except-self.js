/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/
//iterative method, O(n^2) time
// var productExceptSelf = function (nums) {
//   // establish a resulting array
//   const resultArr = [];
//   // loop through array
//   for (let i = 0; i < nums.length; i++) {
//     // make a shallow copy of the array
//     const shallowCopy = [...nums];
//     shallowCopy.splice(i, 1);
//     // find product of elements in that array
//     const product = shallowCopy.reduce((acc, curr) => acc * curr);
//     // push to resulting array
//     resultArr.push(product);
//   }
//   return resultArr;
//   // return resulting array
// };

//sliding window method, O(n) time
var productExceptSelf = function (nums) {
  //establish output array
  const output = [];
  //establish accumulators for sliding window
  let before = 1,
    after = 1;

  //create initial image of output array
  //use accumulator to track products of all numbers prior to that index
  for (let i = 0; i < nums.length; i++) {
    output.push(before);
    before *= nums[i];
  }

  //loop through nums from the end
  for (let i = nums.length - 1; i >= 0; i--) {
    //use accumulator to track products of all numbers after that index
    output[i] *= after;
    after *= nums[i];
  }
  return output;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
