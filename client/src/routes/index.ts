import { lazy } from 'react';

const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const AddCase = lazy(() => import('../pages/Dashboard/AddCase'));
const AddBulkCase = lazy(() => import('../pages/Dashboard/AddBulkCase/AddBulkCase'));
const AllCases = lazy(() => import('../pages/AllCases/AllCases'));
const AssignedCases = lazy(
  () => import('../pages/AssignedCases/AssignedCases'),
);
const GeneratePD = lazy(() => import('../pages/GeneratePD/GeneratePD'));
const ReviewCases = lazy(
  () => import('../pages/ReviewCases/ReviewCases'),
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
    component: AllCases,
  },
  {
    path: '/assigned',
    title: 'Assigned Cases',
    component: AssignedCases,
  },
  {
    path: '/generatePD',
    title: 'Assigned Cases',
    component: GeneratePD,
  },
  {
    path: '/review',
    title: 'For Review Cases',
    component: ReviewCases,
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
