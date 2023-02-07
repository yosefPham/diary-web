import classNames from 'classnames/bind';
import styles from './Projects.module.scss';

import { FooterLayout } from '~/components/Layout';

const cx = classNames.bind(styles);

function Projects() {
    return (
        <aside className={cx('wrapper')}>
            <FooterLayout />
        </aside>
    );
}

export default Projects;
