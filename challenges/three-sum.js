/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

var threeSum = function (nums) {
  const resultArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0)
          resultArr.push([nums[i], nums[j], nums[k]].sort((a, b) => a - b));
      }
    }
  }
  if (resultArr.length === 1) return resultArr;
  const result = [];

  for (let i = 0; i < resultArr.length; i++) {
    for (let j = i + 1; j < resultArr.length; j++) {
      if (
        !(
          resultArr[i][0] === resultArr[j][0] &&
          resultArr[i][1] === resultArr[j][1] &&
          resultArr[i][2] === resultArr[j][2]
        )
      ) {
        result.push(resultArr[j]);
      }
    }
  }
  return result;
};

// var threeSum = function (nums) {
//   const resultArr = [];
//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length; i++) {
//     let left = i + 1,
//       right = nums.length - 1,
//       sum = 0;

//     while (left < right) {
//       sum = nums[i] + nums[left] + nums[right];
//       if (sum === 0) {
//         resultArr.push([nums[i], nums[left], nums[right]]);
//         while (nums[left] === nums[left + 1]) left++;
//         while (nums[right] === nums[right - 1]) right--;
//         left++;
//       } else if (sum < 0) left++;
//       else if (sum > 0) right--;
//     }
//     while (nums[i] === nums[i + 1]) i++;
//   }
//   return resultArr;
// };

// console.log(threeSum([-1, 0, 1, 2, -1, -4]), '--> [[-1,-1,2],[-1,0,1]]');
// console.log(threeSum([0, 1, 1]), '--> []');
console.log(threeSum([0, 0, 0]), '--> [[0,0,0]]');
