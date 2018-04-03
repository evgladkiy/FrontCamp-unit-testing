function elevate(n, pow, isNegative) {
    let result = n;
    for (let i = 1; i < pow; i += 1) {
        result *= n;
    }
    return isNegative ? (1 / result) : result;
}

export default function power(input, pow) {
    if (pow === 0) {
        return 1;
    } else if (Array.isArray(input)) {
        return input.map(num => power(num, pow));
    } else if (parseInt(input, 10) !== Number(input)) {
        throw new Error('Invalid input value');
    } else if (Number(pow) !== pow) {
        throw new Error('Invalid pow value');
    } else if (Math.floor(pow) !== pow) {
        throw new Error('Invalid pow. Function can\'t process that power');
    }

    return pow > 0 ? elevate(input, pow) : elevate(input, Math.abs(pow), true);
}
