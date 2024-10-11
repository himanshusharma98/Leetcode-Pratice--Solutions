function smallestChair(times: number[][], targetFriend: number): number {
    const sortedFriends = times.map((interval,index) =>(
        {
            arrival: interval[0],
            leave: interval[1],
            index
        })).sort((a,b) => a.arrival - b.arrival);
    
        const chairs = new Array(times.length * 10).fill(-1);
    
        for(const friend of sortedFriends){
            let chair = 0;
            for(let i = 0; i < chairs.length; i++){
                if(friend.arrival >= chairs[i]){
                    chair = i;
                    break;
                }
            }
            chairs[chair] = friend.leave;
    
            if(friend.index === targetFriend){
                return chair;
            }
        }
        return -1;
    
    };