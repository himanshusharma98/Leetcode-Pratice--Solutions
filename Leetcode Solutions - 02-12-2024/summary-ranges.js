/**
 * @param {number[]} nums
 * @return {string[]}
 */

var summaryRanges = function(nums) {
    const output = [];
    let idx = 0;
    while(idx < nums.length) {
        let beg, last;
        beg = nums[idx];
        while(idx+1 < nums.length && nums[idx+1] == nums[idx] + 1) 
            idx++;
        last = nums[idx];
        if(beg == last)
            output.push(beg + "");
        else
            output.push( beg + "->" + last );
        idx++;          
    }
    return output;      
};