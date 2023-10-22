import { lazy } from 'react';

const Dashboard = lazy(() => import('../pages/DashBoard/Dashboard'));
const AddNew = lazy(() => import('../pages/DashBoard/NewAdd'));
const Tasks = lazy(() => import('../pages/Tasks'));
const Users = lazy(() => import('../pages/Users'));
const Reports = lazy(() => import('../pages/Reports'));
const Profile = lazy(() => import('../pages/Profile'));
const Fields = lazy(() => import('../pages/Fields'));

const coreRoutes = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/addNew',
    title: 'AddNew',
    component: AddNew,
  },
  {
    path: '/bullUpload',
    title: 'Bulk Upload',
    component: AddNew,
  },
  {
    path: '/cases',
    title: 'All Cases',
    component: Tasks,
  },
  {
    path: '/assigned',
    title: 'Assigned Cases',
    component: Tasks,
  },
  {
    path: '/review',
    title: 'For Review Cases',
    component: Tasks,
  },
  {
    path: '/reports',
    title: 'Reports',
    component: Reports,
  },
  {
    path: '/masters',
    title: 'Masters',
    component: Users,
  },
  {
    path: '/users',
    title: 'Users',
    component: Users,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/components',
    title: 'Components',
    component: Fields,
  },
];

const routes = [...coreRoutes];
export default routes;
