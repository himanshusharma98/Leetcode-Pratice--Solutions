/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    let i = 1, c = 1;
    points.sort((a,b) => a[0] - b[0]);
    let last = points[0];
    while (i<points.length) {
        const a = points[i];
        if (!(a[0] <= last[1])) {
            last = a;
            c++;
        } else {
            last = [Math.min(last[0], a[0]), Math.min(last[1], a[1])];
        }
        i++;
    }
    return c;
};