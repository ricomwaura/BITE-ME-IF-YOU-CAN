import { Icon } from '@iconify/react';
import { Summary } from 'interface/Summary'
import React from 'react'
import styles from 'styles/components/SummaryItem.module.css'

/**
 * Represents the properties for the SummaryItem component.
 * 
 * @interface SummaryItemProps
 * @property {Summary} summary - The summary data containing a title and value.
 */
interface SummaryItemProps {
    summary: Summary;
}

/**
 * SummaryItem component renders a single summary element consisting of a title and value.
 * 
 * @component
 * @param {Summary} summary - The summary data containing a title and value.
 * 
 * @example
 * Example usage:
 * ```tsx
 * import SummaryItem from 'components/common/SummaryItem';
 * 
 * const summary = { title: 'Prep Time', value: '15 mins' };
 * 
 * const App: React.FC = () => (
 *     <SummaryItem summary={summary} />
 * );
 * 
 * export default App;
 * ```
 */
const SummaryItem: React.FC<SummaryItemProps> = ({ summary }) => {
    if (!summary.value) return null
    return (
        <div className={styles['summary-item']}>
            <Icon icon={'si:diamonds-four-line'} />
            <p>{summary.title}: <span className={styles['value']}>{summary.value}</span></p>
        </div>
    )
}

export default SummaryItem;