/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function (s) {
  const l = s.length;
  let start = 0, end = 0, res = l, need = 0;
  const count = { 'Q': 0, 'W': 0, 'E': 0, 'R': 0 };
  for (let i = 0; i < l; i++) {
    count[s[i]]++;
  }
  for (let char in count) {
    count[char] = count[char] - l / 4;
    if (count[char] > 0) {
      need++;
    }
  }
  if (need === 0) return 0;

  while (end < l) {
    count[s[end]]--;
    if (count[s[end]] === 0) need--;
    while (need === 0) {
      res = Math.min(res, end - start + 1);
      count[s[start]]++;
      if (count[s[start++]] > 0) need++;
    }
    end++;
  }

  return res;
};