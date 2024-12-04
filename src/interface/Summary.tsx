/**
 * Represents a summary item with a title and its corresponding value.
 * 
 * @interface Summary
 * @property {string} title - The title or label of the summary item.
 * @property {string | number | undefined} value - The value associated with the summary item. It can be a string, a number, or undefined.
 * 
 * @example
 * Example of a summary object:
 * ```tsx
 * const prepTime: Summary = {
 *     title: 'Prep Time',
 *     value: '15 minutes'
 * };
 * 
 * const servings: Summary = {
 *     title: 'Servings',
 *     value: 4
 * };
 * ```
 */
export interface Summary {
    title: string;
    value: string | number | undefined;
}