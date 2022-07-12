import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Live from '~/pages/Live';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import HeaderOnly from '~/Layout/HeaderOnly';

const publicRoutes = [
    {path:'/', component: Home},
    {path:'/following', component: Following},
    {path:'/live', component: Live},
    {path:'/profile', component: Profile, layout: HeaderOnly },
    {path:'/upload', component: Upload, layout: null},
    
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes };


