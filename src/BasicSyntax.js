export function romanToInteger(str) {
    const arabs = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        const currentNumber = arabs[str[i]];
        const nextNumber = arabs[str[i + 1]];

        if (!nextNumber || currentNumber >= nextNumber) {
            result += currentNumber;
        }

        if (currentNumber < nextNumber) {
            result -= currentNumber;
        }
    }
    return result;
}
