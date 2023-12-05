import { lazy } from 'react';

const Dashboard = lazy(() => import('../pages/DashBoard/Dashboard'));
const AddCase = lazy(() => import('../pages/DashBoard/AddCase'));
const AddBulkCase = lazy(() => import('../pages/DashBoard/AddBulkCase/AddBulkCase'));
const Cases = lazy(() => import('../pages/Cases/Cases'));
const GeneratePD = lazy(() => import('../pages/GeneratePD/GeneratePD'));
const FinalReport = lazy(() => import('../pages/FinalReport/FinalReport'));
const Users = lazy(() => import('../pages/Users/Users'));
const Masters = lazy(() => import('../pages/Masters/Masters'));
const Profile = lazy(() => import('../pages/Profile/Profile'));
const ChangePassword = lazy(() => import('../pages/ChangePassword/ChangePassword'));

const coreRoutes = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/addCase',
    title: 'addCase',
    component: AddCase,
  },
  {
    path: '/bulkUpload',
    title: 'Bulk Upload',
    component: AddBulkCase,
  },
  {
    path: '/cases',
    title: 'All Cases',
    component: Cases,
  },
  {
    path: '/assigned',
    title: 'Assigned Cases',
    component: Cases,
  },
  {
    path: '/generatePD',
    title: 'Assigned Cases',
    component: GeneratePD,
  },
  {
    path: '/finalReport',
    title: 'Assigned Cases',
    component: FinalReport,
  },
  {
    path: '/review',
    title: 'Review Cases',
    component: Cases,
  },
  {
    path: '/completed',
    title: 'Completed',
    component: Cases,
  },
  {
    path: '/sentToBank',
    title: 'Sent To Bank',
    component: Cases,
  },
  {
    path: '/cancelled',
    title: 'Cancelled',
    component: Cases,
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
    path: '/resetPassword',
    title: 'Reset Password',
    component: ChangePassword,
  },
];

const routes = [...coreRoutes];
export default routes;
