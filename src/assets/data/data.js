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
