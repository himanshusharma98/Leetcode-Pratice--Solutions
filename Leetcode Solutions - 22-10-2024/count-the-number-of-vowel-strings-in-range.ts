function vowelStrings(words: string[], left: number, right: number): number {
    let count: number = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    right = Math.min(right, words.length - 1);
    for (let i: number = left; i <= right; i++) {
        if (words[i] && vowels.has(words[i][0]) && vowels.has(words[i][words[i].length - 1])) {
            count++;
        }
    }
    return count;

};