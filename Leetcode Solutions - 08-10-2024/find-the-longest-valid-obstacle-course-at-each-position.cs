public class Solution {
    public int[] LongestObstacleCourseAtEachPosition(int[] obstacles) {
        var n = obstacles.Length;
        var dp = new int[n];

        var data = new SortedList<int, int>();

        for(int i = 0; i < n; ++i){
            var target  = obstacles[i];
            var keys = data.Keys;

            var left = 0;
            var right = keys.Count - 1;

            while(left <= right){
                var temp = left + (right - left)/2;

                if(data[keys[temp]] <= target){
                    left  = temp + 1;
                }
                else{
                    right = temp - 1;
                }
            }
            dp[i] = right >= 0 ? keys[right] : 0;
            dp[i] += 1;

            data.TryAdd(dp[i], target);
            data[dp[i]] = Math.Min(data[dp[i]], target);
        }
        return dp;
    }
}