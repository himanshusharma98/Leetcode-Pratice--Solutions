public class Solution {
    public int ShortestSubarray(int[] nums, int k) {
        int res = int.MaxValue;
        long curSum = 0;
        var q = new LinkedList<(long sum, int index)>();
        
        for (int r = 0; r < nums.Length; r++) {
            curSum += nums[r];
            if (curSum >= k) {
                res = Math.Min(res, r + 1);
            }
            
            
            while (q.Count > 0 && curSum - q.First.Value.sum >= k) {
                var (prefix, endIdx) = q.First.Value;
                q.RemoveFirst();
                res = Math.Min(res, r - endIdx);
            }
            
            
            while (q.Count > 0 && q.Last.Value.sum > curSum) {
                q.RemoveLast();
            }
            q.AddLast((curSum, r));
        }
        
        return res == int.MaxValue ? -1 : res;
    }
}
