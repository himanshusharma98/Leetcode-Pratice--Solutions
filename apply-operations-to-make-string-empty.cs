public class Solution {
    public string LastNonEmptyString(string s) {
        if(s.Length == 1){
            return s;
        }
        int[] lettersCount = new int[26];
        int maxOccurence = 0;

        foreach(var letter in s){
            int letterIndex = letter  - 'a';
            lettersCount[letterIndex]++;

            maxOccurence = Math.Max(maxOccurence, lettersCount[letterIndex]);
        }

        HashSet<char> lastsLetters = new HashSet<char>();

        for(int i = 0; i<lettersCount.Length; i++){
            if(lettersCount[i] == maxOccurence){
                char lastLetter = (char)('a' + i);
                lastsLetters.Add(lastLetter);
            }
        }
        int j = s.Length-1;
            StringBuilder lastString = new StringBuilder();

            while(lastsLetters.Count > 0)
            {
                if (lastsLetters.Contains(s[j]))
                {
                    lastString.Append(s[j]);
                    lastsLetters.Remove(s[j]);
                }

                j--;
            }

            return ReverseString(lastString);

        }


        private string ReverseString(StringBuilder str)
        {
            // Reverse the finalString
            int l = 0;
            int r = str.Length - 1;
            while (l < r)
            {
                (str[l], str[r]) = (str[r], str[l]);
                l++;
                r--;
            }

            return str.ToString();
        }
}
      
