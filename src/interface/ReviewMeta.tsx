import { Review } from "./Review";

/**
 * Represents review metadata with total review count, average rating, and reviews.
 * 
 * @interface ReviewMeta
 * 
 * @property {number} total - Total number of people who have reviewed the recipe.
 * @property {number} rating - Average rating based on the reviews.
 * @property {Review[]} reviews - List of reviews left by users.
 * 
 * @example
 * const recipeReview: ReviewMeta = {
 *      total: 1,
 *      rating: 4,
 *      reviews: [
 *          {
 *              name: "Eric",
 *              avatar: "https://eric-image-example.png",
 *              location: "Github",
 *              rating: 5,
 *              comment: "Add creamer.",
 *              helpful: true,
 *              date: "November 23, 2024"
 *          }
 *      ]
 * }
 */
export interface ReviewMeta {
    total: number;
    rating: number;
    reviews: Review[]
}