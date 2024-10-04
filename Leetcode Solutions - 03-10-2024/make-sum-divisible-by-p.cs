public class Solution {
    public int MinSubarray(int[] nums, int p) {
        int n = nums.Length;
        long totalSum = 0;
        
        foreach (int num in nums) {
            totalSum += num;
        }

        long remainder = totalSum % p;
        if (remainder == 0) {
            return 0;
        }

        Dictionary<long, int> prefixMap = new Dictionary<long, int>();
        prefixMap[0] = -1;  

        long prefixSum = 0;
        int minLength = n;

        for (int i = 0; i < n; i++) {

            prefixSum += nums[i];

            long currentMod = prefixSum % p;


            long targetMod = (currentMod - remainder + p) % p;


            if (prefixMap.ContainsKey(targetMod)) {
                minLength = Math.Min(minLength, i - prefixMap[targetMod]);
            }

            prefixMap[currentMod] = i;
        }

        return minLength == n ? -1 : minLength;
    }
}