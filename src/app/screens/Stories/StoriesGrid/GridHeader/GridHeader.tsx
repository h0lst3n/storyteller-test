import { ReactComponent as SortIcon } from 'src/assets/images/Sort.svg';
import { ReactComponent as ArrowUp } from 'src/assets/images/ArrowUp.svg';

import styles from '../StoriesGrid.module.scss';

export const GridHeader = () => {
    return (
        <div className={styles.gridHeader}>
            <div className={styles.gridHeaderCell}>
                <span>Title</span>
                <SortIcon/>
            </div>
            <div className={styles.gridHeaderCell}>
                <span>Pages</span>
            </div>
            <div className={styles.gridHeaderCell}>
                <span>Last Modified</span>
                <ArrowUp/>
            </div>
            <div className={styles.gridHeaderCell}>
                <span>Status</span>
                <SortIcon/>
            </div>
            <div className={styles.gridHeaderCell}>
                <span>Live From</span>
                <SortIcon/>
            </div>
            <div className={styles.gridHeaderCell}>
                <span>Ends</span>
                <SortIcon/>
            </div>
            <div className={styles.gridHeaderCell}></div>
        </div>
    );
};