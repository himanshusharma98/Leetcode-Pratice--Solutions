function secondMinimum(n, edges, time, change) {

    // Initialize graph
    const graph = new Array(n+1);
    for (let i = 0; i <= n; ++i) {
        graph[i] = [];
    }

    // Populate graph
    for (const [from, to] of edges) {
        graph[from].push(to);
        graph[to].push(from);
    }

    // Initialize visited array
    const visited = new Array(n+1).fill(0);
    visited[1] = 1;

    // Count minimum steps to reach target. All
    // edges take the same time to traverse, so
    // no need to track time directly.
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

    // All edges are bi-directional, so it can be assumed
    // that the second minimum is at most 2 more steps from
    // the minimum (from n, go to previous vertex and back to n).
    steps += 2;

    // Check if second minimum can be reached in just 1 more step.
    const set = new Set(graph[n]);
    for (const vertex of queue) {
        if (set.has(vertex)) {
            --steps;
            break;
        }
    }

    // Convert steps to elapsed time. Assumes n > 1.
    let elapsed = time;
    while (--steps > 0) {
        const mod = elapsed % change;
        elapsed += time + (((elapsed - mod) / change) & 1) * (change - mod);
    }

    return elapsed;
};