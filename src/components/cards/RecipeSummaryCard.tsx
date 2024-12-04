import { Icon } from '@iconify/react';
import SummaryItem from 'components/common/SummaryItem';
import NutritionTable from 'components/layout/NutritionTable';
import { CreatorMeta } from 'interface/CreatorMeta'
import { NutritionMeta } from 'interface/NutritionMeta';
import { ServingMeta } from 'interface/ServingMeta';
import { Summary } from 'interface/Summary';
import { TimeMeta } from 'interface/TimeMeta';
import React, { useState } from 'react'
import styles from 'styles/components/RecipeSummaryCard.module.css'

/**
 * Represents the properties for the RecipeSummaryCard component.
 * 
 * @interface RecipeSummaryCardProps
 * @property {CreatorMeta} creatorMeta - Metadata about the creator of the recipe.
 * @property {TimeMeta} timeMeta - Information about preparation and cooking times.
 * @property {ServingMeta} servingMeta - Details about servings and yield.
 * @property {NutritionMeta} nutritionMeta - Nutritional information for the recipe.
 */
interface RecipeSummaryCardProps {
    creatorMeta: CreatorMeta;
    timeMeta: TimeMeta;
    servingMeta: ServingMeta;
    nutritionMeta: NutritionMeta;
}

/**
 * RecipeSummaryCard component displays a summary of the recipe, including metadata, preparation times, serving information, 
 * and an optional table with nutritional details.
 * 
 * @component
 * @param {CreatorMeta} creatorMeta - Metadata about the creator of the recipe.
 * @param {TimeMeta} timeMeta - Information about preparation and cooking times.
 * @param {ServingMeta} servingMeta - Details about servings and yield.
 * @param {NutritionMeta} nutritionMeta - Nutritional information for the recipe.
 * 
 * @example
 * Example usage:
 * ```tsx
 * import RecipeSummaryCard from 'components/cards/RecipeSummaryCard';
 * 
 * const App: React.FC = () => (
 *     <RecipeSummaryCard
 *         creatorMeta={{
 *             avatar: 'path-to-avatar',
 *             name: 'Chef John',
 *             bio: 'Passionate about quick and easy meals.',
 *         }}
 *         timeMeta={{
 *             prepTime: '15 mins',
 *             cookTime: '30 mins',
 *             additionalTime: '10 mins',
 *             totalTime: '55 mins',
 *         }}
 *         servingMeta={{
 *             numberOfServings: '4 servings',
 *             yield: '1 batch',
 *             servingNotes: 'Serve warm for the best experience.',
 *         }}
 *         nutritionMeta={{
 *             calories: '250 kcal',
 *             fat: '10g',
 *             saturatedFat: '2g',
 *             cholesterol: '30mg',
 *             sodium: '200mg',
 *             carbohydrates: '30g',
 *             fiber: '3g',
 *             protein: '10g',
 *             vitamins: ['Vitamin C', 'Vitamin A'],
 *             minerals: ['Calcium', 'Iron'],
 *         }}
 *     />
 * );
 * 
 * export default App;
 * ```
 */
const RecipeSummaryCard: React.FC<RecipeSummaryCardProps> = ({ creatorMeta, timeMeta, servingMeta, nutritionMeta }) => {
    console.log(nutritionMeta, timeMeta, servingMeta)
    const [nutritionVisible, setNutritionVisible] = useState<boolean>(false)
    
    const summaryList: Summary[] = [
        {
            title: 'Prep',
            value: timeMeta.prepTime
        },
        {
            title: 'Cook',
            value: timeMeta.cookTime
        },
        {
            title: 'Additional',
            value: timeMeta.additionalTime
        },
        {
            title: 'Total',
            value: timeMeta.totalTime
        },
        {
            title: 'Serving',
            value: servingMeta.numberOfServings
        },
        {
            title: 'Yield',
            value: servingMeta.yield
        }
    ]
    return (
        <div className={styles['recipe-summary-card']}>
            <div className={styles['header']}>
                <img src={creatorMeta.avatar} className={styles['avatar']} />
                <p className={styles['creator']}>{creatorMeta.name}</p>
                <p className={styles['bio']}>{creatorMeta.bio}</p>
            </div>
            <div className={styles['summary-list']}>
                {summaryList && summaryList.map((summary) => (
                    <SummaryItem
                        key={summary.title}
                        summary={summary} 
                    />
                ))}
            </div>
            {nutritionVisible && (
                <div className={styles['nutrition-info']}>
                    <NutritionTable nutritionMeta={nutritionMeta} />
                </div>
            )}
            <button 
                className={styles['button']} 
                onClick={() => setNutritionVisible(!nutritionVisible)}
            >
                {nutritionVisible ? 'Collapse' : 'Nutrition Info'}
                <Icon icon={nutritionVisible ? 'iconoir:fast-arrow-top' : 'iconoir:fast-arrow-bottom'} />
            </button>
            <p className={styles['notes']}>{servingMeta.servingNotes}</p>
        </div>
    )
}

export default RecipeSummaryCard;