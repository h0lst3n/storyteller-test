import { 
    memo, 
    useState, 
    useEffect,
    useCallback,
} from 'react';
import  { useBreakpoints, breakpoins } from 'src/shared/hooks/useBreakpoints';
import classNames from 'classnames';

import Header from './Header';
import Aside from './Aside';
import Main from './Main';

import styles from './Layout.module.scss';

type LayoutPropsT = React.PropsWithChildren<{
    layoutConfig?: object
}>

const Layout = memo(({
    children, 
    layoutConfig 
}: LayoutPropsT) => {
    const screenSize = useBreakpoints();
    const [isAsideVisible, setAsideVisible] = useState(screenSize !== breakpoins.XS);

    const toggleAsideVisibility = useCallback(() => {
        setAsideVisible((isVisible) => !isVisible);
    }, [setAsideVisible]);

    useEffect(() => {
        setAsideVisible(screenSize !== breakpoins.XS);
    }, [screenSize]);


    return (
        <div className={classNames(styles.layout, { [styles.withoutAside]: !isAsideVisible })}>
            <Header 
                isAsideVisible={isAsideVisible} 
                showHamburgerMenu={screenSize === breakpoins.XS}
                onMobileMenuClick={toggleAsideVisibility}
            />
            <Aside isHidden={!isAsideVisible}/>
            <Main isAsideVisible={isAsideVisible} isOverlapped={screenSize === breakpoins.XS && isAsideVisible}>
                {children}
            </Main>            
        </div>
    );
});

export default Layout;
