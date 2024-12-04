import React from 'react'
import styles from 'styles/components/RecipePageHeader.module.css'
import defaultCover from 'assets/images/default-cover.png'
import { Icon } from '@iconify/react';
import ActionControls from 'components/common/ActionControls';

/**
 * Represents Header properties.
 * 
 * @param {string} id - The unique identifier for the recipe.
 * @param {string} title - Title of the recipe.
 * @param {string} cover - Optional, cover image for the recipe.
 * @param {number} views - Total views the recipe has had.
 */
interface HeaderProps {
    id: string;
    title: string;
    cover?:string;
    views?: number;
}

/**
 * RecipePageHeader component renders the recipe header displaying the title, cover image, action buttons and total views.
 * @component
 * 
 * @param {string} id - The unique identifier for the recipe.
 * @param {string} title - Title of the recipe.
 * @param {string} cover - Optional, cover image for the recipe.
 * @param {number} views - Total views the recipe has had.
 * 
 * @example
 * Example usage:
 * ```tsx
 * import RecipePageHeader from 'components/layout/RecipePageHeader';
 * 
 * const App: React.FC = () => (
 *      <div>
 *          <RecipePageHeader
 *              id='recipe-001'
 *              title='Coffee'
 *              views='20000000'
 *              cover='https://example-coffee-image.png'
 *          />
 *      </div>
 * );
 * 
 * export default App;
 * ``` 
 * @returns RecipePageHeader
 */
const RecipePageHeader: React.FC<HeaderProps> = ({ id, title, views = 0, cover = defaultCover }) => {
    return (
        
        /* eslint-disable @typescript-eslint/restrict-template-expressions */
        <div className={styles['recipe-header']}
            style={{ backgroundImage: `url(${cover})` }}
        >
        {/* eslint-enable @typescript-eslint/restrict-template-expressions */}
            <div className={styles['bottom-header']}>
                <h1 className={styles['recipe-title']}>{title}</h1>
                <div className={styles['controls-views-wrapper']}>
                    <ActionControls id={id} />
                    {views > 5 && (
                        <div className={styles['views-wrapper']}>
                            <Icon icon="lets-icons:view-horizont" className={styles['icon']}></Icon>
                            <span>{views}</span>
                            Views
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default RecipePageHeader;