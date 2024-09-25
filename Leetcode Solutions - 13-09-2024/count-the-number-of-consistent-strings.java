class Solution {
    public int countConsistentStrings(String allowed, String[] words) {
        var map = new boolean[26];
        var res = words.length;
        for (var ch : allowed.toCharArray()) {
            map[ch - 'a'] = true;
        }
        for (var word : words) {
            for (var ch : word.toCharArray()) {
                if (!map[ch - 'a']) {
                    res--;
                    break;
                }
            }
        }
        return res;
    }
}