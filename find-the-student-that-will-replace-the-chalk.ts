function chalkReplacer(chalk: number[], k: number): number {
    const totalChalk = chalk.reduce((sum, num) => sum + num, 0);
    
    // Calculate how many full rounds of chalk can be used
    k %= totalChalk;

    // Find the index of the student who will replace the chalk
    for (let i = 0; i < chalk.length; i++) {
        if (k < chalk[i]) {
            return i; // This student cannot finish their problem
        }
        k -= chalk[i]; // Deduct chalk used by the current student
    }
    
    return -1; // This line will never be reached in valid input
}

// Example usage:
console.log(chalkReplacer([5, 1, 5], 22)); // Output: 0
console.log(chalkReplacer([3, 4, 1, 2], 25)); // Output: 1
