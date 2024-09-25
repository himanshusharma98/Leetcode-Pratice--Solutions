/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    const minutes = timePoints(time => {
        const [hour, minute] = time.split(':');
        return parseInt(hour) * 60 + parseInt(minute);
    });

    minutes.sort((a, b) => a - b);

    let min = Infinity;
    for (let i = 1; i < minutes.length; i++) {
        const diff = minutes[i] - minutes[i - 1];
        minDiff = Math.min(minDiff, diff);
    }

    const wraparoundDiff = minutes[0] + 1440 - minutes[minutes.length - 1];
    minDiff = Math.min(minDiff, wraparoundDiff);
    return minDiff;

}
