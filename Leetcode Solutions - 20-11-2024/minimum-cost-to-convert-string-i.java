class Solution {
    public long minimumCost(String source, String target, char[] original, char[] changed, int[] cost) {
        int n = source.length();
        int numChars = 26;

        Map<Character, List<int[]>> adjList = new HashMap<>();
        for (char ch = 'a'; ch <= 'z'; ch++) {
            adjList.put(ch, new ArrayList<>());
        }

        for (int i = 0; i < original.length; i++) {
            adjList.get(original[i]).add(new int[] { changed[i], cost[i] });
        }

        long[][] dist = new long[numChars][numChars];
        for (int i = 0; i < numChars; i++) {
            Arrays.fill(dist[i], Long.MAX_VALUE);
            dist[i][i] = 0;
            dijkstra(adjList, (char) ('a' + i), dist[i]);
        }

        long totalCost = 0;
        for (int i = 0; i < n; i++) {
            char srcChar = source.charAt(i);
            char tgtChar = target.charAt(i);
            long minCost = dist[srcChar - 'a'][tgtChar - 'a'];
            if (minCost == Long.MAX_VALUE) {
                return -1; // Impossible to convert
            }
            totalCost += minCost;
        }

        return totalCost;
    }

    private void dijkstra(Map<Character, List<int[]>> adjList, char start, long[] dist) {
        PriorityQueue<long[]> pq = new PriorityQueue<>(Comparator.comparingLong(a -> a[1]));
        pq.offer(new long[] { start, 0 });

        while (!pq.isEmpty()) {
            long[] curr = pq.poll();
            char u = (char) curr[0];
            long d = curr[1];

            if (d > dist[u - 'a'])
                continue;

            for (int[] neighbor : adjList.get(u)) {
                char v = (char) neighbor[0];
                long weight = neighbor[1];
                if (dist[u - 'a'] + weight < dist[v - 'a']) {
                    dist[v - 'a'] = dist[u - 'a'] + weight;
                    pq.offer(new long[] { v, dist[v - 'a'] });
                }
            }
        }
    }
}
