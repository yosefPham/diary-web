import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import { BlogLayout, CourcesLayout, LoginLayout, FooterLayout } from '~/components/Layout';

const cx = classNames.bind(styles);

function Home() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('activities')}>
                <div className={cx('content')}>
                    <h1> MarTech Company hàng đầu Đông Nam Á</h1>
                    <p>
                        Chúng tôi có 10 năm kinh nghiệm trong việc thực hiện thành công các Chiến dịch thu hút khách
                        hàng mới cho nhiều ứng dụng di động trong các mảng Ngân hàng & Tài chính, Game, Thương mại điện
                        tử, Du lịch/Đặt phòng, Xã hội/Giải trí, v.v...
                    </p>
                </div>
            </div>
            <div className={cx('cources')}>
                <h1 className={cx('titles')}>LỘ TRÌNH FRONTEND</h1>
                <div className={cx('cources-name')}>
                    <CourcesLayout />
                    <CourcesLayout />
                    <CourcesLayout />
                </div>
            </div>
            <div className={cx('cources', 'blog')}>
                <h1 className={cx('titles')}>Blog</h1>
                <div className={cx('cources-name')}>
                    <BlogLayout />
                    <BlogLayout />
                    <BlogLayout />
                    <BlogLayout />
                    <BlogLayout />
                </div>
            </div>
            <div className={cx('layoutLogin')}>
                <LoginLayout />
            </div>
            <FooterLayout />
        </aside>
    );
}

export default Home;
