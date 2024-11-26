function minimumSubarrayLength(nums: number[], k: number): number {
    const table = new SparseTable(nums);

    let left = 0;
    let minLen = nums.length + 1;
    for (let right = 1; right <= nums.length; ++right) {
        while (left < right && table.query(left, right) >= k) {
            minLen = Math.min(minLen, right - left);
            ++left;
        }
    }

    return minLen <= nums.length ? minLen : -1;
}

class SparseTable {
    private table: number[][];

    constructor(nums: number[]) {
        const N = nums.length;
        const table: number[][] = new Array(N);

        let log2 = 0;
        for (let i = 0; i < N; ++i) {
            log2 += (i + 1) >> log2;
            table[i] = new Array(log2);
            table[i][0] = nums[N - i - 1];
            for (let j = 1, pow = 1; j < log2; ++j) {
                table[i][j] = table[i][j - 1] | table[i - pow][j - 1];
                pow <<= 1;
            }
        }

        this.table = table.reverse();
    }

    query(left: number, right: number): number {
        const j = 0 | Math.log2(right - left);
        return this.table[left][j] | this.table[right - (1 << j)][j];
    }
}
