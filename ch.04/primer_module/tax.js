export function calculateTax(price) {
    return Number(price) * 1.2;
}

export default function (...prices) {
    return prices.reduce((total, p) => total += calculateTax(p), 0);
}