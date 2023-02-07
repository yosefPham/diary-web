import classNames from 'classnames/bind';
import styles from './ForMe.module.scss';

import { FooterLayout } from '~/components/Layout';

const cx = classNames.bind(styles);

function ForMe() {
    return (
        <aside className={cx('wrapper')}>
            <FooterLayout />
        </aside>
    );
}

export default ForMe;
