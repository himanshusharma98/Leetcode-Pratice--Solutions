class Solution {
    public int findTheLongestSubstring(String s) {
        String vowels = "aeiou";
        int res = 0;
        int mask = 0;
        Map<Integer, Integer> maskToIdx = new HashMap<>();
        maskToIdx.put(0, -1);

        for(int i = 0; i < s.length(); i++){
            char c = s.charAt(i);
            if(vowels.indexOf(c) != -1){
                mask ^= (1 << (c  - 'a'));
            }
            if(maskToIdx.containsKey(mask)){
                int length = i - maskToIdx.get(mask);
                res = Math.max(res, length);
            }else{
                maskToIdx.put(mask, i);
            }
        }
        return res;
    }
}
