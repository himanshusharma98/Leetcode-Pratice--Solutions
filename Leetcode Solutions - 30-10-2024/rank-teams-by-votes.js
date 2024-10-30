/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function (votes) {
    if (votes.length === 1) return votes[0];
    let score = new Map(votes[0].split('').map(c => [c, new Array(votes[0].length).fill(0)]));
    for (let v of votes) {
        for (let i = 0; i < v.length; i++) {
            score.get(v[i])[i]++;
        }
    }
    return votes[0].split('').sort((a, b) => {
        for (let i = 0; i < votes[0].length; i++) {
            if (score.get(a)[i] > score.get(b)[i]) return -1;
            if (score.get(a)[i] < score.get(b)[i]) return 1;
        }
        return a < b ? -1 : 1;
    }).join("");
};