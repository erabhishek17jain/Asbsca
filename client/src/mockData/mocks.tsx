import Logo from '../assets/images/logo/logo-dark.png';

export const bulkUploadTableColumn = [
  {
    referenceId: 'AXIS2348',
    bankIcon: Logo,
    bankName: 'AXIS Bank',
    appicantName: 'Aman Jain',
    mobileNo: '9876543210',
    address: 'vijay nagar',
    city: 'Indore',
    loanAmt: 40,
    branch: 'Indore',
    locType: 'Local', // Local, OGL
    caseType: 'LIP', // PD, LIP
    recievedDate: '16/10/2023 10:54 am',
  },
  {
    referenceId: 'ICICI2348',
    bankIcon: Logo,
    bankName: 'ICICI Bank',
    appicantName: 'Aayush Jain',
    mobileNo: '9876543210',
    address: 'vijay nagar',
    city: 'Indore',
    loanAmt: 40,
    branch: 'Indore',
    locType: 'Local', // Local, OGL
    caseType: 'LIP', // PD, LIP
    recievedDate: '16/10/2023 10:54 am',
  },
];

export const casesData = [
  {
    referenceId: 'AXIS2348',
    bankIcon: Logo,
    bankName: 'Axis Bank',
    appicantName: 'Aayush Jain',
    mobileNo: '8817378978',
    address: 'vijay nagar',
    city: 'Mumbai',
    loanAmt: 50,
    branch: 'Indore',
    locType: 'Local', // Local, OGL
    caseType: 'PD', // PD, LIP
    caseStatus: 'Unassigned', // Unassigned, Assigned, Completed, Reviewing, Query, Sent to Bank
    appStatus: 'Not received', // Scheduled, Not yet scheduled, Not received, Not Responding, Visited
    assignedTo: 'Arjun Singh',
    reviewer: 'Seemit Jain',
    recievedDate: '16/10/2023 10:54 am',
    startedDate: '16/10/2023 10:54 am',
    completedDate: '16/10/2023 10:54 am',
    remark: '',
  },
  {
    referenceId: 'AXIS2348',
    bankIcon: Logo,
    bankName: 'HDFC Bank',
    appicantName: 'Abhishek Jain',
    mobileNo: '9770080125',
    address: 'vijay nagar',
    city: 'Sagar',
    loanAmt: 25,
    branch: 'Indore',
    locType: 'OGL', // Local, OGL
    caseType: 'PD', // PD, LIP
    caseStatus: 'Assigned', // Unassigned, Assigned, Completed, Reviewing, Query, Sent to Bank
    appStatus: 'Not yet scheduled', // Scheduled, Not yet scheduled, Not received, Not Responding, Visited
    assignedTo: 'Arjun Singh',
    reviewer: 'Seemit Jain',
    recievedDate: '16/10/2023 10:54 am',
    startedDate: '16/10/2023 10:54 am',
    completedDate: '16/10/2023 10:54 am',
    remark: '',
  },
  {
    referenceId: 'AXIS2348',
    bankIcon: Logo,
    bankName: 'ICICI Bank',
    appicantName: 'Aman Jain',
    mobileNo: '9876543210',
    address: 'vijay nagar',
    city: 'Indore',
    loanAmt: 40,
    branch: 'Indore',
    locType: 'Local', // Local, OGL
    caseType: 'LIP', // PD, LIP
    caseStatus: 'Sent to Bank', // Unassigned, Assigned, Completed, Reviewing, Query, Sent to Bank
    appStatus: 'Visited', // Scheduled, Not yet scheduled, Not received, Not Responding, Visited
    assignedTo: 'Sunita Devi',
    reviewer: 'Seemit Jain',
    recievedDate: '16/10/2023 10:54 am',
    startedDate: '16/10/2023 10:54 am',
    completedDate: '16/10/2023 10:54 am',
    remark: '',
  },
];

// sorted by last created/updated date
export const casesAnalyticsData = {
  allcases: [...casesData],
  assigned: [...casesData],
  reviewed: [...casesData],
  sentToBank: [...casesData],
} as any;

// list of top 5 users who complete min 5 task in current month
export const topPerformerData = [
  {
    fullName: 'Seemit Jain',
    lastReportTime: '1 hr 30 mins', // diff between start & end time of last report
    lastMonthReportCount: 20, // count of completed cases in current month
  },
  {
    fullName: 'Abhishek Jain',
    lastReportTime: '1 hr 52 mins', 
    lastMonthReportCount: 15, 
  },
];

export const usersData = [
  {
    username: 'SEEM0101',
    password: 'admin@123',
    email: 'seemit@gmail.com',
    fullName: 'Seemit Jain',
    role: 'admin',
    mobile: 9770080418,
    address: 'Mumbai',
    status: 'active',
    profile: '',
    about: 'Seemit is a consistent reporter',
    completedPD: 25,
    assignedPD: 5,
    accuracy: '91%',
  },
  {
    username: 'ABHI0101',
    password: 'admin@123',
    email: 'abhishek@gmail.com',
    fullName: 'Abhishek Jain',
    role: 'admin',
    mobile: 7047026537,
    address: 'Indore',
    status: 'inactive',
    profile: '',
    about: 'Abhishek is a consistent reporter',
    completedPD: 20,
    assignedPD: 4,
    accuracy: '80%',
  },
  {
    username: 'SEEM0101',
    password: 'admin@123',
    email: 'seemit@gmail.com',
    fullName: 'Seemit Jain',
    role: 'admin',
    mobile: 9770080418,
    address: 'Mumbai',
    status: 'active',
    profile: '',
    about: 'Seemit is a consistent reporter',
    completedPD: 25,
    assignedPD: 5,
    accuracy: '91%',
  },
  {
    username: 'ABHI0101',
    password: 'admin@123',
    email: 'abhishek@gmail.com',
    fullName: 'Abhishek Jain',
    role: 'admin',
    mobile: 7047026537,
    address: 'Indore',
    status: 'inactive',
    profile: '',
    about: 'Abhishek is a consistent reporter',
    completedPD: 20,
    assignedPD: 4,
    accuracy: '80%',
  },
  {
    username: 'SEEM0101',
    password: 'admin@123',
    email: 'seemit@gmail.com',
    fullName: 'Seemit Jain',
    role: 'admin',
    mobile: 9770080418,
    address: 'Mumbai',
    status: 'active',
    profile: '',
    about: 'Seemit is a consistent reporter',
    completedPD: 25,
    assignedPD: 5,
    accuracy: '91%',
  },
  {
    username: 'ABHI0101',
    password: 'admin@123',
    email: 'abhishek@gmail.com',
    fullName: 'Abhishek Jain',
    role: 'admin',
    mobile: 7047026537,
    address: 'Indore',
    status: 'inactive',
    profile: '',
    about: 'Abhishek is a consistent reporter',
    completedPD: 20,
    assignedPD: 4,
    accuracy: '80%',
  },
  {
    username: 'SEEM0101',
    password: 'admin@123',
    email: 'seemit@gmail.com',
    fullName: 'Seemit Jain',
    role: 'admin',
    mobile: 9770080418,
    address: 'Mumbai',
    status: 'active',
    profile: '',
    about: 'Seemit is a consistent reporter',
    completedPD: 25,
    assignedPD: 5,
    accuracy: '91%',
  },
  {
    username: 'ABHI0101',
    password: 'admin@123',
    email: 'abhishek@gmail.com',
    fullName: 'Abhishek Jain',
    role: 'admin',
    mobile: 7047026537,
    address: 'Indore',
    status: 'inactive',
    profile: '',
    about: 'Abhishek is a consistent reporter',
    completedPD: 20,
    assignedPD: 4,
    accuracy: '80%',
  },
  {
    username: 'SEEM0101',
    password: 'admin@123',
    email: 'seemit@gmail.com',
    fullName: 'Seemit Jain',
    role: 'admin',
    mobile: 9770080418,
    address: 'Mumbai',
    status: 'active',
    profile: '',
    about: 'Seemit is a consistent reporter',
    completedPD: 25,
    assignedPD: 5,
    accuracy: '91%',
  },
  {
    username: 'ABHI0101',
    password: 'admin@123',
    email: 'abhishek@gmail.com',
    fullName: 'Abhishek Jain',
    role: 'admin',
    mobile: 7047026537,
    address: 'Indore',
    status: 'inactive',
    profile: '',
    about: 'Abhishek is a consistent reporter',
    completedPD: 20,
    assignedPD: 4,
    accuracy: '80%',
  },
  {
    username: 'SEEM0101',
    password: 'admin@123',
    email: 'seemit@gmail.com',
    fullName: 'Seemit Jain',
    role: 'admin',
    mobile: 9770080418,
    address: 'Mumbai',
    status: 'active',
    profile: '',
    about: 'Seemit is a consistent reporter',
    completedPD: 25,
    assignedPD: 5,
    accuracy: '91%',
  },
  {
    username: 'ABHI0101',
    password: 'admin@123',
    email: 'abhishek@gmail.com',
    fullName: 'Abhishek Jain',
    role: 'admin',
    mobile: 7047026537,
    address: 'Indore',
    status: 'inactive',
    profile: '',
    about: 'Abhishek is a consistent reporter',
    completedPD: 20,
    assignedPD: 4,
    accuracy: '80%',
  },
  {
    username: 'SEEM0101',
    password: 'admin@123',
    email: 'seemit@gmail.com',
    fullName: 'Seemit Jain',
    role: 'admin',
    mobile: 9770080418,
    address: 'Mumbai',
    status: 'active',
    profile: '',
    about: 'Seemit is a consistent reporter',
    completedPD: 25,
    assignedPD: 5,
    accuracy: '91%',
  },
  {
    username: 'ABHI0101',
    password: 'admin@123',
    email: 'abhishek@gmail.com',
    fullName: 'Abhishek Jain',
    role: 'admin',
    mobile: 7047026537,
    address: 'Indore',
    status: 'inactive',
    profile: '',
    about: 'Abhishek is a consistent reporter',
    completedPD: 20,
    assignedPD: 4,
    accuracy: '80%',
  },
  {
    username: 'SEEM0101',
    password: 'admin@123',
    email: 'seemit@gmail.com',
    fullName: 'Seemit Jain',
    role: 'admin',
    mobile: 9770080418,
    address: 'Mumbai',
    status: 'active',
    profile: '',
    about: 'Seemit is a consistent reporter',
    completedPD: 25,
    assignedPD: 5,
    accuracy: '91%',
  },
  {
    username: 'ABHI0101',
    password: 'admin@123',
    email: 'abhishek@gmail.com',
    fullName: 'Abhishek Jain',
    role: 'admin',
    mobile: 7047026537,
    address: 'Indore',
    status: 'inactive',
    profile: '',
    about: 'Abhishek is a consistent reporter',
    completedPD: 20,
    assignedPD: 4,
    accuracy: '80%',
  },
];

// get user details to make call to get user details in with below data
export const userData = {
  username: 'ABHI0101',
  password: 'admin@123',
  email: 'abhishek@gmail.com',
  fullName: 'Abhishek Jain',
  role: 'admin',
  mobile: 7047026537,
  address: 'Indore',
  status: 'active',
  profile: '',
  about: 'Abhishek is a consistent reporter',
  completedPD: 20,
  assignedPD: 4,
  accuracy: '80%',
} as any;

export const clientData = [
  {
    clientName: 'Axis Bank',
    logo: Logo,
    branch: 'Indore',
    status: 'active', // active, inactive
  },
  {
    clientName: 'ICICI Bank',
    logo: Logo,
    branch: 'Mumbai',
    status: 'inactive', // active, inactive
  },
];

export const productData = [
  {
    clientName: 'Axis Bank',
    logo: Logo,
    productName: 'Product 1',
    status: 'active', // active, inactive
  },
  {
    clientName: 'ICICI Bank',
    logo: Logo,
    productName: 'Product 2',
    status: 'inactive', // active, inactive
  },
];

export const branchData = [
  {
    branchName: 'Indore',
    status: 'active', // active, inactive
  },
  {
    branchName: 'Mumbai',
    status: 'inactive', // active, inactive
  },
];