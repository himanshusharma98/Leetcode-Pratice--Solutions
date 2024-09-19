/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    const memo = {};
    function compute(expr){
        if(memo[expr]) return memo[expr];
        const results = [];

        for(let i=0; i< expr.length; i++){
            const char  = expr[i];

            if(char === '+' || char === '-' || char === '*'){
                const left  = expr.slice(0,i);
                const right = expr.slice(i + 1);

                const  leftResults = compute(left);
                const rightResults = compute(right);

                for(const leftRes of leftResults){
                    for(const rightRes of rightResults){
                        let result;
                        switch(char){
                            case '+':
                            result = leftRes + rightRes;
                            break;
                            case '-':
                            result = leftRes - rightRes;
                            break;
                            case '*':
                            result = leftRes * rightRes;
                            break;
                        }
                        results.push(result);

                    }
                }
            }
        }
        if(results.length === 0){
            results.push(parseInt(expr, 10));
        }
        memo[expr] = results;
        return results;
    }
    return compute(expression);
    
};