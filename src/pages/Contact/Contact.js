import classNames from 'classnames/bind';
import styles from './Contact.module.scss';

import { FooterLayout, LoginLayout } from '~/components/Layout';
const cx = classNames.bind(styles);
function Contact() {
    return (
        <aside className={cx('wrapper')}>
            <LoginLayout />
            <FooterLayout />
        </aside>
    );
}

export default Contact;
