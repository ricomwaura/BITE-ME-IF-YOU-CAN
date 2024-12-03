import React from 'react'
import styles from 'styles/components/Ingredient.module.css'

/**
 * Represents Ingredient component properties.
 * 
 * @property {number} index - Position of current ingredient.
 * @property {string} ingredient - The ingredient to display.
 */
interface IngredientProps {
    index: number;
    ingredient: string;
}

/**
 * Ingredient component renders the ingredient at position x.
 * 
 * @component
 * 
 * @property {number} index - Position of current ingredient.
 * @property {string} ingredient - The ingredient to display.
 * 
 * @example
 * Example usage:
 * ```tsx
 * import Ingredient from 'components/common/Ingredient';
 * 
 * const App: React.FC = () => (
 *      <div>
 *          <Ingredient
 *              index={pos}
 *              ingredient={'Salt'}
 *          />
 *      </div>
 * )
 * 
 * export default App;
 * ```
 * 
 * @returns Ingredient
 */
const Ingredient: React.FC<IngredientProps> = ({ index, ingredient }) => {
    return (
        <div className={styles['ingredient']}>
            <span className={styles['position']}>{index + 1}</span>
            <p>{ingredient}</p>
        </div>
    )
}
export default Ingredient;