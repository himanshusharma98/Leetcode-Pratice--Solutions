var validArrangement = function(pairs) {
    let indeg=new Map();
    let outdeg=new Map();
    let adjlist=new Map();
    for(let ele of pairs){
        let x=ele[0];
        let y=ele[1];
        adjlist.has(x)?adjlist.get(x).push(y):adjlist.set(x,[y]);
        indeg.has(y)?indeg.set(y,indeg.get(y)+1):indeg.set(y,1);
        if(!indeg.has(x))indeg.set(x,0);
        outdeg.has(x)?outdeg.set(x,outdeg.get(x)+1):outdeg.set(x,1);
        if(!outdeg.has(y))outdeg.set(y,0)
    }

    function findStartNode(){
        let start_node=-1;
        for(let [key,val] of indeg){
            if(outdeg.get(key) > val)return key;
            start_node=key;
        }
        return start_node;
    }

    let startNode=findStartNode();
    console.log('startnode', startNode)
    let vis=new Map();
    let path=[];
    dfs(startNode);
   

    function dfs(node){
        let edges=adjlist.get(node) || [];

        while(edges.length>0){
            
            for(let ele of adjlist.get(node) || []){
                let nxt=edges.pop();
                dfs(nxt);
            }
        }
        path.push(node);
    }



    path.reverse();
    let answer=[];

    for(let i=0;i<path.length-1;i++){
        answer.push([path[i], path[i+1]]);
    }

    return answer;
};