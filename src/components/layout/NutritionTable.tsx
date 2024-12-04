import { NutritionMeta } from 'interface/NutritionMeta'
import React from 'react'
import styles from 'styles/components/NutritionTable.module.css'

/**
 * Represents the properties for the NutritionTable component.
 * 
 * @interface NutritionTableProps
 * @property {NutritionMeta} nutritionMeta - The nutritional metadata to display in the table.
 */
interface NutritionTableProps {
    nutritionMeta: NutritionMeta;
}

/**
 * NutritionTable component renders a table displaying the nutritional information of a recipe.
 * Dynamically maps through the `nutritionMeta` object to display all available properties.
 * 
 * @component
 * @param {NutritionMeta} nutritionMeta - The nutritional metadata to display in the table.
 * 
 * @example
 * Example usage:
 * ```tsx
 * import NutritionTable from 'components/layout/NutritionTable';
 * 
 * const nutritionMeta = {
 *     calories: '200 kcal',
 *     fat: '10g',
 *     protein: '15g',
 *     vitamins: ['Vitamin C', 'Vitamin D']
 * };
 * 
 * const App: React.FC = () => (
 *     <NutritionTable nutritionMeta={nutritionMeta} />
 * );
 * 
 * export default App;
 * ```
 */
const NutritionTable: React.FC<NutritionTableProps> = ({ nutritionMeta }) => {
    return (
        <table className={styles['nutrition-table']}>
            <tbody>
                {Object.entries(nutritionMeta)
                    .filter(([_, value]) => value)
                    .map(([key, value]) => (
                        <tr key={key}>
                            <td>{`${key.charAt(0).toUpperCase()}${key.slice(1)}`}</td>
                            <td>{Array.isArray(value) ? value.join(', ') : value}</td>
                        </tr>   
                    ))
                }
            </tbody>
        </table>
    )
}

export default NutritionTable;