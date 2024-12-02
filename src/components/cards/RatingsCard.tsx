import { Icon } from '@iconify/react';
import React from 'react'
import styles from 'styles/components/RatingsCard.module.css'

/**
 * Represents RatingsCard component properties.
 * 
 * @param {number} rating - Average rating for the recipe.
 */
interface RatingsCardProps {
    rating: number;
}

/**
 * Represents star property.
 * 
 * @param {number} position - The current index.
 * @param {boolean} active - If current star should be filled (true | false)
 * @param {boolean} half - Half filled stars e.g 1.5.
 */
interface Star {
    position: number;
    active: boolean;
    half: boolean;
}

/**
 * RatingsCard component renders the ratings displaying the stars representing the rating (maximum 5).
 * 
 * @component
 * @param {number} rating - Average rating for the recipe.
 * 
 * @example
 * Example usage:
 * ```tsx
 * import RatingsCard from 'components/cards/RatingsCard';
 * 
 * const App: React.FC = () => (
 *      <div>
 *          <RatingsCard rating={1.5} />
 *      </div>
 * );
 * 
 * export default App;
 * ```
 * 
 * @returns RatingsCard
 */
const RatingsCard: React.FC<RatingsCardProps> = ({ rating }) => {
    const stars = Array.from({ length: 5}, (_, index) => {
        const position = index + 1
        const active = rating >= position
        const half = !active && rating > position - 1 && rating < position
        return { position, active, half }
    })

    return (
        <div className={styles['ratings-card']}>
            <div className={styles['star-container']}>
                {stars.map((star: Star) => (
                    <Icon
                        key={star.position}
                        icon={
                            star.active
                                ? 'line-md:star-filled'
                                : star.half
                                ? 'line-md:star-filled-half'
                                : 'line-md:star-filled'
                        }
                        className={`${styles['star'] ?? ''} ${star.active || star.half ? styles['active'] ?? '' : ''}`}
                    />
                ))}
            </div>
            <p className={styles['rating-text']}>{rating.toFixed(1)}</p>
        </div>
    )
}

export default RatingsCard;