/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 

  Example:

  const nums = [2, 5, 11, 15]
  twoSum(num, 7) -> true
  Rational:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> false
  Rational: No elements inside the array sum up to the target number
*/

//two pointer solution - only works when array is sorted
// const twoSum = (arr, target) => {
//   let i = 0,
//     j = arr.length - 1;
//   while (i < j) {
//     if (arr[i] + arr[j] === target) return true;
//     else if (arr[i] + arr[j] < target) i++;
//     else j--;
//   }
//   return false;
// };

//hash table solution
const twoSum = (arr, target) => {
  const cache = {};
  for (let i = 0; i < arr.length; i++) {
    if (cache[target - arr[i]]) return true;
    else cache[arr[i]] = 'exists';
  }
  return false;
};

const nums = [2, 5, 11, 15];
console.log(twoSum(nums, 7), ' -> true');
console.log(twoSum(nums, 9), ' -> false');

/** from leetcode
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for(let i=0; i<nums.length; i++){
//        for(let j=i+1; j<nums.length; j++){
//            if(nums[i]+nums[j]===target) return [i,j]
//        }
//     }
// };
// var twoSum = function(nums, target) {
//   const cache = {}
//   for(let i=0; i<nums.length; i++){
//      if(cache.hasOwnProperty(nums[i])) return [i,cache[nums[i]]]
//      cache[target-nums[i]]=i
//   }
// };

/*
Extension:
Given an array of numbers and a target number, 
return true if three of the numbers in the array add up to the target.
Otherwise, return false.

The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?

*/

const threeSum = (arr, target) => {
  const cache = {};
  for (let i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (cache[target - arr[j]]) return true;
      else cache[arr[i] + arr[j]] = 'exists';
    }
  }
  return false;
};

const numss = [2, 5, 11, 15];
console.log(threeSum(numss, 22), ' -> true');
console.log(threeSum(numss, 12), ' -> false');

module.exports = { twoSum, threeSum };
