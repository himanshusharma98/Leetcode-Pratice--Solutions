/**
 * @param {number[][]} squareMatrix
 * @return {number}
 */
var projectionArea = function (squareMatrix) {
    const sideLength = squareMatrix.length;
    let totalProjectedArea = 0;

    for (let row = 0; row < sideLength; ++row) {
        let maxColumnHeight = 0;
        let maxRowHeight = 0;

        for (let column = 0; column < sideLength; ++column) {
            if (squareMatrix[row][column] > 0) {
                ++totalProjectedArea;
            }
            if (maxRowHeight < squareMatrix[row][column]) {
                maxRowHeight = squareMatrix[row][column];
            }
            if (maxColumnHeight < squareMatrix[column][row]) {
                maxColumnHeight = squareMatrix[column][row];
            }
        }
        totalProjectedArea += maxRowHeight + maxColumnHeight;
    }

    return totalProjectedArea;
};