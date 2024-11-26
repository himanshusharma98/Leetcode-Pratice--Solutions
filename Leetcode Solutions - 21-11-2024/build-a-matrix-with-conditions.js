var buildMatrix = function(k, rowConditions, colConditions) {
    function dfs(src, graph, visited, cur_path, res) {
        if (cur_path.has(src)) return false;  
        if (visited.has(src)) return true;  

        visited.add(src);
        cur_path.add(src);

        for (let neighbor of (graph.get(src) || [])) {
            if (!dfs(neighbor, graph, visited, cur_path, res))  
                return false;
        }

        cur_path.delete(src);  
        res.push(src);
        return true;
    }

    function topo_sort(edges) {
        let graph = new Map();
        for (let [src, dst] of edges) {
            if (!graph.has(src)) graph.set(src, []);
            graph.get(src).push(dst);
        }

        let visited = new Set();
        let cur_path = new Set();
        let res = [];

        for (let src = 1; src <= k; ++src) {
            if (!dfs(src, graph, visited, cur_path, res))
                return [];
        }

        return res.reverse();  
    }

    let row_sorting = topo_sort(rowConditions);
    let col_sorting = topo_sort(colConditions);
    if (!row_sorting.length || !col_sorting.length)
        return [];

    let value_position = {};
    for (let n = 1; n <= k; ++n) {
        value_position[n] = [0, 0];  
    }
    row_sorting.forEach((val, ind) => value_position[val][0] = ind);
    col_sorting.forEach((val, ind) => value_position[val][1] = ind);

    let res = Array.from({ length: k }, () => Array(k).fill(0));
    for (let value = 1; value <= k; ++value) {
        let [row, column] = value_position[value];
        res[row][column] = value;
    }

    return res;
};
