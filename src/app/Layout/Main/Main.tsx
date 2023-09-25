import classNames from 'classnames';

import styles from './Main.module.scss';

type MainPropsT = React.PropsWithChildren<{
    isAsideVisible?: boolean,
    isOverlapped: boolean,
}>;

export const Main = ({ 
    children, 
    isAsideVisible, 
    isOverlapped = false 
}: MainPropsT) => {
    return (
        <main 
            className={classNames(
                styles.main, 
                {
                    [styles.wide]: !isAsideVisible,
                    [styles.overlapped]: isOverlapped
                }
            )}
        >
            {children}
        </main>
    );
};