function numsSameConsecDiff(n: number, k: number): number[] {
    function backtrack(curr: number, place: number, previousDigit: number) {
        if (place === 0) {
            ans.push(curr);
            return;
        }

        let nextDigit = previousDigit + k;
        let prevDigit = previousDigit - k;
        if (nextDigit <= 9) {
            curr += nextDigit * Math.pow(10, place - 1);
            backtrack(curr, place - 1, nextDigit);
            curr -= nextDigit * Math.pow(10, place - 1);
        }
        if (prevDigit >= 0 && prevDigit != nextDigit) {
            curr += prevDigit * Math.pow(10, place - 1);
            backtrack(curr, place - 1, prevDigit);
        }
    }

    let ans: number[] = [];
    for (let i: number = 1; i <= 9; i++) {
        backtrack(i * Math.pow(10, n - 1), n - 1, i);
    }
    return ans;
};
