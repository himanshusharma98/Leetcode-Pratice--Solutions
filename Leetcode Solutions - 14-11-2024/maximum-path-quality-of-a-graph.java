class Solution {
    HashMap<Integer,List<int[]>> graph;
    int result=0;
    public int maximalPathQuality(int[] values, int[][] edges, int maxTime) {
        graph=new HashMap<>();
        for(int[] i:edges){
            graph.computeIfAbsent(i[0],k->new ArrayList<>()).add(new int[]{i[1],i[2]});
            graph.computeIfAbsent(i[1],k->new ArrayList<>()).add(new int[]{i[0],i[2]});
        }
        backtrack(values,new int[values.length],0,0,0,maxTime);
        return result;
    }
    private void backtrack(int[] values,int[] visited,int idx,int time,int value,int maxTime){
        if(time>maxTime){
            return;
        }
        if(visited[idx]==0){
            value+=values[idx];
        }
        if(idx==0){
            result=Math.max(result,value);
        }
        visited[idx]++;
        for(int[] i:graph.getOrDefault(idx,new ArrayList<>())){
            backtrack(values,visited,i[0],time+i[1],value,maxTime);
        }
        visited[idx]--;
    }
}
