import Home from '../views/pages/home';
import Detail from '../views/pages/detail-pages';
import Like from '../views/pages/like';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
