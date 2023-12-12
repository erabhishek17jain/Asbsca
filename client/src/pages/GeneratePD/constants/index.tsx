import moment from 'moment';

export const reportSteps = [
  { index: 0, label: 'Loan & PD Details' },
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
  { index: 15, label: 'Photo & Screenshots' },
];

export const yesNoOptions = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },
  { value: 'Details Not Provided', label: 'Details Not Provided' },
];

export const putPB = [
  { value: 'P', label: 'P' },
  { value: 'B', label: 'B' },
  { value: 'P/B', label: 'P/B' },
];

export const loans = [
  { label: 'Home Loan', value: 'Home Loan' },
  { label: 'LAP', value: 'LAP' },
  { label: 'LAP: Existing Property', value: 'LAP: Existing Property' },
];

export const loanTypes = [
  { label: 'Fresh', value: 'Fresh' },
  { label: 'Balance Transfer', value: 'Balance Transfer' },
  { label: 'Top-up', value: 'Top-up' },
  { label: 'BT + Top-up', value: 'BT + Top-up' },
  { label: 'Overdraft', value: 'Overdraft' },
  { label: 'Interest Subvention', value: 'Interest Subvention' },
  { label: 'Other', value: 'Other' },
];

export const alcList = [
  { label: 'Andheri ALC', value: 'Andheri ALC' },
  { label: 'Badlapur ALC', value: 'Badlapur ALC' },
  { label: 'Byculla ALC', value: 'Byculla ALC' },
  { label: 'Chembur ALC', value: 'Chembur ALC' },
  { label: 'Goregaon ALC', value: 'Goregaon ALC' },
  { label: 'Kalina ALC', value: 'Kalina ALC' },
  { label: 'Kalyan ALC', value: 'Kalyan ALC' },
  { label: 'Mira Road ALC', value: 'Mira Road ALC' },
  { label: 'Panvel ALC', value: 'Panvel ALC' },
  { label: 'Sanpada ALC', value: 'Sanpada ALC' },
  { label: 'Thane ALC', value: 'Thane ALC' },
];

export const qualification = [
  { label: 'Uneducated', value: 'Uneducated' },
  { label: 'S.S.C', value: 'S.S.C' },
  { label: 'H.S.C', value: 'H.S.C' },
  { label: 'Graduate', value: 'Graduate' },
  { label: 'Post Graduate', value: 'Post Graduate' },
  { label: 'B.Com', value: 'B.Com' },
  { label: 'CA', value: 'CA' },
  { label: 'CS', value: 'CS' },
  { label: 'Fashion Designer', value: 'Fashion Designer' },
  { label: 'Interior Designer', value: 'Interior Designer' },
  { label: 'LLB', value: 'LLB' },
  { label: 'NP', value: 'NP' },
];

export const natureOfAddress = [
  { label: 'House Wife', value: 'House Wife' },
  { label: 'Manufacturing', value: 'Manufacturing' },
  { label: 'Professional', value: 'Professional' },
  { label: 'Salaried', value: 'Salaried' },
  { label: 'Services', value: 'Services' },
  { label: 'Trading', value: 'Trading' },
  { label: 'Student', value: 'Student' },
  {
    label: 'Trading or Manufacturing',
    value: 'Trading or Manufacturing',
  },
  { label: 'NP', value: 'NP' },
];

export const residenceStatus = [
  { label: 'Owned by Applicant', value: 'Owned by ApplicantP' },
  { label: 'Owned by Co-Applicant', value: 'Owned by Co-ApplicantP' },
  {
    label: 'Jointly Owned by Applicant & Co-Applicants',
    value: 'Jointly Owned by Applicant & Co-ApplicantsP',
  },
  { label: 'Self-Owned (Parental)', value: 'Self-Owned (Parental)P' },
  { label: 'Self-Constructed', value: 'Self-ConstructedP' },
  { label: 'Rental', value: 'RentalN' },
  { label: 'Owned by Company', value: 'Owned by CompanyB' },
  { label: 'Owned by Firm', value: 'Owned by FirmB' },
  {
    label: 'Owned by Family Memeber',
    value: 'Owned by Family MemeberN',
  },
  { label: 'Owned by Brother', value: 'Owned by BrotherN' },
  { label: 'Owned by Father', value: 'Owned by FatherN' },
  { label: 'Owned by Spouse', value: 'Owned by SpouseN' },
  { label: 'Owned by Grand Parent', value: 'Owned by Grand ParentN' },
  { label: 'Owned by Mother', value: 'Owned by MotherN' },
  {
    label: 'Owned by Under Pagadi System',
    value: 'Owned by Under Pagadi SystemN',
  },
  { label: 'NP', value: 'NP' },
];

export const residanceType = [
  { label: 'P', value: 'P' },
  { label: 'B', value: 'B' },
  { label: 'N', value: 'N' },
];

export const familyRealtion = [
  { label: 'Spouse', value: 'Spouse' },
  { label: 'Mother', value: 'Mother' },
  { label: 'Father', value: 'Father' },
  { label: 'Mother & Father', value: 'Mother & Father' },
  { label: 'Brother', value: 'Brother' },
  { label: 'Sister', value: 'Sister' },
  { label: 'Son', value: 'Son' },
  { label: 'Daughter', value: 'Daughter' },
  { label: 'Kids', value: 'Kids' },
  { label: 'Director', value: 'Director' },
  { label: 'Partner', value: 'Partner' },
  { label: 'NP', value: 'NP' },
];

export const earningStatus = [
  { label: 'Earning', value: 'Earning' },
  { label: 'Dependent', value: 'Dependent' },
  { label: 'NP', value: 'NP' },
];

export const propertyLoanOptions = [
  {
    label: 'Loan Details Not Provided',
    value: 'Loan Details Not Provided',
  },
  {
    label: 'Property Vaue Not Provided',
    value: 'Property Vaue Not Provided',
  },
  { label: 'Both Not Provided', value: 'Both Not Provided' },
];

export const typesOfLoan = [
  { label: 'Home Loan', value: 'Home Loan' },
  { label: 'LAP', value: 'LAP' },
  { label: 'Personal Loan', value: 'Personal Loan' },
  { label: 'Vehicle Loan', value: 'Vehicle Loan' },
  { label: 'Business Loan', value: 'Business Loan' },
  { label: 'Working Capital Loan', value: 'Working Capital Loan' },
  { label: 'COVID Loan', value: 'COVID Loan' },
  { label: 'Education Loan', value: 'Education Loan' },
  { label: 'Gold Loan', value: 'Gold Loan' },
  { label: 'Term Loan', value: 'Term Loan' },
  { label: 'Auto Loan', value: 'Auto Loan' },
  { label: 'Commercial Loan', value: 'Commercial Loan' },
  { label: 'Construction Equipment', value: 'Construction Equipment' },
  { label: 'NP', value: 'NP' },
];

export const banksList = [
  { label: 'Abhyudaya Bank', value: 'Abhyudaya Bank' },
  { label: 'AU Small Bank', value: 'AU Small Bank' },
  { label: 'Axis Bank', value: 'Axis Bank' },
  { label: 'Bandhan Bank', value: 'Bandhan Bank' },
  { label: 'Bank Of Baroda', value: 'Bank Of Baroda' },
  { label: 'Bank Of India', value: 'Bank Of India' },
  { label: 'Bank Of Maharastra', value: 'Bank Of Maharastra' },
  {
    label: 'Bassein Catholic Co-Op Bank',
    value: 'Bassein Catholic Co-Op Bank',
  },
  { label: 'Bharat Bank Mumbai', value: 'Bharat Bank Mumbai' },
  { label: 'Canera Bank', value: 'Canera Bank' },
  { label: 'Centra Bank Of India', value: 'Centra Bank Of India' },
  { label: 'Citi Bank', value: 'Citi Bank' },
  { label: 'DCB Bank', value: 'DCB Bank' },
  { label: 'Deustche Bank', value: 'Deustche Bank' },
  { label: 'Dhanlakshmi Bank', value: 'Dhanlakshmi Bank' },
  {
    label: 'Dombivili Nagari Sahakari Bank',
    value: 'Dombivili Nagari Sahakari Bank',
  },
  { label: 'Federal Bank', value: 'Federal Bank' },
  { label: 'HDFC Bank', value: 'HDFC Bank' },
  { label: 'ICICI Bank', value: 'ICICI Bank' },
  { label: 'IDBI Bank', value: 'IDBI Bank' },
  { label: 'IDFC First Bank', value: 'IDFC First Bank' },
  { label: 'Indian Bank', value: 'Indian Bank' },
  { label: 'Indian Overseas Bank', value: 'Indian Overseas Bank' },
  { label: 'Indusand Bank', value: 'Indusand Bank' },
  {
    label: 'Jankalyan Sahakari Bank',
    value: 'Jankalyan Sahakari Bank',
  },
  { label: 'Karnataka Bank', value: 'Karnataka Bank' },
  { label: 'Kotak Mahindra Bank', value: 'Kotak Mahindra Bank' },
  { label: 'Nkgsb Bank', value: 'Nkgsb Bank' },
  { label: 'Punjab National Bank', value: 'Punjab National Bank' },
  { label: 'RBL Bank', value: 'RBL Bank' },
  { label: 'South Indian Bank', value: 'South Indian Bank' },
  { label: 'Standard Charted Bank', value: 'Standard Charted Bank' },
  { label: 'State Bank Of India', value: 'State Bank Of India' },
  {
    label: 'Suryoday Small Finance Bank',
    value: 'Suryoday Small Finance Bank',
  },
  {
    label: 'The Malad Sahakari Bank',
    value: 'The Malad Sahakari Bank',
  },
  { label: 'UCO Bank', value: 'UCO Bank' },
  { label: 'Union Bank Of India', value: 'Union Bank Of India' },
  {
    label: 'Vasai Janata Sahakari Bank',
    value: 'Vasai Janata Sahakari Bank',
  },
  {
    label: 'Vasai Vikas Shahkari Bank',
    value: 'Vasai Vikas Shahkari Bank',
  },
  { label: 'Yes Bank', value: 'Yes Bank' },
  { label: 'NP', value: 'NP' },
];

export const bankTypes = [
  { label: 'CA', value: 'CA' },
  { label: 'SA', value: 'SA' },
  { label: 'OD', value: 'OD' },
  { label: 'CC', value: 'CC' },
  { label: 'DOD', value: 'DOD' },
  { label: 'NP', value: 'NP' },
];

export const existingLoanRemark = [
  {
    label: 'Taken to buy the property',
    value: 'Taken to buy the property',
  },
  { label: 'Taken to buy machines', value: 'Taken to buy machines' },
  {
    label: 'Taken for personal reason',
    value: 'Taken for personal reason',
  },
  {
    label: 'Taken for working Capital Requirment',
    value: 'Taken for working Capital Requirment',
  },
  {
    label: 'Taken to met medical expences',
    value: 'Taken to met medical expences',
  },
  {
    label: 'Taken to met ceremony expences',
    value: 'Taken to met ceremony expences',
  },
  {
    label: 'Taken for Renovation work',
    value: 'Taken for Renovation work',
  },
  { label: 'Taken to buy vehicle', value: 'Taken to buy vehicle' },
  { label: 'NP', value: 'NP' },
];

export const typeOfFacility = [
  { label: 'Cash Credit', value: 'Cash Credit' },
  { label: 'Credit Card', value: 'Credit Card' },
  { label: 'Overdraft', value: 'Overdraft' },
  { label: 'Export Credit', value: 'Export Credit' },
  { label: 'Packing Credit', value: 'Packing Credit' },
  { label: 'Dropline Overdraft', value: 'Dropline Overdraft' },
  { label: 'NP', value: 'NP' },
];

export const particularsCommitment = [
  { label: 'Mediclaim', value: 'Mediclaim' },
  { label: 'Term Plan', value: 'Term Plan' },
  { label: 'LIC', value: 'LIC' },
  { label: 'SIP', value: 'SPI' },
  { label: 'Life Insurance', value: 'Life Insurance' },
  { label: 'Health Insurance', value: 'Health Insurance' },
  { label: 'NP', value: 'NP' },
];

export const purchaseYear = [
  {
    label: moment().subtract(1, 'y').year(),
    value: moment().subtract(1, 'y').year(),
  },
  {
    label: 'Property not yet Finalised',
    value: 'Property not yet Finalised',
  },
  {
    label: 'Property Details not provided',
    value: 'Property Details not provided',
  },
  { label: 'NP', value: 'NP' },
];

export const occupiedBy = [
  { label: 'Tenant', value: 'Tenant' },
  { label: 'Applicant', value: 'Applicant' },
  { label: 'Current Owner/Seller', value: 'Current Owner/Seller' },
  { label: 'Vacant', value: 'Vacant' },
  { label: 'Under Construction', value: 'Under Construction' },
  { label: 'Given to Relative', value: 'Given to Relative' },
  {
    label: 'Property not yet Finalised',
    value: 'Property not yet Finalised',
  },
  {
    label: 'Property Details not provided',
    value: 'Property Details not provided',
  },
  { label: 'NP', value: 'NP' },
];

export const sourceOcr = [
  {
    label: 'Savings in form of Investments',
    value: 'Savings in form of Investments',
  },
  {
    label: 'Business Receipts & Collection from Debtors',
    value: 'Business Receipts & Collection from Debtors',
  },
  { label: 'Not Disclosed', value: 'Not Disclosed' },
  { label: 'Savings in Bank', value: 'Savings in Bank' },
  {
    label: 'Savings in form of Cash & Bank',
    value: 'Savings in form of Cash & Bank',
  },
  { label: 'Arrange from Parents', value: 'Arrange from Parents' },
  { label: 'Arrange from friend', value: 'Arrange from friend' },
  { label: 'Arrange from Relative', value: 'Arrange from Relative' },
  { label: 'Arrange from Market', value: 'Arrange from Market' },
  { label: 'Savings of Spouse', value: 'Savings of Spouse' },
  { label: 'NP', value: 'NP' },
];

export const generation = [
  { label: 'First Generation', value: 'First Generation' },
  { label: 'Second Generation', value: 'Second Generation' },
  { label: 'Third Generation', value: 'Third Generation' },
  { label: 'Fourth Generation', value: 'Fourth Generation' },
  { label: 'NP', value: 'NP' },
];

export const typesOfEntity = [
  { label: 'Proprietorship', value: 'Proprietorship' },
  { label: 'Partnership', value: 'Partnership' },
  { label: 'Partnership(LLP)', value: 'Partnership(LLP)' },
  {
    label: 'Private Limited Company',
    value: 'Private Limited Company',
  },
  { label: 'Public Limited Company', value: 'Public Limited Company' },
  { label: 'Professinal', value: 'Professinal' },
  { label: 'Individual', value: 'Individual' },
  { label: 'Salaried', value: 'Salaried' },
  { label: 'NP', value: 'NP' },
];

export const designations = [
  { label: 'Proprietor', value: 'Proprietor' },
  { label: 'Partner', value: 'Partner' },
  { label: 'Director', value: 'Director' },
  { label: 'Professional', value: 'Professional' },
  { label: 'Individual', value: 'Individual' },
  { label: 'Salaried', value: 'Salaried' },
  { label: 'NP', value: 'NP' },
];

export const designation = [
  { label: 'Proprietor', value: 'Proprietorship' },
  { label: 'Partner', value: 'Partnership' },
  { label: 'Partner', value: 'Partnership(LLP)' },
  { label: 'Director', value: 'Private Limited Company' },
  { label: 'Director', value: 'Public Limited Company' },
  { label: 'Professinal', value: 'Professinal' },
  { label: 'Individual', value: 'Individual' },
  { label: 'Salaried', value: 'Salaried' },
  { label: 'NP', value: 'NP' },
];

export const vicinity = [
  {
    label: 'Commercial (Easily Accesible)',
    value: 'Commercial (Easily Accesible)',
  },
  {
    label: 'Residential (Easily Accessible)',
    value: 'Residential (Easily Accessible)',
  },
  {
    label: 'Commercial (Not Easily Accesible)',
    value: 'Commercial (Not Easily Accesible)',
  },
  {
    label: 'Residental (Not Easily Accesible)',
    value: 'Residental (Not Easily Accesible)',
  },
  {
    label: 'Residental cum Commercial (Not Easliy Accessible)',
    value: 'Residental cum Commercial (Not Easliy Accessible)',
  },
  {
    label: 'Residental cum commercial (Easily Accessible)',
    value: 'Residental cum commercial (Easily Accessible)',
  },
  { label: 'NP', value: 'NP' },
];

export const turnoverVerified = [
  {
    label: 'Turnover is not verified as documents were not provided',
    value: 'Turnover is not verified as documents were not provided',
  },
  {
    label: 'Turnover is not verified but few sample invoices were observed',
    value: 'Turnover is not verified but few sample invoices were observed',
  },
  {
    label: 'Turnover is verified with financial statement',
    value: 'Turnover is verified with financial statement',
  },
  {
    label: 'Turnover is verified with GST Returns on average basis',
    value: 'Turnover is verified with GST Returns on average basis',
  },
  {
    label: 'Turnover is verified with Provisional statement',
    value: 'Turnover is verified with Provisional statement',
  },
  {
    label: 'Turnover is verified with Provisional hisab book',
    value: 'Turnover is verified with Provisional hisab book',
  },
  { label: 'NP', value: 'NP' },
];

export const citiesOfRepresentation = [
  { label: 'Mumbai', value: 'Mumbai' },
  {
    label: 'Mumbai & Navi Mumbai & Palghar',
    value: 'Mumbai & Navi Mumbai & Palghar',
  },
  {
    label: 'Mumbai, Navi Mumbai & Palghar',
    value: 'Mumbai, Navi Mumbai & Palghar',
  },
  { label: 'Maharashtra', value: 'Maharashtra' },
  { label: 'Pan India', value: 'Pan India' },
  { label: 'India & Abroad', value: 'India & Abroad' },
  { label: 'NP', value: 'NP' },
];

export const fixedEmployee = [
  { label: 'Yes', value: 'Yes' },
  { label: 'No', value: 'No' },
  {
    label: 'Yes but emoloyee not seen',
    value: 'Yes but emoloyee not seen',
  },
  { label: 'NP', value: 'NP' },
];

// show list from personal details
export const applicantIncome = [
  { label: 'Applicant', value: 'Applicant' },
  {
    label: 'Applicant & Co-Applicant',
    value: 'Applicant & Co-Applicant',
  },
  { label: 'Co-Applicant', value: 'Co-Applicant' },
  { label: 'Co-Applicant 1', value: 'Co-Applicant 1' },
  { label: 'Co-Applicant 2', value: 'Co-Applicant 2' },
  { label: 'Co-Applicant 3', value: 'Co-Applicant 3' },
  { label: 'Co-Applicant 4', value: 'Co-Applicant 4' },
  { label: 'Co-Applicant 5', value: 'Co-Applicant 5' },
  { label: 'Co-Applicant 6', value: 'Co-Applicant 6' },
  { label: 'NP', value: 'NP' },
];

export const trendOfBusiness = [
  {
    label: 'Cannot Comment as data was not provided',
    value: 'Cannot Comment as data was not provided',
  },
  {
    label: 'Comparison not possible due to non-availability of Information',
    value: 'Comparison not possible due to non-availability of Information',
  },
  {
    label: 'Business is in growing trend',
    value: 'Business is in growing trend',
  },
  {
    label: 'Business is in downword trend',
    value: 'Business is in downword trend',
  },
  { label: 'Business is stable', value: 'Business is stable' },
  { label: 'NP', value: 'NP' },
];

export const futureProjection = [
  {
    label: 'Applicant will continue business as it is',
    value: 'Applicant will continue business as it is',
  },
  {
    label: 'Future plans not disclosed',
    value: 'Future plans not disclosed',
  },
  {
    label:
      'Applicant is planning to buy machineries and invest in working capital from LAP/Top-up',
    value:
      'Applicant is planning to buy machineries and invest in working capital from LAP/Top-up',
  },
  { label: 'NP', value: 'NP' },
];

export const particularsAssets = [
  { label: 'Residence', value: 'Residence' },
  { label: 'Agricutural Land', value: 'Agricutural Land' },
  { label: 'Banglow', value: 'Banglow' },
  { label: 'Bike', value: 'Bike' },
  { label: 'Car', value: 'Car' },
  { label: 'Chowl', value: 'Chowl' },
  { label: 'Commercial Complex', value: 'Commercial Complex' },
  { label: 'Commercial Property', value: 'Commercial Property' },
  { label: 'Farmhouse', value: 'Farmhouse' },
  { label: 'Flat', value: 'Flat' },
  { label: 'Gala', value: 'Gala' },
  { label: 'Industrial Property', value: 'Industrial Property' },
  { label: 'Land/Plot', value: 'Land/Plot' },
  { label: 'Machines', value: 'Machines' },
  { label: 'Office', value: 'Office' },
  { label: 'Scooty', value: 'Scooty' },
  { label: 'Shop', value: 'Shop' },
  { label: 'Tempo', value: 'Tempo' },
  { label: 'Truck', value: 'Truck' },
  { label: 'NP', value: 'NP' },
];

export const statusAssets = [
  { label: 'Owned by Applicant', value: 'Owned by ApplicantP' },
  { label: 'Owned by Co-Applicant', value: 'Owned by Co-ApplicantP' },
  {
    label: 'Jointly Owned by Applicant & Co-ApplicantP',
    value: 'Jointly Owned by Applicant & Co-ApplicantP',
  },
  {
    label: 'Self-Owned by (Parental)P',
    value: 'Self-Owned by (Parental)P',
  },
  { label: 'Self-constructed', value: 'Self-constructedP' },
  { label: 'NP', value: 'NP' },
];

export const assetStatus = [
  { label: 'Rented', value: 'Rented' },
  { label: 'Vacant', value: 'Vacant' },
  { label: 'Self-Occupied', value: 'Self-Occupied' },
  { label: 'NP', value: 'NP' },
];

export const particularsInvestment = [
  { label: 'Bond', value: 'Bond' },
  {
    label: 'Shares & Stocks (Equity)',
    value: 'Shares & Stocks (Equity)',
  },
  { label: 'Fixed Deposit', value: 'Fixed Deposit' },
  { label: 'Mutual Funds', value: 'Mutual Funds' },
  { label: 'PF', value: 'PF' },
  { label: 'Silver', value: 'Silver' },
  { label: 'Gold', value: 'Gold' },
  { label: 'ULIP', value: 'ULIP' },
  { label: 'Cryptocurrencies', value: 'Cryptocurrencies' },
  { label: 'NP', value: 'NP' },
];

export const assetReasons = [
  {
    label: 'Reason fow low asset backing was not provided.',
    value: 'Reason fow low asset backing was not provided.',
  },
  {
    label:
      'Asset backing is as recently their business became profitable recently.',
    value:
      'Asset backing is as recently their business became profitable recently.',
  },
  {
    label: 'Asset backing is low as savings are invested in his spouse name.',
    value: 'Asset backing is low as savings are invested in his spouse name.',
  },
  {
    label: 'Asset backing is as recently they done wedding expenses.',
    value: 'Asset backing is as recently they done wedding expenses.',
  },
  {
    label: 'Asset backing is as recently they done major medical expenses.',
    value: 'Asset backing is as recently they done major medical expenses.',
  },
  { label: 'NP', value: 'NP' },
];

export const thirdPartyCheck = [
  { label: 'Positive', value: 'Positive' },
  { label: 'Negative', value: 'Negative' },
  { label: 'Not Done', value: 'Not Done' },
];

export const activityReason = [
  {
    label: 'As visited residence address',
    value: 'As visited residence address',
  },
  {
    label: 'Visited after working hours',
    value: 'Visited after working hours',
  },
  {
    label: 'Activity is generally at site',
    value: 'Activity is generally at site',
  },
  { label: 'NP', value: 'NP' },
];

export const stockReason = [
  {
    label: 'Stock is kept at Godown',
    value: 'Stock is kept at Godown',
  },
  {
    label: 'Stock is ardered as & when required',
    value: 'Stock is ardered as & when required',
  },
  {
    label: 'We weew not allowed to see the stock',
    value: 'We weew not allowed to see the stock',
  },
  { label: 'NP', value: 'NP' },
];

export const applicantBehaviour = [
  { label: 'Co-operative', value: 'Co-operative' },
  { label: 'Reluctant', value: 'Reluctant' },
  {
    label: 'Co-operative but did not provide documents',
    value: 'Co-operative but did not provide documents',
  },
  {
    label: 'Co-operative but did not provide Financial Information',
    value: 'Co-operative but did not provide Financial Information',
  },
  {
    label: 'Extremly Reluctant in sharing information',
    value: 'Extremly Reluctant in sharing information',
  },
  {
    label: 'Extreamlt Rude in sharing information',
    value: 'Extreamlt Rude in sharing information',
  },
  { label: 'NP', value: 'NP' },
];

export const applicantDoing = [
  {
    label: 'Applicant was on call with his client',
    value: 'Applicant was on call with his client',
  },
  {
    label: 'Applicant was in meeting with his employees',
    value: 'Applicant was in meeting with his employees',
  },
  {
    label: 'Applicant was in meeting with his clients',
    value: 'Applicant was in meeting with his clients',
  },
  {
    label: 'Applicant was handling customers',
    value: 'Applicant was handling customers',
  },
  {
    label: 'Applicant was not present in office he came for PD afterwards',
    value: 'Applicant was not present in office he came for PD afterwards',
  },
  {
    label: 'Applicant was doing regular business activities',
    value: 'Applicant was doing regular business activities',
  },
  { label: 'NP', value: 'NP' },
];

export const employeeDoing = [
  {
    label: 'Employees were working in PC',
    value: 'Employees were working in PC',
  },
  {
    label: 'Workers were working on Machines',
    value: 'Workers were working on Machines',
  },
  {
    label: 'Employees doing their work',
    value: 'Employees doing their work',
  },
  {
    label: 'Employees were handling customers',
    value: 'Employees were handling customers',
  },
  { label: 'NP', value: 'NP' },
];

export const businessProcess = [
  { label: 'Trading (B2B)', value: 'Trading (B2B)' },
  {
    label: 'Service (With Purchases)',
    value: 'Service (With Purchases)',
  },
  { label: 'Salaried', value: 'Salaried' },
  { label: 'Service', value: 'Service' },
  { label: 'Retail - Shop', value: 'Retail - Shop' },
  { label: 'Resturant', value: 'Resturant' },
  { label: 'Resturant & Bar', value: 'Resturant & Bar' },
  { label: 'Hotel', value: 'Hotel' },
  { label: 'Retail & Wholesale', value: 'Retail & Wholesale' },
  { label: 'Hospital/Clinic', value: 'Hospital/Clinic' },
  { label: 'Manufacturing', value: 'Manufacturing' },
  { label: 'Other', value: 'Other' },
];