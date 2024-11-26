var reduce = function(nums, fn, init) {
    let val = init;
    nums.forEach(num => {
        val = fn(val, num);
    })
    return val;
};
