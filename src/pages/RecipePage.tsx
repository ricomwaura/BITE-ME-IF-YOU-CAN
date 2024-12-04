import RecipePageBody from 'components/layout/RecipePageBody';
import RecipePageHeader from 'components/layout/RecipePageHeader';
import { pancakeRecipe } from 'constants/PancakeRecipe'
import { Recipe } from 'interface/Recipe'
import React, { useEffect } from 'react'
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
    useEffect(() => {
        const headerElement = document.querySelector('.header');
        if (headerElement) {
            const headerHeight = headerElement.getBoundingClientRect().height;
            document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
        }
    }, []);
    return (
        <div className={'recipe-page'}>
            <div className={'header'}>
                <RecipePageHeader 
                    id={selectedRecipe.id} 
                    title={selectedRecipe.title}
                    views={selectedRecipe.views} 
                    cover={selectedRecipe.imageMeta.cover}
                />
            </div>
            <div className={'body'}>
                <RecipePageBody recipe={selectedRecipe} />
            </div>
            <div className={'footer'}>
                <p className='copyright'>BITE © {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}

export default RecipePage;