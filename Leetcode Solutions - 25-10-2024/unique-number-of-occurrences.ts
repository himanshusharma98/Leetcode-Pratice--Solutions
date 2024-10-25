function uniqueOccurrences(arr: number[]): boolean {
    const cache = new Map();

    for (let i = 0; i < arr.length; i++)
        cache.set(arr[i], (cache.get(arr[i]) || 0) + 1);

    const ans = Array.from(cache.values());
    return new Set(ans).size === ans.length;

};