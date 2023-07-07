import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Image from '../Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

const AccountItem = ({ data, className, isVideoAccount }) => {
    console.log('data: className: ssss sss sss ssss', data, ':', className);
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper', { [className]: className })}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>
                        {data.full_name} {` - `} {isVideoAccount && data.nickname}
                    </span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                </h4>
                {isVideoAccount ? <p>{data.bio}</p> : <p className={cx('username')}>{data.nickname}</p>}
            </div>
        </Link>
    );
};

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
