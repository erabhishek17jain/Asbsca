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
  MapPinIcon,
  BuildingLibraryIcon,
} from '@heroicons/react/24/solid';
import { MastersTable } from '../pages/Masters/MastersTable';

export const baseAPI = '/api/v1';

export const pages = [
  {
    label: 'Dashboard',
    value: 'dashboard',
    icon: <Squares2X2Icon className="h-5 w-5" />,
  },
  {
    label: 'Total Cases',
    value: 'cases',
    icon: <Square3Stack3DIcon className="h-5 w-5" />,
  },
  {
    label: 'Assigned',
    value: 'assigned',
    icon: <UserIcon className="h-5 w-5" />,
  },
  {
    label: 'Review',
    value: 'review',
    icon: <DocumentMagnifyingGlassIcon className="h-5 w-5" />,
  },
  {
    label: 'Reports',
    value: 'reports',
    icon: <NewspaperIcon className="h-5 w-5" />,
  },
  {
    label: 'Users',
    value: 'users',
    icon: <UsersIcon className="h-5 w-5" />,
  },
  {
    label: 'Masters',
    value: 'masters',
    icon: <QueueListIcon className="h-5 w-5" />,
  },
  {
    label: 'Profile',
    value: 'profile',
    icon: <Cog6ToothIcon className="h-5 w-5" />,
  },
];

export const statsCards = [
  {
    title: 'Total Cases Recieved',
    value: '/cases',
    count: 3000,
    percentage: 34,
    icon: <Square3Stack3DIcon className="h-5 w-5" />,
  },
  {
    title: 'Assigned Cases',
    value: '/assigned',
    count: 17,
    percentage: 76,
    icon: <UserIcon className="h-5 w-5" />,
  },
  {
    title: 'Reviewing Cases',
    value: '/review',
    count: 47,
    percentage: -3,
    icon: <DocumentMagnifyingGlassIcon className="h-5 w-5" />,
  },
  {
    title: 'Sent To Bank',
    value: '/reports',
    count: 51,
    percentage: 28,
    icon: <PaperAirplaneIcon className="h-5 w-5" />,
  },
];

export const mastersCards = [
  {
    label: 'Client',
    value: 'client',
    count: 0,
    icon: BuildingLibraryIcon,
    component: <MastersTable type="Client" />,
  },
  {
    label: 'Product',
    value: 'product',
    count: 0,
    icon: UserIcon,
    component: <MastersTable type="Product" />,
  },
  {
    label: 'Branch',
    value: 'branch',
    count: 0,
    icon: MapPinIcon,
    component: <MastersTable type="Branch" />,
  },
];

export const ALL_CASES_TABLE_HEAD = [
  '',
  'Bank Name',
  'Reference ID',
  'Received Date',
  "Applicant's Name",
  'Mobile',
  'City',
  'Loan Amt (Lacs)',
  'Case Type',
  'Case Status',
  'Appointment Status',
  'Remark',
  'Assigned to',
  'Reviewer',
  'Action',
];

export const ASSIGNED_CASES_TABLE_HEAD = [
  '',
  'Bank Name',
  'Reference ID',
  'Received Date',
  "Applicant's Name",
  'Mobile',
  'Address',
  'City',
  'Loan Amt (Lacs)',
  'Case Type',
  'Case Status',
  'Appointment Status',
  'Remark',
  'Reviewer',
  'Action',
];

export const REVIEW_CASES_TABLE_HEAD = [
  '',
  'Bank Name',
  'Reference ID',
  'Received Date',
  "Applicant's Name",
  'Mobile',
  'Address',
  'City',
  'Loan Amt (Lacs)',
  'Case Type',
  'Case Status',
  'Assigned to',
  'Reviewer',
  'Action',
];

export const COMPLETED_CASES_TABLE_HEAD = [
  '',
  'Bank Name',
  'Reference ID',
  'Received Date',
  "Applicant's Name",
  'Mobile',
  'City',
  'Branch',
  'Type', // Local, OGL
  'Case Type',
  'Report By',
  'Review By',
  'Started Date',
  'Completed date',
  'Reports',
];

export const BULK_UPLOAD_TABLE_HEAD = [
  '',
  'Bank Name',
  'Reference ID',
  'Received Date',
  "Applicant's Name",
  'Mobile',
  'Address',
  'City',
  'Loan Amt (Lacs)',
  'Branch',
  'Type', // Local, OGL
  'Case Type',
  'Action',
];

export const USER_TABLE_HEAD = [
  '',
  'Name',
  'Emp ID',
  'Email ID',
  'Mobile No',
  'Location',
  'Role',
  'Status',
  '',
];

export const CLIENT_TABLE_HEAD = [
  '',
  'Cient Name',
  'Branch',
  'Status',
  'Action',
];

export const PRODUCT_TABLE_HEAD = [
  '',
  'Product Name',
  'Client Name',
  'Status',
  'Action',
];

export const BRAND_TABLE_HEAD = ['', 'Branch Name', 'Status', 'Action'];

export const calander = [
  { label: 'Last one week', value: 'last_week' },
  { label: 'Last one Month', value: 'last_month' },
  { label: 'Last one Year', value: 'last_year' },
  { label: 'Custom', value: 'custom' },
];
