import RecipePageBody from 'components/layout/RecipePageBody';
import RecipePageHeader from 'components/layout/RecipePageHeader';
import { pancakeRecipe } from 'constants/PancakeRecipe'
import { Recipe } from 'interface/Recipe'
import React from 'react'
import 'styles/pages/RecipePage.css'

// Default pancake recipe.
const selectedRecipe: Recipe = pancakeRecipe;

/**
 * RecipePage component renders the main recipe page displaying the header, body and footer.
 * 
 * @component
 * @example
 * Example usage:
 * 
 * ```tsx
 * import RecipePage from 'pages/RecipePage';
 * 
 * const App: React.FC = () => (
 *      <div>
 *          <RecipePage />
 *      </div>
 * );
 * 
 * export default App;
 * ```
 */
const RecipePage: React.FC = () => {
    return (
        <div className={'recipe-page'}>
            <RecipePageHeader 
                id={selectedRecipe.id} 
                title={selectedRecipe.title}
                views={selectedRecipe.views} 
                cover={selectedRecipe.imageMeta.cover}
            />
            <RecipePageBody recipe={selectedRecipe} />
        </div>
    )
}

export default RecipePage;