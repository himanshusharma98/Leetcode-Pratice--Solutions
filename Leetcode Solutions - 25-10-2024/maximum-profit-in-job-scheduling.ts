function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {

    const binarySearch = (jobs: [number, number][], start: number): number => {
        let lo = 0, hi = jobs.length - 1;
        while (lo <= hi) {
            let mid = lo + Math.floor((hi - lo) / 2);
            if (jobs[mid][0] <= start) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return hi;
    };


    const jobs = startTime.map((start, i) => [start, endTime[i], profit[i]])
        .sort((a, b) => a[1] - b[1]);


    const dp: [number, number][] = [[0, 0]];


    for (const [start, end, prof] of jobs) {
        const i = binarySearch(dp, start);
        const maxProfit = dp[i][1] + prof;
        if (maxProfit > dp[dp.length - 1][1]) {
            dp.push([end, maxProfit]);
        }
    }


    return dp[dp.length - 1][1];
};