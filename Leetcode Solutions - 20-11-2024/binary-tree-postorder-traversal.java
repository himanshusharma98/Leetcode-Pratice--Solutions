import java.util.*;

class Solution {
    private void find(TreeNode root, List<Integer> ans) {
        if(root == null) return;
        find(root.left, ans);
        find(root.right, ans);
        ans.add(root.val);
    }

    public List<Integer> postorderTraversal(TreeNode root){
        List<Integer> ans = new ArrayList<>();
        find(root, ans);
        return ans;
    }
}
