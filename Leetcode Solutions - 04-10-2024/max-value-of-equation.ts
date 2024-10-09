function findMaxValueOfEquation(points: number[][], k: number): number {
    let max = -Infinity;
    let queue = [];
    let xi, yi
    for (let [xj, yj] of points) {
        // Use a priority queue to store for each point i
        if (queue.length) [xi, yi] = queue[0]
        // Loop through the array and pop elements from the heap if the condition xj - xi > k, where j is the current index and i is the point on top the queue.
        while (queue.length && Math.sqrt(Math.pow(xi - xj, 2)) > k) {
            queue.shift();
            if (queue.length) [xi, yi] = queue[0]
        }
        if (queue.length) {
            // After popping elements from the queue. If the queue is not empty, calculate the equation with the current point and the point on top of the queue and maximize the answer.
            [xi, yi] = queue[0]
            max = Math.max(max, yi + yj + Math.sqrt(Math.pow(xi - xj, 2)))
        }

        // Optimising the length of the queue. 
        // We want to maximise yi + yj + |xi - xj| = xi + yi + (yj - xj) 
        // So we need to have as big (yj - xj) as possible
        // Before pushing new values to the queue
        let [x, y] = queue.length ? queue[queue.length - 1] : []
        while (queue.length && yj - xj > y - x) {
            queue.pop();
            if (queue.length) [x, y] = queue[queue.length - 1]
        }

        // Push the point to the queue
        queue.push([xj, yj])

    }

    return max

};