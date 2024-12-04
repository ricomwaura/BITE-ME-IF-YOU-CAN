import Direction from 'components/common/Direction';
import React, { useState } from 'react'
import styles from 'styles/components/RecipeDirections.module.css'

/**
 * Represents the properties for the RecipeDirections component.
 * 
 * @interface RecipeDirectionsProps
 * @property {string[]} directions - The list of step-by-step directions for a recipe.
 */
interface RecipeDirectionsProps {
    directions: string[];
}

/**
 * RecipeDirections component renders a list of directions for a recipe.
 * Tracks completed and active steps, allowing users to interact with each step to mark it as complete or active.
 * 
 * @component
 * @param {string[]} directions - The list of step-by-step directions for a recipe.
 * 
 * @example
 * Example usage:
 * ```tsx
 * import RecipeDirections from 'components/layout/RecipeDirections';
 * 
 * const steps = [
 *     'Preheat the oven to 350°F (175°C).',
 *     'Mix the flour and sugar in a bowl.',
 *     'Add eggs and butter, and stir until smooth.',
 *     'Pour the batter into a greased pan.',
 *     'Bake for 25-30 minutes or until golden brown.'
 * ];
 * 
 * const App: React.FC = () => (
 *     <RecipeDirections directions={steps} />
 * );
 * 
 * export default App;
 * ```
 */
const RecipeDirections: React.FC<RecipeDirectionsProps> = ({ directions = [] }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const [completedSteps, setCompletedSteps] = useState<number[]>([])

    const handleDirectionClick = (index: number) => {
        if (completedSteps.includes(index)) {
            setCompletedSteps(completedSteps.filter((step) => step < index));
            setActiveIndex(index);
        } else {
            setCompletedSteps([...Array(index + 1).keys()]);
            setActiveIndex(index + 1 < directions.length ? index + 1 : index); // Set active index to the next step
        }
    }

    return (
        <div className={styles['recipe-directions']}>
            <div className={styles['top']}>
                <p className={styles['title']}>Directions</p>
            </div>
            <div className={styles['directions']}>
                {directions && directions.map((value, index) => (
                    <Direction 
                        key={index} 
                        index={index} 
                        direction={value}
                        isComplete={completedSteps.includes(index)}
                        isActive={index === activeIndex}
                        lastItem={index === directions.length - 1}
                        onClick={handleDirectionClick}
                    />
                ))}
            </div>
        </div>
    )
}

export default RecipeDirections;