/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function (s) {
//   s = s.toLowerCase().replaceAll(/[_\W0-9]+/g, '');
//   for (let i = 0; i < Math.floor(s.length / 2); i++) {
//     if (s[i] !== s[s.length - 1 - i]) return false;
//   }
//   return true;
// };

var isPalindrome = function (s, index = 0) {
  s = s.toLowerCase().replaceAll(/[_\W0-9]+/g, '');
  if (index >= Math.floor(s.length / 2)) return true;
  if (s[index] !== s[s.length - 1 - index]) return false;
  return isPalindrome(s, index + 1);
};

console.log(isPalindrome('A man, a plan, a 9canal: Panama')); //true
console.log(isPalindrome('race a car')); //false
console.log(isPalindrome('  ')); //true
