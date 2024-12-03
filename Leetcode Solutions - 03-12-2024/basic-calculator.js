var calculate = function(s) {
    let res = 0, sum = 0, sign = 1;
    let myStack = [];
    myStack.push(1);
    const isDigit = (ch) => {
        return ch >= '0' && ch <= '9';
    }
    for(let ch of s){
        if(isDigit(ch)) sum = sum * 10 + (ch - '0');
        else{
            res += sum * sign * myStack[myStack.length - 1];
            sum = 0;
            if(ch === '-') sign = -1;
            else if(ch === '+') sign = 1;
            else if(ch === '(') {myStack.push(myStack[myStack.length - 1] * sign); sign = 1;}
            else if(ch === ')') myStack.pop(); 
        }
    }
    return res += (sign * sum);
};