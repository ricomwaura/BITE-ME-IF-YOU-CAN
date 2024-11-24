/**
 * Represents serving metadata for a recipe.
 * 
 * @interface ServingMeta
 * 
 * @property {string} servingSize - Recommended portion size per serving.
 * @property {string} numberOfServings - Total number of servings the recipe can yield.
 * @property {string} yield - Total quantity the recipe produces.
 * @property {string} [portionPerServing] - Optional additional breakdown for how much of the recipe makes up one serving.
 * @property {string} [servingNotes] Optional, any specific guidance related to serving.
 * 
 * @example
 * const serving: ServingMeta = {
 *      servingSize: "200 ml",
 *      numberOfServings: "2 servings",
 *      yield: "2 cups",
 *      portionPerServing: "1 cup",
 *      servingNotes: "Best served hot."
 * }
 */
export interface ServingMeta {
    servingSize: string;
    numberOfServings: string;
    yield: string;
    portionPerServing?: string;
    servingNotes?: string;
}