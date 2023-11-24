import { useNavigate } from 'react-router-dom';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import { AStepper } from '../../components-global/AStepper';
import { reportSteps } from './constants';
import { useState } from 'react';

const GeneratePD = () => {
  const navigate = useNavigate();
  const [payloads, setPayloads] = useState({
    loanDetails: { loan: '', loanType: '', bankName: '' },
    personalDetails: {
      applicants: [
        {
          name: '',
          dobDoi: '',
          qualification: '',
          natureOfBusiness: '',
          birthYear: '',
          studyFinish: '',
          businessStart: '',
          pastExp: '',
          overallExp: '',
        },
      ],
      residentInfo: {
        resiAddress: '',
        resiStatus: '',
        resiSince: '',
        purchaseYear: '',
        buildArea: '',
        carpetArea: '',
        agrimentValue: '',
        purchaseValue: '',
        marketValue: '',
        familyDetails: [
          {
            name: '',
            relation: '',
            earningStatus: '',
          },
        ],
      },
    },
    existingLoan: {
      existanceLoan: {
        isExistanceLoan: true,
        businessTransfer: [
          {
            typeOfLoan: '',
            bankName: '',
            loanAmount: 0,
            tenureMonth: 0,
            emi: 0,
            outstanding: '',
            remark: '',
          },
        ],
        existingLoanClosedThisYear: [
          {
            typeOfLoan: '',
            bankName: '',
            loanAmount: 0,
            tenureMonth: 0,
            emi: 0,
            outstanding: '',
            remark: '',
          },
        ],
        existingLoanEMI: [
          {
            typeOfLoan: '',
            bankName: '',
            loanAmount: 0,
            tenureMonth: 0,
            emi: 0,
            outstanding: '',
            remark: '',
          },
        ],
      },
      creditFacility: {
        isCreditFacility: true,
        creditDetails: [
          {
            typeOfFacility: '',
            bankName: '',
            limit: 0,
            averageUtilization: 0,
            emi: 0,
            interestRate: 0,
            remark: '',
          },
        ],
      },
      otherCommitments: {
        isOtherCommitmemts: true,
        commitmentsDetails: [
          {
            particulars: '',
            contributionPA: 0,
            sumAssured: 0,
          },
        ],
      },
    },
    propertyDetails: {
      purchaseYear: '',
      buildUpArea: '',
      caretArea: '',
      occupiedBy: '',
      loanPropertyAddress: '',
      builderName: '',
      propertyLoanDetails: {
        isLoanProvided: '',
        loanDetails: [{ amount: '', emi: '', roi: '', year: '' }],
        propertyValue: {
          agreementValue: '',
          purchaseValue: '',
          marketValue: '',
          ocrPaid: '',
          pOrb: '',
          balanceOcr: '',
          sourceOcr: '',
        },
        loanAsPerForm: '',
      },
    },
    bussinessDetails: {
      bussinessName: '',
      typeOfEntity: '',
      yearOfIncorporation: '',
      generation: '',
      gstNumber: '',
      regOfficeAddress: '',
      visitedAddress: '',
      vicinity: '',
      ownershipOfAddressVisited: '',
      pdConductWith: '',
      designation: '',
      mobile: 0,
      familyBusiness: '',
      mainUseproducts: '',
      howTurnoverVerified: '',
      citiesOfReppresentation: '',
      competitorsOfBusiness: '',
      noOfVisit: '',
      doYouHavefixedEmployee: false,
      shareHoldings: [
        {
          ownerName: '',
          shareHolding: '',
        },
      ],
    },
    financialDetails: {
      entityName: '',
      incomeOfWhichApplicant: '',
      income: {
        turnoverGrossReciepts: {
          amountPA: '',
          amountPM: '',
          months: 0,
        },
        purchases: {
          amountPA: '',
          amountPM: '',
          months: 0,
        },
        totalAmountPA: '',
        totalAmountPM: '',
      },
      expenses: {
        salary: {
          amountPA: '',
          amountPM: '',
          months: 0,
        },
        maintanance: {
          amountPA: '',
          amountPM: '',
          months: 0,
        },
        transport: {
          amountPA: '',
          amountPM: '',
          months: 0,
        },
        electricity: {
          amountPA: '',
          amountPM: '',
          months: 0,
        },
        travelling: {
          amountPA: '',
          amountPM: '',
          months: 0,
        },
        fuel: {
          amountPA: '',
          amountPM: '',
          months: 0,
        },
        officeRent: {
          amountPA: '',
          amountPM: '',
          months: 0,
        },
        partnersSalary: {
          amountPA: '',
          amountPM: '',
          months: 0,
        },
        partnersRemuneration: {
          amountPA: '',
          amountPM: '',
          months: 0,
        },
        otherExpenses: {
          amountPA: '',
          amountPM: '',
          months: 0,
        },
        bifercationOfExpenses: {
          amountPA: '',
          amountPM: '',
          months: 0,
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
          months: 0,
        },
        remunerationFromBusiness: {
          amountPA: '',
          amountPM: '',
          months: 0,
        },
        rent: {
          amountPA: '',
          amountPM: '',
          months: 0,
        },
        totalIncomePA: '',
        totalIncomePM: '',
        totalEarning: '',
      },
    },
    comitmentsDetails: {
      proposedEMI: { amountPA: '', amountPM: '' },
      existingEMI: { amountPA: '', amountPM: '' },
      btEMI: { amountPA: '', amountPM: '' },
      closureEMI: { amountPA: '', amountPM: '' },
      licMedSipTpOther: { amountPA: '', amountPM: '' },
      houseRent: { amountPA: '', amountPM: '' },
      totalCommitments: { amountPA: '', amountPM: '' },
      totalPresentEMI: { amountPA: '', amountPM: '' },
      existingCommitments: { amountPA: '', amountPM: '' },
      onlyEMIRatio: '',
      foirRatio: '',
      totalCommitmentsRatio: '',
    },
    turnoverReceipts: {
      apirilTillDate: {
        idealAprilTillDate: {
          turnover: '',
          netProfit: '',
        },
        aprilTillDate: {
          turnover: '',
          netProfit: '',
        },
        reasonforDiff: '',
      },
      lastYears: {
        firstLastYear: '',
        secondLastYear: '',
        changes: '',
        reasonforDiff: '',
      },
      currentYearActual: {
        actuals: {
          turnover: '',
          netProfit: '',
          profitPercentage: '',
        },
        asPerFinancials: {
          turnover: '',
          netProfit: '',
          profitPercentage: '',
        },
        financialActualRatio: '',
      },
      currentLastYearComparision: {
        firstLastYear: '',
        secondLastYear: '',
        changes: '',
        reasonforDiff: '',
      },
      bussinessTrendLast2Year: '',
      futureProjection: '',
    },
    clientsAndDebtors: {
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
            amount: '',
            reason: '',
          },
          lessThan6Month: {
            amount: '',
            reason: '',
          },
          totalDebtors: '',
          creditPeriodAllowed: '',
          whyIrRegular: '',
        },
      },
    },
    stocksDetails: {
      isStockDetails: '',
      stockDetails: {
        rawMaterialAmount: '',
        wipAmount: '',
        finishGoods: '',
        totalStocks: '',
        stockHoldingPeriod: '',
        whyStocklowHigh: '',
      },
    },
    suppliersAndCreditors: {
      isSuppliersDetails: '',
      suppliersDetails: {
        noOfSuppliers: '',
        majorSuppliers: [{ clientName: '', contact: '' }],
      },
      creditors: {
        amount: '',
        collectionPeriod: '',
      },
      creitPeriodAllowed: '',
      whyCreditorHighThanCredit: '',
    },
    assetsInvestmentBank: {
      isBussinessAssets: '',
      bussinessAssetDetails: {
        bussinessAssets: [
          {
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
        investments: [{ particulars: '', contribution: '', marketValue: '' }],
      },
      totalRentPM: '',
      totalMarketValue: '',
      isBankAccount: '',
      bankAccountDetails: {
        bankAccounts: [
          { bankName: '', branch: '', type: '', balanceOnDay: '' },
        ],
        totalBalance: '',
      },
    },
    observationDetails: {
      businessPlateName: {
        exist: '',
        reasonForNo: '',
      },
      activity: {
        exist: '',
        reasonForNo: '',
      },
      customer: {
        exist: '',
        reasonForNo: '',
      },
      stock: {
        exist: '',
        reasonForNo: '',
      },
      thirdPartyCheck: {
        exist: '',
        reasonForNo: '',
      },
      screenshotOfCCTVofPremises: {
        exist: '',
        reasonForNo: '',
      },
      behaviourOfApplicant: '',
      duringVist: {
        applicantDoing: '',
        employeesDoing: '',
        otherObservation: '',
      },
    },
    documentsSeen: {
      documentHandyDuringPD: '',
      documentProvidedToBank: '',
      gstReturns: '',
      gstRegistrationCertificate: '',
      currentYearFinancialStatement: '',
      lastYearFinancialStatement: '',
      secondLastYearFinancialStatement: '',
      salesBills: '',
      purchaseBils: '',
      currentYearITR: '',
      lastYearITR: '',
      secondLastYearITR: '',
      udhyamAadhar: '',
      vechicleRegistration: '',
      gumasta: '',
      rcBook: '',
      salarySlip: '',
      provisionalFinancialLastYear: '',
      financialsInTally: '',
    },
    bussinessProcessOf: '',
  });

  const generateReport = () => {
    navigate('/finalReport');
  };

  return (
    <>
      <ABreadcrumb pageName="Generate PD" />
      <div className="overflow-hidden relative h-[calc(100vh-170px)] bg-clip-border rounded-xl bg-white text-grey-700 shadow-lg px-5 py-5">
        <AStepper
          steps={reportSteps}
          payloads={payloads}
          setPayloads={setPayloads}
          generateReport={generateReport}
        />
      </div>
    </>
  );
};

export default GeneratePD;
