import { ReactComponent as ArrowLeftIcon } from 'src/assets/images/ArrowLeft.svg';
import { ReactComponent as ArrowRightIcon } from 'src/assets/images/ArrowRight.svg';
 

import styles from '../StoriesGrid.module.scss';

type GridFooterPropsT = {
    pageCount: number
};

export const GridFooter = ({ pageCount }: GridFooterPropsT) => {
    return (
        <div className={styles.gridFooter}>
            <div className={styles.pageCounter}>
                <span>Page</span>
                <input type="text" value="1"/>
                <span>of {pageCount}</span> 
            </div>

            <div className={styles.rowSelectorContainer}>
                <select className={styles.rowSelector}>
                    <option value="20">20 Rows&nbsp;&nbsp;</option>
                    <option value="50">50 Rows&nbsp;&nbsp;</option>
                </select>
            </div>  

            <div className={styles.pageControl}>
                <button className={styles.pageControlBtn}><ArrowLeftIcon/></button>
                <button className={styles.pageControlBtn}><ArrowRightIcon/></button>
            </div>
        </div>
    );
};