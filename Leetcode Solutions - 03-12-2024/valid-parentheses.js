/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const bracketMap = {
        '(':')',
        '{':'}',
        '[':']'
    };
    for(let char of s){
        if(bracketMap[char]) {
            stack.push(char);
        } else {
            const top = stack.pop();
            if(bracketMap[top] !== char){
                return false;
            }
        }
    }
    return stack.length === 0;
};