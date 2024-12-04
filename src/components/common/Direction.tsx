import { Icon } from '@iconify/react';
import React from 'react'
import styles from 'styles/components/Direction.module.css'

/**
 * Represents the properties for the Direction component.
 * 
 * @interface DirectionProps
 * @property {number} index - The index of the current direction in the list.
 * @property {string} direction - The text content of the direction.
 * @property {boolean} isComplete - Whether the direction has been completed.
 * @property {boolean} isActive - Whether the direction is currently active.
 * @property {boolean} lastItem - Whether this is the last direction in the list.
 * @property {(index: number) => void} onClick - Callback function triggered when the direction is clicked.
 */
interface DirectionProps {
    index: number;
    direction: string;
    isComplete: boolean;
    isActive: boolean;
    lastItem: boolean;
    onClick: (index: number) => void;
}

/**
 * Direction component renders a single step in the recipe directions, 
 * displaying its state (completed, active) and interactions.
 * 
 * @component
 * @param {number} index - The index of the current direction in the list.
 * @param {string} direction - The text content of the direction.
 * @param {boolean} isComplete - Whether the direction has been completed.
 * @param {boolean} isActive - Whether the direction is currently active.
 * @param {boolean} lastItem - Whether this is the last direction in the list.
 * @param {(index: number) => void} onClick - Callback function triggered when the direction is clicked.
 * 
 * @example
 * Example usage:
 * ```tsx
 * import Direction from 'components/common/Direction';
 * 
 * const App: React.FC = () => (
 *     <Direction
 *         index={0}
 *         direction="Preheat the oven to 350°F (175°C)."
 *         isComplete={true}
 *         isActive={false}
 *         lastItem={false}
 *         onClick={(index) => console.log(`Direction ${index + 1} clicked`)}
 *     />
 * );
 * 
 * export default App;
 * ```
 */
const Direction:React.FC<DirectionProps> = ({ index, direction, isComplete, isActive, lastItem, onClick }) => {
    return (
        <div className={styles['direction-wrapper']}>
            <div 
                className={`${styles['direction'] ?? 'direction'} ${isComplete ? styles['complete'] ?? 'complete' : ''}`}
                onClick={() => onClick(index)}
            >
                <span className={`${styles['position'] ?? 'direction'} ${isComplete ? styles['done'] ?? 'done' : ''}`}>
                    {isComplete ? (
                        <Icon icon={'tabler:check'}/>
                    ) : (
                        index + 1
                    )}
                </span>
                <p>{direction}</p>
            </div>
            {!lastItem && (
                <div className={`${styles['vertical-line'] ?? 'vertical-line'} ${isActive ? styles['active-line'] ?? 'active-line' : styles['inactive-line'] ?? 'inactive-line'} ${isComplete ? styles['complete-line'] ?? 'complete-line' : ''}`}></div>
            )}
        </div>
    )
}

export default Direction;