/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
    const maxHeap = new MaxPriorityQueue();

    for(let num of nums) {
        maxHeap.enqueue(num);
    }

    let score = 0;

    for(let i = 0; i< k; i++){
        let maxVal = maxHeap.dequeue().element;
        score += maxVal;
        maxHeap.enqueue(Math.ceil(maxVal / 3));
    }

    return score;
    
};