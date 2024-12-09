/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    let queue = [root], res = [];
    let flag = false;
    while(queue.length){
        let n = queue.length;
        let arr = [];
        for(let i = 0;i<n;i++){
            let curr = queue.shift();
            arr.push(curr.val);
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
        }
        res.push(arr);
    }
    
    for(let i=0;i<res.length;i++){
        if(flag)
        res[i].reverse();
        flag = !flag
    }
    return res;
};