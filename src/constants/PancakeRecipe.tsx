import { Recipe } from "interface/Recipe";
import { chefCozy } from "./ChefCozy";
import reviewerA from "assets/images/reviewer-a.png"
import reviewerB from "assets/images/reviewer-b.png"
import reviewerC from "assets/images/reviewer-c.png"

/**
 * Represents the pancake recipe data structure.
 *
 * @constant {Recipe} pancakeRecipe
 * @property {string} title - The title of the recipe.
 * @property {string} description - A brief description of the recipe.
 * @property {string} category - The category of the recipe.
 * @property {number} views - The number of viewers.
 * @property {Object} reviewMeta - Metadata related to recipe reviews.
 * @property {number} reviewMeta.total - Total number of reviews.
 * @property {number} reviewMeta.rating - Average rating of the recipe.
 * @property {Array<Object>} reviewMeta.reviews - Array of reviews.
 * @property {string} reviewMeta.reviews[].name - Name of the reviewer.
 * @property {string} reviewMeta.reviews[].avatar - Avatar URL of the reviewer.
 * @property {string} reviewMeta.reviews[].location - Location of the reviewer.
 * @property {number} reviewMeta.reviews[].rating - Rating given by the reviewer.
 * @property {string} reviewMeta.reviews[].comment - Review comment.
 * @property {boolean} reviewMeta.reviews[].helpful - Whether the review was helpful.
 * @property {Date} reviewMeta.reviews[].date - Date of the review.
 * @property {Object} imageMeta - Metadata for the recipe images.
 * @property {string} imageMeta.cover - Cover image URL.
 * @property {string} imageMeta.badge - Badge image URL.
 * @property {string} imageMeta.icon - Icon identifier for the recipe.
 * @property {Object} timeMeta - Metadata related to preparation and cooking times.
 * @property {string} timeMeta.prepTime - Time required for preparation.
 * @property {string} timeMeta.cookTime - Time required for cooking.
 * @property {string} timeMeta.totalTime - Total time required.
 * @property {string} timeMeta.additionalTime - Additional time, if any.
 * @property {Object} servingMeta - Metadata for servings and portions.
 * @property {string} servingMeta.servingSize - Size of a single serving.
 * @property {string} servingMeta.numberOfServings - Total number of servings.
 * @property {string} servingMeta.yield - Yield of the recipe.
 * @property {string} servingMeta.portionPerServing - Portion per serving.
 * @property {string} servingMeta.servingNotes - Notes about serving.
 * @property {Object} nutritionMeta - Nutritional information for the recipe.
 * @property {string} nutritionMeta.calories - Calories per serving.
 * @property {string} nutritionMeta.fat - Total fat content.
 * @property {string} nutritionMeta.saturatedFat - Saturated fat content.
 * @property {string} nutritionMeta.cholesterol - Cholesterol content.
 * @property {string} nutritionMeta.sodium - Sodium content.
 * @property {string} nutritionMeta.carbohydrates - Carbohydrate content.
 * @property {string} nutritionMeta.fiber - Fiber content.
 * @property {string} nutritionMeta.protein - Protein content.
 * @property {string} nutritionMeta.sugar - Sugar content.
 * @property {Array<string>} nutritionMeta.vitamins - List of vitamins.
 * @property {Array<string>} nutritionMeta.minerals - List of minerals.
 * @property {Object} creatorMeta - Metadata about the recipe's creator.
 * @property {string} creatorMeta.name - Name of the recipe creator.
 * @property {string} creatorMeta.avatar - Avatar URL of the creator.
 * @property {string} creatorMeta.bio - Bio of the creator.
 * @property {Array<string>} ingredients - List of ingredients required for the recipe.
 * @property {Array<string>} directions - Step-by-step instructions for preparing the recipe.
 */
export const pancakeRecipe: Recipe = {
    title: "Fluffy Morning Pancakes",
    description: "Start your day with these golden, airy pancakes that melt in your mouth.",
    category: "Breakfast",
    views: 20,
    reviewMeta: {
        total: 3,
        rating: 4.9,
        reviews: [
            {
                name: "Emma Green",
                avatar: reviewerA,
                location: "Austin, TX",
                rating: 5,
                comment: "These pancakes were a lifesaver on a busy Monday morning! My family devoured them, and they couldn’t believe they were homemade.",
                helpful: true,
                date: new Date(2024, 10, 22),
            },
            {
                name: "Michael Baker",
                avatar: reviewerB,
                location: "Chicago, IL",
                rating: 4,
                comment: "Great recipe! I added a teaspoon of vanilla extract and a pinch of cinnamon for extra flavor. Will make these again for sure!",
                helpful: true,
                date: new Date(2024, 10, 20),
            },
            {
                name: "John Carter",
                avatar: reviewerC,
                location: "New York, NY",
                rating: 5,
                comment: "The fluffiest pancakes I’ve ever made! They’re now a staple in our weekend brunch lineup. Don’t skip the maple syrup!",
                helpful: false,
                date: new Date(2024, 10, 21),
            },
        ]
    },
    imageMeta: {
        cover: "https://images.unsplash.com/photo-1518856853833-e405baf4646d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        badge: "https://cdn.vectorstock.com/i/2000v/41/86/paper-shopping-bag-full-of-groceries-products-vector-13524186.avif",
        icon: "fluent-emoji-high-contrast:pancakes"
    },
    timeMeta: {
        prepTime: "5 minutes",
        cookTime: "10 minutes",
        totalTime: "15 minutes",
        additionalTime: ""
    },
    servingMeta: {
        servingSize: "1 pancake",
        numberOfServings: "4 servings",
        yield: "8 pancakes",
        portionPerServing: "2 pancakes",
        servingNotes: "Drizzle with maple syrup or top with fresh fruit for the perfect finish."
    },
    nutritionMeta: {
        calories: "120",
        fat: "4g",
        saturatedFat: "1g",
        cholesterol: "35mg",
        sodium: "180mg",
        carbohydrates: "18g",
        fiber: "1g",
        protein: "3g",
        sugar: "4g",
        vitamins: ["B1", "B2"],
        minerals: ["Iron", "Calcium"]
    },
    creatorMeta: chefCozy,
    ingredients: [
        "1 cup all-purpose flour",
        "2 tablespoons sugar",
        "1 teaspoon baking powder",
        "1/2 teaspoon baking soda",
        "1/4 teaspoon salt",
        "1 cup milk",
        "1 egg",
        "2 tablespoons melted butter"
    ],
    directions: [
        "In a large mixing bowl, whisk together the flour, sugar, baking powder, baking soda, and salt.",
        "In a separate bowl, combine the milk, egg, and melted butter until smooth.",
        "Pour the wet ingredients into the dry ingredients and stir until just combined—don't overmix!",
        "Heat a non-stick skillet or griddle over medium heat and lightly grease it with butter or oil.",
        "Scoop 1/4 cup of batter onto the skillet for each pancake.",
        "Cook until bubbles form on the surface and the edges look set, about 2-3 minutes. Flip and cook the other side until golden brown, about 1-2 minutes.",
        "Serve warm with your favorite toppings—maple syrup, whipped cream, or fresh berries are a must-try!",
    ]
}