import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

import { menuItemData, userData } from '~/assets/data';
import images from '~/assets/images/images';
import Button from '~/components/Button';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import Search from '~/layouts/components/Search/Search';
import config from '~/config';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const getAuthLocal = () => {
    let auth = localStorage.getItem('auth');
    if (auth) {
        auth = localStorage.getItem('auth');
    }
    return auth;
};

const Header = () => {
    const [currentUser, setCurrentUser] = useState(false);

    const handleSignOut = () => {
        setCurrentUser(false);
        localStorage.removeItem('auth');
    };

    const handleOnchange = (item) => {
        if (item.title === 'Log out') {
            handleSignOut();
        }
    };

    useEffect(() => {
        setCurrentUser(getAuthLocal());
    }, []);

    const handleLogin = () => {
        localStorage.setItem('auth', true);
        setCurrentUser(true);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('logo-link')} to={config.routes.home}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                {/* //search */}
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            {/* <Tippy interactive content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
                            </Tippy> */}
                            <Button to="/upload" leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            {/* Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.  */}
                            <div>
                                <Tippy interactive content="Message" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <MessageIcon />
                                    </button>
                                </Tippy>
                            </div>
                            {/* Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.  */}
                            <div>
                                <Tippy interactive content="Inbox" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <InboxIcon />
                                        <span className={cx('badge')}>12</span>
                                    </button>
                                </Tippy>
                            </div>
                        </>
                    ) : (
                        <>
                            <Button rounded to="/upload" leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button
                                primary
                                to="/"
                                href="https://www.npmjs.com/package/prop-types"
                                onClick={handleLogin}
                            >
                                Log in
                            </Button>
                        </>
                    )}

                    <Menu items={currentUser ? userData : menuItemData} onChange={handleOnchange} user={currentUser}>
                        <button className={cx('more-btn')}>
                            {currentUser ? (
                                <Image
                                    className={cx('current-user')}
                                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/75695538c40f811a91276874b89f2668~c5_300x300.webp?x-expires=1657868400&x-signature=fC6gAMeuc719ik%2FbeveEzd6D%2Bc4%3D"
                                    alt="username"
                                    imageDefault={images.defaultImage}
                                />
                            ) : (
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            )}
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
