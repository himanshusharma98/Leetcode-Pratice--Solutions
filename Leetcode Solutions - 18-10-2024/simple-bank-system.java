class Bank {
    HashMap<Integer,Long> ms = new HashMap<>();
    int n;
    public Bank(long[] balance) {
         n= balance.length;
       for(int i=0;i<n;i++){
          ms.put(i+1,balance[i]);           
       }
    }
    
    public boolean transfer(int account1, int account2, long money) {
        if(account1 < 1||account1 >n||account2 <1||account2 >n||ms.get(account1)<money) return false;
        ms.put(account1,ms.get(account1)-money);
        ms.put(account2,ms.get(account2)+money);
        return true;
    }
    
    public boolean deposit(int account, long money) {
        if(account<1||account>n)return false;
        ms.put(account,ms.get(account)+money);
        return true;
    }
    
    public boolean withdraw(int account, long money) {
        if(account<1||account>n||ms.get(account)<money)return false;
        ms.put(account,ms.get(account)-money);
        return true;
    }
}

