import { Icon } from '@iconify/react';
import React, { useState } from 'react'
import styles from 'styles/components/ActionControls.module.css'

/**
 * Represents ActionControls properties.
 * 
 * @interface ActionControlProps
 *
 * @property {string} id - The unique identifier of the recipe.
 */
interface ActionControlsProps {
    id: string;
}

/**
 * Representsa an Action.
 * 
 * @interface Action
 * 
 * @property {string} action - The action to be performed can either be 'save' | 'like' | 'share'.
 * @property {string} inactive - Default icon for the action button. Inactive state.
 * @property {string} active - Icon when active.
 * @property {function} handle - Function to be executed on action button click.
 */
interface Action {
    action: 'save' | 'like' | 'share';
    inactive: string;
    active: string;
    handle: () => void;
}

const ActionControls: React.FC<ActionControlsProps> = ({ id }) => {
    const [like, setLike] = useState(false)
    const [saveRecipe, setSaveRecipe] = useState(false)

    const handleLikeRecipe = () => {
        setLike(!like)
        console.log(`User likes the recipe: ${id}`)
    }

    const handleSaveRecipe = () => {
        setSaveRecipe(!saveRecipe)
        console.log(`User saved the recipe: ${id}`)
    }

    const handleShareRecipe = () => {
        console.log(`User shared the recipe: ${id}`)
    }

    const actionList: Action[] = [
        {
            action: 'save',
            inactive: 'solar:bookmark-linear',
            active: 'solar:bookmark-bold',
            handle: handleSaveRecipe
        },
        {
            action: 'like',
            inactive: 'mdi:heart-outline',
            active: 'mdi:heart',
            handle: handleLikeRecipe
        },
        {
            action: 'share',
            inactive: 'fluent:share-20-regular',
            active: 'fluent:share-20-regular',
            handle: handleShareRecipe
        }
    ]

    return (
        <div className={styles['action-controls']}>
            {actionList && actionList.map((action) => (
                <div className={styles['action-icon']} key={action.action} onClick={action.handle}>
                    <Icon
                        icon={
                            action.action === 'like' && like
                                ? action.active
                                : action.action === 'save' && saveRecipe
                                ? action.active
                                : action.inactive
                        }
                        className={styles['icon']}
                    />
                </div>
            ))}
        </div>
    )
}

export default ActionControls;