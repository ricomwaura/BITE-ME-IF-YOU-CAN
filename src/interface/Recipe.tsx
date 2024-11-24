import { ImageMeta } from "./ImageMeta";

/**
 * Represents a recipe with metadata, details, and instructions.
 * 
 * @interface Recipe
 * @extends ImageMeta
 * 
 * @property {string} title - The title of the recipe.
 * @property {string} description - Brief description of the recipe.
 * @property {string[]} [tags] - Optional tags associated with the recipe.
 * @property {string[]} ingredients - A list of ingredients required for the recipe.
 * @property {string[]} directions - Step-by-step instructions to prepare the recipe.
 * 
 * @example
 * const familyRecipe: Recipe = {
 *      title: "Mwaura's Coffee",
 *      description: "A family-favorite coffee recipe.",
 *      tags: ["Coders", "What Is Sleep"],
 *      ingredients: ["20 tsps of instant coffee", "1 cup of milk", "2 tsp sugar"],
 *      directions: [
 *          "Boil water and add to cup.",
 *          "Ass milk and sugar to taste. Serve hot."
 *      ],
 *      cover: "https://cover-image-example.png"
 *      badge: "https://badge-image-example.png"
 *      icon: "game-icons:steak",
 * }
 */
export interface Recipe extends ImageMeta {
    title: string;
    description: string;
    tags?: string[];
    ingredients: string[];
    directions: string[];
}