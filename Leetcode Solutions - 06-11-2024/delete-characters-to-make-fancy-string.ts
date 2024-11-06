function makeFancyString(s: string): string {
    let stack: string[] = [];
    for (let i: number = 0; i < s.length; i++) {

        if (stack.length >= 2 && stack[stack.length - 2] === s[i] && stack[stack.length - 1] === s[i]) {
            continue;
        }
        stack.push(s[i]);
    }
    return stack.join('');
}