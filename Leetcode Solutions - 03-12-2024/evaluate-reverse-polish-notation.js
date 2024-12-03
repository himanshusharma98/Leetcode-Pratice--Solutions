/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        let num = Number(tokens[i])
        if (!isNaN(num)) {
            stack.push(Number(tokens[i]))
        } else {
            let last = stack.pop();
            let last2 = stack.pop();
            switch (tokens[i]) {
                case '+':
                    result = last2 + last;
                    break;
                case '-':
                    result = last2 - last;
                    break;
                case '*':
                    result = last2 * last;
                    break;
                case '/':
                    result = Math.trunc(last2 / last); 
                    break;
            }
            stack.push(result)
        }
        console.log(stack, "st")
    }
    console.log(stack)
    return stack.pop()
};