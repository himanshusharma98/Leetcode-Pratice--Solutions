import java.util.*;

class Solution {
    public int[] deckRevealedIncreasing(int[] deck) {
        int res[] = new int[deck.length];
        Queue<Integer> q = new LinkedList<>();
        Arrays.sort(deck);
        for (int i = 0; i < res.length; i++) {
            q.add(i);
        }
        int i = 0;
        while (q.size() > 1) {
            res[q.remove()] = deck[i];
            q.add(q.remove());
            i++;
        }
        res[q.remove()] = deck[i];
        return res;

    }
}
