import java.util.Arrays;

class Solution {
    public int gcd(int a, int b) {
        if (a < b) {
            int h = a;
            a = b;
            b = h;
        }
        while (b > 0) {
            int h = b;
            b = a % b;
            a = h;
        }
        return a;
    }

    public int largestComponentSize(int[] nums) {
        int n = nums.length;
        int max = 1;
        for (int num : nums) {
            max = Math.max(max, num);
        }
        int[] m = new int[max + 1];
        Arrays.fill(m, -1);
        boolean[] check = new boolean[max + 1];
        for (int i = 0; i < n; i++) {
            m[nums[i]] = i;
        }
        UnionFind uf = new UnionFind(n);
        for (int p = 2; p <= max; p++) {
            if (check[p])
                continue;

            int first = -1;
            for (int div = p; div <= max; div += p) {
                if (m[div] >= 0) {
                    if (first == -1) {
                        first = m[div];
                    } else {
                        uf.join(first, m[div]);
                    }
                }
                check[div] = true;
            }
        }
        return uf.getMaxComponent();
    }
}

public class UnionFind {
    private int[] parent;
    private int[] size;
    private int maxSize;

    public UnionFind(int n) {
        parent = new int[n];
        size = new int[n];
        maxSize = 1;

        for (int i = 0; i < n; i++) {
            parent[i] = i;
            size[i] = 1;
        }
    }

    public int find(int x) {
        return x != parent[x] ? parent[x] = find(parent[x]) : x;
    }

    public void join(int x, int y) {
        x = find(x);
        y = find(y);

        if (x != y) {
            if (size[x] < size[y]) {
                int h = x;
                x = y;
                y = h;
            }
            size[x] += size[y];
            maxSize = Math.max(maxSize, size[x]);
            parent[y] = x;
        }
    }

    public int getMaxComponent() {
        return maxSize;
    }
}
