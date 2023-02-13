import axios from 'axios';
import React, { useEffect, useState, Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { BlogLayout, CourcesLayout, LoginLayout, FooterLayout, SliderLayout } from '~/components/Layout';
import * as coursesService from '~/services/coursesService';

const cx = classNames.bind(styles);

// Custom button slider
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', right: '8px' }} onClick={onClick} />;
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', left: '8px', zIndex: '999' }}
            onClick={onClick}
        />
    );
}

const settings = {
    arrows: true,
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
};
function Home() {
    const [suggestedUser, setSuggestedUser] = useState([]);
    const [blogData, setblogData] = useState([]);
    const [memory, setMemory] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/courses`)
            .then((res) => {
                setSuggestedUser(res.data);
            })
            .catch((error) => console.log(error));

        axios
            .get(`http://localhost:3000/data-blog`)
            .then((res) => {
                setblogData(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <SliderLayout />
            <div className={cx('cources')}>
                <h1 className={cx('titles')}>LỘ TRÌNH FRONTEND</h1>
                <div className={cx('cources-name')}>
                    {suggestedUser.map((coures) => (
                        <CourcesLayout key={coures.id} data={coures} />
                    ))}
                </div>
            </div>
            <div className={cx('cources', 'blog')}>
                <h1 className={cx('titles')}>Blog</h1>

                <Slider {...settings}>
                    {blogData.map((coures) => (
                        <BlogLayout key={coures.id} data={coures} />
                    ))}
                </Slider>
            </div>
            <div className={cx('layoutLogin')}>
                <LoginLayout />
            </div>
            <FooterLayout />
        </aside>
    );
}

export default Home;
