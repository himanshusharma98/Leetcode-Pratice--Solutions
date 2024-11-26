function countFairPairs(nums: number[], lower: number, upper: number): number {
    const n = nums.length;

    nums.sort((a, b) => a - b);

    let ans = 0;
    for (let i = 0; i < n; i++) {
        const ind1 = lowerBound(nums, i + 1, n, lower - nums[i]);
        const ind2 = upperBound(nums, i + 1, n, upper - nums[i]) - 1;

        ans += ind2 - ind1 + 1;
    }

    return ans;
}

function lowerBound(arr: number[], start: number, end: number, value: number): number {
    let left = start, right = end;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] < value) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}

function upperBound(arr: number[], start: number, end: number, value: number): number {
    let left = start, right = end;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] <= value) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}
