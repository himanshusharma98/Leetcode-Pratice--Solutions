var findSubstring = function(s, words) {
    if (words.length === 0 || s.length === 0 || words[0].length === 0) {
        return [];
    }

    const wordLength = words[0].length;
    const totalLength = words.length * wordLength;
    const wordCount = new Map();

    
    for (let word of words) {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }

    const result = [];

    
    for (let i = 0; i < wordLength; i++) {
        let left = i; 
        let right = i; 
        let currentCount = new Map();
        let count = 0;

        while (right + wordLength <= s.length) {
            const word = s.substring(right, right + wordLength);
            right += wordLength;

            if (wordCount.has(word)) {
                currentCount.set(word, (currentCount.get(word) || 0) + 1);
                count++;

                
                while (currentCount.get(word) > wordCount.get(word)) {
                    const leftWord = s.substring(left, left + wordLength);
                    currentCount.set(leftWord, currentCount.get(leftWord) - 1);
                    left += wordLength;
                    count--;
                }

                
                if (count === words.length) {
                    result.push(left);
                    const leftWord = s.substring(left, left + wordLength);
                    currentCount.set(leftWord, currentCount.get(leftWord) - 1);
                    left += wordLength;
                    count--;
                }
            } else {
                
                currentCount.clear();
                count = 0;
                left = right;
            }
        }
    }

    return result;
};