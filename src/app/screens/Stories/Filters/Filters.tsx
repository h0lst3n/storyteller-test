import { ReactComponent as SearchIcon } from 'src/assets/images/Search.svg';
import { statuses } from '../types'; 

import styles from '../Stories.module.scss';

type FiltersPropsT = {
    onChange?: () => void,
    offset: number,
    total: number,
};

export const Filters = ({ onChange, offset, total }: FiltersPropsT) => {
    return (
        <div className={styles.filtersPanel}>
            <div className={styles.searchField}>
                <input className={styles.searchInput} type="text" placeholder="Search" />
                <button className={styles.searchIcon}>
                    <SearchIcon/>
                </button>
            </div>
            <div className={styles.statusFilterWrapper}>
                <select className={styles.statusFilter}>
                    <option value={statuses.all}>All statuses</option>
                    <option value={statuses.draft}>Draft</option>
                    <option value={statuses.scheduled}>Scheduled</option>
                    <option value={statuses.live}>Live</option>
                    <option value={statuses.past}>Past</option>
                </select>
            </div>
            <span className={styles.pageIndicator}>
                {`Showing 1 to ${offset} of ${total}`}
            </span>
        </div>
    );
};