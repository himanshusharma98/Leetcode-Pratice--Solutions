/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    let queue = [];
    queue.push(root);
    while(queue.length){
        let newQueue = [];
        for(let i = 0; i < queue.length; i++){
            let node = queue[i];
            if(node){
                if(node.left) newQueue.push(node.left);
                if(node.right) newQueue.push(node.right);
                node.next = queue[i + 1] || null;
            }
        }
        queue = newQueue;
    }
    return root;
};