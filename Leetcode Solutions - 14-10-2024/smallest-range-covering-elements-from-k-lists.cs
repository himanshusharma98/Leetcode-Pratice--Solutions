public class Solution {
    public int[] SmallestRange(IList<IList<int>> nums) {
        
        PriorityQueue<point,point> pq = new(new SortComparer());
        
        
        int[] ans = new int[2]{0,Int32.MaxValue};
        
        
        int max = Int32.MinValue;
        
        
        for(int i=0;i<nums.Count;i++)
        {
            point p = new point(i,0,nums[i][0]);
            max=Math.Max(max,nums[i][0]);
            pq.Enqueue(p,p);
        }
        
        while(true)
        {
        
            point curr = pq.Dequeue();
            
            
            if(ans[1]-ans[0] > max-curr.val)
            {
                ans[0]=curr.val;
                ans[1]=max;
            }
            
            int row = curr.i;
            int col= curr.j+1;
            
            
            if(col<nums[row].Count)
            {
                
                max = Math.Max(max,nums[row][col]);
                
                
                point n = new point(row,col,nums[row][col]);
                pq.Enqueue(n,n);
            }
            else
                
                break;
        }
        
        return ans;
    }
}

public class point
{
    public int val; 
    public int j;  
    public int i;   
    
    public point(int a,int b,int c)
    {
        i=a;
        j=b;
        val=c;
    }
}

public class SortComparer: IComparer<point>
{
    public int Compare(point a , point b)
    {
        return a.val-b.val;
    }
}