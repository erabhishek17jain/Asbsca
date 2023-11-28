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
    appoinmentStatus: 'Not received', // Scheduled, Not yet scheduled, Not received, Not Responding, Visited
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
    appoinmentStatus: 'Not yet scheduled', // Scheduled, Not yet scheduled, Not received, Not Responding, Visited
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
    appoinmentStatus: 'Visited', // Scheduled, Not yet scheduled, Not received, Not Responding, Visited
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
    role: 'Admin',
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
    role: 'Admin',
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
    role: 'Admin',
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
    role: 'Admin',
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
    role: 'Admin',
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
    role: 'Admin',
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
    role: 'Admin',
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
    role: 'Admin',
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
    role: 'Admin',
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
    role: 'Admin',
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
    role: 'Admin',
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
    role: 'Admin',
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
    role: 'Admin',
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
    role: 'Admin',
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
    role: 'Admin',
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
    role: 'Admin',
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
  role: 'Admin',
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

export const payload = {
  caseId: '656380f829a29b03abbaa394',
  data: {
    loanDetails: {
      loan: 'homeloan',
      loanType: 'fresh',
      bankName: '655cc8399a598b90846974a8',
    },
    personalDetails: {
      applicants: [
        {
          title: 'Applicant Info',
          name: 'Palash Jain',
          dobDoi: '1995-08-28',
          qualification: 'graduate',
          natureOfBusiness: 'professional',
          birthYear: 1995,
          age: 28,
          studyFinish: 2017,
          study: 6,
          businessStart: 2018,
          currExp: 5,
          pastExp: 1,
          overallExp: 6,
        },
      ],
      residents: [
        {
          title: 'Residance Info',
          resiAddress: '167, dayand Ward, Palasiya Indore',
          resiStatus: 'ownedByApplicantp',
          resiType: 'p',
          resiSince: 2014,
          buildArea: 2100,
          carpetArea: 1400,
          purchaseYear: 2012,
          agrimentValue: 50,
          purchaseValue: 60,
          marketValue: 70,
          rentPm: '',
        },
      ],
      familyDetails: [
        {
          name: 'Palash Jain',
          relation: 'spouse',
          earningStatus: 'earning',
        },
      ],
    },
    existingLoan: {
      existanceLoan: {
        isExistanceLoan: 'yes',
        balanceTransfer: [
          {
            title: 'Balance Transfer',
            typeOfLoan: 'homeLoan',
            bankName: 'axisBank',
            loanAmount: 50,
            tenureMonth: 120,
            emi: 35000,
            outstanding: '270000',
            remark: 'takenToBuyTheProperty',
          },
        ],
        totalLoanBt: '',
        totalLoanBtEmi: '',
        totalLoanBtOut: '',
        existingLoanClosedThisYear: [
          {
            title: 'Existing Loan Closed',
            typeOfLoan: 'homeLoan',
            bankName: 'bandhanBank',
            loanAmount: 30,
            tenureMonth: 60,
            emi: 28000,
            outstanding: '1200000',
            remark: 'takenForPersonalReason',
          },
        ],
        totalLoanEc: '',
        totalLoanEcEmi: '',
        totalLoanEcOut: '',
        existingLoanEMI: [],
        totalLoanEm: '',
        totalLoanEmEmi: '',
        totalLoanEmOut: '',
      },
      creditFacility: {
        isCreditFacility: 'yes',
        creditDetails: [
          {
            title: 'Credit Facility',
            typeOfFacility: 'cashCredit',
            bankName: 'bankOfIndia',
            limit: 6,
            averageUtilization: '1.2',
            emi: 30000,
            interestRate: 16,
            remark: 'takenToBuyuMachines',
          },
        ],
        totalLoanCf: '',
        totalLoanCfLimit: '',
        totalLoanCfAu: '',
      },
      otherCommitments: {
        isOtherCommitmemts: 'yes',
        commitmentsDetails: [
          {
            title: 'Other Commitment',
            particulars: 'termPlan',
            contribution: 0.17,
            sumAssured: 100,
          },
        ],
        totalCon: '',
        totalSum: '',
      },
    },
    detailsOfProp: {
      purchaseYear: 'lastYear',
      buildUpArea: 1500,
      caretArea: 100,
      occupiedBy: 'applicant',
      loanPropertyAddress: '167, Goregaon Mumbai',
      builderName: 'Ramesh Sharma',
      propertyLoanDetails: {
        isLoanProvided: '',
        loanDetails: [
          {
            amount: 60,
            emi: 10,
            roi: 8,
            year: 20,
          },
        ],
        propertyValue: {
          agreementValue: 60,
          purchaseValue: 70,
          marketValue: 80,
          ocrPaid: 10,
          pOrb: 'P',
          balanceOcr: '60',
          sourceOcr: 'savingsInBank',
        },
        loanAsPerForm: '50',
      },
    },
    businessDetails: {
      bussinessName: 'Home',
      typeOfEntity: 'partnership',
      yearOfIncorporation: 2021,
      generation: 'secondGeneration',
      gstNumber: 'ABCD0102DEF',
      regOfficeAddress: '167 Dayanand ward',
      visitedAddress: 'D-54 Rail vihar sector 23',
      vicinity: 'residentalNotEasilyAccessible',
      ownershipOfAddressVisited: 'ownedByCoApplicantp',
      pdConductWith: 'Palash Jain',
      designation: 'partner',
      mobile: 8902653746,
      familyBusiness: 2,
      mainUseproducts: 'Entertainment',
      howTurnoverVerified:
        'turnoverIsNotVerifiedButFewSampleInvoicesWereObserved',
      citiesOfReppresentation: 'mumbai&NaviMumbai&Palghar',
      competitorsOfBusiness: 'Events',
      noOfVisit: 1,
      doYouHavefixedEmployee: 'yes',
      empSpecified: 23,
      empSeen: 10,
      shareHoldings: [
        {
          ownerName: 'Palash Jain',
          shareHolding: '100',
        },
      ],
      totalHolding: '',
    },
    financials: {
      entityName: 'Abhishek Jain Sagar',
      applicantIncome: 'Applicant&CoApplicant',
      income: {
        turnoverGrossReciepts: {
          amountPA: 200,
          amountPM: '16.67',
          months: 12,
        },
        purchases: {
          amountPA: 45,
          amountPM: '3.75',
          months: 12,
        },
        totalAmountPA: 155,
        totalAmountPM: '78%',
      },
      expenses: {
        salary: {
          amountPA: 11,
          amountPM: '0.92',
          months: 12,
        },
        maintanance: {
          amountPA: 11,
          amountPM: '0.92',
          months: 12,
        },
        transport: {
          amountPA: 11,
          amountPM: '0.92',
          months: 12,
        },
        electricity: {
          amountPA: 11,
          amountPM: '0.92',
          months: 12,
        },
        travelling: {
          amountPA: 11,
          amountPM: '0.92',
          months: 12,
        },
        fuel: {
          amountPA: 11,
          amountPM: '0.92',
          months: 12,
        },
        officeRent: {
          amountPA: 11,
          amountPM: '0.92',
          months: 12,
        },
        partnersSalary: {
          amountPA: 11,
          amountPM: '0.92',
          months: 12,
        },
        partnersRemuneration: {
          amountPA: 11,
          amountPM: '0.92',
          months: 12,
        },
        otherExpenses: {
          amountPA: 11,
          amountPM: '0.92',
          months: 12,
        },
        bifercationOfExpenses: {
          amountPA: 11,
          amountPM: '0.92',
          months: 12,
        },
        totalExpensePA: 121,
        totalExpensePM: 121,
        netProfitPA: 34,
        netProfitPM: '17%',
        shareOfProfitPA: 34,
        shareOfProfitPM: '100%',
      },
      businessIncome: {
        salaryFromBusiness: {
          amountPA: 11,
          amountPM: '0.92',
          months: 12,
        },
        remunerationFromBusiness: {
          amountPA: 11,
          amountPM: '0.92',
          months: 12,
        },
        rent: {
          amountPA: 11,
          amountPM: '0.92',
          months: 12,
        },
        totalIncomePA: 67,
        totalEarning: 67,
      },
    },
    comitmentSummary: {
      proposedEMI: {
        amountPA: '5.02',
        amountPM: 41822,
      },
      existingEMI: {
        amountPA: 0.00144,
        amountPM: 12,
      },
      btEMI: {
        amountPA: 0.00132,
        amountPM: 11,
      },
      closureEMI: {
        amountPA: 0.00144,
        amountPM: 12,
      },
      licMedSipTpOther: {
        amountPA: 0.00156,
        amountPM: 13,
      },
      houseRent: {
        amountPA: 0.00144,
        amountPM: 12,
      },
      totalCommitments: {
        amountPA: '5.02',
        amountPM: 41822,
      },
      totalPresentEMI: {
        amountPA: 0.00168,
        amountPM: 14,
      },
      existingCommitments: {
        amountPA: '5.02',
        amountPM: 41822,
      },
      onlyEMIRatio: '6691.52 (5.02 Lakhs/75 Lakhs)',
      foirRatio: '6691.52 (5.02 Lakhs/75 Lakhs)',
      totalCommitmentsRatio: '6691.52 (5.02 Lakhs/75 Lakhs)',
      'existingEMI?': {
        amountPA: 1,
      },
    },
    turnoverDetails: {
      aprilTillDate: {
        idealAprilTillDate: {
          turnover: 205,
          netProfit: 80,
        },
        aprilTillDate: {
          turnover: 190,
          netProfit: 82,
        },
        reasonforDiff: 'Difference reason',
      },
      lastYears: {
        firstLastYear: 180,
        secondLastYear: 170,
        changes: '10 Lakhs',
        reasonforDiff: 'No reason',
      },
      currentYearActual: {
        actuals: {
          turnover: 200,
          netProfit: 100,
          profitPercentage: 50,
        },
        asPerFinancials: {
          turnover: 160,
          netProfit: 120,
          profitPercentage: 75,
        },
        financialActualRatio: '12',
      },
      currentLastYearComparision: {
        firstLastYear: 120,
        secondLastYear: 130,
        changes: '10',
        reasonforDiff: 'No reason',
      },
      bussinessTrendLast2Year: 'cannotCommentAsDataWasNotProvided',
      futureProjection: 'applicantWillContinueBusinessAsIt',
    },
    clientDebtors: {
      clients: {
        isClientDetails: '',
        clientDetails: {
          noOfClientDaily: 4,
          majorClient: [
            {
              clientName: 'Abhishek Jain',
              contact: '8097654357',
            },
          ],
        },
      },
      debitors: {
        isDebitorDetails: '',
        debitorDetails: {
          moreThan6Month: {
            amount: 20,
            reason: 'Trusted customer',
          },
          lessThan6Month: {
            amount: 12,
            collectionPeriod: '',
          },
          totalDebtors: '',
          creditPeriodAllowed: 5,
          whyIrRegular: 'Due to corona & stock shortage',
        },
      },
    },
    stocks: {
      isStockDetails: '',
      stockDetails: {
        rawMaterialAmount: 20,
        wipAmount: 30,
        finishGoods: 34,
        whyStocklowHigh: 'Calculative',
        totalStocks: '',
        stockHoldingPeriod: '',
      },
    },
    suppliers: {
      isSuppliersDetails: 'yes',
      suppliersDetails: {
        noOfSuppliers: 6,
        majorSuppliers: [
          {
            clientName: 'Aadarsh Jain',
            contact: '9089765437',
          },
        ],
      },
      creditors: {
        amount: 35,
        collectionPeriod: '8.4 Months',
      },
      creitPeriodAllowed: 6,
      whyCreditorHighThanCredit: 'Due to some surcumstnces',
    },
    assets: {
      isBussinessAssets: '',
      bussinessAssetDetails: {
        bussinessAssets: [
          {
            title: 'Business Asset',
            particulars: 'residence',
            location: 'Mumbai',
            purchaseYear: 2020,
            carpetArea: 2000,
            status: 'ownedByCoApplicant',
            marketValue: 50,
            rentPM: 20000,
          },
        ],
        totalMarketValue: '',
        totalRentPM: '',
      },
      isPersonalAssets: '',
      personalAssetDetails: {
        personalAssets: [
          {
            title: 'Personal Asset',
            particulars: 'banglow',
            location: 'Navi Mumbai',
            purchaseYear: 2021,
            carpetArea: 7500,
            status: 'jointlyOwnedByApplicant&CoApplicant',
            marketValue: 120,
            rentPM: 35000,
          },
        ],
        totalMarketValue: '',
        totalRentPM: '',
      },
      isInvestments: '',
      investmentDetails: {
        investments: [
          {
            title: 'Investment',
            particulars: 'bond',
            contribution: 50,
            marketValue: 70,
          },
        ],
        totalContribution: '',
        totalMarketValue: '',
      },
      isBankAccount: '',
      bankAccountDetails: {
        bankAccounts: [
          {
            title: 'Bank Account',
            bankName: 'auSmallBank',
            branch: 'Vasai',
            type: 'ca',
            balanceOnDay: 2.34,
          },
        ],
        totalBalance: '',
      },
      totalBalance: '',
    },
    observations: {
      businessPlateName: {
        exist: 'yes',
        reasonForNo: '-',
      },
      activity: {
        exist: 'no',
        reasonForNo: '0',
      },
      customer: {
        exist: 'yes',
        reasonForNo: '5',
      },
      stock: {
        exist: 'yes',
        reasonForNo: '-',
      },
      thirdPartyCheck: {
        exist: 'notDone',
        reasonForNo: 'Not Avaliable',
      },
      screenshotOfCCTV: {
        exist: 'yes',
        reasonForNo: '-',
      },
      behaviourOfApplicant: 'Good',
      duringVist: {
        applicantDoing: 'withClient',
        employeesDoing: 'workOnMachine',
        otherObservation: 'Excilent',
      },
      'customer?': {
        reasonForNo: '3',
      },
    },
    documentsSeen: {
      documentHandyDuringPD: 'no',
      documentProvidedToBank: 'no',
      gstReturns: 'no',
      gstRegistrationCertificate: 'no',
      currentYearFinancialStatement: 'yes',
      lastYearFinancialStatement: 'yes',
      secondLastYearFinancialStatement: 'no',
      salesBills: 'yes',
      purchaseBils: 'no',
      currentYearITR: 'no',
      lastYearITR: 'yes',
      secondLastYearITR: 'no',
      udhyamAadhar: 'yes',
      vechicleRegistration: 'no',
      gumasta: 'yes',
      rcBook: 'no',
      salarySlip: 'no',
      provisionalFinancialLastYear: 'yes',
      financialsInTally: 'no',
    },
  },
};
