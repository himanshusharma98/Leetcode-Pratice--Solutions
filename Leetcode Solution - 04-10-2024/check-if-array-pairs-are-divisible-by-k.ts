function canArrange(arr: number[], k: number): boolean {
    const count: number[] = new Array(k).fill(0);
    for (let val of arr) {
        count[floorMod(val, k)]++;
    }
    if (count[0] % 2 !== 0) return false;
    for (let i = 1; i <= ~~(k / 2); i++) {
        if (count[i] !== count[k - i]) return false;
    }
    return true;
};
function floorMod(a, b): number {
    return ((a % b) + b) % b;
}