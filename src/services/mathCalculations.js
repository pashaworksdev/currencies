export function roundNumber(number) {
    return Math.round(number * 10000) / 10000;
}

export function convertCurrency(amount, rateFirst, scaleFirst, rateSecond, scaleSecond) {
    return roundNumber(amount * rateFirst / scaleFirst * scaleSecond / rateSecond);
}
