function minimumSteps(s: string): number {
    let count: number = 0;
    let out: number = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == '0') count++
        else out += count
    }
    return out
};