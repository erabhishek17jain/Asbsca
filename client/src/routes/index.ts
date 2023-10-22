import { lazy } from 'react';

const Dashboard = lazy(() => import('../pages/DashBoard/Dashboard'));
const AddNewCase = lazy(() => import('../pages/DashBoard/AddNewCase'));
const AddBulkCase = lazy(() => import('../pages/DashBoard/AddBulkCase'));
const AllCases = lazy(() => import('../pages/AllCases/AllCases'));
const AssignedCases = lazy(
  () => import('../pages/AssignedCases/AssignedCases'),
);
const ForReviewCases = lazy(
  () => import('../pages/ReviewingCases/ReviewingCases'),
);
const Reports = lazy(() => import('../pages/Reports/Reports'));
const Users = lazy(() => import('../pages/Users/Users'));
const Masters = lazy(() => import('../pages/Masters/Masters'));
const Profile = lazy(() => import('../pages/Profile/Profile'));
const Components = lazy(() => import('../pages/Components'));

const coreRoutes = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/addNew',
    title: 'AddNew',
    component: AddNewCase,
  },
  {
    path: '/bullUpload',
    title: 'Bulk Upload',
    component: AddBulkCase,
  },
  {
    path: '/cases',
    title: 'All Cases',
    component: AllCases,
  },
  {
    path: '/assigned',
    title: 'Assigned Cases',
    component: AssignedCases,
  },
  {
    path: '/review',
    title: 'For Review Cases',
    component: ForReviewCases,
  },
  {
    path: '/reports',
    title: 'Reports',
    component: Reports,
  },
  {
    path: '/masters',
    title: 'Masters',
    component: Masters,
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
    component: Components,
  },
];

const routes = [...coreRoutes];
export default routes;
