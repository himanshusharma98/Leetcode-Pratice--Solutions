/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const words1 = s1.split(' ');
    const words2 = s2.split(' ');

    const freq1 = {};
    const freq2 = {};
    for(const word of words1){
        freq1[word] = (freq1[word] || 0) + 1;
    }
    for(const word of words2){
        freq2[word] = (freq2[word] || 0) + 1;
    }

    const uncommon = [];
    for(const word in freq1){
        if(freq1[word] === 1 && !(word in freq2)){
            uncommon.push(word);
        }
    }
    for(const word in freq2){
        if(freq2[word] === 1 && !(word in freq1)){
            uncommon.push(word);
        }
    }
    return uncommon;
    
};