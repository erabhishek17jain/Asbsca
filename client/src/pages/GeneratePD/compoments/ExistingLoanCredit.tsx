import { useState } from 'react';
import ASingleSelect from '../../../components-global/ASingleSelect';
import AInputField from '../../../components-global/AInputField';
import ATags from '../../../components-global/ATags';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';

const radioValues = [
  { name: 'yes', label: 'Yes' },
  { name: 'no', label: 'No' },
  { name: 'noDetail', label: 'Details Not Provided' },
];
const balanceTransferInfo = {
  id: 'app1',
  title: 'Applicant',
  isOpen: true,
  data: [],
};
const existingLoanInfo = {
  id: 'res1',
  title: 'Residential & Ownership Details',
  isOpen: true,
  data: [],
};
const existingLoanEMIInfo = {
  id: 'fam1',
  title: 'Applicant',
  isOpen: true,
  data: [],
};

const ExistingLoanInformation = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      <ASingleSelect
        name={'typeOfLoan'}
        label={'Type of Loan'}
        options={[{ label: 'India', value: 'india' }]}
      />
      <ASingleSelect
        name={'bankName'}
        label={'Bank Name'}
        options={[{ label: 'India', value: 'india' }]}
      />
      <AInputField type={'text'} name={'loanAmount'} label={'Loan Amount'} />
      <AInputField type={'text'} name={'tenure'} label={'Tenure (Months)'} />
      <AInputField type={'text'} name={'emi'} label={'EMI'} />
      <AInputField type={'text'} name={'outstanding'} label={'Outstanding'} />
      <ASingleSelect
        name={'remark'}
        label={'Remark'}
        options={[{ label: 'India', value: 'india' }]}
      />
    </div>
  );
};

const SectionFooter = () => {
  return (
    <>
      <div className="flex items-center bg-grey py-5 px-4">
        <p className="flex gap-4 w-full">
          <span>Total Loan Amt. PA: 36</span>
        </p>
        <p className="flex gap-4 w-full">
          <span>Total EMI Amt: 60%</span>
        </p>
        <p className="flex gap-4 w-full">
          <span>Total Outstanding Amt: 60%</span>
        </p>
      </div>
    </>
  );
};

const Section = ({ title, children }: any) => {
  return (
    <div className="border-2 rounded-lg mb-4">
      <p className="w-full pt-3 px-4">{title}</p>
      {children && <div className="pt-3 px-4">{children}</div>}
      <SectionFooter />
    </div>
  );
};

const ExistingLoan = () => {
  const [isExistingLoan, setIsExistingLoan] = useState('yes');
  const [existingLoan, setExistingLoan] = useState([{ ...existingLoanInfo }]);
  const [existingLoanEMI, setExistingLoanEMI] = useState([
    { ...existingLoanEMIInfo },
  ]);
  const [balanceTransfer, setBalanceTransfer] = useState([
    { ...balanceTransferInfo },
  ]);

  const handleExistingLoan = (val: string) => {
    setIsExistingLoan(val);
  };

  return (
    <>
      <ARadioButtonGroup
        value={isExistingLoan}
        title={'Existing Loan'}
        radioValues={radioValues}
        handleChecked={handleExistingLoan}
      />
      {isExistingLoan === 'yes' && (
        <>
          <Section title={'Balance Transfer Loans (If Any)'}>
            <ATags
              tags={balanceTransfer}
              setTags={setBalanceTransfer}
              defaultTag={{}}
            >
              <ExistingLoanInformation />
            </ATags>
          </Section>

          <Section
            title={
              'Existing Loan- Loan which will be closed from Current Applied Loan Amt or which are to be closed within 12 months. (If Any)'
            }
          >
            <ATags
              tags={existingLoan}
              setTags={setExistingLoan}
              defaultTag={{}}
            >
              <ExistingLoanInformation />
            </ATags>
          </Section>

          <Section
            title={
              'Existing Loan (These EMI will be added in FOIR Ratio calculation)'
            }
          >
            <ATags
              tags={existingLoanEMI}
              setTags={setExistingLoanEMI}
              defaultTag={{}}
            >
              <ExistingLoanInformation />
            </ATags>
          </Section>
        </>
      )}
    </>
  );
};

const CreditFacility = () => {
  const [isCreditFacility, setIsCreditFacility] = useState('yes');
  const [creditFacility, setCreditFacility] = useState([
    { ...existingLoanInfo },
  ]);

  const handleCreditFacility = (val: string) => {
    setIsCreditFacility(val);
  };

  return (
    <>
      <ARadioButtonGroup
        value={isCreditFacility}
        title={'Credit Facility'}
        radioValues={radioValues}
        handleChecked={handleCreditFacility}
      />
      {isCreditFacility === 'yes' && (
        <Section title={'Existing Credit Details'}>
          <ATags
            tags={creditFacility}
            setTags={setCreditFacility}
            defaultTag={{}}
          >
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
              <ASingleSelect
                name={'typeOfFacility'}
                label={'Type of Facility'}
                options={[{ label: 'India', value: 'india' }]}
              />
              <ASingleSelect
                name={'bankName'}
                label={'Bank Name'}
                options={[{ label: 'India', value: 'india' }]}
              />
              <AInputField type={'text'} name={'limit'} label={'Limit'} />
              <AInputField
                type={'text'}
                name={'averageUtilization'}
                label={'Average Utilization'}
              />
              <AInputField type={'text'} name={'emi'} label={'EMI'} />
              <AInputField
                type={'text'}
                name={'interestRate'}
                label={'Interest Rate (%)'}
              />
              <ASingleSelect
                name={'remark'}
                label={'Remark'}
                options={[{ label: 'India', value: 'india' }]}
              />
            </div>
          </ATags>
        </Section>
      )}
    </>
  );
};

const OtherCommitments = () => {
  const [isOtherCommitments, setIsOtherCommitments] = useState('yes');
  const [otherCommitments, setOtherCommitments] = useState([
    { ...existingLoanInfo },
  ]);

  const handleOtherCommitments = (val: string) => {
    setIsOtherCommitments(val);
  };

  return (
    <>
      <ARadioButtonGroup
        value={isOtherCommitments}
        title={'Other Commitments'}
        radioValues={radioValues}
        handleChecked={handleOtherCommitments}
      />
      {isOtherCommitments === 'yes' && (
        <Section title={'Existing Credit Details'}>
          <ATags
            tags={otherCommitments}
            setTags={setOtherCommitments}
            defaultTag={{}}
          >
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
              <ASingleSelect
                name={'particulars'}
                label={'Particulars'}
                options={[{ label: 'India', value: 'india' }]}
              />
              <AInputField
                type={'text'}
                name={'contribution'}
                label={'Contribution P.A.'}
              />
              <AInputField
                type={'text'}
                name={'sumAssured'}
                label={'Sum Assured/Maturity Value (Rs.)'}
              />
            </div>
          </ATags>
        </Section>
      )}
    </>
  );
};

const ExistingLoanCredit = () => {
  return (
    <div>
      <ExistingLoan />
      <CreditFacility />
      <OtherCommitments />
    </div>
  );
};

export default ExistingLoanCredit;
