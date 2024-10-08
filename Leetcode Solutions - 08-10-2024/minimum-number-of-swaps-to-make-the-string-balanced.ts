function minSwaps(s: string): number {
    let current  = 0;
    let min = 0;
    for(let i = 0; i < s.length; i++){
        current += s[i] === '[' ? 1 : -1
        min = Math.min(min, current)
    }
    return Math.ceil(- min / 2)
};