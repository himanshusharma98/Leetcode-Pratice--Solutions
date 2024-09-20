/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function (word) {
    const count = new Map();
    count.set(0, 1); // Start with the empty prefix case

    let result = 0;
    let bitmask = 0;

    for (const c of word) {
        // Toggle the bit corresponding to the current character
        bitmask ^= (1 << (c.charCodeAt(0) - 'a'.charCodeAt(0)));

        // Count substrings with the same bitmask
        if (count.has(bitmask)) {
            result += count.get(bitmask);
        }

        // Check all possible single-bit toggles (allow one odd character)
        for (let i = 0; i < 10; i++) {
            const newBitmask = bitmask ^ (1 << i);
            if (count.has(newBitmask)) {
                result += count.get(newBitmask);
            }
        }

        // Update the count of the current bitmask
        count.set(bitmask, (count.get(bitmask) || 0) + 1);
    }

    return result;
}
