import Ingredient from 'components/common/Ingredient';
import React from 'react'
import styles from 'styles/components/RecipeIngredients.module.css'

/**
 * Represents the properties for the RecipeIngredients component.
 * 
 * @interface RecipeIngredientsProps
 * @property {string[]} ingredients - An array of ingredient names to be displayed.
 */
interface RecipeIngredientsProps {
    ingredients: string[];
}

/**
 * RecipeIngredients components displays a list of ingredients using the Ingredients component.
 * 
 * @component
 * @see Ingredient
 * @param {string[]} ingredients - An array of ingredient names to be displayed.
 * 
 * @example
 * Example usage:
 * ```tsx
 * import RecipeIngredients from 'components/layout/RecipeIngredients';
 * 
 * const ingredients = ['Flour', 'Sugar', 'Butter'];
 * 
 * const App: React.FC = () => (
 *      <div>
 *          <RecipeIngredients ingredients={ingredients} />
 *      </div>
 * );
 * 
 * export default App;
 * ```
 * @returns {JSX.Element} RecipeIngredients 
 */
const RecipeIngredients: React.FC<RecipeIngredientsProps> = ({ ingredients = [] }) => {
    return (
        <div className={styles['recipe-ingredients']}>
            <p className={styles['title']}>Ingredients</p>
            <div className={styles['ingredients']}>
                {ingredients && ingredients.map((value, index) => (
                    <Ingredient key={index} index={index} ingredient={value} />
                ))}
            </div>
        </div>
    )
}

export default RecipeIngredients;