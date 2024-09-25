class PrefixNode {
    nodes: {};
    count: number;
    constructor() {
        this.nodes = {};
        this.count = 0;
    }
}

function sumPrefixScores(words: string[]): number[] {
    const prefixes = new PrefixNode();

    words.forEach((word) => {
        let current = prefixes;
        for (const c of word) {
            if (!current.nodes[c]) current.nodes[c] = new PrefixNode();
            current = current.nodes[c];
            current.count++;
        }
    });
    const scores = [];
    words.forEach((word) => {
        let score = 0;
        let current = prefixes;
        for (const c of word) {
            current = current.nodes[c];
            score += current.count;
        }
        scores.push(score);
    });
    return scores;

};