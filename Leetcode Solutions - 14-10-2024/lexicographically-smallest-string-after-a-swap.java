class Solution {
    public String getSmallestString(String s) {
        int n = s.length();
        StringBuilder str = new StringBuilder(s);
        for(int i=0;i<n-1;i++){
            int a=Character.getNumericValue(str.charAt(i));
            int b=Character.getNumericValue(str.charAt(i+1));
            if((a%2==0 && b%2==0) || (a%2!=0 && b%2!=0)){
                if(a>b){
                    char c1 = str.charAt(i);
                    char c2 = str.charAt(i+1);
                    str.setCharAt(i,c2);
                    str.setCharAt(i+1,c1);
                    break;
                }
            }
        }
        return str.toString();
    }
}

