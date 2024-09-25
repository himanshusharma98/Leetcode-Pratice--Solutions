function reverseOddLevels(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    let queue = [];
    queue.push(root);
    let depth = 0;
    while (queue.length) {
        const size = queue.length;
        const isOdd = depth % 2 !== 0;
        if (isOdd) reverseValues(queue);
        for (let i = 0; i < size; i++) {
            const curr = queue.shift();
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        depth++;
    }
    return root;

};

function reverseValues(nodes: TreeNode[]) {
    for (let i = 0; i < Math.floor(nodes.length / 2); i++) {
        const n = nodes.length;
        const tmp = nodes[i].val;
        nodes[i].val = nodes[nodes.length - 1 - i].val;
        nodes[nodes.length - 1 - i].val = tmp;
    }
}