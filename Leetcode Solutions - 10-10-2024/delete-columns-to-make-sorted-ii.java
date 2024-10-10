class Solution {
    public int minDeletionSize(String[] strs) {
        int n = strs.length, m = strs[0].length(), i, j;
        int res = 0;

        boolean[] sorted = new boolean[n];
        for (j = 0; j < m; j++) {
            for (i = 0; i < n - 1; i++) {
                if (!sorted[i] && (strs[i].charAt(j) > strs[i + 1].charAt(j))) {
                    res++;
                    break;
                }
            }

            if (i == n - 1) {
                for (int k = 0; k < n - 1; k++) {
                    sorted[k] |= strs[k].charAt(j) < strs[k + 1].charAt(j);
                }
            }
        }
        return res;
    }
}
