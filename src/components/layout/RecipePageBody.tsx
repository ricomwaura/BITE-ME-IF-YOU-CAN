import ReviewCard from 'components/cards/ReviewCard';
import RatingsOverview from 'components/common/RatingsOverview';
import { Recipe } from 'interface/Recipe'
import React from 'react'
import styles from 'styles/components/RecipePageBody.module.css'

/**
 * Represents Body properties.
 * 
 * @param {Recipe} recipe - The selected recipe.
 */
interface RecipePageBodyProps {
    recipe: Recipe;
}

/**
 * RecipePageBody component renders the body displaying ingredients, directions, reviews and nutritional information.
 * 
 * @component
 * @param recipe - The selected recipe.
 * 
 * @example
 * Example usage:
 * ```tsx
 * import RecipePageBody from 'components/layouts/RecipePageBody';
 * 
 * const App: React.FC = () => (
 *      <div>
 *          <RecipePageHeader
 *              id='recipe-001'
 *              title='Coffee'
 *              views='20000000'
 *              cover='https://example-coffee-image.png'
 *          />
 *          <RecipePageBody recipe=selectedRecipe />
 *      </div>
 * );
 * 
 * export default App;
 * ```
 * @returns RecipePageBody
 */
const RecipePageBody: React.FC<RecipePageBodyProps> = ({ recipe }) => {
    return (
        <div className={styles['recipe-page-body']}>
            <RatingsOverview 
                prepared={recipe.prepared}
                rating={recipe.reviewMeta.rating}
            />
            <ReviewCard review={recipe.reviewMeta.reviews[0]} />
        </div>
    )
}

export default RecipePageBody;