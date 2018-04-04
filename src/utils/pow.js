export function elevate(n, pow, isNegative) {
    let result = n;
    for (let i = 1; i < pow; i += 1) {
        result *= n;
    }
    return isNegative ? (1 / result) : result;
}

export function power(input, pow) {
    const numPow = Number(pow);
    const numInput = Number(input);

    if (numPow === 0 && numPow === parseInt(pow, 10)) {
        return 1;
    } else if (Array.isArray(input)) {
        return input.map(num => power(num, numPow));
    } else if (parseInt(input, 10) !== numInput) {
        throw new Error('Invalid input value');
    } else if ((numPow !== parseFloat(pow)) || (numInput === 0 && numPow <= 0)) {
        throw new Error('Invalid pow value');
    } else if (Math.floor(pow) !== numPow) {
        throw new Error('Invalid pow. Function can\'t process that power');
    }

    return numPow > 0 ? elevate(numInput, numPow) : elevate(numInput, Math.abs(numPow), true);
}
