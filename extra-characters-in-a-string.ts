function minExtraChar(s: string, dictionary: string[]): number {
    const n = s.length;
    const dictSet = new Set(dictionary);

    const dp = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] + 1;

        for (let j = 0; j < i; j++) {
            const substring = s.slice(j, i);
            if (dictSet.has(substring)) {
                dp[i] = Math.min(dp[i], dp[j]);
            }
        }
    }
    return dp[n];

};