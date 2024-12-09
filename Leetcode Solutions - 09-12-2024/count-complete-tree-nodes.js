function countingTraversal(root, num){
    if(root == null) return
    else num[0] = num[0] + 1;
    countingTraversal(root.left, num);
    countingTraversal(root.right, num);
};
var countNodes = function(root){
    let num = [0];
    countingTraversal(root, num);
    return num[0];
};