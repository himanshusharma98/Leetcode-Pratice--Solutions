public class Solution
{
    public int PartitionString(string s)
    {
        int count = 0, i = 0;
        bool[] appear = new bool[26];

        while (i < s.Length - 1)
        {
            if (appear[s[i] - 'a'] == false)
            {
                appear[s[i] - 'a'] = true;
                i++;
            }
            else
            {
                count += 1;
                for (int j = 0; j < appear.Length; j++) appear[j] = false; // armortized
            }
        }

        return (appear[s[s.Length - 1] - 'a'] == true) ? count + 2 : count + 1;
    }
}