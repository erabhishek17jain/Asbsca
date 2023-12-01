export const payload = {
  caseId: '656380f829a29b03abbaa394',
  data: {
    loanDetails: {
      alc: 'Badlapur ALC',
      loan: 'Home Loan',
      loanType: 'Balance Transfer',
      bankName: 'HDFC Bank',
    },
    pdDetails: {
      location: 'Mumbai',
      reporterName: 'Prabhat Ranjan',
      reporterContact: 7061644186,
      pdVisitDate: '01-12-2023',
      pdConductTime: '01:12',
      reviewerName: 'Abhishek Jain',
      reviewerContact: 7061644186,
      reportTat: '02-12-2023 01:12',
      reportSentDate: '02-12-2023',
    },
    personalDetails: {
      applicants: [
        {
          title: 'Applicant Info',
          name: 'Palash Jain',
          dobDoi: '1995-08-28',
          qualification: 'Post Graduate',
          natureOfBusiness: 'Professional',
          birthYear: 1995,
          age: 28,
          studyFinish: 2017,
          study: 6,
          businessStart: 2020,
          currExp: 3,
          pastExp: 3,
          overallExp: 6,
        },
        {
          title: 'Co-Applicant',
          name: 'Aadarsh Jain',
          dobDoi: '1994-01-26',
          qualification: 'Graduate',
          natureOfBusiness: 'Salaried',
          birthYear: 1994,
          age: 29,
          studyFinish: 2016,
          study: 7,
          businessStart: 2018,
          currExp: 5,
          pastExp: 2,
          overallExp: 7,
        },
      ],
      residents: [
        {
          title: 'Residance Info',
          resiAddress: '167, Dayanand Ward, Indore MP',
          resiStatus: 'Owned by CompanyB',
          resiType: 'B',
          resiSince: 2012,
          buildArea: 2100,
          carpetArea: 1400,
          purchaseYear: 2010,
          agrimentValue: 70,
          purchaseValue: 70,
          marketValue: 80,
          rentPm: '',
        },
        {
          title: 'Residance Address',
          resiAddress: '111, Rail Vihar Sector 23 Indore Mo',
          resiStatus: 'RentalN',
          resiType: 'N',
          resiSince: 2018,
          buildArea: 1500,
          carpetArea: 1100,
          purchaseYear: '',
          agrimentValue: '',
          purchaseValue: '',
          marketValue: '',
          rentPm: 22500,
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
            loanAmount: 110,
            tenureMonth: 240,
            emi: 35000,
            outstanding: 96,
            remark: 'Taken to buy the property',
          },
        ],
        totalLoanBt: 110,
        totalLoanBtEmi: 35000,
        totalLoanBtOut: 96,
        existingLoanClosed: [
          {
            title: 'Existing Loan Closed',
            typeOfLoan: 'Education Loan',
            bankName: 'Bank Of Baroda',
            loanAmount: 20,
            tenureMonth: 60,
            emi: 41500,
            outstanding: 11,
            remark: 'Taken to met medical expences',
          },
        ],
        totalLoanEc: 20,
        totalLoanEcEmi: 41500,
        totalLoanEcOut: 11,
        existingLoanEMI: [
          {
            title: 'Existing Loan EMI',
            typeOfLoan: 'Personal Loan',
            bankName: 'Canera Bank',
            loanAmount: 50,
            tenureMonth: 120,
            emi: 29750,
            outstanding: 35.2,
            remark: 'Taken for personal reason',
          },
        ],
        totalLoanEm: 50,
        totalLoanEmEmi: 29750,
        totalLoanEmOut: 35.2,
      },
      creditFacility: {
        isCreditFacility: 'Yes',
        creditDetails: [
          {
            title: 'Credit Facility',
            typeOfFacility: 'Credit Card',
            bankName: 'HDFC Bank',
            limit: 7.5,
            averageUtilization: 1.6,
            interestRate: 12,
            remark: 'Taken to met medical expences',
          },
        ],
        totalLoanCfLimit: 7.5,
        totalLoanCfAu: 1.6,
      },
      otherCommitments: {
        isOtherCommitmemts: 'Yes',
        commitmentsDetails: [
          {
            title: 'Other Commitment',
            particulars: 'Term Plan',
            contribution: 17500,
            sumAssured: 10000000,
          },
        ],
        totalCon: 17500,
        totalSum: 10000000,
      },
    },
    detailsOfProp: {
      purchaseYear: '2022',
      buildUpArea: 1600,
      caretArea: 1100,
      occupiedBy: 'Vacant',
      loanPropertyAddress: 'D-54 vishanpura sector 58 Noida',
      builderName: 'Ramesh Sharma',
      propertyLoanDetails: {
        isLoanProvided: '',
        loanDetails: {
          amount: 120,
          emi: 100372.81,
          roi: 8,
          year: 20,
        },
        propertyValue: {
          agreementValue: 145,
          purchaseValue: 165,
          marketValue: 165,
          ocrPaid: 0,
          pOrb: 'P',
          balanceOcr: 45,
          sourceOcr: 'Savings in Bank',
        },
        loanAsPerForm: '120',
      },
    },
    businessDetails: {
      bussinessName: 'The Design Gesture',
      typeOfEntity: 'Partnership',
      yearOfIncorporation: 2019,
      generation: 'Second Generation',
      gstNumber: '21ABCDE1234A1Z',
      regOfficeAddress: '111, DW Namak Mandi Sagar',
      visitedAddress: '111, DW Namak Mandi Sagar',
      vicinity: 'Residential (Easily Accessible)',
      ownership: 'Owned by Co-ApplicantP',
      pdConductWith: 'Palash Jain',
      designation: 'Partner',
      mobile: 8817374110,
      familyBusiness: 2,
      mainUseproducts: 'Beauty Product',
      howTurnoverVerified:
        'Turnover is not verified but few sample invoices were observed',
      citiesOfReppresentation: 'Mumbai',
      competitorsOfBusiness: 'Design Panel',
      noOfVisit: 1,
      doYouHavefixedEmployee: 'Yes',
      empSpecified: 20,
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
      totalEarning: 400,
      finances: [
        {
          title: 'Financial Details',
          entityName: 'The Design Gesture',
          applicantIncome: 'Applicant',
          income: {
            turnoverGrossReciepts: {
              amountPA: 220,
              amountPM: '18.33',
              months: 12,
            },
            purchases: {
              amountPA: 50,
              amountPM: '4.17',
              months: 12,
            },
            grossProfit: 170,
            grossProfitPer: '77%',
          },
          expenses: {
            salary: {
              amountPA: 2,
              amountPM: '0.17',
              months: 12,
            },
            maintanance: {
              amountPA: 3,
              amountPM: '0.25',
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
              amountPA: 4,
              amountPM: '0.33',
              months: 12,
            },
            fuel: {
              amountPA: 1,
              amountPM: '0.08',
              months: 12,
            },
            officeRent: {
              amountPA: 3.5,
              amountPM: '0.29',
              months: 12,
            },
            partnersSalary: {
              amountPA: 2.2,
              amountPM: '0.18',
              months: 12,
            },
            partnersRemuneration: {
              amountPA: 1.4,
              amountPM: '0.12',
              months: 12,
            },
            otherExpenses: {
              amountPA: 6,
              amountPM: '0.50',
              months: 12,
            },
            bifercationOfExpenses: {
              amountPA: 0.9,
              amountPM: '0.07',
              months: 12,
            },
            totalExpensePA: '36.0',
            totalExpensePM: '36.0',
            netProfitPA: 134,
            netProfitPM: '61',
            shareOfProfitPA: 134,
            shareOfProfitPM: 100,
          },
          businessIncome: {
            salaryFromBusiness: {
              amountPA: 5,
              amountPM: '0.42',
              months: 12,
            },
            remunerationFromBusiness: {
              amountPA: 11,
              amountPM: '0.92',
              months: 12,
            },
            rent: {
              amountPA: 0,
              amountPM: '0.00',
              months: 12,
            },
            totalIncomePA: 150,
            totalEarning: 150,
          },
        },
        {
          title: 'Co-Applicant',
          entityName: 'The Design Geature',
          applicantIncome: 'Co-Applicant 1',
          income: {
            turnoverGrossReciepts: {
              amountPA: 410,
              amountPM: '34.17',
              months: 12,
            },
            purchases: {
              amountPA: 150,
              amountPM: '12.50',
              months: 12,
            },
            grossProfit: 260,
            grossProfitPer: '63%',
          },
          expenses: {
            salary: {
              amountPA: 5,
              amountPM: '0.42',
              months: 12,
            },
            maintanance: {
              amountPA: 4,
              amountPM: '0.33',
              months: 12,
            },
            transport: {
              amountPA: 6,
              amountPM: '0.50',
              months: 12,
            },
            electricity: {
              amountPA: 2,
              amountPM: '0.17',
              months: 12,
            },
            travelling: {
              amountPA: 7,
              amountPM: '0.58',
              months: 12,
            },
            fuel: {
              amountPA: 8,
              amountPM: '0.67',
              months: 12,
            },
            officeRent: {
              amountPA: 2.6,
              amountPM: '0.22',
              months: 12,
            },
            partnersSalary: {
              amountPA: 3.2,
              amountPM: '0.27',
              months: 12,
            },
            partnersRemuneration: {
              amountPA: 4,
              amountPM: '0.33',
              months: 12,
            },
            otherExpenses: {
              amountPA: 3,
              amountPM: '0.25',
              months: 12,
            },
            bifercationOfExpenses: {
              amountPA: 1,
              amountPM: '0.08',
              months: 12,
            },
            totalExpensePA: '45.8',
            totalExpensePM: '45.8',
            netProfitPA: 214.2,
            netProfitPM: '52',
            shareOfProfitPA: 214.2,
            shareOfProfitPM: 100,
          },
          businessIncome: {
            salaryFromBusiness: {
              amountPA: 5.8,
              amountPM: '0.48',
              months: 12,
            },
            remunerationFromBusiness: {
              amountPA: 30,
              amountPM: '2.50',
              months: 12,
            },
            rent: {
              amountPA: 0,
              amountPM: '0.00',
              months: 12,
            },
            totalIncomePA: 250,
            totalEarning: 250,
          },
        },
      ],
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
      isSuppliersDetails: 'Yes',
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
        exist: 'Yes',
        reasonForNo: '-',
      },
      activity: {
        exist: 'no',
        reasonForNo: '0',
      },
      customer: {
        exist: 'Yes',
        reasonForNo: '5',
      },
      stock: {
        exist: 'Yes',
        reasonForNo: '-',
      },
      thirdPartyCheck: {
        exist: 'notDone',
        reasonForNo: 'Not Avaliable',
      },
      screenshotOfCCTV: {
        exist: 'Yes',
        reasonForNo: '-',
      },
      behaviourOfApplicant: 'Good',
      duringVist: {
        applicantDoing: 'withClient',
        employeesDoing: 'workOnMachine',
        otherObservation: 'Excilent',
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
        isDoc: 'Yes',
      },
      { label: 'GST Returns', isDoc: 'Yes' },
      {
        label: 'GST Registration Certificate',
        isDoc: 'Yes',
      },
      {
        label: 'Financial Statements of March Current Year',
        isDoc: 'no',
      },
      {
        label: 'Financial Statements of March Last Year',
        isDoc: 'no',
      },
      {
        label: 'Financial Statements of March Second Last Year',
        isDoc: 'no',
      },
      { label: 'Sales Bills', isDoc: 'no' },
      { label: 'Purchase Bills', isDoc: 'no' },
      { label: 'ITR for March Current Year', isDoc: 'no' },
      { label: 'ITR for March Last Year', isDoc: 'no' },
      {
        label: 'ITR for March Second Last Year',
        isDoc: 'no',
      },
      { label: 'Udyam Aadhar', isDoc: 'no' },
      {
        label: 'Vehicle Registration (RC Book)',
        isDoc: 'no',
      },
      { label: 'Gumasta', isDoc: 'Yes' },
      { label: 'RC Book', isDoc: 'Yes' },
      { label: 'Salary Slip', isDoc: 'no' },
      {
        label: 'Provisional Financials for March Last Year',
        isDoc: 'no',
      },
      { label: 'Financials in Tally', isDoc: 'no' },
    ],
    businessOf: { bussinessProcessOf: 'salaried' },
  },
};
