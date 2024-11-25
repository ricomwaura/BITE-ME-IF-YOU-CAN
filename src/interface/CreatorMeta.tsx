/**
 * Represents creator metadata for a recipe.
 * 
 * @interface CreatorMeta
 * 
 * @property {string} name - Name of the recipe creator.
 * @property {string} avatar - Creator avatar url.
 * @property {string} [bio] - Optional, short creator bio.
 * 
 * @example
 * const creator: CreatorMeta = {
 *      name: "Eric Mwaura",
 *      avatar: "https://example-rico-avatar.com",
 *      bio: "I code and drink coffee."
 * }
 */
export interface CreatorMeta {
    name: string;
    avatar: string;
    bio?: string;
}