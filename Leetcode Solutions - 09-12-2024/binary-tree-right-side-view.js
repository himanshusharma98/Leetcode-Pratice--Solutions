/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) return [];
    let queue = [root];
    let ans = [];
    while(queue.length > 0){
        let size = queue.length;
        for(let i = 0; i < size; i++){
            let currRoot = queue.shift();
            if(currRoot.left) queue.push(currRoot.left);
            if(currRoot.right)queue.push(currRoot.right);
            if(i === size - 1) ans.push(currRoot.val);
        }
    }
    return ans;
};