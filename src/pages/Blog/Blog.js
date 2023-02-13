import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import { FooterLayout, BlogLayout } from '~/components/Layout';
import styles from './Blog.module.scss';
const cx = classNames.bind(styles);

function Blog() {
    const [newKeywords, setNewKeywords] = useState();
    const [loadMoreState, setloadMoreState] = useState(2);
    const [updateData, setUpdateData] = useState([]);
    const [toggleState, setToggleState] = useState(3);
    const [blogData, setblogData] = useState([]);
    const newblogData = [...blogData].sort((a, b) => -a.number_likes + b.number_likes);

    const handleToggle = (index) => {
        setToggleState(index);
    };

    const handleLoadMore = (index, data) => {
        setloadMoreState(index);
    };
    const handleUpdateData = (keyword) => {
        setNewKeywords(keyword.keyword);
    };
    const handleGetDataNewBlog = (updateData) => {
        setUpdateData(updateData);
    };

    const handleClick = (event) => {
        console.log(event);
    };
    useEffect(() => {
        axios
            .get(`http://localhost:3000/data-blog`)
            .then((res) => {
                setblogData(res.data);
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('posts')}>
                    {updateData !== undefined ? (
                        <div
                            key={updateData.id}
                            className={cx('main-posts')}
                            onLoad={() => handleUpdateData(updateData)}
                        >
                            <p className={cx('author')}>By: {updateData.nick_name}</p>
                            <h2 className={cx('title')}>{updateData.title}</h2>
                            <img src={updateData.image} alt="post" />
                            <p
                                className={cx(
                                    loadMoreState === 1 ? ['description', 'active-load-more'] : 'description',
                                )}
                            >
                                {updateData.description}
                            </p>
                            <span
                                onClick={() => handleLoadMore(1, updateData)}
                                className={cx(loadMoreState !== 1 ? 'load-more' : ['load-more', 'hide-span'])}
                            >
                                Xem thêm
                                <span className={cx('underlined-animation')} />
                            </span>
                            <span
                                onClick={() => handleLoadMore(2, updateData)}
                                className={cx(loadMoreState !== 2 ? 'load-more' : ['load-more', 'hide-span'])}
                            >
                                Ẩn đi
                                <span className={cx('underlined-animation')} />
                            </span>
                        </div>
                    ) : (
                        blogData.slice(0, 1).map((data) => (
                            <div key={data.id} className={cx('main-posts')} onLoad={() => handleUpdateData(data)}>
                                <p className={cx('author')}>By: {data.nick_name}</p>
                                <h2 className={cx('title')}>{data.title}</h2>
                                <img src={data.image} alt="post" />
                                <p
                                    className={cx(
                                        loadMoreState === 1 ? ['description', 'active-load-more'] : 'description',
                                    )}
                                >
                                    {data.description}
                                </p>
                                <span
                                    onClick={() => handleLoadMore(1, data)}
                                    className={cx(loadMoreState !== 1 ? 'load-more' : ['load-more', 'hide-span'])}
                                >
                                    Xem thêm
                                    <span className={cx('underlined-animation')} />
                                </span>
                                <span
                                    onClick={() => handleLoadMore(2, data)}
                                    className={cx(loadMoreState !== 2 ? ['load-more', 'hide-span'] : 'load-more')}
                                >
                                    Ẩn đi
                                    <span className={cx('underlined-animation')} />
                                </span>
                            </div>
                        ))
                    )}
                    <div className={cx('list-more')}>
                        {blogData.slice(0, 6).map((coures) => (
                            <BlogLayout onClick={() => handleClick(coures)} key={coures.id} data={coures} />
                        ))}
                    </div>
                </div>
                <div className={cx('navbar')}>
                    <div className={cx('suggest-posts')}>
                        <div className={cx('header-post')}>
                            <div
                                onClick={() => handleToggle(1)}
                                className={cx(
                                    toggleState === 1 ? ['header-child-post', 'active'] : 'header-child-post',
                                )}
                            >
                                <span>Yêu thích</span>
                            </div>
                            <div
                                onClick={() => handleToggle(2)}
                                className={cx(
                                    toggleState === 2 ? ['header-child-post', 'active'] : 'header-child-post',
                                )}
                            >
                                <span>Mới nhất</span>
                            </div>
                            <div
                                onClick={() => handleToggle(3)}
                                className={cx(
                                    toggleState === 3 ? ['header-child-post', 'active'] : 'header-child-post',
                                )}
                            >
                                <span>Liên quan</span>
                            </div>
                        </div>
                        <div
                            className={cx(
                                toggleState === 1 ? ['list-posts', 'active-post'] : 'list-posts',
                                loadMoreState !== 2 ? ['load-more', 'hide-span'] : 'load-more',
                            )}
                        >
                            {newblogData.slice(0, 5).map((data) => (
                                <div onClick={() => handleGetDataNewBlog(data)} key={data.id} className={cx('post')}>
                                    <div className={cx('image-post')}>
                                        <img src={data.image} alt="post" />
                                    </div>
                                    <div className={cx('title-post')}>
                                        <h4 className={cx('title-post-name')}>{data.title}</h4>
                                        <p>{data.number_likes} lượt thích</p>
                                        <p>
                                            <FontAwesomeIcon icon={faClock} /> 20/12/2022
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={cx(toggleState === 2 ? ['list-posts', 'active-post'] : 'list-posts')}>
                            {blogData.slice(4, 9).map((data) => (
                                <div onClick={() => handleGetDataNewBlog(data)} key={data.id} className={cx('post')}>
                                    <div className={cx('image-post')}>
                                        <img src={data.image} alt="post" />
                                    </div>
                                    <div className={cx('title-post')}>
                                        <h4 className={cx('title-post-name')}>{data.title}</h4>
                                        <p>{data.number_likes} lượt thích</p>
                                        <p>
                                            <FontAwesomeIcon icon={faClock} /> 20/12/2022
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={cx(toggleState === 3 ? ['list-posts', 'active-post'] : 'list-posts')}>
                            {blogData
                                .map((keyword) => keyword)
                                .filter((value) => value.keyword === newKeywords)
                                .map((data, index) => (
                                    <div
                                        onClick={() => handleGetDataNewBlog(data)}
                                        key={data.id}
                                        className={cx('post')}
                                    >
                                        <div className={cx('image-post')}>
                                            <img src={data.image} alt="post" />
                                        </div>
                                        <div className={cx('title-post')}>
                                            <h4 className={cx('title-post-name')}>{data.title}</h4>
                                            <p>{data.number_likes} lượt thích</p>
                                            <p>
                                                <FontAwesomeIcon icon={faClock} /> 20/12/2022
                                            </p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className={cx('keyword')}>
                        <h2>Từ khoá</h2>
                        <div className={cx('list-keyword')}>
                            {blogData
                                .map((keyword) => keyword.keyword)
                                .filter((value, index, seft) => seft.indexOf(value) === index)
                                .map((value, index) => (
                                    <a key={index} href="#">
                                        {value}
                                    </a>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <FooterLayout />
        </aside>
    );
}

export default Blog;
