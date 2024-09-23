import java.util.HashSet;
import java.util.Set;

class Solution {
    public int minExtraChar(String s, String[] dictionary) {
        int n = s.length();
        Set<String> dictSet = new HashSet<>();
        for (String word : dictionary) {
            dictSet.add(word);
        }
        int[] dp = new int[n + 1];

        for (int i = 0; i <= n; i++) {
            dp[i] = i;
        }
        for (int i = 1; i <= n; i++) {
            // Check all substrings ending at position i-1
            for (int j = 0; j < i; j++) {
                String substring = s.substring(j, i);
                if (dictSet.contains(substring)) {
                    dp[i] = Math.min(dp[i], dp[j]); // If substring is in dict, update dp[i]
                }
            }
            // If no substring was found, dp[i] remains the same
            // Add 1 for the character s[i-1] being extra if no valid split was found
            dp[i] = Math.min(dp[i], dp[i - 1] + 1);
        }

        return dp[n]; // Return the minimum extra characters
    }

}
