import React from 'react';
import classNames from 'classnames/bind';
import styles from './Scrollbar.module.scss';

const cx = classNames.bind(styles);

const Scrollbar = () => {
    return (
        <div
            className={cx('wrapper')}
        >
            <div className={cx('scrollbar-thumb')}></div>
        </div>
    );
};

export default Scrollbar;
