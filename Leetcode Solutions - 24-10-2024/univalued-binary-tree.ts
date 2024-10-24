function isUnivalTree(root: TreeNode | null): boolean {
    const vals = new Array<number>();
    const dfs = (node: TreeNode | null): void => {
        if (node) {
            vals.push(node.val);
            dfs(node.left);
            dfs(node.right);
        }
    }
    dfs(root);
    return vals.reduce((acc, curr) => acc + curr) / vals.length === vals[0]
};
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}