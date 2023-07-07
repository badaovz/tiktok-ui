import Home from '~/pages/Home/Home';
import Following from '~/pages/Following/Following';
import Live from '~/pages/Live/Live';
import Profile from '~/pages/Profile/Profile';
import Upload from '~/pages/Upload/Upload';
import HeaderOnly from '~/layouts/HeaderOnly/HeaderOnly';
import Tag from '~/pages/Tag';
import config from '~/config';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile, layout: HeaderOnly },
    { path: config.routes.upload, component: Upload, layout: null },
    { path: config.routes.tag, component: Tag },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes }; 
