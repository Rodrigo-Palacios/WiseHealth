export function formMill (value) {
    let millones = value / 1000000;
    return `$${millones}M`
}