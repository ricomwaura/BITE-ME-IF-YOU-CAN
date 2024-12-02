import RatingsCard from 'components/cards/RatingsCard';
import React from 'react'
import styles from 'styles/components/RatingsOverview.module.css'

/**
 * Represents RatingsOverView component properties.
 * 
 * @param {number} prepared - Total number of users who prepared the recipe.
 * @param {number} rating - Average rating for the recipe.
 */
interface RatingsOverviewProps {
    prepared: number;
    rating: number;
}

/**
 * RatingsOverview component renders the ratings overview displaying total number of people who prepared the recipe
 * and the average rating.
 * 
 * @component
 * @param {number} prepared - Total number of users who prepared the recipe.
 * @param {number} rating - Average rating for the recipe.
 * 
 * @example
 * Example usage:
 * ```tsx
 * import RatingsOverview from 'components/common/RatingsOverview';
 * 
 * const App: React.FC = () => (
 *      <div>
 *          <RatingsOverview
 *              prepared=20
 *              rating=4.9
 *          />
 *      <div>
 * )
 * 
 * export default App;
 * ```
 * @returns RatingsOverview
 */
const RatingsOverView: React.FC<RatingsOverviewProps> = ({ prepared, rating }) => {
    return (
        <div className={styles['ratings-overview']}>
            {prepared && prepared > 1 && (
                <p className={styles['prepared']}>Prepared by <span>{prepared}</span> People</p>
            )}
            <RatingsCard rating={rating} />
        </div>
    )
}

export default RatingsOverView;