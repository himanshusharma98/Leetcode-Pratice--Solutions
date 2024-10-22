import java.util.Arrays;

class Solution {
    int mod = 1000000007;

    int solve(int[][] types, int i, int n, int target, int[][] dp) {
        if (target == 0) {
            return 1;
        }
        if (i == n) {
            return 0;
        }
        if (dp[i][target] != -1) {
            return dp[i][target] % mod;
        }
        int currC = types[i][0];
        int currV = types[i][1];
        int ans = 0;
        for (int j = 0; j <= currC; j++) {
            int cv = currV * j;
            if (target - cv >= 0) {
                ans = (ans % mod + solve(types, i + 1, n, target - cv, dp) % mod) % mod;
            }
        }
        return dp[i][target] = ans;
    }

    public int waysToReachTarget(int target, int[][] types) {
        int n = types.length;
        int[][] dp = new int[n + 1][target + 1];
        for (int[] item : dp) {
            Arrays.fill(item, -1);
        }
        return solve(types, 0, n, target, dp);
    }
}