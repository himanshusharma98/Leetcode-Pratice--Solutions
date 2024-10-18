public class Solution
{
    public int CountMaxOrSubsets(int[] nums)
    {
        int maxOr = 0;
        int n = nums.Length;
        foreach (int num in nums)
        {
            maxOr |= num;
        }
        int count = 0;
        int totalSubsets = 1 << n;

        for (int mask = 1; mask < totalSubsets; mask++)
        {
            int currentOr = 0;
            for (int i = 0; i < n; i++)
            {
                if ((mask & (1 << i)) != 0)
                {
                    currentOr |= nums[i];
                }
            }
            if (currentOr == maxOr)
            {
                count++;
            }
        }
        return count;
    }
}