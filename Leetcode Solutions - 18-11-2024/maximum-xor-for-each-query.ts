function getMaximumXor(nums: number[], maximumBit: number): number[] {
    const res = [], max = Math.pow(2, maximumBit) -1
    let num = 0
    for(let i = 0; i< nums.length; i++){
        num ^=nums[i]
        res.push(num ^ max)
    }
    return res.reverse()
};
