function platesBetweenCandles(s: string, queries: number[][]): number[] {
    const n = s.length;

    const leftCandle = new Array(n);
    let left = -1;
    for (let i = 0; i < n; i++) {
        if (s[i] === '|') left = i;
        leftCandle[i] = left;
    }

    const rightCandle = new Array(n);
    let right = -1;
    for (let j = n - 1; j >= 0; j--) {
        if (s[j] === '|') right = j;
        rightCandle[j] = right;
    }

    const prefixSum = new Array(n);
    let plates = 0;
    for (let k = 0; k < n; k++) {
        if (s[k] === '*') plates++;
        prefixSum[k] = plates;
    }

    const result = [];
    for (let [left, right] of queries) {
        const firstCandle = rightCandle[left];
        const lastCandle = leftCandle[right];
        const platesCount = (firstCandle >= 0 && lastCandle >= 0 && lastCandle > firstCandle)
            ? prefixSum[lastCandle] - prefixSum[firstCandle]
            : 0;
        result.push(platesCount);
    }
    return result;
};