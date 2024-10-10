class Solution {
    public boolean isAlienSorted(String[] words, String order) {

        if (words.length == 1)
            return true;

        Map<Character, Integer> orderMap = new HashMap<>();

        for (int i = 0; i < order.length(); i++) {
            orderMap.put(order.charAt(i), i);
        }

        for (int i = 0; i < words.length - 1; i++) {
            for (int j = 0; j < words[i].length(); j++) {
                if (j >= words[i + 1].length())
                    return false;

                if (words[i].charAt(j) != words[i + 1].charAt(j)) {

                    if (orderMap.get(words[i].charAt(j)) > orderMap.get(words[i + 1].charAt(j))) {
                        return false;
                    } else {

                        break;
                    }
                }
            }
        }

        return true;
    }
}