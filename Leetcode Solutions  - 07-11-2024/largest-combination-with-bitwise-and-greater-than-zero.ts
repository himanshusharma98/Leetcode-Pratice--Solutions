function largestCombination(candidates: number[]): number {
    const ans: number[] = new Array(32).fill(0);

    for (const x of candidates) {
        find(x, ans);
    }

    let res = 0;
    for (let i = 0; i < 32; i++) {
        res = Math.max(res, ans[i]);
    }
    return res;

    function find(n: number, ans: number[]): void {
        let j = 31;

        while (n > 0) {
            const a = n & 1;
            ans[j] += a;
            n >>= 1;
            j--;
        }
    }

};