// Uncomment the TreeNode class definition
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {
    }

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {

    public TreeNode trimBST(TreeNode node, int low, int high) {
        if (node == null)
            return null;

        node.left = trimBST(node.left, low, high);
        node.right = trimBST(node.right, low, high);

        if (node.val > high || node.val < low) {
            if (node.left != null)
                return node.left;
            else
                return node.right;
        }
        return node;
    }
}