import {
  Cog6ToothIcon,
  DocumentMagnifyingGlassIcon,
  NewspaperIcon,
  QueueListIcon,
  Square3Stack3DIcon,
  Squares2X2Icon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';

export const baseAPI = '/api/v1';

export const pages = [
  {
    label: 'Dashboard',
    value: 'dashboard',
    icon: <Squares2X2Icon className="h-5 w-5" />,
  },
  {
    label: 'All Cases',
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

export const casesTypes = [
  {
    id: 'cases',
    title: 'All Cases',
    description: 'These are the list of all cases.',
    header: [
      '',
      'Bank Name',
      'Reference ID',
      'Received Date',
      "Applicant's Name",
      'Mobile',
      'Address',
      'City',
      'Branch',
      'Loan Amt (Lacs)',
      'Type',
      'Case Type',
      'Case Status',
      'Appointment Status',
      'Remark',
      'Assigned to',
      'Reviewer',
      'Action',
    ],
  },
  {
    id: 'assigned',
    title: 'Assigned Cases',
    description: 'These are the list of assigned cases.',
    header: [
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
    ],
  },
  {
    id: 'review',
    title: 'Review Cases',
    description: 'These are the list of cases to review.',
    header: [
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
    ],
  },
  {
    id: 'reports',
    title: 'Completed Cases',
    description: 'These are the list of old report for your refrence.',
    header: [
      '',
      'Bank Name',
      'Reference ID',
      'Received Date',
      "Applicant's Name",
      'Mobile',
      'Address',
      'City',
      'Branch',
      'Type',
      'Case Type',
      'Report By',
      'Review By',
      'Started Date',
      'Completed date',
      'Reports',
    ],
  },
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
  'Type',
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
  'Action',
];

export const CLIENT_TABLE_HEAD = [
  '',
  'Cient Name',
  'Branch',
  'Signature',
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

export const BRAND_TABLE_HEAD = [
  '',
  'Branch Name',
  'Address',
  'Status',
  'Action',
];

export const ROLE_TABLE_HEAD = ['', 'Role Name', 'Status', 'Action'];

export const calander = [
  { label: 'Last 7 Days', value: 7 },
  { label: 'Last 30 Days', value: 30 },
  { label: 'Last 90 Days', value: 90 },
  { label: 'Last 180 Days', value: 180 },
  { label: 'Last 365 Days', value: 365 },
  { label: 'Max', value: 'max' },
];

export const caseStatusList = [
  { label: 'Unassigned', value: 'unassigned' },
  { label: 'Assigned', value: 'assigned' },
  { label: 'Completed', value: 'completed' },
  { label: 'Reviewing', value: 'reviewing' },
  { label: 'Query', value: 'query' },
  { label: 'Sent to Bank', value: 'sentToBank' },
];

export const appStatusList = [
  { label: 'Visited', value: 'Visited' },
  { label: 'Scheduled', value: 'scheduled' },
  { label: 'Not received', value: 'notReceived' },
  { label: 'Not Responding', value: 'notResponding' },
  { label: 'Not yet scheduled', value: 'notScheduled' },
];

export const localOrOGLList = [
  { label: 'Local', value: 'local' },
  { label: 'OGL', value: 'ogl' },
];

export const caseTypeList = [
  { label: 'PD', value: 'pd' },
  { label: 'LIP', value: 'lip' },
];

export const statusList = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
];
