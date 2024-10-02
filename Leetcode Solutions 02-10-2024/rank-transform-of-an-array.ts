function arrayRankTransform(arr: number[]): number[] {
    const n = arr.length;

    const tempArr = [...arr];

    arr.sort((a,b) => a - b);

    const map = new Map<number, number>();
    let index = 1;
    for(const num of arr){
        if(!map.has(num)){
            map.set(num, index++);
        }
    }

    const result = tempArr.map(num => map.get(num) as number);
    return result;
    
};