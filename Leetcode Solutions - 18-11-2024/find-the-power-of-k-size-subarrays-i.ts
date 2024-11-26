function resultsArray(nums: number[], k: number): number[] {
    const res: number[] = [];
    let l: number = 0;
    let consecCnt: number = 1;
    
    for (let r = 0; r < nums.length; r++) {
        if (r > 0 && nums[r-1] + 1 === nums[r]) {
            consecCnt++;
        }
        
        if (r - l + 1 > k) {
            if (nums[l] + 1 === nums[l + 1]) {
                consecCnt--;
            }
            l++;
        }
        
        if (r - l + 1 === k) {
            res.push(consecCnt === k ? nums[r] : -1);
        }
    }
    
    return res;
}
