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

export const casesTableColumn = [
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
    appointmentStatus: 'Not received', // Scheduled, Not yet scheduled, Not received, Not Responding, Visited
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
    appointmentStatus: 'Not yet scheduled', // Scheduled, Not yet scheduled, Not received, Not Responding, Visited
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
    appointmentStatus: 'Visited', // Scheduled, Not yet scheduled, Not received, Not Responding, Visited
    assignedTo: 'Sunita Devi',
    reviewer: 'Seemit Jain',
    recievedDate: '16/10/2023 10:54 am',
    startedDate: '16/10/2023 10:54 am',
    completedDate: '16/10/2023 10:54 am',
    remark: '',
  },
];

export const usersTableColumn = [
  {
    profile: Logo,
    name: 'Arjun Singh',
    empId: 'ASBS001',
    email: 'arjun@gmail.com',
    mobileNo: '+91 7047026537',
    role: 'Supervisor',
    status: 'Active',
  },
  {
    profile: Logo,
    name: 'Aman Jain',
    empId: 'ASBS002',
    email: 'amanjain@gmail.com',
    mobileNo: '+91 7047026537',
    role: 'Coordinator',
    status: 'Inactive',
  },
];

export const clientTableColumn = [
  {
    clientName: 'Axis Bank',
    logo: Logo,
    branch: 'Indore',
    status: 'Active', // Active, Inactive
  },
  {
    clientName: 'ICICI Bank',
    logo: Logo,
    branch: 'Mumbai',
    status: 'Inactive', // Active, Inactive
  },
];

export const productTableColumn = [
  {
    clientName: 'Axis Bank',
    productName: 'Product 1',
    status: 'Active', // Active, Inactive
  },
  {
    clientName: 'ICICI Bank',
    productName: 'Product 2',
    status: 'Inactive', // Active, Inactive
  },
];

export const branchTableColumn = [
  {
    branchName: 'Indore',
    status: 'Active', // Active, Inactive
  },
  {
    branchName: 'Mumbai',
    status: 'Inactive', // Active, Inactive
  },
];