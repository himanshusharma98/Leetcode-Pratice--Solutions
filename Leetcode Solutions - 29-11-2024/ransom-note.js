/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazineCount = Array(26).fill(0); 
    for (let char of magazine) {
        magazineCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (let char of ransomNote) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        if (magazineCount[index] === 0) {
            return false;
        }
        magazineCount[index]--;
    }
    return true;
    
};