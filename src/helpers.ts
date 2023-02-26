export function calculateBreadUnitsPerGrams(
  grams: number,
  carbsPerHundred: number
): number {
  return (carbsPerHundred / 100) * grams / 12;
}

export function calculateCarbsPerGrams(
    grams: number,
    carbsPerHundred: number
): number {
    return (carbsPerHundred / 100) * grams;
}

export function calculateCarbsForBreadUnits(
    breadUnits: number,
    carbsPerHundred: number
): number {
    return (breadUnits * 12 * 100) / carbsPerHundred;
}