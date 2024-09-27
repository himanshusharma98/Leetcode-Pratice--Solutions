class ListNodes {
    val: number
    next: ListNodes | null
    constructor(val?: number, next?: ListNodes | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
 }
 

function spiralMatrix(m: number, n: number, head: ListNodes | null): number[][] {
    const matrix: number[][] = Array.from({length: m}, () => Array(n).fill(-1))

    let top = 0, bottom = m - 1, left = 0, right = n - 1

    let current = head

    while(current !== null && top <= bottom && left <= right) {
        for(let i = left; i <= right && current !== null; i++){
            matrix[top][i] = current.val
            current = current.next
        }

        top++

        for (let i = top; i <= bottom && current !== null; i++) {
            matrix[i][right] = current.val;
            current = current.next;
        }
        right--; // Move the right boundary left

        // Traverse from right to left along the bottom row
        for (let i = right; i >= left && current !== null; i--) {
            matrix[bottom][i] = current.val;
            current = current.next;
        }
        bottom--; // Move the bottom boundary up

        // Traverse from bottom to top along the left column
        for (let i = bottom; i >= top && current !== null; i--) {
            matrix[i][left] = current.val;
            current = current.next;
        }
        left++; 
    }

    return matrix
};