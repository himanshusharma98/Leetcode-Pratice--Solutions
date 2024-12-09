var BSTIterator = function(root)
{

    this.arr = [];
    const go = (node) =>{
        if(!node) return;
        go(node.left);
        this.arr.push(node.val);
        go(node.right);
    }
    go(root);
};
BSTIterator.prototype.next = function()
{
    return this.arr.shift();
};
BSTIterator.prototype.hasNext = function()
{
    return this.arr.length > 0;
}