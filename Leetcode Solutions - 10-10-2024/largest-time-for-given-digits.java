class Solution {
    public String largestTimeFromDigits(int[] arr) {
        String res = "";
        Arrays.sort(arr);
        for (int i = 23; i >= 0; i--) {
            for (int j = 59; j >= 0; j--) {
                int b[] = new int[] { i / 10, i % 10, j / 10, j % 10 };
                Arrays.sort(b);
                if (Arrays.equals(arr, b)) {
                    res = String.format("%02d:%02d", i, j);
                    return res;
                }

            }
        }
        return res;
    }
}