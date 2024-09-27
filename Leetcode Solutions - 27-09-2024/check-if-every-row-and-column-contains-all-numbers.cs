public class Solution
{
    public int[][] matrix = new int[][] { };

    public bool CheckValid(int[][] matrix)
    {
        int n = matrix.Length;

        for (int i = 0; i < n; i++)
        {
            HashSet<int> rowSet = new HashSet<int>();

            for (int j = 0; j < n; j++)
                if (matrix[i][j] < 1 || matrix[i][j] > n || !rowSet.Add(matrix[i][j]))
                    return false;
        }

        for (int j = 0; j < n; j++)
        {
            HashSet<int> colSet = new HashSet<int>();

            for (int i = 0; i < n; i++)
                if (matrix[i][j] < 1 || matrix[i][j] > n || !colSet.Add(matrix[i][j]))
                    return false;
        }

        return true;
    }
}