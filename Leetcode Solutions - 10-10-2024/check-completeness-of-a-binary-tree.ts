interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

function isCompleteTree(root: TreeNode | null): boolean {
    let queue = [root];
    let shouldHaveChild = true;
    while (queue.length > 0) {
        let el = queue.shift()!;

        if (el.left) {
            if (!shouldHaveChild) return false
            queue.push(el.left);
        } else {
            shouldHaveChild = false
        }

        if (el.right) {
            if (!shouldHaveChild) return false
            queue.push(el.right);
        } else {
            shouldHaveChild = false
        }
    }
    return true;
};