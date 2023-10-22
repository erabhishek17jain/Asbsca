import {
  Cog6ToothIcon,
  DocumentMagnifyingGlassIcon,
  NewspaperIcon,
  PaperAirplaneIcon,
  QueueListIcon,
  Square3Stack3DIcon,
  Squares2X2Icon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';

export const TASK_TABLE_HEAD = [
  'Bank Name',
  'Task Name',
  'Business Type',
  'Status',
  'Assignee',
  'Reporter',
  'createdAt',
  '',
];

export const USER_TABLE_HEAD = [
  'Member',
  'Contact',
  'Roles',
  'Report Finished',
  'Joined',
  '',
];

export const REPORT_TABLE_HEAD = [
  'Bank Name',
  'Report Name',
  'Client Name',
  'Bussiness Type',
  'Created At',
  '',
];

export const sidebarMenu = [
  {
    label: 'Dashboard',
    path: 'dashboard',
    icon: <Squares2X2Icon className="h-5 w-5" />,
  },
  {
    label: 'Total Cases',
    path: 'cases',
    icon: <Square3Stack3DIcon className="h-5 w-5" />,
  },
  {
    label: 'Assigned',
    path: 'assigned',
    icon: <UserIcon className="h-5 w-5" />,
  },
  {
    label: 'For Review',
    path: 'review',
    icon: <DocumentMagnifyingGlassIcon className="h-5 w-5" />,
  },
  {
    label: 'Reports',
    path: 'reports',
    icon: <NewspaperIcon className="h-5 w-5" />,
  },
  {
    label: 'Users',
    path: 'users',
    icon: <UsersIcon className="h-5 w-5" />,
  },
  {
    label: 'Masters',
    path: 'masters',
    icon: <QueueListIcon className="h-5 w-5" />,
  },
  {
    label: 'Profile',
    path: 'profile',
    icon: <Cog6ToothIcon className="h-5 w-5" />,
  },
  {
    label: 'Field Components',
    path: 'fields',
    icon: <Cog6ToothIcon className="h-5 w-5" />,
  },
];

export const statsCards = [
  {
    title: 'Total Cases Recieved',
    count: 3000,
    percentage: 34,
    icon: <Square3Stack3DIcon className="h-5 w-5" />,
  },
  {
    title: 'Assigned Cases',
    count: 17,
    percentage: 76,
    icon: <UserIcon className="h-5 w-5" />,
  },
  {
    title: 'For Review Cases',
    count: 47,
    percentage: -3,
    icon: <DocumentMagnifyingGlassIcon className="h-5 w-5" />,
  },
  {
    title: 'Sent To Bank',
    count: 51,
    percentage: 28,
    icon: <PaperAirplaneIcon className="h-5 w-5" />,
  },
];
