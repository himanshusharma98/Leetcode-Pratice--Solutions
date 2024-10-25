function middlePoint(p1: number[], p2: number[]) {
    return [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2]
}

function dist(p1: number[], p2: number[]) {
    return ((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2) ** 0.5
}

function rectangleArea(p1: [number, number], p2: [number, number], p3: [number, number], p4: [number, number]): number | null {
    const length1 = dist(p1, p2);
    const length2 = dist(p2, p3);
    return length1 * length2;
}

function minAreaFreeRect(points: number[][]): number {
    let byDistAndMiddlePoint = new Map()
    for (let i = 0; i < points.length - 1; i++) {
        for (let j = i + 1; j < points.length; j++) {
            let p1 = points[i], p2 = points[j]
            let [middleX, middleY] = middlePoint(p1, p2)
            let distance = dist(p1, p2)
            let key = [middleX, middleY, distance].join(" ")
            let tuplesPoints = byDistAndMiddlePoint.get(key) ?? []
            tuplesPoints.push([p1, p2])
            byDistAndMiddlePoint.set(key, tuplesPoints)
        }
    }
    let ans = Infinity

    for (let diagonals of byDistAndMiddlePoint.values()) {
        if (diagonals.length >= 2) {
            for (let i = 0; i < diagonals.length - 1; i++) {
                for (let j = i + 1; j < diagonals.length; j++) {
                    let diagonal1 = diagonals[i]
                    let diagonal2 = diagonals[j]
                    let area = rectangleArea(
                        diagonal1[0],
                        diagonal2[0],
                        diagonal1[1],
                        diagonal2[1]
                    )
                    ans = Math.min(ans, area ?? Infinity)
                }
            }
        }
    }

    return ans === Infinity ? 0 : ans
};
