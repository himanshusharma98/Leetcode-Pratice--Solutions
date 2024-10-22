class Solution {

    public int distMoney(int money, int children) {
        if(money < children) {
            
            return -1;
        }

        int currentMoney = money;
        int childrenCount = children;

        
        currentMoney = currentMoney - childrenCount;

        if(currentMoney < 7) {
            
            return 0;
        }

        int howMany8s = currentMoney / 7;
        int remainingMoney = currentMoney % 7;
        
        if(howMany8s + 1 == childrenCount && remainingMoney == 3) {
            
            howMany8s--;
        }
        else if((howMany8s == childrenCount && remainingMoney > 0) || howMany8s > childrenCount) {
           
            howMany8s = childrenCount - 1;
        }

        return howMany8s;
    }
}
