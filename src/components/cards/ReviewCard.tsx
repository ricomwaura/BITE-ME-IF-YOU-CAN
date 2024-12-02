import { Review } from 'interface/Review';
import React from 'react'
import styles from 'styles/components/ReviewCard.module.css'
import quotes from 'assets/images/quotes.svg'
import { Icon } from '@iconify/react';

/**
 * Represents ReviewCard component properties.
 * 
 * @param {Review} review - The review to be displayed.
 */
interface ReviewCardProps {
    review?: Review | undefined;
}

/**
 * ReviewCard component renders the active review displaying the comment and
 * reviewer's name, avatar, location, year and indicator if the recipe was helpfful or not.
 * 
 * @component
 * @param {Review} review - The review to be displayed.
 * 
 * @example
 * Example usage:
 * ```tsx
 * import ReviewCard from 'components/cards/ReviewCard';
 * 
 * const App: React.FC = () => (
 *      <div>
 *          <ReviewCard 
 *              review={
 *                  name: "Emma Green",
 *                  avatar: reviewerA,
 *                  location: "Austin, TX",
 *                  rating: 5,
 *                  comment: "These pancakes were a lifesaver on a busy Monday morning! My family devoured them, and they couldn’t believe they were homemade.",
 *                  helpful: true,
 *                  date: new Date(2024, 10, 22),
 *              }
 *          />
 *      </div>
 * );
 * 
 * export default App;
 * ```
 * @returns ReviewCard
 */
const ReviewCard: React.FC<ReviewCardProps> = ({ review = undefined }) => {
    if (!review) return null;

    return (
        <div className={styles['review-card']}>
            <div className={styles['left-section']}>
                <p className={styles['comment']}>{review.comment}</p>
                <div className={styles['reviewer']}>
                    <img className={styles['avatar']} src={review.avatar} />
                    <div className={styles['review-info']}>
                        <p>{review.name}</p>
                        <span>{`${review.location?.concat(', ') || ''} ${review.date.getFullYear()}`}</span>
                    </div>
                    {review.helpful !== null && review.helpful !== undefined && (
                        <Icon 
                            icon={review.helpful ? 'icon-park-solid:good-two' : 'icon-park-solid:bad-two' }
                            className={styles['helpful']}
                        />
                    )}
                </div>
            </div>
            <div className={styles['right-section']}>
                <img src={quotes} />
            </div>
        </div>
    )
}

export default ReviewCard;