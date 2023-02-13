import classNames from 'classnames/bind';
import styles from './BlogLayout.module.scss';

const cx = classNames.bind(styles);
function BlogLayout({ data }) {
    const handleClick = (data) => {
        console.log(data);
    };

    return (
        <aside key={data.id} className={cx('wrapper')}>
            <div className={cx('image')}>
                <img src={data.image} alt="Đây là hình ảnh BLog" />
            </div>
            <div className={cx('titles')}>
                <h3 className={cx('name-titles')}>{data.title}</h3>
                <p>By: {data.nick_name}</p>
                <span>
                    Xem thêm
                    <span className={cx('underlined-animation')} />
                </span>
            </div>
        </aside>
    );
}

export default BlogLayout;
