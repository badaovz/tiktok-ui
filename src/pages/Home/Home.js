import React, { useReducer, useRef, useState } from 'react';
import Video from '~/components/Video/Video';
import { faPlay, faPause, faHeart, faCommentDots, faBookBookmark, faShare } from '@fortawesome/free-solid-svg-icons';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import AccountItem from '~/components/AccountItem/AccountItem';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);
// import Video from './Test/Video';

const Home = () => {
    const [isPlay, setIsPlay] = useState(true);
    const [icon, setIcon] = useState(faPause);
    const videoRef = useRef();

    const handleControl = () => {
        console.log('click me', isPlay);
        if (isPlay) {
            console.log('vao paly false');
            setIsPlay(false);
            setIcon(faPlay);
            videoRef.current.pause();
        } else {
            console.log('vao paly true');
            setIsPlay(true);
            setIcon(faPause);
            videoRef.current.play();
        }
    };

    const data = {
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/112/63034bbec74d6.jpg',
        bio: '✨ 1998 ✨\nVietnam 🇻🇳\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !',
        created_at: '2022-08-22 16:13:14',
        facebook_url: '',
        first_name: 'Lý',
        followers_count: 3,
        followings_count: 2,
        full_name: 'Lý Bính',
        id: 112,
        instagram_url: '',
        last_name: 'Bính',
        likes_count: 0,
        nickname: 'nhok20102003',
        tick: false,
        twitter_url: '',
        updated_at: '2022-08-22 16:26:23',
        website_url: 'https://fullstack.edu.vn/',
        youtube_url: '',
    };

    return (
        <div className={cx('home')}>
            <div className={cx('home__header')}>
                <AccountItem className={cx('account-item')} data={data} isVideoAccount />
                <Button outline style={{ height: '40px' }}>
                    Follow Me
                </Button>
            </div>

            <div className={cx('home__content')}>
                <Video ref={videoRef} />
                {/* <button className={cx('home__btn')} onClick={handleControl}>
                    <FontAwesomeIcon icon={icon} />
                </button> */}
                <div className={cx('home__more')}>
                    <button>
                        <span>
                            <FontAwesomeIcon icon={faHeart} />
                        </span>
                        <strong>200.4k</strong>
                    </button>
                    <button>
                        <span>
                            <FontAwesomeIcon icon={faCommentDots} />
                        </span>
                        <strong>3034</strong>
                    </button>
                    <button>
                        <span>
                            <FontAwesomeIcon icon={faBookBookmark} />
                        </span>
                        <strong>10.2k</strong>
                    </button>
                    <button>
                        <span>
                            <FontAwesomeIcon icon={faShare} />
                        </span>
                        <strong>1200</strong>
                    </button>
                </div>
            </div>
            {/* <h2>Todo</h2>
            <div>
                <input
                    type="text"
                    value={state.job}
                    placeholder="input job"
                    onChange={(e) => dispatch(setJob(e.target.value))}
                    ref={inputRef}
                    onKeyDown={(e) => handleEnter(e)}
                />
                <button onClick={handleClick}>add</button>
            </div>
            {state.jobs.map((job) => (
                <li key={job}>
                    {job}{' '}
                    <span
                        style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }}
                        onClick={() => dispatch(delJob(job))}
                    >
                        &times;
                    </span>
                </li>
            ))} */}
        </div>
    );
};

export default Home;
