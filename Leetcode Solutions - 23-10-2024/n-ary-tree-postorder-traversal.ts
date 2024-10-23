class NodeWithChildren {
    val: number
    children: NodeWithChildren[]
    constructor(val?: number) {
        this.val = (val === undefined ? 0 : val)
        this.children = []
    }
}

function postorder(root: NodeWithChildren | null): number[] {
    if (!root) return [];

    const stack = [root]
    const results: number[] = []

    while (stack.length) {
        const currNode = stack.pop()

        if (currNode) {



            if (currNode.children.length > 0) {
                stack.push(...currNode.children);
            }
            results.push(currNode.val)
        }
    }
    return results.reverse();
};