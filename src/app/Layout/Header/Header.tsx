import classNames from 'classnames';

import { ReactComponent as Logo } from 'src/assets/images/Logo.svg';
import { ReactComponent as InfoBtn } from 'src/assets/images/Info.svg';


import styles from './Header.module.scss';

type HeaderPropsT = {
    showHamburgerMenu: boolean,
    isAsideVisible: boolean,
    onMobileMenuClick?: () => void,
};

type MobileMenuBtnPropsT = {
    isAsideVisible: boolean,
    onClick?: () => void,
};

const MobileMenuBtn = ({ isAsideVisible, onClick }: MobileMenuBtnPropsT) => (
    <button 
        tabIndex={1}
        className={classNames(styles.mobileMenu, {[styles.open]: isAsideVisible})}
        onClick={onClick}
    >
        <div></div>
    </button>
);

export const Header = ({ 
    showHamburgerMenu, 
    isAsideVisible, 
    onMobileMenuClick,
}: HeaderPropsT) => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                {
                    showHamburgerMenu
                        ? <MobileMenuBtn 
                            isAsideVisible={isAsideVisible} 
                            onClick={onMobileMenuClick}
                        />
                        : null
                }
                <h1 className={styles.logo}>
                    <Logo/>
                </h1>
            </div>
            
            <nav>
                <ul className={styles.navigation}>
                    <li className={styles.infoBtn}><InfoBtn/></li>
                    <li className={styles.avatar}>RJ</li>
                </ul>
            </nav>
        </header>
    );
};