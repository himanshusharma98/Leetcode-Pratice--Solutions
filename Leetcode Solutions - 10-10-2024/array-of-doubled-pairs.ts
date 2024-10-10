function canReorderDoubled(arr: number[]): boolean {
    const sorted = arr.sort((a: number, b: number) => {
        if (b < 0 && a < 0) {
            return b - a;
        }
        return a - b;
    });

    const copy: number[] = [...sorted];

    for (const el of sorted) {
        if (!copy.includes(el)) {
            continue;
        }
        const index = copy.indexOf(el * 2);

        if (~index) {
            copy.splice(index, 1);
            copy.splice(0, 1);
            continue;
        }
        return false;
    }
    return true;

};