public class Solution
{
    public int MinGroups(int[][] intervals)
    {
        int max = 0;//getting max range 
        foreach (var inter in intervals)
        {
            max = Math.Max(max, inter[1]);
        }

        int[] line = new int[max + 2];
        foreach (var inter in intervals)
        {
            line[inter[0]]++;
            line[inter[1] + 1]--;
        }
        int maxOverlap = 0;
        int currOverlap = 0;
        for (int i = 0; i < line.Length; i++)
        {
            currOverlap += line[i];
            maxOverlap = Math.Max(maxOverlap, currOverlap);
        }

        return maxOverlap;
    }
}