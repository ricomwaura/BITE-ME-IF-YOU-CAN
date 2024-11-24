/**
 * Represents time metadata for a recipe.
 * 
 * @interface TimeMeta
 * 
 * @property {string} prepTime - Time required to prepare the ingredients.
 * @property {string} cookTime - Time required to cook the recipe.
 * @property {string} totalTime - Total time from start to finish.
 * @property {string} [additionalTime] - Optional additional time for steps like marination.
 * 
 * @example
 * const recipeTime: TimeMeta = {
 *      prepTime: "15 minutes",
 *      cookTime: "30 minutes",
 *      totalTime: "45 minutes",
 *      additionalTime: "2 hours (marination)"
 * }
 */
export interface TimeMeta {
    prepTime: string;
    cookTime: string;
    totalTime: string;
    additionalTime?: string;
}