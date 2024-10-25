class Solution {
    public boolean checkStraightLine(int[][] c) {
        int m = 1;
        float k = 0;
        try {
            m = (c[0][1] - c[1][1]) / (c[0][0] - c[1][0]);
            if (Math.abs((c[0][0] - c[1][0])) > Math.abs(c[0][1] - c[1][1])) {
                k = (float) (c[0][1] - c[1][1]) / (c[0][0] - c[1][0]);
            }
        } catch (Exception e) {
            for (int i = 0; i < c.length - 1; i++) {
                if (c[i][0] != c[i + 1][0]) {
                    return false;
                }
            }
            return true;
        }
        for (int i = 0; i < c.length; i++) {
            if (k != 0) {
                if ((float) (c[i][1] - c[0][1]) != k * (float) (c[i][0] - c[0][0])) {
                    return false;
                }
            }
            if ((c[i][1] - c[0][1]) != m * (c[i][0] - c[0][0]) && k == 0) {
                return false;
            }
        }
        return true;
    }
}
