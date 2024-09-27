function reversePrefix(word: string, ch: string): string {
    const index = word.indexOf(ch);

    for (let i = 0; i < word.length; i++) {
        if (index === -1) return word;
        return word.slice(0, index + 1).split('').reverse().join('') + word.slice(index + 1);
    }

};