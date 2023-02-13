import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component } from 'react';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import axios from 'axios';

import classNames from 'classnames/bind';
import styles from './SliderLayout.module.scss';

const cx = classNames.bind(styles);

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
    autoplay: true,
    autoplaySpeed: 3000,
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
};

function SliderLayout({ data }) {
    const [memory, setMemory] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:3000/data-memory`)
            .then((res) => {
                setMemory(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Slider {...settings}>
                {memory.map((memory) => (
                    <div key={memory.id} className={cx('activities')}>
                        <img src={memory.image}></img>
                        <div className={cx('content')}>
                            <h1>{memory.title}</h1>
                        </div>
                    </div>
                ))}
            </Slider>
        </aside>
    );
}

export default SliderLayout;
