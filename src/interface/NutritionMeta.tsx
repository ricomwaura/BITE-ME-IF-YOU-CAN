/**
 * Represents Nutritional breakdown for the recipe including, breakdown of fats, fiber content and added sugar.
 * 
 * @interface NutritionMeta
 * 
 * @property {string} calories - The calories per serving.
 * @property {string} fat - Total fats per serving.
 * @property {string} saturatedFat - Saturated Fats per serving.
 * @property {string} cholesterol - Cholesterol content per serving.
 * @property {string} sodium - Sodium content per serving.
 * @property {string} carbohydrates - Total carbohydrates per serving.
 * @property {string} fiber - Dietary fiber per serving.
 * @property {string} [sugar] - Optional, amount of added sugar per serving.
 * @property {string} [caffeine] - Optional, Caffeine content per serving
 * @property {string} protein - Protein content per serving.
 * @property {string[]} [vitamins] - Optional, list of vitamins.
 * @property {string[]} [minerals] - Optional, list of minerals.
 * 
 * @example
 * const coffeeNutrition: NutritionMeta = {
 *      calories: "5",
 *      fat: "0g",
 *      saturatedFat: "0g",
 *      cholesterol: "0mg",
 *      sodium: "5mg",
 *      carbohydrates: "1g",
 *      fiber: "0g",
 *      caffeine: "95mg",
 *      sugar: "0g",
 *      protein: "0g",
 *      vitamins: ["B2", "B3"],
 *      minerals: ["Potassium", "Magnesium"]
 * }
 */
export interface NutritionMeta {
    calories: string;
    fat: string;
    saturatedFat: string;
    cholesterol: string;
    sodium: string;
    carbohydrates: string;
    fiber: string;
    sugar?: string;
    caffeine?: string;
    protein: string;
    vitamins?: string[];
    minerals?: string[];
}