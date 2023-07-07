import {
    faCircleQuestion,
    faCoins,
    faGear,
    faKeyboard,
    faLanguage,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'tippy.js/dist/tippy.css';
import { MusicIcon, HashtagIcon } from '~/components/Icons';

export const menuItemData = [
    {
        title: 'English',
        icon: <FontAwesomeIcon icon={faLanguage} />,
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    title: 'English',
                    code: 'En',
                },
                {
                    type: 'Language',
                    title: 'Russia',
                    code: 'Rus',
                },
                {
                    type: 'Language',
                    title: 'Vietnamese',
                    code: 'Vi',
                },
                {
                    type: 'Language',
                    title: 'Chinese',
                    code: 'Ci',
                },
            ],
        },
    },
    {
        title: 'Feedback and help',
        to: '/feedback',
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    },
    {
        title: 'Keyboard shortcuts',
        icon: <FontAwesomeIcon icon={faKeyboard} />,
    },
];

export const userData = [
    {
        title: 'View profile',
        to: '/profile',
        icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
        title: 'Get coins',
        to: '/coins',
        icon: <FontAwesomeIcon icon={faCoins} />,
    },
    {
        title: 'Setting',
        to: '/setting',
        icon: <FontAwesomeIcon icon={faGear} />,
    },
    {
        title: 'English',
        icon: <FontAwesomeIcon icon={faLanguage} />,
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    title: 'English',
                    code: 'En',
                },
                {
                    type: 'Language',
                    title: 'Russia',
                    code: 'Rus',
                },
                {
                    type: 'Language',
                    title: 'Vietnamese',
                    code: 'Vi',
                },
                {
                    type: 'Language',
                    title: 'Chinese',
                    code: 'Ci',
                },
            ],
        },
    },
    {
        title: 'Feedback and help',
        to: '/feedback',
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    },
    {
        title: 'Keyboard shortcuts',
        icon: <FontAwesomeIcon icon={faKeyboard} />,
    },
    {
        title: 'Log out',
        to: '/',
        icon: <FontAwesomeIcon icon={faSignOut} />,
        separate: true,
    },
];

export const discoverData = [
    {
        id: 1,
        title: 'suthatla',
        icon: <HashtagIcon />,
        to:'/tag/suthatla'
    },
    {
        id: 2,
        title: 'mackedoi',
        icon: <HashtagIcon />,
        to:'/tag/mackedoi'
    },
    {
        id: 3,
        title: 'sansangthaydoi',
        icon: <HashtagIcon />,
        to:'/tag/sansangthaydoi'
    },
    {
        id: 4,
        title: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n',
        icon: <MusicIcon />,
        to:'/tag/yeudonphuonglagi'
    },
    {
        id: 5,
        title: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng',
        icon: <MusicIcon />,
        to:'/tag/venghemedu'
    },
    {
        id: 6,
        title: 'Thiên Thần Tình Yêu - RICKY STAR',
        icon: <MusicIcon />,
        to:'/tag/thienthantinhyeu'
    },
    {
        id: 7,
        title: '7749hieuung',
        icon: <HashtagIcon />,
        to:'/tag/7749hieuung'
    },
    {
        id: 8,
        title: 'genzlif',
        icon: <HashtagIcon />,
        to:'/tag/genzlif'
    },
    {
        id: 9,
        title: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn',
        icon: <MusicIcon />,
        to:'/tag/tinhdadaymottim'
    },
    {
        id: 10,
        title: 'Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham',
        icon: <MusicIcon />,
        to:'/tag/thanghau'
    },
];
