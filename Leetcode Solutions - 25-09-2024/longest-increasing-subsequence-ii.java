class Solution {
    class Node{
        int val;
        Node left;
        Node right;
        int start;
        int end;
    }
    public int lengthOfLIS(int[] nums, int k) {
        int max = 0;
        for(int num : nums){
            max = Math.max(max,num);
        }
        
        Node root = construct(1,max);
        
        int res = 0;
        for(int num : nums){
            int lo = (num - k) < 1 ? 1 : (num - k);
            int hi = num - 1;
            
            int len = query(root,lo,hi) + 1;
            
            update(root,num,len);
            res = Math.max(res,len);
        }                
        return res;
    }
    
    Node construct(int ss,int se){
        if(ss == se){
            Node node = new Node();
            node.start = ss;
            node.end = se;
            node.val = 0;
            return node;
        }
        
        int mid = (ss + se) / 2;
        Node node = new Node();
        node.start = ss;
        node.end = se;
        node.left = construct(ss,mid);
        node.right = construct(mid+1,se);
        node.val = Math.max(node.left.val,node.right.val);
        
        return node;
    }
    
    void update(Node node,int idx,int val){
        if(node.start == node.end){
            node.val = val;
            return;
        }
        
        int mid = (node.start + node.end) / 2;
        if(idx <= mid){
            update(node.left,idx,val);
        }else{
            update(node.right,idx,val);
        }
        
        node.val = Math.max(node.left.val,node.right.val);
    }
    
    int query(Node node,int qs,int qe){
        if(node.start > qe || node.end < qs){
            return 0;
        }else if(node.start >= qs && node.end <= qe){
            return node.val;
        }else{
            int lval = query(node.left,qs,qe);
            int rval = query(node.right,qs,qe);
            return Math.max(lval,rval);
        }
    }
}
