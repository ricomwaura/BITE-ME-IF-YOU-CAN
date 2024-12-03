import ReviewCard from 'components/cards/ReviewCard'
import { Review } from 'interface/Review'
import React, { useEffect, useState } from 'react'
import styles from 'styles/components/ReviewsFeed.module.css'

/**
 * Represents ReviewsFeed component properties.
 * 
 * @param {Review[]} reviews - The list of reviews to display.
 */
interface ReviewsFeedProps {
    reviews?: Review[];
}

/**
 * ReviewsFeed component cycles through a list of reviews, displaying each review using the ReviewCard component.
 * Reviews automatically switch every 5 seconds.
 * 
 * @component
 * @see ReviewCard
 * @param {Review[]} reviews - The list of reviews to display.
 * 
 * @example
 * Example usage:
 * ```tsx
 * import ReviewsFeed from 'components/layout/ReviewsFeed'
 * 
 * const App: React.FC = () => (
 *      <div>
 *          <ReviewsFeed
 *              reviews=[
 *                  {
 *                      name: "Emma Green",
 *                      avatar: reviewerA,
 *                      location: "Austin, TX",
 *                      rating: 5,
 *                      comment: "These pancakes were a lifesaver on a busy Monday morning! My family devoured them, and they couldn’t believe they were homemade.",
 *                      helpful: true,
 *                      date: new Date(2024, 10, 22),
 *                  }
 *              ]
 *          />
 *      </div>
 * );
 * 
 * export default App;
 * ```
 * @returns ReviewsFeed
 */
const ReviewsFeed: React.FC<ReviewsFeedProps> = ({ reviews = [] }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0)

    useEffect(() => {
        if(reviews.length > 1) {
            const interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % reviews.length)
            }, 5000)

            return () => clearInterval(interval)
        }

        return undefined
    }, [reviews])

    if(!reviews || reviews.length < 1) return null

    return (
        <div className={styles['reviews-feed']}>
            <ReviewCard review={reviews[activeIndex]}/>
        </div>
    )
}

export default ReviewsFeed;