import classNames from 'classnames/bind';

import styles from './ForMe.module.scss';
import { FooterLayout } from '~/components/Layout';
import videos from '~/assets/video';

const cx = classNames.bind(styles);
const timeline = [
    {
        time: '08/2019',
        title: 'Công việc ở Bắc Ninh',
        description:
            'Sau khi trượt tốt nghiệp vì bị điểm liệt môn sinh (một lí do củ chuối), ra Bắc Ninh trải nghiệm cuộc sống công nhân đầy khó khăn và nỗ lực hơn nữa ở kì thi THPT 2020.',
    },
    {
        time: '10/2020',
        title: 'Theo học tại Đại học kiến trúc Hà Nội',
        description:
            'Cảm giác được làm quen với môi trường mới, một trang mới trong sự nghiệp, vui có, khó khăn có thuận lợi có và sự cô đơn thì luôn hiện hữu.',
    },
    {
        time: '09/2021',
        title: 'Học HTML, CSS, JAVASCRIP cơ bản',
        description:
            'Lần đầu làm quen với lập trình, khó khăn trong việc tiếp cận và những kiến thức khô khan và nhàm chán. Nhưng nếu vượt qua được khoảng thời gian này thì sẽ cảm thấy rất hứng thú với việc lập trình.',
    },
    {
        time: '05/2022',
        title: 'Học REACTJS cơ bản',
        description:
            'Sau nhiều lần học nghỉ giữa chừng thì đã biết quyết tâm hơn, lo lắng cho tương lai nhiều hơn nên sự cố gắng là rất lớn.',
    },
];

function ForMe() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('body')}>
                <img src="https://lh3.googleusercontent.com/gm3asEiByhAeVrI5il9n0b40L_Kn4YqEhAkx6iuHbfrE637qcupJl5xcQLLAW3XqvkJ8i2e4GCpZH4XAIaaDfSrJ2uqtgoTU3BjMrszHDe-rD_UMFhiQygcZoCfjeeetZqR7xgUtg_o0TpeB0a71zEJddi3J6-9AQ7Tn7CBvo5f-yTz6YPSDussLo5EBlsuMSuVavWkr1Ikiog9qVgW96Nc1wkB1gi65fzw43dZWCe1WWYxwOVUELz6IdwHjLUpkmcfHnaMFCHXN3AbKFodGMkSIEI4lnr47MXrre5pl4kVHx8lTE2QA1aaADXjADv1vurabv6DrvheCUd1b3ducIAfZ9lNbtBzrdFFR01k4MPuiDrNGj2VpbuGXcwU8Tzr8fytL3g5DWapsYyMh1N9AbIwkApvgk-E6rp5j_93LHad4Dc4ec46nECu_TCnEtbqqGPl_WfVRtQx0R5TIAhmDd4tjWPsGDr81rMGI4GOVPnMWwZVttg6jIAU8kGo6v3-frRJTnrnmf0a0oteLjaHGS7rE5wACJlPnGLbVPQTJeyVI4mwz5BzFTrZRMgl7ylhf7gNcgVv4o8E9R3JnbtXzuTfdd5sYqUQxjpCJllDIcSihtL9eUD3mCLxCbJAP9WinO0Hf2PSUTVs6-rcI7iHhBC3lnhAQ4HW9meL_YEHben1pyd-ZBfmb8Trib0hbXDfnS3mo4uIffM9dECkUJhNLKJi-5woUt55VATBwUXLnPLjKD1eyxu6oUIRuRI1YL_0wSNpm6KGTf4Wa0BLXBV7X5jomXU5-6g0BIOGpnhhqc1h8sANhceDux7YMQlVqeJ6AxyRCcEPyCPwM87HaiYtqwLeayJyEvnT53Kwp8qBpCXqA1SpqYv9WLD8R2hP6l7J-Ya8uQX6B34fP0mtW6xRmVSB1vH09ZeNuktp-Jr2A1TdGjRgw2XwIUlfeUAQeHyyMJ5o8Xy-Tmu5olFQYw6HJ6s8XIMsGV8wreRRjbQJsecblSF_hk8NSL84=w1576-h919-s-no?authuser=0" />
                <div className={cx('profile')}>
                    <div>
                        <h1>About Me</h1>
                        <p>PHẠM QUỐC HUY</p>
                        <p>03/10/2001</p>
                        <p>Sinh viên năm 3, Đại học kiến trúc Hà Nội</p>
                        <p>Quê quán: Thanh Hoá</p>
                        <p>Tôn giáo: Thiên Chúa</p>
                    </div>
                </div>
            </div>

            <div className={cx('timeline')}>
                <div className={cx('main')}>
                    <h3 className={cx('heading')}>DÒNG THỜI GIAN</h3>

                    <div className={cx('container')}>
                        <ul className={cx('card-ul')}>
                            {timeline.map((data) => (
                                <li className={cx('card-li')}>
                                    <h3 className={cx('title')}>{data.title}</h3>
                                    <p>{data.description}</p>
                                    <a href="#">Read More {'>'}</a>
                                    <span className={cx('circle')}></span>
                                    <span className={cx('date')}>{data.time}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx('body', 'class-display')}>
                <div className={cx('video')}>
                    <video autoplay muted loop controls>
                        <source src={videos.beSoc} type="video/mp4"></source>
                    </video>
                </div>
                <div className={cx('description')}>
                    <div>
                        <h1>“Tôi thích cách người khác đánh giá tôi, thay vì tôi mô tả về bản thân mình.”</h1>
                        <p>
                            Thực tế tôi không có cuộc sống riêng tư. Tôi đã quen với điều này và sẵn sàng cho nó. Vâng,
                            đôi khi thật khó khăn, nhưng đó là sự lựa chọn mà tôi đã thực hiện.
                        </p>
                    </div>
                </div>
            </div>
            <FooterLayout />
        </aside>
    );
}
export default ForMe;
