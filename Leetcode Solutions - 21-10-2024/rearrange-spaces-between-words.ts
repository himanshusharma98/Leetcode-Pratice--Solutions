function reorderSpaces(text: string): string {
    const words = text.trim().split(/\s+/);

    const totalWhitespaces = (text.match(/\s/g) || []).length;
    if (words.length === 1 && totalWhitespaces) {
        let result = words[0];
        result += ' '.repeat(totalWhitespaces);
        return result
    }
    const gaps = words.length - 1;
    const spacesPerGap = Math.floor(totalWhitespaces / gaps);
    const extraSpaces = totalWhitespaces % gaps;
    const evenSpacing = ' '.repeat(spacesPerGap);
    let result = words[0];

    for (let i = 1; i < words.length; i++) {
        result += evenSpacing + words[i];
    }
    if (extraSpaces > 0) {
        result += ' '.repeat(extraSpaces);
    }
    return result;
};