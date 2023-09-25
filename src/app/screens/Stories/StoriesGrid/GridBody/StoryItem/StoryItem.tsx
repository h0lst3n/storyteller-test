import classNames from 'classnames';
import moment from 'moment';

import { getRandomNumberInRange } from 'src/shared/utils';
import { ReactComponent as DeleteIcon } from 'src/assets/images/Delete.svg';
import { ReactComponent as EditIcon } from 'src/assets/images/Edit.svg';

import { StoryT, statuses } from "../../../types";

import styles from '../../StoriesGrid.module.scss';

const getPageThumbnails = (pages: string[]) => {
    const originalLength = pages.length;

    if (originalLength > 6) {
        pages = pages.slice(0, 5);        
    }

    const pageIcons = pages.map((page) => (<img className={styles.storyImage} src={page}/>));

    return originalLength > 6 
        ? [...pageIcons, <div className={styles.extraImagesIndicator}>+{originalLength - 6}</div>] 
        : pageIcons;
};

const getRandomStatus = () => {
    const statusList = [statuses.draft, statuses.scheduled, statuses.live, statuses.past];
    const status = getRandomNumberInRange(0, 3);
    return statusList[status];
};

export const StoryItem = (props: StoryT) => {
    const status = getRandomStatus();

    return (
        <div className={styles.storyItem}>
            <div className={classNames(styles.gridItemCell, styles.storyTitle)}>
                <span className={styles.storyName}>{props.name}</span>
                <span className={styles.publishData}>({moment(props.published).format('MMMM D') || 'No publish date set'})</span>
            </div>
            <div className={classNames(styles.gridItemCell, styles.pageImagesList)}>{getPageThumbnails(props.pages)}</div>
            <div className={classNames(styles.gridItemCell, styles.storyDateCell)}>{moment(props.lastModified).format('MM/DD/YYYY')}</div>
            <div className={classNames(styles.gridItemCell, styles.status, styles[status])}><span>{status}</span></div>
            <div className={classNames(styles.gridItemCell, styles.storyDateCell)}>{props.liveFrom}</div>
            <div className={classNames(styles.gridItemCell, styles.storyDateCell)}>{props.ends}</div>
            <div className={classNames(styles.gridItemCell, styles.storyActions)}>
                <button className={styles.deleteBtn}><DeleteIcon/></button>
                <button className={styles.editBtn}><EditIcon/><span>Edit</span></button>
            </div>
        </div>
        
    );
};