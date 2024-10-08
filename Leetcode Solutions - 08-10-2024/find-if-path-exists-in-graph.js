/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let g=new Array(n);
    for(let i=0;i<n;i++) g[i]=[];
    for(let i of edges){
        g[i[0]].push(i[1]);
        g[i[1]].push(i[0]);
    }
    let vis=new Array(n).fill(0);
    rec(source,g,vis);
    return vis[destination];
};

var rec=(node,g,vis)=>{
    vis[node]=1;
    for(let i of g[node]){
        if(!vis[i])
            rec(i,g,vis);
    }
}