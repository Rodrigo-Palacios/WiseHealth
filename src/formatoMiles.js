export function formMiles(value) {
    let miles = value / 1000;
    let text = `$${miles}K`;

    return text;
}