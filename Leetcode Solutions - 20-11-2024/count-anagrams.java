class Solution {
    int mod = (int) (Math.pow(10, 9) + 7);

    public int [] calculateFactorial(int n) {
        int [] fact = new int[n+1];
        fact[0] = fact[1] = 1;
        for(int i=2; i<=n; i++)
            fact[i] = (int)mul(i , fact[i-1] );
        return fact;
    }

    public long mul(long a, long b) {
        return ((a%mod) * (b%mod))%mod;
    }
    public long binaryExpo(long a, long n) {
        if(n == 0)
            return 1;
        long partialAns = binaryExpo(a, n/2);
        partialAns = mul(partialAns, partialAns);
        if(n%2==0)
            return partialAns;
        return mul(partialAns, a);
    }
    public int countAnagrams(String s) {
        int n = s.length();
        int[] fact = calculateFactorial(n);
        long result = 1;
        String [] strArr = s.split(" ");
        for(String str : strArr) {
            int [] freq = new int[26];
            for(char ch : str.toCharArray())
                freq[ch - 'a']++;
            
            
            long curr = 1;
            for(int fr : freq)
                curr = mul(curr , fact[fr]);

            curr = mul(fact[str.length()] , binaryExpo(curr, mod - 2));

            result = mul(result, curr);
        }
        return (int)result;
    }
}
