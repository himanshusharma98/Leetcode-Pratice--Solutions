function maxScore(nums: number[]): number {
    nums = nums.sort((a, b) => b - a);
    let sum = 0;
    let positiveInts = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum > 0) positiveInts++;
    }
    return positiveInts;

};