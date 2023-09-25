import GridHeader from './GridHeader';
import GridBody from './GridBody';
import GridFooter from './GridFooter';

import { StoriesGridPropsT } from '../types';

import styles from './StoriesGrid.module.scss';

export const StoriesGrid = ({ stories, pageCount }: StoriesGridPropsT) => {
    return (
        <div className={styles.gridContainer}>
            <div className={styles.storiesGrid}>
                <GridHeader/>
                <GridBody stories={stories} />
                <GridFooter pageCount={pageCount} />
            </div>
        </div>
    );
};