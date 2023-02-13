import classNames from 'classnames/bind';
import { AccordionButton } from 'react-bootstrap';

import styles from './CourcesLayout.module.scss';
const cx = classNames.bind(styles);

function CourcesLayout({ data }) {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('image')}>
                <img src={data.image} alt="Đây là hình ảnh khoá học" />
            </div>
            <div className={cx('titles')}>
                <h3 className={cx('name-titles')}>{data.title}</h3>
                <p className={cx('description')}>{data.description}</p>
            </div>
        </aside>
    );
}

export default CourcesLayout;
