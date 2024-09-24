class Solution {
    public int maxOperations(int[] nums) {
        //With Memoization : start [Beats 50%] [136ms]
        return withMemoization(nums);
        //With Memoization : end
    }
    
    public int withMemoization(int[] nums){
        int n = nums.length;
        int i = 0;
        int j = n-1;
        int sum1 = nums[i] + nums[i+1]; 
        int sum2 = nums[i] + nums[j];
        int sum3 = nums[j-1] + nums[j];

        Integer[][] memo = new Integer[n+1][n+1];
        int ans = withMemo(i,j,nums,sum1,memo);

        memo = new Integer[n+1][n+1];
        ans = Math.max(ans, withMemo(i,j,nums,sum2,memo));

        memo = new Integer[n+1][n+1];
        ans = Math.max(ans, withMemo(i,j,nums,sum3,memo));

        return ans;
    }

    public int withMemo(int i,int j,int[] arr,int sum,Integer[][] memo){
        if(j <= i) return 0;
        if(memo[i][j] != null) return memo[i][j];

        int ans = 0;
        if(arr[i] + arr[j] == sum){
            ans = Math.max(ans,1 + withMemo(i+1,j-1,arr,sum,memo));
        }

        if(arr[i] + arr[i+1] == sum){
            ans = Math.max(ans,1 + withMemo(i+2,j,arr,sum,memo));
        }

        if(arr[j-1] + arr[j] == sum){
            ans = Math.max(ans,1 + withMemo(i,j-2,arr,sum,memo));
        }

        memo[i][j] = ans;
        return ans;
    }
}