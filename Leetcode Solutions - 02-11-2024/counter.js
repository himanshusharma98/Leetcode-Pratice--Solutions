function createCounter(n) {
    let count = n;
    return function counter() {
        const result = count;
        count += 1;
        return result;
    }
}
