function numSubseq(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);

    const mod = 1e9 + 7;
    const n = nums.length;
    let ans = 0;

    const pow2: number[] = new Array(n);
    pow2[0] = 1;
    for (let i = 1; i < n; i++) {
        pow2[i] = (pow2[i - 1] * 2) % mod;
    }

    let left = 0, right = n - 1;
    while (left <= right) {

        if (nums[left] + nums[right] <= target) {
            ans = (ans + pow2[right - left]) % mod;
            left++;
        }

        else {
            right--;
        }
    }

    return ans;
};