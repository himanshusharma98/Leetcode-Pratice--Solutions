public class Solution {
    public int RangeSum(int[] nums, int n, int left, int right) {
        int MOD = 1000000007;
        
        // Step 1: Initialize a priority queue (min-heap)
        PriorityQueue<(int sum, int start, int end)> minHeap = new PriorityQueue<(int sum, int start, int end)>();
        
        // Step 2: Push the first element of each subarray into the heap
        for (int i = 0; i < n; i++) {
            minHeap.Enqueue((nums[i], i, i));
        }
        
        // Step 3: Extract elements in the range [left, right]
        long result = 0;
        for (int i = 1; i <= right; i++) {
            var (sum, start, end) = minHeap.Dequeue();
            
            if (i >= left) {
                result = (result + sum) % MOD;
            }
            
            // If there's a next element in the current subarray, push it to the heap
            if (end + 1 < n) {
                minHeap.Enqueue((sum + nums[end + 1], start, end + 1));
            }
        }
        
        return (int)result;
    }
}

public class PriorityQueue<T> where T : IComparable<T> {
    private List<T> data;

    public PriorityQueue() {
        this.data = new List<T>();
    }

    public void Enqueue(T item) {
        data.Add(item);
        int ci = data.Count - 1; // child index; start at end
        while (ci > 0) {
            int pi = (ci - 1) / 2; // parent index
            if (data[ci].CompareTo(data[pi]) >= 0) break; // child item is larger than (or equal) parent so we're done
            T tmp = data[ci]; data[ci] = data[pi]; data[pi] = tmp;
            ci = pi;
        }
    }

    public T Dequeue() {
        // assumes pq is not empty; up to calling code
        int li = data.Count - 1; // last index (before removal)
        T frontItem = data[0];   // fetch the front
        data[0] = data[li];
        data.RemoveAt(li);

        --li; // last index (after removal)
        int pi = 0; // parent index. start at front of pq
        while (true) {
            int ci = pi * 2 + 1; // left child index of parent
            if (ci > li) break;  // no children so done
            int rc = ci + 1;     // right child
            if (rc <= li && data[rc].CompareTo(data[ci]) < 0) // if there is a rc (ci + 1), and it is smaller than left child, use the right child instead
                ci = rc;
            if (data[pi].CompareTo(data[ci]) <= 0) break; // parent is smaller than (or equal to) smallest child so done
            T tmp = data[pi]; data[pi] = data[ci]; data[ci] = tmp; // swap parent and child
            pi = ci;
        }
        return frontItem;
    }

    public int Count {
        get { return data.Count; }
    }
}