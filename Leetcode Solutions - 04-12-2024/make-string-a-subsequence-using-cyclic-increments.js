/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
    let i = 0; 
    let j = 0;
    const nextChar = (char) => {
        if(char === 'z') return 'a';
        return String.fromCharCode(char.charCodeAt(0) + 1);
    }
    while(i < str1.length && j < str2.length) {
        if(str1[i] === str2[j]) {
            i++;
            j++;
        } else if (nextChar(str1[i]) === str2[j]) {
            i++;
            j++;
        } else{
            i++;
        }
    }
    if(j === str2.length) return true;
    return false;
};