import { memo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import classNames from 'classnames';

import { MenuItemT, MENU_CONFIG } from './menuConfig';
import { toDashSeparatedCase } from 'src/shared/utils';

import styles from './Aside.module.scss';

type AsidePropsT = {
    isHidden?: boolean
};

type MenuSectionT = {
    items: MenuItemT[]
};

type MenuItemPropsT = {
    item: MenuItemT,
    isActive?: boolean,
};

const MenuItem = ({item, isActive}: MenuItemPropsT) => (
    <li 
        className={classNames(styles.menuItem, { [styles.active]: isActive })}
    >
        <Link to={item.path}>
            <item.Icon className={styles.icon}/>{item.title}
        </Link>
    </li>
);

const MenuSection = memo(({ items }: MenuSectionT) => {
    const { pathname } = useLocation();    
    return (
        <ul className={styles.menuSection}>
            {
                items.map((itemProps) => (
                    <MenuItem 
                        item={itemProps} 
                        isActive={itemProps.path === pathname} 
                        key={toDashSeparatedCase(itemProps.title)}
                    />
                ))
            }
        </ul>);
});

export const Aside = ({ isHidden = false }: AsidePropsT) => {
    return (
        <aside className={classNames(styles.aside, isHidden ? styles.hidden : styles.visible)
        }>
            {
                MENU_CONFIG.map((sectionItems, index) => (
                    <MenuSection key={`section-item-${index}`} items={sectionItems}/>
                ))
            }
        </aside>
    );
};

export default Aside;