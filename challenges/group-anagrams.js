/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const cache = {};
  for (let i = 0; i < strs.length; i++) {
    const sortedWord = strs[i].split('').sort().join('');
    if (!cache[sortedWord]) cache[sortedWord] = [strs[i]];
    else cache[sortedWord].push(strs[i]);
  }
  return Object.values(cache);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
