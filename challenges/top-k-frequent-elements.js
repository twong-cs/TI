/*Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/*
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
 */
// var topKFrequent = function (nums, k) {
//   const cache = {};
//   const result = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     // if (!cache[nums[i]]) cache[nums[i]] = 0;
//     // cache[nums[i]]++;
//     cache[nums[i]] = (cache[nums[i]] || 0) + 1;
//   }
//   const shallowCopy = [...Object.values(cache)];
//   for (let i = 0; i < k; i++) {
//     let max = Math.max(...shallowCopy);
//     shallowCopy.splice(shallowCopy.indexOf(max), 1);
//     for (const key in cache) {
//       console.log('result', result);
//       if (cache[key] === max) result.add(Number(key));
//       //   if (result.includes(Number(key))) break;
//     }
//   }
//   const resultArr = [...result];
//   return resultArr.slice(resultArr.length - k, resultArr.length);
// };
const topKFrequent = (nums, k) => {
  const map = new Map(); //! map to count the frequency of the number
  for (let num of nums) {
    map.set(num, map.get(num) + 1 || 1);
  }
  const result = [];
  for (let [key, value] of map) {
    result.push([key, value]); //! we will add the number and its frequency
  }
  result.sort((a, b) => b[1] - a[1]); //! we will solve with respect to the frequency of the number
  return result.slice(0, k).map((x) => x[0]); //! we will slice the list with respect to length of k
};
const nums = [1, 1, 1, 2, 2, 2, 3, 3, 3];
console.log(topKFrequent(nums, 2));
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([3, 2, 2, 1, 1, 1], 2));
