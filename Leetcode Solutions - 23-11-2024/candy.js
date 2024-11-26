var candy = function(ratings) {
    const n = ratings.length;
    let totalCandies = n;
    let i = 1;
    while(i < n) {
        if(ratings[i] === ratings[i - 1]) {
            i++;
            continue;
        }
        let currentPeak = 0;
        while(i < n && ratings[i] > ratings[i - 1]) {
            currentPeak++;
            totalCandies +=currentPeak;
            i++;
        }
        if(i === n) {
            return totalCandies;
        }
        let currentVally = 0;
        while(i < n && ratings[i] < ratings[i - 1]) {
            currentVally++;
            totalCandies += currentVally;
            i++;
        }
        totalCandies -= Math.min(currentPeak, currentVally);
    }
    return totalCandies;
};
