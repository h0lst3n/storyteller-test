import { memo } from 'react';
import { StoriesGridPropsT } from '../../types';

import StoryItem from './StoryItem';

import styles from '../StoriesGrid.module.scss';

export const GridBody = memo(({ stories }: StoriesGridPropsT) => {
    return (
        <div className={styles.gridBody}>
            {
                stories && stories.length 
                ?  stories.map((story) => (<StoryItem key={story.id} {...story}/>))
                : <div className={styles.noData}>
                    There is no data to display
                </div>
            }
        </div>
    );
});