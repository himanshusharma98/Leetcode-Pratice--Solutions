/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(start, target) {
    const n = start.length;
    let startLCount = 0, startRCount = 0;
    let targetLCount = 0, targetRCount = 0;
    for(let i = 0; i < n; i++){
        if(start[i] === 'L') startLCount++;
        if(start[i] === 'R') startRCount++;
        if(target[i] === 'L') targetLCount++;
        if(target[i] === 'R') targetRCount++;
    }
    if(startLCount !== targetLCount ||  startRCount !== targetRCount){
        return false;
    }
    let i = 0, j = 0;
    while(i < n && j < n){
        while(i < n && start[i] === '_') i++;
        while(j < n && target[j] === '_') j++;
        if(i < n && j < n){
            if(start[i] !== target[j]){
                return false;
            }
            if(start[i] === 'L' && i < j){
                return false;
            }
            if(start[i] === 'R' && i > j){
                return false;
            }
            i++;
            j++;
        }
    }
    return true;
};