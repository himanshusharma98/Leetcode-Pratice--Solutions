function nearestPalindromic(n: string): string {
    const len = n.length;
    const i = len % 2 === 0 ? Math.floor(len / 2) - 1 : Math.floor(len / 2);
    const firstHalf = parseInt(n.substring(0, i + 1), 10);

    const possibilities: bigint[] = [
        halfToPalindrome(firstHalf, len % 2 === 0),
        halfToPalindrome(firstHalf + 1, len % 2 === 0),
        halfToPalindrome(firstHalf - 1, len % 2 === 0),
        BigInt(Math.pow(10, len - 1)) - 1n,
        BigInt(Math.pow(10, len)) + 1n
    ];

    let diff = BigInt(Number.MAX_SAFE_INTEGER);
    let res = 0n;
    const nl = BigInt(n); 
    
    for (let cand of possibilities) {
        if (cand === nl) continue;
        const currentDiff = cand > nl ? cand - nl : nl - cand;
        if (currentDiff < diff) {
            diff = currentDiff;
            res = cand;
        } else if (currentDiff === diff && cand < res) {
            res = cand;
        }
    }

    return res.toString();
}

function halfToPalindrome(left: number, even: boolean): bigint {
    let res = BigInt(left);
    if (!even) left = Math.floor(left / 10);
    while (left > 0) {
        res = res * 10n + BigInt(left % 10);
        left = Math.floor(left / 10);
    }
    return res;
}