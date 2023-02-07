import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import image from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Header() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img width="90px" height="90px" src={image.logo} alt="" />
            </div>
            <div className={cx('navbar')}>
                <MenuItem title="HOME" to={config.routes.home} />
                <MenuItem title="FOR ME" to={config.routes.forme} />
                <MenuItem title="PROJECTS" to={config.routes.projects} />
                <MenuItem title="BLOG" to={config.routes.blog} />
                <MenuItem title="CONTACT" to={config.routes.contact} />
            </div>
            <div className={cx('search')}>
                <FontAwesomeIcon className={cx('search-icon')} icon={faSearch}></FontAwesomeIcon>
            </div>
        </aside>
    );
}

export default Header;
