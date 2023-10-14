import { lazy } from 'react';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Tasks = lazy(() => import('../pages/Tasks'));
const Users = lazy(() => import('../pages/Users'));
const Reports = lazy(() => import('../pages/Reports'));
const Profile = lazy(() => import('../pages/Profile'));

const coreRoutes = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/tasks',
    title: 'Tasks',
    component: Tasks,
  },
  {
    path: '/users',
    title: 'Users',
    component: Users,
  },
  {
    path: '/reports',
    title: 'Reports',
    component: Reports,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
];

const routes = [...coreRoutes];
export default routes;
