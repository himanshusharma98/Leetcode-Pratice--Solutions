function lisLength(arr) {
    const lis = [arr[0]];
    const lisLen = new Array(arr.length).fill(1);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > lis[lis.length - 1]) {
            lis.push(arr[i]);
        } else {
            const index = lowerBound(lis, arr[i]);
            lis[index] = arr[i];
        }
        lisLen[i] = lis.length;
    }
    return lisLen;
}

function lowerBound(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

function minimumMountainRemovals(nums) {
    const n = nums.length;
    const lis = lisLength(nums);

    const reversed = [...nums].reverse();
    const lds = lisLength(reversed);
    lds.reverse();

    let removals = Infinity;

    for (let i = 0; i < n; i++) {
        if (lis[i] > 1 && lds[i] > 1) {
            removals = Math.min(removals, n + 1 - lis[i] - lds[i]);
        }
    }
    return removals;
}