export const reportDataMock: any = {
  loanDetails: {
    alc: 'Badlapur ALC',
    loan: 'Home Loan',
    loanType: 'Fresh',
    bankName: 'Axis Bank',
  },
  pdDetails: {
    location: 'Sagar',
    reporterName: 'Prabhat Ranjan',
    reporterContact: 7061644186,
    pdVisitDate: '04-12-2023',
    pdConductTime: '01:12',
    reviewerName: 'Abhishek Jain',
    reviewerContact: 7061644186,
    reportTat: '05-12-2023 01:12',
    reportSentDate: '05-12-2023',
  },
  personalDetails: {
    applicants: [
      {
        title: 'Applicant Info',
        name: 'Palash Jain',
        dobDoi: '81995-08-20',
        qualification: 'Post Graduate',
        natureOfBusiness: 'Professional',
        birthYear: 8199,
        age: -6176,
        studyFinish: 2017,
        study: 6,
        businessStart: 2018,
        currExp: 5,
        pastExp: 1,
        overallExp: 6,
      },
      {
        title: 'Co-Applicant',
        name: 'Aadarsh Jain',
        dobDoi: '1990-01-26',
        qualification: 'Graduate',
        natureOfBusiness: 'Salaried',
        birthYear: 1990,
        age: 33,
        studyFinish: 2009,
        study: 14,
        businessStart: 2019,
        currExp: 4,
        pastExp: 10,
        overallExp: 14,
      },
    ],
    residents: [
      {
        title: 'Residance Info',
        resiAddress: '111, Rail Vihar Sector 23 Noida',
        resiStatus: 'Owned by ApplicantP',
        resiType: 'P',
        resiSince: 2010,
        buildArea: 4200,
        carpetArea: 2100,
        purchaseYear: 2008,
        agrimentValue: 120,
        purchaseValue: 120,
        marketValue: 150,
        rentPm: '',
      },
      {
        title: 'Residance Address',
        resiAddress: '121, New Railway Road Gurgaon',
        resiStatus: 'RentalN',
        resiType: 'N',
        resiSince: 2018,
        buildArea: 1500,
        carpetArea: 1100,
        purchaseYear: '',
        agrimentValue: '',
        purchaseValue: '',
        marketValue: '',
        rentPm: 0.22,
      },
    ],
    familyDetails: [
      {
        name: 'Aadarsh Jain',
        relation: 'Brother',
        earningStatus: 'Earning',
      },
    ],
  },
  existingLoan: {
    existanceLoan: {
      isExistanceLoan: 'Yes',
      balanceTransfer: [
        {
          title: 'Balance Transfer',
          typeOfLoan: 'Home Loan',
          bankName: 'Bandhan Bank',
          loanAmount: 120,
          tenureMonth: 240,
          emi: 0.325,
          outstanding: 89,
          remark: 'Taken to buy the property',
        },
      ],
      totalLoanBt: '120.00',
      totalLoanBtEmi: '0.33',
      totalLoanBtOut: '89.00',
      existingLoanClosed: [
        {
          title: 'Existing Loan Closed',
          typeOfLoan: 'Personal Loan',
          bankName: 'Canera Bank',
          loanAmount: 50,
          tenureMonth: 120,
          emi: 0.415,
          outstanding: 31,
          remark: 'Taken for personal reason',
        },
      ],
      totalLoanEc: '50.00',
      totalLoanEcEmi: '0.41',
      totalLoanEcOut: '31.00',
      existingLoanEMI: [
        {
          title: 'Existing Loan EMI',
          typeOfLoan: 'Vehicle Loan',
          bankName: 'HDFC Bank',
          loanAmount: 25,
          tenureMonth: 60,
          emi: 0.27,
          outstanding: 16,
          remark: 'Taken to buy vehicle',
        },
      ],
      totalLoanEm: '25.00',
      totalLoanEmEmi: '0.27',
      totalLoanEmOut: '16.00',
    },
    creditFacility: {
      isCreditFacility: 'Yes',
      creditDetails: [
        {
          title: 'Credit Facility',
          typeOfFacility: 'Credit Card',
          bankName: 'Federal Bank',
          limit: 10,
          averageUtilization: 4.5,
          interestRate: 16,
          remark: 'Taken for Renovation work',
        },
      ],
      totalLoanCfLimit: '10.00',
      totalLoanCfAu: '4.50',
    },
    otherCommitments: {
      isOtherCommitmemts: 'Yes',
      commitmentsDetails: [
        {
          title: 'Other Commitment',
          particulars: 'Term Plan',
          contribution: 0.275,
          sumAssured: 10000000,
        },
      ],
      totalCon: '0.28',
      totalSum: 10000000,
    },
  },
  detailsOfProp: {
    purchaseYear: '2022',
    buildUpArea: 2022,
    caretArea: 3950,
    occupiedBy: 'Under Construction',
    loanPropertyAddress: '167, Dayanand Ward, Sector 15 Noida',
    builderName: 'Rakesh Sharma',
    propertyLoanDetails: {
      isLoanProvided: '',
      loanDetails: {
        amount: 130,
        emi: 108737.21,
        roi: 8,
        year: 20,
      },
      propertyValue: {
        agreementValue: 150,
        purchaseValue: 150,
        marketValue: 180,
        ocrPaid: 5,
        pOrb: 'P',
        balanceOcr: 15,
        sourceOcr: 'Savings in form of Investments',
      },
      loanAsPerForm: '130',
    },
  },
  businessDetails: {
    bussinessName: 'The design Gesture',
    typeOfEntity: 'Partnership',
    yearOfIncorporation: 2018,
    generation: 'Second Generation',
    gstNumber: '21ABCDE1234A1Z1',
    regOfficeAddress: '1/91 Padmawati Coloni, Indore',
    visitedAddress: '1/91 Padmawati Coloni, Indore',
    vicinity: 'Commercial (Easily Accesible)',
    ownership: 'Self-Owned (Parental)P',
    pdConductWith: 'Palash Jain',
    designation: 'Partner',
    mobile: 8817374110,
    familyBusiness: 2,
    mainUseproducts: 'Building House & Interiors',
    howTurnoverVerified: 'Turnover is verified with Provisional hisab book',
    citiesOfReppresentation: 'Mumbai',
    competitorsOfBusiness: 'Design Patterns, Home maker',
    noOfVisit: 1,
    doYouHavefixedEmployee: 'Yes',
    empSpecified: 25,
    empSeen: 12,
    shareHoldings: [
      {
        ownerName: 'Palash Jain',
        shareHolding: 60,
      },
      {
        ownerName: 'Aadarsh Jain',
        shareHolding: 40,
      },
    ],
    totalHolding: 100,
  },
  financials: {
    totalEarning: 225,
    finances: [
      {
        title: 'Financial Details',
        entityName: 'The Design Gesture',
        applicantIncome: 'Applicant',
        income: {
          turnoverGrossReciepts: {
            amountPA: 250,
            amountPM: '20.83',
            months: 12,
          },
          purchases: {
            amountPA: 70,
            amountPM: '5.83',
            months: 12,
          },
          grossProfit: 180,
          grossProfitPer: '72',
        },
        expenses: {
          salary: {
            amountPA: 12,
            amountPM: '1.00',
            months: 12,
          },
          maintanance: {
            amountPA: 4,
            amountPM: '0.33',
            months: 12,
          },
          transport: {
            amountPA: 5,
            amountPM: '0.42',
            months: 12,
          },
          electricity: {
            amountPA: 7,
            amountPM: '0.58',
            months: 12,
          },
          travelling: {
            amountPA: 3,
            amountPM: '0.25',
            months: 12,
          },
          fuel: {
            amountPA: 9,
            amountPM: '0.75',
            months: 12,
          },
          officeRent: {
            amountPA: 2.5,
            amountPM: '0.21',
            months: 12,
          },
          partnersSalary: {
            amountPA: 5,
            amountPM: '0.42',
            months: 12,
          },
          partnersRemuneration: {
            amountPA: 4,
            amountPM: '0.33',
            months: 12,
          },
          otherExpenses: {
            amountPA: 6.5,
            amountPM: '0.54',
            months: 12,
          },
          bifercationOfExpenses: {
            amountPA: 2,
            amountPM: '0.17',
            months: 12,
          },
          totalExpensePA: '60.0',
          totalExpensePM: '60.0',
          netProfitPA: 120,
          netProfitPM: '48',
          shareOfProfitPA: 120,
          shareOfProfitPM: 100,
        },
        businessIncome: {
          salaryFromBusiness: {
            amountPA: 5,
            amountPM: '0.42',
            months: 12,
          },
          remunerationFromBusiness: {
            amountPA: 10,
            amountPM: '0.83',
            months: 12,
          },
          rent: {
            amountPA: 5,
            amountPM: '0.42',
            months: 12,
          },
          totalIncomePA: 140,
          totalEarning: 140,
        },
      },
      {
        title: 'Co-Applicant',
        entityName: 'The Design Gesture',
        applicantIncome: 'Co-Applicant 1',
        income: {
          turnoverGrossReciepts: {
            amountPA: 180,
            amountPM: '15.00',
            months: 12,
          },
          purchases: {
            amountPA: 80,
            amountPM: '6.67',
            months: 12,
          },
          grossProfit: 100,
          grossProfitPer: '56',
        },
        expenses: {
          salary: {
            amountPA: 2,
            amountPM: '0.17',
            months: 12,
          },
          maintanance: {
            amountPA: 4,
            amountPM: '0.33',
            months: 12,
          },
          transport: {
            amountPA: 3,
            amountPM: '0.25',
            months: 12,
          },
          electricity: {
            amountPA: 8,
            amountPM: '0.67',
            months: 12,
          },
          travelling: {
            amountPA: 3,
            amountPM: '0.25',
            months: 12,
          },
          fuel: {
            amountPA: 4,
            amountPM: '0.33',
            months: 12,
          },
          officeRent: {
            amountPA: 1.5,
            amountPM: '0.13',
            months: 12,
          },
          partnersSalary: {
            amountPA: 3,
            amountPM: '0.25',
            months: 12,
          },
          partnersRemuneration: {
            amountPA: 4,
            amountPM: '0.33',
            months: 12,
          },
          otherExpenses: {
            amountPA: 6,
            amountPM: '0.50',
            months: 12,
          },
          bifercationOfExpenses: {
            amountPA: 1.5,
            amountPM: '0.13',
            months: 12,
          },
          totalExpensePA: '40.0',
          totalExpensePM: '40.0',
          netProfitPA: 60,
          netProfitPM: '33',
          shareOfProfitPA: 60,
          shareOfProfitPM: 100,
        },
        businessIncome: {
          salaryFromBusiness: {
            amountPA: 6,
            amountPM: '0.50',
            months: 12,
          },
          remunerationFromBusiness: {
            amountPA: 9,
            amountPM: '0.75',
            months: 12,
          },
          rent: {
            amountPA: 10,
            amountPM: '0.83',
            months: 12,
          },
          totalIncomePA: 85,
          totalEarning: 85,
        },
      },
    ],
  },
  comitmentSummary: {
    proposedEMI: {
      amountPA: '13.05',
      amountPM: '1.09',
    },
    existingEMI: {
      amountPA: '3.24',
      amountPM: '0.27',
    },
    btEMI: {
      amountPA: '3.96',
      amountPM: '0.33',
    },
    closureEMI: {
      amountPA: '4.92',
      amountPM: '0.41',
    },
    licMedSipTpOther: {
      amountPA: '0.28',
      amountPM: '0.02',
    },
    houseRent: {
      amountPA: 0,
      amountPM: 0,
    },
    totalCommitments: {
      amountPA: '25.45',
      amountPM: '2.12',
    },
    totalPresentEMI: {
      amountPA: '12.12',
      amountPM: '1.01',
    },
    existingCommitments: {
      amountPA: '16.57',
      amountPM: '1.38',
    },
    onlyEMIRatio: '7.24% (16.29 Lakhs / 225.00 Lakhs)',
    foirRatio: '7.68 (17.29 Lakhs / 225.00 Lakhs)',
    totalCommitmentsRatio: '7.68 (17.29 Lakhs / 225.00 Lakhs)',
  },
  turnoverDetails: {
    aprilTillDate: {
      idealAprilTillDate: {
        turnover: '169.18',
        netProfit: '81.21',
      },
      aprilTillDate: {
        turnover: 190,
        netProfit: 85,
      },
      reasonforDiff: '-',
    },
    lastYears: {
      firstLastYear: 190,
      secondLastYear: 50,
      changes: 'Decreased by 140 Lakhs | 73.68%',
      reasonforDiff: 'Because of pendamic',
    },
    currentYearActual: {
      actuals: {
        turnover: 250,
        netProfit: 120,
        profitPercentage: '48',
      },
      asPerFinancials: {
        turnover: 280,
        netProfit: 140,
        profitPercentage: 50,
      },
      financialActualRatio: 112,
    },
    currentLastYearComparision: {
      firstLastYear: 50,
      secondLastYear: 280,
      changes: 'Increased by 230 Lakhs | 460.00%',
      reasonforDiff: 'Because we got good clients',
    },
    bussinessTrendLast2Year: 'Business is stable',
    futureProjection: 'Applicant will continue business as it is',
  },
  clientDebtors: {
    clients: {
      isClientDetails: '',
      clientDetails: {
        noOfClientDaily: 10,
        majorClient: [
          {
            clientName: 'Vashu Pandey',
            contact: '8877665544',
          },
          {
            clientName: 'Pradeep Tiwari',
            contact: '8877665544',
          },
          {
            clientName: 'Aayush Jain',
            contact: '8877665544',
          },
        ],
      },
    },
    debitors: {
      isDebitorDetails: '',
      debitorDetails: {
        moreThan6Month: {
          amount: 10,
          reason: 'They are good customers',
        },
        lessThan6Month: {
          amount: 15,
        },
        totalDebtors: 25,
        collectionPeriod: '1.2 Months',
        creditPeriodAllowed: 10,
        whyIrRegular: 'Because of fire in plant.',
      },
      totalDebtors: 25,
      collectionPeriod: '-',
    },
    'debitors?': {
      'debitorDetails?': {
        'moreThan6Month?': {
          reason: '',
        },
      },
    },
  },
  stocks: {
    isStockDetails: 'Yes',
    stockDetails: {
      rawMaterialAmount: 40,
      wipAmount: 26,
      finishGoods: 36,
      totalStocks: 102,
      whyStocklowHigh: 'Purchase on demand',
      stockHoldingPeriod: '4.9 Months',
      collectionPeriod: '4.896 Months',
    },
  },
  suppliers: {
    isSuppliersDetails: 'Yes',
    suppliersDetails: {
      noOfSuppliers: 20,
      majorSuppliers: [
        {
          clientName: 'Ashish Diwedi',
          contact: '6457382691',
        },
        {
          clientName: 'Pradeep Tiwari',
          contact: '6457382691',
        },
        {
          clientName: 'Aayush Jain',
          contact: '6457382691',
        },
      ],
    },
    creditors: {
      amount: 20,
    },
    collectionPeriod: '3.43 Months',
    creitPeriodAllowed: 12,
    whyCreditorHighThanCredit: 'They will share the details on call.',
  },
  assets: {
    isBussinessAssets: 'Yes',
    bussinessAssetDetails: {
      bussinessAssets: [
        {
          title: 'Business Asset',
          particulars: 'Commercial Property',
          location: 'Bisan pura Noida',
          purchaseYear: 2015,
          carpetArea: 3500,
          status: 'Owned by Co-Applicant',
          marketValue: 240,
          rentPM: 0.51,
        },
      ],
      totalMarketValue: 240,
      totalRentPM: 0.51,
    },
    isPersonalAssets: 'Yes',
    personalAssetDetails: {
      personalAssets: [
        {
          title: 'Asset',
          particulars: 'Residence',
          location: 'Sector 61 Noida',
          purchaseYear: 2008,
          carpetArea: 2100,
          status: 'Owned by Applicant',
          marketValue: 150,
          rentPM: 0.25,
        },
        {
          title: 'Asset',
          particulars: 'Banglow',
          location: 'Sector 60 Noida',
          purchaseYear: 2016,
          carpetArea: 2700,
          status: 'Jointly Owned by Applicant & Co-Applicant',
          marketValue: 140,
          rentPM: 0.3,
          localStorage: '-',
        },
      ],
      totalMarketValue: 290,
      totalRentPM: 0.55,
    },
    isInvestments: 'Yes',
    investmentDetails: {
      investments: [
        {
          title: 'Investment',
          particulars: 'Fixed Deposit',
          contribution: 50,
          marketValue: 60,
        },
        {
          title: 'Investment',
          particulars: 'Mutual Funds',
          contribution: 21.5,
          marketValue: 71.5,
        },
      ],
      totalContribution: 71.5,
      totalMarketValue: 131.5,
    },
    isBankAccount: 'Yes',
    bankAccountDetails: {
      bankAccounts: [
        {
          title: 'Bank Account',
          bankName: 'Axis Bank',
          branch: 'Noida',
          type: 'CA',
          balanceOnDay: 2.5,
        },
      ],
      totalBalance: 2.5,
    },
    assetsBacking: '',
  },
  observations: {
    businessPlateName: {
      exist: 'Yes',
      reasonForNo: '-',
    },
    activity: {
      exist: 'No',
      reasonForNo: 'As visited residence address',
    },
    customer: {
      exist: 'Yes',
      reasonForNo: 20,
    },
    stock: {
      exist: 'Yes',
      reasonForNo: '-',
    },
    thirdPartyCheck: {
      exist: 'Negative',
      reasonForNo: 'Not deliver on time',
    },
    screenshotOfCCTV: {
      exist: 'Yes',
      reasonForNo: '-',
    },
    behaviourOfApplicant: 'Co-operative',
    duringVist: {
      applicantDoing: 'Applicant was in meeting with his employees',
      employeesDoing: 'Employees doing their work',
      otherObservation: 'Premises is good and well ciltured.',
    },
  },
  documentsSeen: [
    {
      label: 'Documents were not handy during PD.',
      isDoc: 'Yes',
    },
    {
      label:
        'No documents provided & applicant said Documents are already given to bank.',
      isDoc: 'no',
    },
    {
      label: 'GST Returns',
      isDoc: 'no',
    },
    {
      label: 'GST Registration Certificate',
      isDoc: 'Yes',
    },
    {
      label: 'Financial Statements of March 2023',
      isDoc: 'Yes',
    },
    {
      label: 'Financial Statements of March 2022',
      isDoc: 'Yes',
    },
    {
      label: 'Financial Statements of March 2021',
      isDoc: 'no',
    },
    {
      label: 'Sales Bills',
      isDoc: 'no',
    },
    {
      label: 'Purchase Bills',
      isDoc: 'no',
    },
    {
      label: 'ITR for March 2023',
      isDoc: 'no',
    },
    {
      label: 'ITR for March 2022',
      isDoc: 'Yes',
    },
    {
      label: 'ITR for March 2021',
      isDoc: 'no',
    },
    {
      label: 'Udyam Aadhar',
      isDoc: 'no',
    },
    {
      label: 'Vehicle Registration (RC Book)',
      isDoc: 'no',
    },
    {
      label: 'Gumasta',
      isDoc: 'no',
    },
    {
      label: 'RC Book',
      isDoc: 'Yes',
    },
    {
      label: 'Salary Slip',
      isDoc: 'no',
    },
    {
      label: 'Provisional Financials for March Last Year',
      isDoc: 'no',
    },
    {
      label: 'Financials in Tally',
      isDoc: 'Yes',
    },
  ],
};

export const initailReportPayload = {
  caseId: '656380f829a29b03abbaa394',
  data: {
    loanDetails: {
      alc: '',
      loan: '',
      loanType: '',
      bankName: '',
    },
    pdDetails: {
      location: '',
      reporterName: '',
      reporterContact: '',
      pdVisitDate: '',
      pdConductTime: '',
      reviewerName: '',
      reviewerContact: '',
      reportTat: '',
      reportSentDate: '',
    },
    personalDetails: {
      applicants: [
        {
          title: 'Applicant Info',
          name: '',
          dobDoi: '',
          qualification: '',
          natureOfBusiness: '',
          birthYear: '',
          age: '',
          studyFinish: '',
          study: '',
          businessStart: '',
          currExp: '',
          pastExp: '',
          overallExp: '',
        },
        {
          title: 'Applicant Info',
          name: '',
          dobDoi: '',
          qualification: '',
          natureOfBusiness: '',
          birthYear: '',
          age: '',
          studyFinish: '',
          study: '',
          businessStart: '',
          currExp: '',
          pastExp: '',
          overallExp: '',
        },
      ],
      residents: [
        {
          title: 'Residance Info',
          resiAddress: '',
          resiStatus: '',
          resiType: '',
          resiSince: '',
          buildArea: '',
          carpetArea: '',
          purchaseYear: '',
          agrimentValue: '',
          purchaseValue: '',
          marketValue: '',
          rentPm: '',
        },
        {
          title: 'Residance Info',
          resiAddress: '',
          resiStatus: '',
          resiType: '',
          resiSince: '',
          buildArea: '',
          carpetArea: '',
          purchaseYear: '',
          agrimentValue: '',
          purchaseValue: '',
          marketValue: '',
          rentPm: '',
        },
      ],
      familyDetails: [
        {
          name: '',
          relation: '',
          earningStatus: '',
        },
        {
          name: '',
          relation: '',
          earningStatus: '',
        },
      ],
    },
    existingLoan: {
      existanceLoan: {
        isExistanceLoan: 'Yes',
        balanceTransfer: [
          {
            title: '',
            typeOfLoan: '',
            bankName: '',
            loanAmount: '',
            tenureMonth: '',
            emi: '',
            outstanding: '',
            remark: '',
          },
        ],
        totalLoanBt: 0,
        totalLoanBtEmi: 0,
        totalLoanBtOut: 0,
        existingLoanClosed: [
          {
            title: '',
            typeOfLoan: '',
            bankName: '',
            loanAmount: '',
            tenureMonth: '',
            emi: '',
            outstanding: '',
            remark: '',
          },
        ],
        totalLoanEc: 0,
        totalLoanEcEmi: 0,
        totalLoanEcOut: 0,
        existingLoanEMI: [
          {
            title: '',
            typeOfLoan: '',
            bankName: '',
            loanAmount: '',
            tenureMonth: '',
            emi: '',
            outstanding: '',
            remark: '',
          },
        ],
        totalLoanEm: 0,
        totalLoanEmEmi: 0,
        totalLoanEmOut: 0,
      },
      creditFacility: {
        isCreditFacility: 'Yes',
        creditDetails: [
          {
            title: 'Credit Facility',
            typeOfFacility: '',
            bankName: '',
            limit: '',
            averageUtilization: '',
            interestRate: '',
            remark: '',
          },
        ],
        totalLoanCfLimit: 0,
        totalLoanCfAu: 0,
      },
      otherCommitments: {
        isOtherCommitmemts: 'Yes',
        commitmentsDetails: [
          {
            title: 'Other Commitment',
            particulars: '',
            contribution: '',
            sumAssured: '',
          },
          {
            title: 'Other Commitment',
            particulars: '',
            contribution: '',
            sumAssured: '',
          },
        ],
        totalCon: 0,
        totalSum: 0,
      },
    },
    detailsOfProp: {
      purchaseYear: '',
      buildUpArea: '',
      caretArea: '',
      occupiedBy: '',
      loanPropertyAddress: '',
      builderName: '',
      propertyLoanDetails: {
        isLoanProvided: '',
        loanDetails: { amount: '', emi: '', roi: '', year: '' },
        propertyValue: {
          agreementValue: 0,
          purchaseValue: 0,
          marketValue: 0,
          ocrPaid: 0,
          pOrb: '',
          balanceOcr: 0,
          sourceOcr: '',
        },
        loanAsPerForm: '',
      },
    },
    businessDetails: {
      bussinessName: '',
      typeOfEntity: '',
      yearOfIncorporation: '',
      generation: '',
      gstNumber: '',
      regOfficeAddress: '',
      visitedAddress: '',
      vicinity: '',
      ownership: '',
      pdConductWith: '',
      designation: '',
      mobile: '',
      familyBusiness: '',
      mainUseproducts: '',
      howTurnoverVerified: '',
      citiesOfReppresentation: '',
      competitorsOfBusiness: '',
      noOfVisit: 1,
      doYouHavefixedEmployee: '',
      empSpecified: 0,
      empSeen: 0,
      shareHoldings: [
        {
          ownerName: '',
          shareHolding: 0,
        },
      ],
      totalHolding: 0,
    },
    financials: {
      totalEarning: 363,
      finances: [
        {
          title: 'Financial Details',
          entityName: '',
          applicantIncome: '',
          income: {
            turnoverGrossReciepts: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            purchases: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            grossProfit: 0,
            grossProfitPer: 0,
          },
          expenses: {
            salary: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            maintanance: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            transport: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            electricity: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            travelling: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            fuel: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            officeRent: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            partnersSalary: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            partnersRemuneration: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            otherExpenses: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            bifercationOfExpenses: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            totalExpensePA: '',
            totalExpensePM: '',
            netProfitPA: '',
            netProfitPM: '',
            shareOfProfitPA: '',
            shareOfProfitPM: '',
          },
          businessIncome: {
            salaryFromBusiness: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            remunerationFromBusiness: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            rent: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            totalIncomePA: '',
            totalEarning: '',
          },
        },
        {
          title: 'Financial Details',
          entityName: '',
          applicantIncome: '',
          income: {
            turnoverGrossReciepts: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            purchases: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            grossProfit: 0,
            grossProfitPer: 0,
          },
          expenses: {
            salary: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            maintanance: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            transport: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            electricity: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            travelling: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            fuel: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            officeRent: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            partnersSalary: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            partnersRemuneration: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            otherExpenses: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            bifercationOfExpenses: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            totalExpensePA: '',
            totalExpensePM: '',
            netProfitPA: '',
            netProfitPM: '',
            shareOfProfitPA: '',
            shareOfProfitPM: '',
          },
          businessIncome: {
            salaryFromBusiness: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            remunerationFromBusiness: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            rent: {
              amountPA: '',
              amountPM: '',
              months: 12,
            },
            totalIncomePA: '',
            totalEarning: '',
          },
        },
      ],
    },
    comitmentSummary: {
      proposedEMI: { amountPA: 0, amountPM: 0 },
      existingEMI: { amountPA: 0, amountPM: 0 },
      btEMI: { amountPA: 0, amountPM: 0 },
      closureEMI: { amountPA: 0, amountPM: 0 },
      licMedSipTpOther: { amountPA: 0, amountPM: 0 },
      houseRent: { amountPA: 0, amountPM: 0 },
      totalCommitments: { amountPA: 0, amountPM: 0 },
      totalPresentEMI: { amountPA: 0, amountPM: 0 },
      existingCommitments: { amountPA: 0, amountPM: 0 },
      onlyEMIRatio: '',
      foirRatio: '',
      totalCommitmentsRatio: '',
    },
    turnoverDetails: {
      aprilTillDate: {
        idealAprilTillDate: {
          turnover: 0,
          netProfit: 0,
        },
        aprilTillDate: {
          turnover: 0,
          netProfit: 0,
        },
        reasonforDiff: '',
      },
      lastYears: {
        firstLastYear: 0,
        secondLastYear: 0,
        changes: '',
        reasonforDiff: '',
      },
      currentYearActual: {
        actuals: {
          turnover: 0,
          netProfit: 0,
          profitPercentage: 0,
        },
        asPerFinancials: {
          turnover: 0,
          netProfit: 0,
          profitPercentage: 0,
        },
        financialActualRatio: '',
      },
      currentLastYearComparision: {
        firstLastYear: 0,
        secondLastYear: 0,
        changes: '',
        reasonforDiff: '',
      },
      bussinessTrendLast2Year: '',
      futureProjection: '',
    },
    clientDebtors: {
      clients: {
        isClientDetails: '',
        clientDetails: {
          noOfClientDaily: '',
          majorClient: [{ clientName: '', contact: '' }],
        },
      },
      debitors: {
        isDebitorDetails: '',
        debitorDetails: {
          moreThan6Month: {
            amount: 0,
            reason: '',
          },
          lessThan6Month: {
            amount: 0,
          },
          totalDebtors: 0,
          collectionPeriod: '',
          creditPeriodAllowed: '',
          whyIrRegular: '',
        },
      },
    },
    stocks: {
      isStockDetails: 'Yes',
      stockDetails: {
        rawMaterialAmount: 0,
        wipAmount: 0,
        finishGoods: 0,
        whyStocklowHigh: 0,
        totalStocks: 0,
        stockHoldingPeriod: '',
      },
    },
    suppliers: {
      isSuppliersDetails: 'Yes',
      suppliersDetails: {
        noOfSuppliers: '',
        majorSuppliers: [{ clientName: '', contact: '' }] as any,
      },
      creditors: {
        amount: 0,
      },
      collectionPeriod: '',
      creitPeriodAllowed: '',
      whyCreditorHighThanCredit: '',
    },
    assets: {
      isBussinessAssets: '',
      bussinessAssetDetails: {
        bussinessAssets: [
          {
            title: 'Asset',
            particulars: '',
            location: '',
            purchaseYear: '',
            carpetArea: '',
            status: '',
            marketValue: '',
            rentPM: '',
          },
        ],
        totalMarketValue: '',
        totalRentPM: '',
      },
      isPersonalAssets: '',
      personalAssetDetails: {
        personalAssets: [
          {
            title: 'Asset',
            particulars: '',
            location: '',
            purchaseYear: '',
            carpetArea: '',
            status: '',
            marketValue: '',
            rentPM: '',
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
            particulars: '',
            contribution: '',
            marketValue: '',
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
            bankName: '',
            branch: '',
            type: '',
            balanceOnDay: '',
          },
        ],
        totalBalance: '',
      },
      assetsBacking: '',
    },
    observations: {
      businessPlateName: {
        exist: '',
        reasonForNo: '-',
      },
      activity: {
        exist: '',
        reasonForNo: '-',
      },
      customer: {
        exist: '',
        reasonForNo: '',
      },
      stock: {
        exist: '',
        reasonForNo: '-',
      },
      thirdPartyCheck: {
        exist: '',
        reasonForNo: '',
      },
      screenshotOfCCTV: {
        exist: '',
        reasonForNo: '-',
      },
      behaviourOfApplicant: '',
      duringVist: {
        applicantDoing: '',
        employeesDoing: '',
        otherObservation: '',
      },
    },
    documentsSeen: [
      {
        label: 'Documents were not handy during PD.',
        isDoc: 'No',
      },
      {
        label:
          'No documents provided & applicant said Documents are already given to bank.',
        isDoc: 'No',
      },
      { label: 'GST Returns', isDoc: 'No' },
      {
        label: 'GST Registration Certificate',
        isDoc: 'No',
      },
      {
        label: 'Financial Statements of March Current Year',
        isDoc: 'No',
      },
      {
        label: 'Financial Statements of March Last Year',
        isDoc: 'No',
      },
      {
        label: 'Financial Statements of March Second Last Year',
        isDoc: 'No',
      },
      { label: 'Sales Bills', isDoc: 'No' },
      { label: 'Purchase Bills', isDoc: 'No' },
      { label: 'ITR for March Current Year', isDoc: 'No' },
      { label: 'ITR for March Last Year', isDoc: 'No' },
      {
        label: 'ITR for March Second Last Year',
        isDoc: 'No',
      },
      { label: 'Udyam Aadhar', isDoc: 'No' },
      {
        label: 'Vehicle Registration (RC Book)',
        isDoc: 'No',
      },
      { label: 'Gumasta', isDoc: 'No' },
      { label: 'RC Book', isDoc: 'No' },
      { label: 'Salary Slip', isDoc: 'No' },
      {
        label: 'Provisional Financials for March Last Year',
        isDoc: 'No',
      },
      { label: 'Financials in Tally', isDoc: 'No' },
    ],
    businessOf: { bussinessProcessOf: 'salaried' },
  },
};
