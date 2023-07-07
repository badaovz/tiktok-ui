import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import * as searchServices from '~/services/searchService';

import {
    HomeIcon,
    HomeActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
} from '~/components/Icons';
import MenuItem from './SidebarMenu/MenuItem';
import Menu from './SidebarMenu';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Scrollbar from './Scrollbar';
import Account from './SidebarAccount/Account';
import Discover from './Discover';
import { discoverData } from '~/assets/data';

const cx = classNames.bind(styles);

const Sidebar = () => {
    const [accounts, setAccounts] = useState([]);
    const [moreAccount, setMoreAccount] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const searchWord = moreAccount ? 'n' : 'l';
            const result = await searchServices.search(searchWord);
            setAccounts(result);
        };
        fetchData();
    }, [moreAccount]);

    const handleClickMore = () => {
        setMoreAccount(!moreAccount);
    };

    return (
        <aside className={cx('ScrollContainer')}>
            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <Menu>
                        <MenuItem
                            title="For You"
                            to={config.routes.home}
                            icon={<HomeIcon />}
                            activeIcon={<HomeActiveIcon />}
                        />
                        <MenuItem
                            title="Following"
                            to={config.routes.following}
                            icon={<UserGroupIcon />}
                            activeIcon={<UserGroupActiveIcon />}
                        />
                        <MenuItem
                            title="LIVE"
                            to={config.routes.live}
                            icon={<LiveIcon />}
                            activeIcon={<LiveActiveIcon />}
                        />
                    </Menu>
                    <Account
                        accounts={accounts}
                        moreAccount={moreAccount}
                        title="Suggested accounts"
                        handleClickMore={handleClickMore}
                    />
                    <Account
                        accounts={accounts}
                        moreAccount={moreAccount}
                        title="Following accounts"
                        handleClickMore={handleClickMore}
                    />
                    <Discover data={discoverData} />
                </div>
            </div>
            <Scrollbar />
        </aside>
    );
};

export default Sidebar;
