function pivotInteger(n: number): number {
    if(n === 1) return 1
    for(let i = 2; i <=n; i++){
        const sum = (i *(1 + i)) / 2
        const sumPivot  = ((n - i + 1) * (i + n)) / 2
        if(sum === sumPivot) return i
    }
    return -1
    
};