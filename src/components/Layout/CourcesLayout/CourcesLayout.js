import classNames from 'classnames/bind';

import styles from './CourcesLayout.module.scss';
const cx = classNames.bind(styles);

function CourcesLayout() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('image')}>
                <img src="https://resources.iostream.vn/content/article/html-phan-4-the-lien-ket-trong-html/thumbnail-hd/blob-1598602875370@1280x720.jpg" />
            </div>
            <div className={cx('titles')}>
                <h3 className={cx('name-titles')}>Kiến thức nhập môn HTML</h3>
                <p className={cx('description')}>
                    Kết nối 2 đầu Advertiser và Publisher thông qua các mạng lưới và nền tảng quảng cáo (ad-network,
                    agency, etc) Kết nối 2 đầu Advertiser và Publisher thông qua các mạng lưới và nền tảng quảng cáo
                    (ad-network, agency, etc) Kết nối 2 đầu Advertiser và Publisher thông qua các mạng lưới và nền tảng
                    quảng cáo (ad-network, agency, etc) quảng cáo (ad-network, agency, etc) quảng cáo (ad-network,
                    agency, etc) quảng cáo (ad-network, agency, etc) quảng cáo (ad-network, agency, etc) quảng cáo
                    (ad-network, agency, etc) quảng cáo (ad-network, agency, etc)
                </p>
            </div>
        </aside>
    );
}

export default CourcesLayout;
