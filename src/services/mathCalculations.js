export function roundNumber(number) {
    return Math.round(number * 10000) / 10000;
}

export function convertCurrency(amount, rateOne, scaleOne, rateTwo, scaleTwo) {
    return roundNumber(amount * rateOne / scaleOne * scaleTwo / rateTwo);
}