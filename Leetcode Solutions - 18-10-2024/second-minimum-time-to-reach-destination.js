function secondMinimum(n, edges, time, change) {


    const graph = new Array(n + 1);
    for (let i = 0; i <= n; ++i) {
        graph[i] = [];
    }


    for (const [from, to] of edges) {
        graph[from].push(to);
        graph[to].push(from);
    }


    const visited = new Array(n + 1).fill(0);
    visited[1] = 1;


    let steps = 0;
    let mask = 1;
    const queue = [1];
    do {
        const Q = queue.length;
        for (let q = 0; q < Q; ++q) {
            for (const next of graph[queue[q]]) {
                if ((visited[next] & mask) == 0) {
                    visited[next] |= mask;
                    queue.push(next);
                }
            }
        }
        queue.splice(0, Q);
        mask ^= 3;
        ++steps;
    } while (visited[n] == 0);


    steps += 2;


    const set = new Set(graph[n]);
    for (const vertex of queue) {
        if (set.has(vertex)) {
            --steps;
            break;
        }
    }


    let elapsed = time;
    while (--steps > 0) {
        const mod = elapsed % change;
        elapsed += time + (((elapsed - mod) / change) & 1) * (change - mod);
    }

    return elapsed;
};