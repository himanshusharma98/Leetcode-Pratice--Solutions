function xorQueries(arr: number[], queries: number[][]): number[] {
    const prefixXor = new Array(arr.length + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
        prefixXor[i + 1] = prefixXor[i] ^ arr[i];
    }
    const result: number[] = [];
    for (const query of queries) {
        const left = query[0];
        const right = query[1];
        result.push(prefixXor[right + 1] ^ prefixXor[left]);
    }
    return result;
}