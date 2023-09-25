import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchStories } from 'src/app/store/thunks/stories.thunk';
import { reset } from 'src/app/store/reducers/stories.reduces';
import { ReactComponent as PlusIcon } from 'src/assets/images/Plus.svg';

import Filters from './Filters';
import StoriesGrid from './StoriesGrid';

import styles from './Stories.module.scss';

export const Stories = () => {
    const dispatch = useDispatch();
    const { records: stories, total, offset, pageCount } = useSelector(state => state.stories);

    useEffect(() => {
        dispatch(fetchStories());

        return () => {
            dispatch(reset());
        };
    }, [dispatch]);
    
    return (
        <div className={styles.storiesContainer}>
            <div className={styles.header}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>
                        Stories
                    </h2>
                    <button className={styles.addBtn}><PlusIcon className={styles.icon}/><span>New Story</span></button>
                </div>
                
                <div className={styles.controlPanel}>
                    <Filters offset={offset} total={total}/>
                    <button className={styles.addBtn}><PlusIcon className={styles.icon}/><span>New Story</span></button>
                </div>
            </div>
            <StoriesGrid stories={stories} pageCount={pageCount} />
        </div>
    );
};