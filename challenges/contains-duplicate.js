/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const newSet = new Set(nums);
  return newSet.size !== nums.length;
};
