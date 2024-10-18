import java.util.Arrays;

class Solution {
    public int maxTwoEvents(int[][] events) {
        int dp[][] = new int[events.length][3], output = 0;
        for (int row[] : dp)
            Arrays.fill(row, -1);
        Arrays.sort(events, (a, b) -> (a[0] - b[0]));
        int out = find(dp, events, 0, 2);
        for (int row[] : events)
            output = Math.max(output, row[2]);
        return Math.max(out, output);
    }

    public int find(int dp[][], int events[][], int n, int count) {
        if (count == 0)
            return 0;
        if (n >= events.length || n == -1)
            return Integer.MIN_VALUE;
        if (dp[n][count] != -1)
            return dp[n][count];
        int op = find(dp, events, n + 1, count);
        int upper = bisearch(events, events[n][1]);
        int yo = events[n][2] + find(dp, events, upper, count - 1);
        return dp[n][count] = Math.max(op, yo);
    }

    public int bisearch(int events[][], int val) {
        int top = 0, bot = events.length - 1;
        while (top < bot) {
            int mid = (bot - top) / 2 + top;
            if (events[mid][0] > val)
                bot = mid;
            else
                top = mid + 1;
        }
        if (events[bot][0] <= val)
            return -1;
        return bot;
    }
}