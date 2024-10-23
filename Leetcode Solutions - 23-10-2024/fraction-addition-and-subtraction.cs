public class Solution {
    public string FractionAddition(string expression) {
        List<int> numerators = new List<int>();
        List<int> denominators = new List<int>();

        int i = 0;
        while (i < expression.Length) {
            int sign = 1;
            if (expression[i] == '-' || expression[i] == '+') {
                sign = expression[i] == '-' ? -1 : 1;
                i++;
            }

            int num = 0;
            while (i < expression.Length && char.IsDigit(expression[i])) {
                num = num * 10 + (expression[i] - '0');
                i++;
            }

            i++; // skip the '/'

            int denom = 0;
            while (i < expression.Length && char.IsDigit(expression[i])) {
                denom = denom * 10 + (expression[i] - '0');
                i++;
            }

            numerators.Add(sign * num);
            denominators.Add(denom);
        }

        int commonDenominator = 1;
        foreach (int denom in denominators) {
            commonDenominator = lcm(commonDenominator, denom);
        }

        int totalNumerator = 0;
        for (int j = 0; j < numerators.Count; j++) {
            totalNumerator += numerators[j] * (commonDenominator / denominators[j]);
        }

        int gcdValue = gcd(Math.Abs(totalNumerator), commonDenominator);
        return (totalNumerator / gcdValue) + "/" + (commonDenominator / gcdValue);
    }

    private int gcd(int a, int b) {
        return b == 0 ? a : gcd(b, a % b);
    }

    private int lcm(int a, int b) {
        return a / gcd(a, b) * b;
    }
}