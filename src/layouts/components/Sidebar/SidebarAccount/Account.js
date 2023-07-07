import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

const Account = ({accounts, moreAccount, handleClickMore, title}) => {
    

  return (
    <div className={cx('wrapper')}>
        <p className={cx('title')}>{title}</p>
        {
            accounts&&accounts.map(account => (
                <AccountItem className={cx('account-item')} key={account.id} data={account} />
            ))
        }
        <p 
            className={cx('more-account')}
            onClick={handleClickMore}
        >{moreAccount?'See less' : 'See all'}</p>
    </div>
  )
}

export default Account