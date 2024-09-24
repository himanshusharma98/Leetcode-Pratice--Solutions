function findKthNumber(n: number, k: number): number {
    let curr:number=1;
    k--;

    function countSteps(n:number,curr:number,next:number):number{
        let steps:number=0;
        while(curr<=n){
            steps+=Math.min(n+1,next)-curr;
            curr*=10;
            next*=10;
        }
        return steps;
    }
    
    while(k>0){
        let steps=countSteps(n,curr,curr+1);
            if(steps<=k){
                curr+=1;
                k-=steps;
            }else{
                curr*=10;
                k-=1;
            }
    }
return curr;
};