class Solution {
    public boolean areOccurrencesEqual(String s) {
        HashMap<Character, Integer>hm=new HashMap<>();
        for(int i=0; i<s.length();i++){
            char ch=s.charAt(i);
            if(hm.containsKey(ch)){
                int freq = hm.get(ch);
                hm.put(ch,++freq);
            }else{
                hm.put(ch,1);
            }
        }
        int num=0;
        int x=hm.get(s.charAt(0));
        for(int val : hm.values()){
            if(val!=x){
                return false;
            }
        }
      return true;  
    }
}