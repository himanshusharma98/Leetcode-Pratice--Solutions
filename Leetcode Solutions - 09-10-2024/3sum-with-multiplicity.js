const MOD = Math.pow(10, 9) + 7;

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
const threeSumMulti = function (arr, target) {
  arr.sort((a, b) => a - b);
  let total = 0;
  for (let i = 0; i < arr.length; i += 1) {

    const curVal = arr[i];

    let low = i + 1;
    let high = arr.length - 1;

    while (low < high) {
      const lowVal = arr[low];
      const highVal = arr[high];
      const sum = curVal + lowVal + highVal;

      if (sum > target) {
        high -= 1;
      } else if (sum < target) {
        low += 1;
      } else if (lowVal === highVal) {
        total = (total + ((high - low) * (high - low + 1)) / 2) % MOD;
        break;
      } else {
        let lowCount = 0;
        let highCount = 0;
        while (arr[low] === lowVal) {
          low += 1;
          lowCount += 1;
        }
        while (arr[high] === highVal) {
          high -= 1;
          highCount += 1;
        }
        total = total + (lowCount * highCount) % MOD;
      }
    }
  }

  return total;
};