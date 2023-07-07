import React from 'react';
import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const Discover = ({ data }) => {
    return (
        <div className={cx('wrapper')}>
            {
                data.map(item => (
                    <Button className={cx('btn')} key={item.id} rounded to={item.to} leftIcon={item.icon}>
                        {item.title}
                    </Button>

                ))
            }
        </div>
    );
};

export default Discover;
