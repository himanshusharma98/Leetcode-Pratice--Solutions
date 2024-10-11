class Solution {
    public int minMaxDifference(int num) {
        String s=""+num;
        char[] ch=s.toCharArray();
        char minchar='9';
         for (char c : ch) {
            if (c != minchar) {
                minchar = c;
                break;
            }
        }
        for(int i=0;i<ch.length;i++){
            if(ch[i]==minchar){
                ch[i]='9';
            }
        }
        String mstr=new String(ch);
        int maxx=Integer.parseInt(mstr);


        char[] chr=s.toCharArray();
        char maxchar='0';
        for(char c:chr){
            if(c!=maxchar){
                maxchar=c;
                break;
            }
        }
        for(int i=0;i<chr.length;i++){
            if(chr[i]==maxchar){
                chr[i]='0';
            }
        }
        String mstrr=new String(chr);
        int minn=Integer.parseInt(mstrr);

        return maxx-minn;


    }
}
