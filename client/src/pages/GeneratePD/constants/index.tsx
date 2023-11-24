export const reportSteps = [
  { index: 0, label: 'Loan Heading' },
  { index: 1, label: 'Basic Personal Details & Experience' },
  { index: 2, label: 'Existing Loan & Credit Facility' },
  { index: 3, label: 'Details of Property to be Mortgage' },
  { index: 4, label: 'Business Details' },
  { index: 5, label: 'Financials' },
  { index: 6, label: 'Comitments Summary & FOIR Ratio' },
  { index: 7, label: 'Turnover/Gross Receipts (April till now)' },
  { index: 8, label: 'Clients & Debtors' },
  { index: 9, label: 'Stocks' },
  { index: 10, label: 'Suppliers & Creditors' },
  { index: 11, label: 'Assets, Investment & Bank Details' },
  { index: 12, label: 'Other Observation' },
  { index: 13, label: 'Documents seen' },
  { index: 14, label: 'Business Process of' },
];

export const yesNoOptions = [
  { name: 'yes', label: 'Yes' },
  { name: 'no', label: 'No' },
  { name: 'noDetail', label: 'Details Not Provided' },
];

export const loans = [
  { label: 'Home Loan', value: 'homeloan' },
  { label: 'LAP', value: 'lap' },
  { label: 'LAP: Existing Property', value: 'lapexist' },
];

export const loanTypes = [
  { label: 'Fresh', value: 'fresh' },
  { label: 'Balance Transfer', value: 'bt' },
  { label: 'Top-up', value: 'topup' },
  { label: 'BT + Top-up', value: 'bttopup' },
  { label: 'Overdraft', value: 'overdraft' },
  { label: 'Interest Subvention', value: 'subvention' },
  { label: 'Other', value: 'other' },
];

export const alc = [
  { label: 'Andheri ALC', value: 'andheriAlc' },
  { label: 'Badlapur ALC', value: 'badlapurAlc' },
  { label: 'Byculla ALC', value: 'bycullaAlc' },
  { label: 'Chembur ALC', value: 'chemburAlc' },
  { label: 'Goregaon ALC', value: 'goregaonAlc' },
  { label: 'Kalina ALC', value: 'kalinaAlc' },
  { label: 'Kalyan ALC', value: 'kalyanAlc' },
  { label: 'Mira Road ALC', value: 'miraRoadAlc' },
  { label: 'Panvel ALC', value: 'panvelAlc' },
  { label: 'Sanpada ALC', value: 'sanpadaAlc' },
  { label: 'Thane ALC', value: 'thaneAlc' },
];

export const qualification = [
  { label: 'Uneducated', value: 'uneducated' },
  { label: 'S.S.C', value: 'ssc' },
  { label: 'H.S.C', value: 'hsc' },
  { label: 'Graduate', value: 'graduate' },
  { label: 'Post Graduate', value: 'postGraduate' },
  { label: 'B.Com', value: 'bcom' },
  { label: 'CA', value: 'ca' },
  { label: 'CS', value: 'cs' },
  { label: 'Fashion Designer', value: 'fashionDesigner' },
  { label: 'Interior Designer', value: 'interiorDesigner' },
  { label: 'LLB', value: 'llb' },
];

export const natureOfAddress = [
  { label: 'House Wife', value: 'houseWife' },
  { label: 'Manufacturing', value: 'manufacturing' },
  { label: 'Professional', value: 'professional' },
  { label: 'Salaried', value: 'salaried' },
  { label: 'Services', value: 'sercices' },
  { label: 'Trading', value: 'trading' },
  { label: 'Student', value: 'student' },
  { label: 'Trading or Manufacturing', value: 'tradingOrManufacturing' },
];

export const residenceStatus = [
  { label: 'Owned by Applicant', value: 'ownedByApplicant' },
  { label: 'Owned by Co-Applicant', value: 'ownedByCoApplicant' },
  {
    label: 'Jointly Owned by Applicant & Co-Applicants',
    value: 'jointlyOwnedByApplicant&CoApplicant',
  },
  { label: 'Self-Owned (Parental)', value: 'selfOwnedParental' },
  { label: 'Self-Constructed', value: 'selfConstructed' },
  { label: 'Rental', value: 'rental' },
  { label: 'Owned by Company', value: 'OwnedByCompany' },
  { label: 'Owned by Firm', value: 'ownedByFirm' },
  { label: 'Owned by Family Memeber', value: 'ownedByFamilyMember' },
  { label: 'Owned by Brother', value: 'ownedByBrother' },
  { label: 'Owned by Father', value: 'ownedByFather' },
  { label: 'Owned by Spouse', value: 'ownedBySpouse' },
  { label: 'Owned by Grand Parent', value: 'ownedByGrandFather' },
  { label: 'Owned by Mother', value: 'ownedByMother' },
  { label: 'Owned by Under Pagadi System', value: 'ownedByPagadiSystem' },
];

export const familyBcakgroundRealtion = [
  { label: 'Spouse', value: 'spouse' },
  { label: 'Mother', value: 'mother' },
  { label: 'Father', value: 'father' },
  { label: 'Mother & Father', value: 'motherFather' },
  { label: 'Brother', value: 'brother' },
  { label: 'Sister', value: 'sister' },
  { label: 'Son', value: 'son' },
  { label: 'Daughter', value: 'daughter' },
  { label: 'Kids', value: 'kids' },
  { label: 'Director', value: 'director' },
  { label: 'Partner', value: 'partner' },
];

export const familyBackgroundEarningStatus = [
  { label: 'Earning', value: 'earning' },
  { label: 'Dependent', value: 'dependent' },
  { label: 'NP', value: 'np' },
];

export const typesOfLoan = [
  { label: 'Home Loan', value: 'homeLoan' },
  { label: 'LAP', value: 'lap' },
  { label: 'Personal Loan', value: 'personalLoan' },
  { label: 'Vehicle Loan', value: 'vehicleLoan' },
  { label: 'Business Loan', value: 'businessLoan' },
  { label: 'Working Capital Loan', value: 'workingCapitalLoan' },
  { label: 'COVID Loan', value: 'covidLoan' },
  { label: 'Education Loan', value: 'educationLoan' },
  { label: 'Gold Loan', value: 'goldLoan' },
  { label: 'Term Loan', value: 'termLoan' },
];

export const remark = [
  { label: 'Taken to buy the property', value: 'takenToBuyTheProperty' },
  { label: 'Taken to buy machines', value: 'takenToBuyuMachines' },
  { label: 'Taken for personal reason', value: 'takenForPersonalReason' },
  {
    label: 'Taken for working Capital Requirment',
    value: 'takenForWorkingCapitalRequirment',
  },
  {
    label: 'Taken to met medical expences',
    value: 'takenToMetMedicalExpences',
  },
  {
    label: 'Taken to met ceremony expences',
    value: 'takenToMetCeremonyExpences',
  },
  { label: 'Taken for Renovation work', value: 'takenForRenovationWork' },
  { label: 'Taken to buy vehicle', value: 'takenToBuyVehicle' },
];

export const typeOfFacility = [
  { label: 'Cash Credit', value: 'cashCredit' },
  { label: 'Credit Card', value: 'creditCard' },
  { label: 'Overdraft', value: 'overdraft' },
  { label: 'Export Credit', value: 'exportCredit' },
  { label: 'Packing Credit', value: 'packingCredit' },
  { label: 'Dropline Overdraft', value: 'droplineOverdraft' },
];

export const particulars = [
  { label: 'Medium', value: 'medium' },
  { label: 'Term Plan', value: 'termPlan' },
  { label: 'LIC', value: 'lic' },
  { label: 'SIP', value: 'sip' },
  { label: 'Life Insurance', value: 'lifeInsurance' },
  { label: 'Health Insurance', value: 'healthInsurance' },
];

export const purchaseYear = [
  { label: '2022', value: '2022' },
  { label: 'Property not yet Finalised', value: 'properyNotYetFinalised' },
  {
    label: 'Property Details not provided',
    value: 'propertyDetailsNotProvided',
  },
];

export const occupiedBy = [
  { label: 'Tenant', value: 'tenant' },
  { label: 'Applicant', value: 'applicant' },
  { label: 'Current Owner/Seller', value: 'currentOwnerSeller' },
  { label: 'Vacant', value: 'vacant' },
  { label: 'Under Construction', value: 'underConstruction' },
  { label: 'NP', value: 'np' },
  { label: 'Given to Relative', value: 'givenToRelative' },
];

export const sourceOcr = [
  {
    label: 'Savings in form of Investments',
    value: 'savingsInFormOfInvestments',
  },
  {
    label: 'Business Receipts & Collection from Debtors',
    value: 'businessRceipts&CollectionFromDebators',
  },
  { label: 'Not Disclosed', value: 'notDisclosed' },
  { label: 'Savings in Bank', value: 'savingsInBank' },
  {
    label: 'Savings in form of Cash & Bank',
    value: 'savingsInFormOfCash&Bank',
  },
  { label: 'Arrange from Parents', value: 'arrangeFromParents' },
  { label: 'Arrange from friend', value: 'arrangeFromFriend' },
  { label: 'Arrange from Relative', value: 'arrangeFromRelative' },
  { label: 'Arrange from Market', value: 'arrangeFromMarket' },
  { label: 'Savings of Spouse', value: 'savingsOfSpouse' },
];

export const typesOfEntity = [
  { label: 'Proprietorship', value: 'proprietorship' },
  { label: 'Partnership', value: 'partnership' },
  { label: 'Partnership(LLP)', value: 'partnershipLLP' },
  { label: 'Private Limited Company', value: 'privateLimitedCompany' },
  { label: 'Public Limited Company', value: 'publiclimitedCompany' },
  { label: 'Professinal', value: 'professinal' },
  { label: 'Individual', value: 'individual' },
  { label: 'Salaried', value: 'salaried' },
];

export const generation = [
  { label: 'First Generation', value: 'firstGeneration' },
  { label: 'Second Generation', value: 'secondGeneration' },
  { label: 'Third Generation', value: 'thirdGeneration' },
  { label: 'Fourth Generation', value: 'fourthGeneration' },
];

export const vicinity = [
  {
    label: 'Commercial (Easily Accesible)',
    value: 'commercialEasilyAccessible',
  },
  {
    label: 'Residential (Easily Accessible)',
    value: 'residentalNotEasilyAccessible',
  },
  {
    label: 'Commercial (Not Easily Accesible)',
    value: 'commercialEasilyAccessible',
  },
  {
    label: 'Residental (Not Easily Accesible)',
    value: 'residentalNotEasilyAccessible',
  },
  {
    label: 'Residental cum Commercial (Not Easliy Accessible)',
    value: 'residentalCumCommercialNotEasilyAccessible',
  },
  {
    label: 'Residental cum commercial (Easily Accessible)',
    value: 'residentalCumCommercialEasilyAccessible',
  },
];

export const howWasTurnoverVerified = [
  {
    label: 'Turnover is not verified as documents were not provided',
    value: 'turnoverIsNotVerifiedAsDocumentsWereNotProvided',
  },
  {
    label: 'Turnover is not verified but few sample invoices were observed',
    value: 'turnoverIsNotVerifiedButFewSampleInvoicesWereObserved',
  },
  {
    label: 'Turnover is verified with financial statement',
    value: 'turnoverIsVerifiedWithFinancialStatement',
  },
  {
    label: 'Turnover is verified with GST Returns on average basis',
    value: 'turnoverIsVerifiedWithGSTReturnsOnAverageBasis',
  },
  {
    label: 'Turnover is verified with Provisional statement',
    value: 'turnoverIsVerifiedWithProvisionalStatement',
  },
  {
    label: 'Turnover is verified with Provisional hisab book',
    value: 'turnoverIsVerifiedWithProvisionalHisabBook',
  },
];

export const citiesOfRepresentation = [
  { label: 'Mumbai', value: 'mumbai' },
  {
    label: 'Mumbai & Navi Mumbai & Palghar',
    value: 'mumbai&NaviMumbai&Palghar',
  },
  { label: 'Mumbai, Navi Mumbai & Palghar', value: 'mumbaiNaviMumbai&Palghar' },
  { label: 'Maharashtra', value: 'maharashtra' },
  { label: 'Pan India', value: 'panIndia' },
  { label: 'All India', value: 'allIndia' },
  { label: 'India & Abroad', value: 'india&Abroad' },
];

export const incomeOfWhichApplicant = [
  { label: 'Applicant', value: 'Applicant' },
  { label: 'Applicant & Co-Applicant', value: 'Applicant&CoApplicant' },
  { label: 'Co-Applicant', value: 'CoApplicant' },
  { label: 'Co-Applicant 1', value: 'CoApplicant1' },
  { label: 'Co-Applicant 2', value: 'CoApplicant2' },
  { label: 'Co-Applicant 3', value: 'CoApplicant3' },
  { label: 'Co-Applicant 4', value: 'CoApplicant4' },
  { label: 'Co-Applicant 5', value: 'CoApplicant5' },
  { label: 'Co-Applicant 6', value: 'CoApplicant6' },
];

export const commentOnTrendOfBusinessOfPast2years = [
  {
    label: 'Cannot Comment as data was not provided',
    value: 'cannotCommentAsDataWasNotProvided',
  },
  {
    label: 'Comparison not possible due to non-availability of Information',
    value: 'comparisonNotPossibleDueToNonAvailabilityOfInformation',
  },
  { label: 'Business is in growing trend', value: 'businessIsInGrowingTrend' },
  {
    label: 'Business is in downword trend',
    value: 'businessIsInDownwordTrend',
  },
  { label: 'Business is stable', value: 'businessIsStable' },
];

export const futureProjection = [
  {
    label: 'Applicant will continue business as it is',
    value: 'applicantWillContinueBusinessAsIt',
  },
  { label: 'Future plans not disclosed', value: 'futurePlansNotDisclosed' },
  {
    label:
      'Applicant is planning to buy machineries and invest in working capital from LAP/Top-up',
    value:
      'applicantIsPlanningToBuyMachineriesAndInvestInWorkingCapitalFromLAP/Top-up',
  },
];

export const particularsN1 = [
  { label: 'Residence', value: 'residence' },
  { label: 'Agricutural Land', value: 'agriculturalLand' },
  { label: 'Banglow', value: 'banglow' },
  { label: 'Bike', value: 'bike' },
  { label: 'Car', value: 'car' },
  { label: 'Chowl', value: 'chowl' },
  { label: 'Commercial Complex', value: 'commercialComplex' },
  { label: 'Commercial Property', value: 'commercialProperty' },
  { label: 'Farmhouse', value: 'farmhouse' },
  { label: 'Flat', value: 'flat' },
  { label: 'Gala', value: 'gala' },
  { label: 'Industrial Property', value: 'industrialProperty' },
  { label: 'Land/Plot', value: 'landPlot' },
  { label: 'Machines', value: 'machines' },
  { label: 'Office', value: 'office' },
  { label: 'Scooty', value: 'scooty' },
  { label: 'Shop', value: 'shop' },
  { label: 'Tempo', value: 'tempo' },
  { label: 'Truck', value: 'truck' },
];

export const statusN1 = [
  { label: 'Owned by Applicant', value: 'ownedByApplicant' },
  { label: 'Owned by Co-Applicant', value: 'ownedByCoApplicant' },
  {
    label: 'Jointly Owned by Applicant & Co-Applicant',
    value: 'jointlyOwnedByApplicant&CoApplicant',
  },
  { label: 'Self-Owned by (Parental)', value: 'selfOwnedByParental' },
  { label: 'Self-constructed', value: 'selfConstrucetd' },
];

export const purchaseYa = [
  { label: '', value: '' },
  { label: '', value: '' },
  { label: '', value: '' },
  { label: '', value: '' },
  { label: '', value: '' },
  { label: '', value: '' },
  { label: '', value: '' },
];
