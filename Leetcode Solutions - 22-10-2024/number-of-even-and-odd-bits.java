class Solution {
    public int[] evenOddBit(int n) {
        
        int[] res= new int[2];
        String bit=Integer.toBinaryString(n);
        for(int i=bit.length()-1,k=0;i>=0;i--){
            if(i%2==0){
                if(bit.charAt(k++)=='1'){
                    res[0]+=1;
                }
            }
            else{
                if(bit.charAt(k++)=='1'){
                    res[1]+=1;
                }
            }
        }
        return res;
    }
}
