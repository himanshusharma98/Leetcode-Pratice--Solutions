var nextBeautifulNumber = function (n) {
    while (!isBalancedNumber(++n));
    function isBalancedNumber(num) {
        let counts = Array(10).fill(0);
        while (num) {
            let mantissa = num % 10;
            if (!mantissa) return false;
            counts[mantissa] += 1;
            num = ~~(num / 10);
        }
        return counts.every((count, index) => !count || count === index);
    }
    return n;
};