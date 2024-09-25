/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
    if (!s) return "";

    const revS = s.split('').reverse().join('');
    const newStr = s + '#' + revS;

    const lps = computeLPSArray(newStr);
    const longestPalindromicPrefixLength = lps[lps.length - 1];
    const charsToAdd = revS.substring(0, revS.length - longestPalindromicPrefixLength);
    return charsToAdd + s;

    function computeLPSArray(str) {
        const lps = new Array(str.length).fill(0);
        let length = 0;
        let i = 1;

        while (i < str.length) {
            if (str[i] === str[length]) {
                length++;
                lps[i] = length;
                i++;
            } else {
                if (length !== 0) {
                    length = lps[length - 1];
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }
        return lps;
    }

};