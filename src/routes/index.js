import Home from '~/pages/Home';
import ForMe from '~/pages/ForMe';
import Projects from '~/pages/Projects';
import Blog from '~/pages/Blog';
import Contact from '~/pages/Contact';
//Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/for-me', component: ForMe },
    { path: '/projects', component: Projects },
    { path: '/blog', component: Blog },
    { path: '/contact', component: Contact },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
