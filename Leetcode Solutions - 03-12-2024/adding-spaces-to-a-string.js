/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    const set = new Set(spaces)
    let modifiedString = ""
    for(let i = 0; i < s.length; i++){
        if(set.has(i)){
            modifiedString += " " + s[i]
        }
        else{
            modifiedString += s[i]
        }   
    }
    return modifiedString
};