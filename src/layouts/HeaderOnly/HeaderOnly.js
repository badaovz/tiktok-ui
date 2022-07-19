import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header/Header';
import classNames from 'classnames/bind';
import styles from './HeaderOnly.module.scss';

const cx = classNames.bind(styles);

const HeaderOnly = ({ children }) => {
    return (
        <div>
            <Header />
            <div className={cx('wrapper')}>{children}</div>
        </div>
    );
};

HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderOnly;
