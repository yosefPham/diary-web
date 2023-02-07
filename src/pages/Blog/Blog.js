import classNames from 'classnames/bind';
import styles from './Blog.module.scss';

import { FooterLayout } from '~/components/Layout';
const cx = classNames.bind(styles);

function Blog() {
    return (
        <aside className={cx('wrapper')}>
            <FooterLayout />
        </aside>
    );
}

export default Blog;
