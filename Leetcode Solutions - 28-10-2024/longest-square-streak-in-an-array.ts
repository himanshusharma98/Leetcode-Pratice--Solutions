function longestSquareStreak(nums: number[]): number {
    const numSet = new Set(nums);
    const sortedNums = Array.from(numSet).sort((a,b) => a - b);
    let maxLength = 0;

    for(const num of sortedNums){
        let length = 0;
        let current = num;
        while(numSet.has(current)){
            length++;
            current = current ** 2;
            if(current > 100000) break;
        }
        if(length > 1) {
            maxLength = Math.max(maxLength, length);
        }
    }
    return maxLength > 1 ? maxLength : -1;
};
