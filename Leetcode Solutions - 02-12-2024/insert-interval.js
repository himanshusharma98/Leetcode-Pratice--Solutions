/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) { 
    let [start, end] = newInterval;
    let left = [];
    let right = [];
    for(const interval of intervals){
        const [first, last] = interval;
        if(last < start) left.push(interval);
         else if (first > end) right.push(interval);
         else{
            start = Math.min(start, first);
            end = Math.max(end, last);
         }
    } 
    return [...left, [start, end], ...right];
};