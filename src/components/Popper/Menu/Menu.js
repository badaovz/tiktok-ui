import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const Menu = ({ children, hideOnClick = false, items = [], onChange = () => {} }) => {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    useEffect(() => {
        setHistory([{ data: items }]);
    }, [items]);

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    className={cx('menu-items')}
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, history.length - 1));
    };

    const handleBackAll = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    const renderMenuBtn = (attrs) => (
        <div className={cx('menu-btn')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    return (
        // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context. 
        <div>     
            <Tippy
                interactive
                hideOnClick={hideOnClick}
                delay={[0, 700]}
                offset={[12, 8]}
                placement="bottom-end"
                render={renderMenuBtn}
                onHide={handleBackAll}
            >
                {children}
            </Tippy>
        </div>
    );
};

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    hideOnClick: PropTypes.bool,
    items: PropTypes.array.isRequired,
    onChange: PropTypes.func,
};

export default Menu;
