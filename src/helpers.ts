export function calculateBreadUnitsPerGrams(
    grams: number,
    carbsPerHundred: number
): number | string {
    if (grams === 0 || carbsPerHundred === 0) {
        return 0;
    }

    const result = ((carbsPerHundred / 100) * grams) / 12;

    return result % 1 !== 0 ? result.toFixed(2) : result;
}

export function calculateCarbsForGrams(
    grams: number,
    carbsPerHundred: number
): number | string {
    if (grams === 0 || carbsPerHundred === 0) {
        return 0;
    }

    const result = (carbsPerHundred / 100) * grams;

    return result % 1 !== 0 ? result.toFixed(2) : result;
}

export function calculateCarbsPerGrams(
    grams: number,
    carbsPerHundred: number
): number | string {
    if (grams === 0 || carbsPerHundred === 0) {
        return 0;
    }

    const result = (100 / carbsPerHundred) * grams;

    return result % 1 !== 0 ? result.toFixed(2) : result;
}

export function calculateCarbsForBreadUnits(
    breadUnits: number,
    carbsPerHundred: number
): number | string {
    if (breadUnits === 0 || carbsPerHundred === 0) {
        return 0;
    }

    const result = (breadUnits * 12 * 100) / carbsPerHundred;

    return result % 1 !== 0 ? result.toFixed(2) : result;
}
