var isSymmetric = function(root) {
    if(root===null) return true;
    return isSym(root.left, root.right)
};
function isSym(left, right) {
    if(left === null || right === null) return left === right
    if(left.val !== right.val) return false
    return isSym(left.left, right.right) && isSym(right.left, left.right)
}