import { faEnvelope, faLock, faUnlock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './LoginLayout.module.scss';

const cx = classNames.bind(styles);

function LoginLayout() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('signup-content')}>
                <div className={cx('signup-form')}>
                    <h2 className={cx('form-title')}>Sign up</h2>
                    <form method="POST" className={cx('register-form')}>
                        <div className={cx('form-group')}>
                            <label for="name">
                                <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                                <input type="text" name="name" id="name" placeholder="Your Name"></input>
                            </label>
                        </div>
                        <div className={cx('form-group')}>
                            <label for="email">
                                <FontAwesomeIcon className={cx('icon')} icon={faEnvelope} />
                                <input type="text" name="email" id="email" placeholder="Your email"></input>
                            </label>
                        </div>
                        <div className={cx('form-group')}>
                            <label for="pass">
                                <FontAwesomeIcon className={cx('icon')} icon={faLock} />
                                <input type="password" name="pass" id="pass" placeholder="Your password"></input>
                            </label>
                        </div>
                        <div className={cx('form-group')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faUnlock} />
                            <input
                                type="password"
                                name="re-pass"
                                id="re-pass"
                                placeholder="Repeat your password"
                            ></input>
                        </div>
                        <div className={cx('button-signup')}>
                            <Button className={cx('button')}>Sign Up</Button>
                        </div>
                    </form>
                </div>
                <div className={cx('signup-image')}>
                    <div>
                        <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" />
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default LoginLayout;
