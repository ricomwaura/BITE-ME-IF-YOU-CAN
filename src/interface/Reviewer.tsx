/**
 * Represents reviewer data for a recipe.
 * 
 * @interface Reviewer
 * 
 * @property {string} name - The name of the reviewer.
 * @property {string} [avatar] - Optional, the avatar of the reviewer.
 * @property {string} [location] - Optional, the geo location of the reviewer
 * 
 * @example
 * const eric: Reviewer = {
 *      name: "Eric",
 *      avatar: "https://eric-image-example.png",
 *      location: "Github"
 * }
 */
export interface Reviewer {
    name: string;
    avatar?: string;
    location?: string;
}