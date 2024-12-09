var averageOfLevels = function(root) {
    if(!root) return [];
    let resAverages = new Array();
    let queue = new Array();
    queue.push(root);
    while(queue.length){
        const next = [];
        let sum = 0;
        for(const node of queue){
            sum +=node.val;
            if(node.left) next.push(node.left);
            if(node.right) next.push(node.right);
        }
        const avg = sum / queue.length;
        resAverages.push(avg);
        queue = next;
    }
    return resAverages
};