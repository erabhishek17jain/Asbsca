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

export const nilNoNpOptions = [
  { name: 'nil', label: 'Nil' },
  { name: 'na', label: 'NA' },
  { name: 'np', label: 'NP' },
];

export const propDetailsputPB = [
  { label: 'P', value: 'P' },
  { label: 'B', value: 'B' },
  { label: 'p', value: 'p' },
  { label: 'b', value: 'b' },
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
  { label: 'Earning', value: 'earning'},
  { label: 'Dependent', value: 'dependent'},
  { label: 'NP', value: 'np'},
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

