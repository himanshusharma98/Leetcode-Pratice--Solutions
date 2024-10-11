
class Solution {
    public int minimumScore(String s, String t) {
        int m = s.length(), n = t.length();
        int[] left = new int[n + 2];
        int[] right = new int[n + 2];
        int p = 0;
        for (int i = 0; i < n; ++i) {
            while (p < m && s.charAt(p) != t.charAt(i))
                p++;
            left[i + 1] = p++;
        }
        left[0] = -1;
        p = m - 1;
        for (int i = n - 1; i >= 0; --i) {
            while (p >= 0 && s.charAt(p) != t.charAt(i))
                p--;
            right[i + 1] = p--;
        }
        right[n + 1] = m;

        int l = 0, r = n;
        while (l <= r) {
            int x = (l + r) / 2;
            boolean flag = false;
            for (int i = 0; i + x - 1 < n; ++i) {
                if (left[i] < right[i + x + 1])
                    flag = true;
            }
            if (flag)
                r = x - 1;
            else
                l = x + 1;
        }
        return l;
    }
}