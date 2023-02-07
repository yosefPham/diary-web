import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './MenuItem.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to }) {
    const handleActive = () => {};
    return (
        <NavLink onClick={handleActive} className={(nav) => cx('navbar-content', { active: nav.isActive })} to={to}>
            <span>{title}</span>
        </NavLink>
    );
}

export default MenuItem;
