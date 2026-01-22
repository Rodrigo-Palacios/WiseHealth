export function toUpper(stng) {
    let firtsLetter = stng.slice(0, 1).toUpperCase();
    let theRest = stng.slice(1);
    return `${firtsLetter}${theRest}`
}