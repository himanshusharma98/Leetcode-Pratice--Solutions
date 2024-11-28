/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function(n, queries) {
    let graph = Array.from({ length: n }, () => []);
    for (let i = 0; i < n - 1; i++) {
        graph[i].push(i + 1);  
    }
    function bfs() {
        let queue = [0];  
        let distance = Array(n).fill(Infinity);  
        distance[0] = 0;  

        while (queue.length > 0) {
            let city = queue.shift();  
            for (let neighbor of graph[city]) {
                if (distance[neighbor] === Infinity) {
                    distance[neighbor] = distance[city] + 1;
                    queue.push(neighbor);
                }
            }
        }
        return distance[n - 1] === Infinity ? -1 : distance[n - 1];
    }

    let result = [];
    for (let query of queries) {
        let [u, v] = query;
        graph[u].push(v);
        result.push(bfs());
    }

    return result;
}
