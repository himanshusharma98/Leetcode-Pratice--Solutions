function decrypt(code: number[], k: number): number[] {
    const n = code.length
    const result = new Array(n).fill(0)

    if(k == 0){
        return result
    }else if(k > 0){
        for(let i = 0; i < n; i++){
            for(let j = 1; j <= k; j++){
                result[i] +=code[(i + j) % n]
            }
        }
    }else if(k < 0){
        for(let i = 0; i < n; i++){
            for(let j = 1; j <= Math.abs(k); j++){
                result[i] += code[(i - j + n) % n]
            }
        }
    }
    return result
    
};
