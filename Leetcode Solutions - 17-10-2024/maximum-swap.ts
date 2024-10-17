function maximumSwap(num: number): number {
    let str: string = num.toString();
    let num2: string[] = str.split('');
    let n = num2.length;

    let index: number[] = new Array(n);
    let maxi: number = parseInt(num2[n - 1]), idx = n - 1;
    index[n - 1] = idx;

    for (let i = n - 2; i >= 0; i--) {
        if (parseInt(num2[i]) > maxi) {
            maxi = parseInt(num2[i]);
            idx = i;
        }
        index[i] = idx;
    }

    let i = 0;
    while (i < n) {
        if (parseInt(num2[index[i]]) > parseInt(num2[i])) {
            let temp = num2[index[i]];
            num2[index[i]] = num2[i];
            num2[i] = temp;
            break;
        }
        i++;
    }

    let ans: number = parseInt(num2.join(''));
    return ans;
};