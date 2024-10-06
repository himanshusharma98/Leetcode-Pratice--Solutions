public class Solution {
    public bool AreSentencesSimilar(string sentence1, string sentence2) {
        var a = sentence1.Split(" ");
        var b = sentence2.Split(" ");
        int l = 0;

        while(l < a.Length && l < b.Length && b[l] == a[l])
        l++;
        int r = 0;
        while(r < a.Length && r < b.Length && b[b.Length - 1 - r] == a[a.Length - 1 -r])
        r++;
        return l + r >= a.Length || l + r >= b.Length;
        
    }
}