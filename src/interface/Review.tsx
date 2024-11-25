import { Reviewer } from "./Reviewer";

/**
 * Represents review data for a recipe.
 * 
 * @interface Review
 * @extends Reviewer
 * 
 * @property {number} rating - The rating the reviewer 
 * @property {string} comment - Helpful comment.
 * @property {Boolean} [helpful] - Optional, indicates wheteher the reviewer finds the recipe helpful.
 * @property {Date} date - The date when the review was submitted.
 * 
 * @example
 * const firstReview: Review = {
 *      name: "Eric",
 *      avatar: "https://eric-image-example.png",
 *      location: "Github",
 *      rating: 5,
 *      comment: "Add creamer.",
 *      helpful: true,
 *      date: "November 23, 2024"
 * }
 */
export interface Review extends Reviewer {
    rating: number;
    comment: string;
    helpful?: Boolean;
    date: Date;
}