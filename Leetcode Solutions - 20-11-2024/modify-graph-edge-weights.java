class Solution {

    List<int[]>[] graph;
    private static final int INF = (int) 2e9;

    public int[][] modifiedGraphEdges(
        int n,
        int[][] edges,
        int source,
        int destination,
        int target
    ) {
        
        graph = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            graph[i] = new ArrayList<>();
        }

        for (int[] edge : edges) {
            if (edge[2] != -1) {
                graph[edge[0]].add(new int[] { edge[1], edge[2] });
                graph[edge[1]].add(new int[] { edge[0], edge[2] });
            }
        }

        
        int currentShortestDistance = runDijkstra(n, source, destination);
        if (currentShortestDistance < target) {
            return new int[0][0];
        }

        boolean matchesTarget = (currentShortestDistance == target);

        
        for (int[] edge : edges) {
            if (edge[2] != -1) continue; 

            
            
            edge[2] = matchesTarget ? INF : 1;
            graph[edge[0]].add(new int[] { edge[1], edge[2] });
            graph[edge[1]].add(new int[] { edge[0], edge[2] });

            
            if (!matchesTarget) {
                
                int newDistance = runDijkstra(n, source, destination);
                
                if (newDistance <= target) {
                    matchesTarget = true;
                    edge[2] += target - newDistance;
                }
            }
        }

        
        return matchesTarget ? edges : new int[0][0];
    }

    private int runDijkstra(int n, int source, int destination) {
        int[] minDistance = new int[n];
        boolean[] visited = new boolean[n];
        PriorityQueue<int[]> minHeap = new PriorityQueue<>(
            (a, b) -> a[1] - b[1]
        );

        Arrays.fill(minDistance, INF);
        minDistance[source] = 0;
        minHeap.add(new int[] { source, 0 });

        while (!minHeap.isEmpty()) {
            int[] curr = minHeap.poll();
            int u = curr[0];
            int d = curr[1];

            if (d > minDistance[u]) continue;

            for (int[] neighbor : graph[u]) {
                int v = neighbor[0];
                int weight = neighbor[1];

                if (d + weight < minDistance[v]) {
                    minDistance[v] = d + weight;
                    minHeap.add(new int[] { v, minDistance[v] });
                }
            }
        }

        return minDistance[destination];
    }
}
