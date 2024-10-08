using System.Collections.Generic;

public class Solution
{
    public int LatestDayToCross(int row, int col, int[][] cells)
    {

        int[,] floodDays = new int[row, col];
        for (int i = 0; i < cells.Length; i++)
        {
            floodDays[cells[i][0] - 1, cells[i][1] - 1] = i + 1;  // 1-based to 1-indexed days
        }

        int left = 1, right = cells.Length;
        while (left < right)
        {
            int mid = left + (right - left) / 2;
            if (CanCross(row, col, floodDays, mid))
            {
                left = mid + 1;
            }
            else
            {
                right = mid;
            }
        }
        return left - 1;
    }

    private bool CanCross(int row, int col, int[,] floodDays, int day)
    {
        Queue<(int, int)> queue = new Queue<(int, int)>();
        bool[,] visited = new bool[row, col];


        for (int j = 0; j < col; j++)
        {
            if (floodDays[0, j] > day)
            {
                queue.Enqueue((0, j));
                visited[0, j] = true;
            }
        }

        int[] dr = new int[] { -1, 1, 0, 0 };
        int[] dc = new int[] { 0, 0, -1, 1 };

        while (queue.Count > 0)
        {
            var (r, c) = queue.Dequeue();
            if (r == row - 1) return true;


            for (int d = 0; d < 4; d++)
            {
                int nr = r + dr[d];
                int nc = c + dc[d];
                if (nr >= 0 && nr < row && nc >= 0 && nc < col && !visited[nr, nc] && floodDays[nr, nc] > day)
                {
                    queue.Enqueue((nr, nc));
                    visited[nr, nc] = true;
                }
            }
        }
        return false;
    }
}

