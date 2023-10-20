/**
 * @param {number[]} nums
 * @return {number}
 */

//O(n) time
var longestConsecutive = function (nums) {
  //create set with all nums (for constant lookup time)
  const cache = new Set(nums);
  //establish global counter of amount of consecutive integers
  let max = 0;
  //loop through array of nums
  for (let num of nums) {
    //check if it's the earliest number in the sequence
    if (!cache.has(num - 1)) {
      let localMax = 1;
      let currNum = num;
      //if so, check if the consecutive greater number exists in the set
      //track number of consecutive greater numbers in temp counter
      while (cache.has(currNum + 1)) {
        localMax++;
        currNum++;
      }

      //take the larger of global vs temp counter
      max = Math.max(max, localMax);
    }
  }
  //return global counter
  return max;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); //4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); //9
