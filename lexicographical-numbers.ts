function lexicalOrder(n: number): number[] {
    const result: number[] = [];

    const dfs = (current: number) => {
        if (current > n) return;
        result.push(current);
        for (let i = 0; i < 10; i++) {
            const next = current * 10 + i;
            if (next > n) break;
            dfs(next);
        }
    };

    for (let i = 1; i <= 9; i++) {
        dfs(i);
    }
    return result;

};