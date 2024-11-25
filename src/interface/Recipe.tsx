import { CreatorMeta } from "./CreatorMeta";
import { ImageMeta } from "./ImageMeta";
import { NutritionMeta } from "./NutritionMeta";
import { ReviewMeta } from "./ReviewMeta";
import { ServingMeta } from "./ServingMeta";
import { TimeMeta } from "./TimeMeta";

/**
 * Represents a recipe with metadata, details, and instructions.
 * 
 * @interface Recipe
 * @extends ImageMeta
 * 
 * @property {string} title - The title of the recipe.
 * @property {string} description - Brief description of the recipe.
 * @property {string} category - Represents the category the recipe belongs to.
 * @property {string[]} [tags] - Optional tags associated with the recipe.
 * @property {ReviewMeta} reviewMeta - Review data for a recipe.
 * @property {ImageMeta} imageMeta - ImageMeta with cover, badge and icon.
 * @property {TimeMeta} timeMeta - Time metadata for a recipe.
 * @property {ServingMeta} servingMeta - Serving metadata for a recipe.
 * @property {NutritionMeta} nutritionMeta - Nutritional breakdown for the recipe
 * @property {CreatorMeta} creatorMeta - Creator metadata for a recipe
 * @property {string[]} ingredients - A list of ingredients required for the recipe.
 * @property {string[]} directions - Step-by-step instructions to prepare the recipe.
 * 
 * @example
 * const familyRecipe: Recipe = {
 *      title: "Mwaura's Coffee",
 *      description: "A family-favorite coffee recipe.",
 *      category: "Beverage",
 *      tags: ["Coders", "What Is Sleep"],
 *      reviewMeta: {
 *          total: 1,
 *          rating: 4,
 *          reviews: [
 *              {
 *                  name: "Eric",
 *                  avatar: "https://eric-image-example.png",
 *                  location: "Github",
 *                  rating: 5,
 *                  comment: "Add creamer.",
 *                  helpful: true,
 *                  date: "November 23, 2024"
 *              }   
 *          ]
 *      },
 *      imageMeta: {
 *          cover: "https://cover-image-example.png"
 *          badge: "https://badge-image-example.png"
 *          icon: "game-icons:steak"
 *      },
 *      timeMeta: {
 *          prepTime: "15 minutes",
 *          cookTime: "30 minutes",
 *          totalTime: "45 minutes",
 *          additionalTime: "2 hours (marination)"
 *      },
 *      creatorMeta: {
 *          name: "Eric Mwaura",
 *          avatar: "https://example-rico-avatar.com",
 *          bio: "I code and drink coffee."
 *      },
 *      servingMeta: {
 *          servingSize: "200 ml",
 *          numberOfServings: "2 servings",
 *          yield: "2 cups",
 *          portionPerServing: "1 cup",
 *          servingNotes: "Best served hot."
 *      },
 *      nutritionMeta: {
 *          calories: "5",
 *          fat: "0g",
 *          saturatedFat: "0g",
 *          cholesterol: "0mg",
 *          sodium: "5mg",
 *          carbohydrates: "1g",
 *          fiber: "0g",
 *          caffeine: "95mg",
 *          sugar: "0g",
 *          protein: "0g",
 *          vitamins: ["B2", "B3"],
 *          minerals: ["Potassium", "Magnesium"]
 *      },
 *      ingredients: ["20 tsps of instant coffee", "1 cup of milk", "2 tsp sugar"],
 *      directions: [
 *          "Boil water and add to cup.",
 *          "Ass milk and sugar to taste. Serve hot."
 *      ],
 * }
 */
export interface Recipe {
    title: string;
    description: string;
    category: string;
    tags?: string[];
    reviewMeta: ReviewMeta;
    imageMeta: ImageMeta;
    timeMeta: TimeMeta;
    servingMeta: ServingMeta;
    nutritionMeta: NutritionMeta;
    creatorMeta: CreatorMeta;
    ingredients: string[];
    directions: string[];
}