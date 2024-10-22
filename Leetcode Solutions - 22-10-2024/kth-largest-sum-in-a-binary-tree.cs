public class Solution
{
    public long KthLargestLevelSum(TreeNode root, int k)
    {

        List<long> levelSums = new List<long>();

        if (root == null)
        {
            return -1;
        }


        Queue<TreeNode> q = new Queue<TreeNode>();
        q.Enqueue(root);

        while (q.Count > 0)
        {

            long levelSum = 0;


            int levelSize = q.Count;


            for (int i = 0; i < levelSize; i++)
            {
                TreeNode node = q.Dequeue();


                levelSum += node.val;


                if (node.left != null)
                {
                    q.Enqueue(node.left);
                }
                if (node.right != null)
                {
                    q.Enqueue(node.right);
                }
            }


            levelSums.Add(levelSum);
        }


        if (levelSums.Count < k)
        {
            return -1;
        }


        levelSums.Sort((a, b) => b.CompareTo(a));
        return levelSums[k - 1];
    }
}