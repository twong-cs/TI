/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//   if(s.length !== t.length)  return false
//   const cache={}
//   for(let i=0; i<s.length;i++){
//       if(cache[s[i]]) cache[s[i]]++
//       else cache[s[i]]=1
//   }
//   for(let i=0; i<t.length;i++){
//       if(!cache[t[i]]) return false
//       cache[t[i]]--
//   }
//   if(!Object.values(cache).includes(0)) return false
//   return true
// };

var isAnagram = function (s, t) {
  const sArr = s.split('').sort();
  const tArr = t.split('').sort();
  return JSON.stringify(sArr) === JSON.stringify(tArr);
};
