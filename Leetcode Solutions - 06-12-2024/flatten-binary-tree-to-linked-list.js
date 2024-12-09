var flatten = function(root) {
    if (root === null) return;
    if (root.left) {
        var last = root.left;
        while (last.right !== null) last = last.right;
        var tmp = root.right;
        root.right = root.left;
        last.right = tmp;
        root.left = null;
    }
    flatten(root.right);
};