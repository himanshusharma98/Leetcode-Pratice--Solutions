function minimumTotalDistance(robot: number[], factory: number[][]): number {

    const dp: Record<string, number> = {};

    function calculateDistance(robotIndex: number, factoryIndex: number): number {
        if (robotIndex === robot.length) {
            return 0;
        }
        if (factoryIndex === factory.length) {
            return Infinity;
        }

        const key = `${robotIndex},${factoryIndex}`;
        if (key in dp) {
            return dp[key];
        }

        let answer = calculateDistance(robotIndex, factoryIndex + 1);
        let totalDistance = 0;

        for (let unit = 0; unit < factory[factoryIndex][1]; unit++) {
            if (robotIndex + unit === robot.length) {
                break;
            }
            totalDistance += Math.abs(robot[robotIndex + unit] - factory[factoryIndex][0]);

            answer = Math.min(answer, totalDistance + calculateDistance(robotIndex + unit + 1, factoryIndex + 1));
        }

        dp[key] = answer;
        return answer;
    }

    robot.sort((a, b) => a - b);
    factory.sort((a, b) => a[0] - b[0]);

    const ans = calculateDistance(0, 0);
    return ans;
};