/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let filteredString = '';
    for(let char of s) {
        if(/[a-zA-Z0-9]/.test(char)) {
            filteredString += char.toLowerCase();
        }
    }
    let left = 0;
    let right = filteredString.length - 1;
    while(left < right) {
        if(filteredString[left] !== filteredString[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};