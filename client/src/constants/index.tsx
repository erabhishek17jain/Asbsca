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
    isChecked: true,
    label: 'Dashboard',
    value: 'dashboard',
    icon: <Squares2X2Icon className="h-5 w-5" />,
  },
  {
    label: 'All Cases',
    value: 'cases',
    isChecked: false,
    icon: <Square3Stack3DIcon className="h-5 w-5" />,
  },
  {
    label: 'Assigned',
    value: 'assigned',
    isChecked: false,
    icon: <UserIcon className="h-5 w-5" />,
  },
  {
    label: 'Review',
    value: 'review',
    isChecked: false,
    icon: <DocumentMagnifyingGlassIcon className="h-5 w-5" />,
  },
  {
    label: 'Completed',
    value: 'completed',
    isChecked: false,
    icon: <NewspaperIcon className="h-5 w-5" />,
  },
  {
    label: 'Sent To Bank',
    value: 'sentToBank',
    isChecked: false,
    icon: <NewspaperIcon className="h-5 w-5" />,
  },
  {
    label: 'Users',
    value: 'users',
    isChecked: false,
    icon: <UsersIcon className="h-5 w-5" />,
  },
  {
    label: 'Masters',
    value: 'masters',
    isChecked: false,
    icon: <QueueListIcon className="h-5 w-5" />,
  },
  {
    label: 'Profile',
    value: 'profile',
    isChecked: true,
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
      'Loan Amt (Lakhs)',
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
      'Loan Amt (Lakhs)',
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
      'Loan Amt (Lakhs)',
      'Case Type',
      'Assigned to',
      'Reviewer',
      'Action',
    ],
  },
  {
    id: 'completed',
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
  {
    id: 'sentToBank',
    title: 'Send To Bank Cases',
    description:
      'These are the list of all cases whose reports are sent to bank.',
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
  "Applicant's Name",
  'Mobile',
  'Loan Amt (Lakhs)',
  'Reference ID',
  'Type',
  'Address',
  'City',
  'Case Type',
  'Bank Name',
  'Branch',
  'Received Date',
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

export const ROLE_TABLE_HEAD = [
  '',
  'Role Name',
  'Page Access',
  'Status',
  'Action',
];

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
  { label: 'Reviewing', value: 'review' },
  { label: 'Query', value: 'query' },
  { label: 'Completed', value: 'completed' },
  { label: 'Sent to Bank', value: 'sentToBank' },
];

export const appoinmentStatusList = [
  { label: 'Visited', value: 'visited' },
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

export const addBulkCsvHeaders = [
  { key: 'srNo', label: 'Sr. No' },
  { key: 'name', label: "Applicant's Name" },
  { key: 'mobile', label: 'Mobile' },
  { key: 'loanAmount', label: 'Loan Amt. (Lakhs)' },
  { key: 'referenceId', label: 'Reference ID' },
  { key: 'localOrOGL', label: 'Type' },
  { key: 'address', label: 'Address' },
  { key: 'city', label: 'City' },
  { key: 'branch', label: 'Branch' },
  { key: 'type', label: 'Case Type' },
  { key: 'bankName', label: 'Bank Name' },
  { key: 'receivedDate', label: 'Received Date' },
];

export const exportHeaders = [
  { label: 'Bank Name', key: 'bankName' },
  { label: 'Reference ID', key: 'referenceId' },
  { label: 'Received Date', key: 'receivedDate' },
  { label: "Applicant's Name", key: 'name' },
  { label: 'Mobile', key: 'mobile' },
  { label: 'Address', key: 'address' },
  { label: 'City', key: 'city' },
  { label: 'Branch', key: 'branch' },
  { label: 'Loan Amt (Lakhs)', key: 'loanAmount' },
  { label: 'Type', key: 'localOrOGL' },
  { label: 'Case Type', key: 'type' },
  { label: 'Case Status', key: 'status' },
  { label: 'Appointment Status', key: 'appoinmentStatus' },
  { label: 'Remark', key: 'remark' },
  { label: 'Assigned to', key: 'assignTo' },
  { label: 'Reviewer', key: 'reviewer' },
];
