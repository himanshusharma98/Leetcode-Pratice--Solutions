class Solution {
    public int findMinimumOperations(String s1, String s2, String s3) {
        int index = 0; 
        for (int i = 0; i < Math.min(s1.length(), Math.min(s2.length(), s3.length())); i++) {
            if (s1.charAt(i) == s2.charAt(i) && s2.charAt(i) == s3.charAt(i)) {
                index++;
                continue;
            } else {
                break;
            }
        }
        if (index == 0) {
            return -1;
        }
        return s1.length() - index + s2.length() - index + s3.length() - index;
    }
}
