import classNames from 'classnames/bind';

import styles from './BlogLayout.module.scss';
const cx = classNames.bind(styles);

function BlogLayout() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('image')}>
                <img src="https://resources.iostream.vn/content/article/html-phan-4-the-lien-ket-trong-html/thumbnail-hd/blob-1598602875370@1280x720.jpg" />
            </div>
            <div className={cx('titles')}>
                <h3 className={cx('name-titles')}>Kiến thức nhập môn HTML</h3>
            </div>
        </aside>
    );
}

export default BlogLayout;
