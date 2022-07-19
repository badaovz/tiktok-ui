import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Button = ({
    to,
    href,
    children,
    text = false,
    primary = false,
    rounded = false,
    outline = false,
    small = false,
    large = false,
    disabled = false,
    leftIcon = false,
    rightIcon = false,
    className,
    onClick,
    ...passProps
}) => {
    let Com = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // remove even listener when button is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    // review type of btn
    if (to) {
        props.to = to;
        Com = Link;
    } else if (href) {
        props.href = href;
        Com = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        text,
        primary,
        outline,
        rounded,
        small,
        large,
        disabled,
    });
    return (
        <Com className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Com>
    );
};

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    text: PropTypes.bool,
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    disabled: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
