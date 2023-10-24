import { useState } from 'react';
import ASingleSelect from '../../../components-global/ASingleSelect';
import AInputField from '../../../components-global/AInputField';
import ARadiobox from '../../../components-global/ARadiobox';
import ATags from '../../../components-global/ATags';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from '@material-tailwind/react';

const CheckExistingLoanCredit = ({
  title,
  value,
  handleLoanCreditType,
}: any) => {
  return (
    <div className="flex items-center gap-4 py-4">
      <div className="min-w-[25%]">{title}</div>
      <div className="flex">
        <ARadiobox
          name={'yes'}
          label={'Yes'}
          variant={'horizantal'}
          checked={value === 'yes'}
          handleChecked={() => handleLoanCreditType('yes')}
        />
        <ARadiobox
          name={'no'}
          label={'No'}
          variant={'horizantal'}
          checked={value === 'no'}
          handleChecked={() => handleLoanCreditType('on')}
        />
        <ARadiobox
          variant={'horizantal'}
          name={'noDetail'}
          label={'Details Not Provided'}
          checked={value === 'noDetail'}
          handleChecked={() => handleLoanCreditType('noDetail')}
        />
      </div>
    </div>
  );
};

const ExistingLoanInformation = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 rounded-lg border-[1.5px] border-stroke bg-transparent py-2.5 px-3 mt-3">
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

const ExistingLoan = () => {
  const [existingLoan, setExistingLoan] = useState('yes');

  const handleExistingLoan = (val: string) => {
    setExistingLoan(val);
  };

  return (
    <>
      <CheckExistingLoanCredit
        title={'Existing Loan'}
        value={existingLoan}
        handleLoanCreditType={handleExistingLoan}
      />
      {existingLoan === 'yes' && (
        <>
          <p className="w-full mt-1">Balance Transfer Loans (If Any)</p>
          <ATags>
            <ExistingLoanInformation />
          </ATags>

          <p className="w-full mt-4">
            Existing Loan- Loan which will be closed from Current Applied Loan
            Amt or which are to be closed within 12 months. (If Any)
          </p>
          <ATags>
            <ExistingLoanInformation />
          </ATags>

          <p className="w-full mt-4">
            Existing Loan (These EMI will be added in FOIR Ratio calculation)
          </p>
          <ATags>
            <ExistingLoanInformation />
          </ATags>
        </>
      )}
    </>
  );
};

const CreditFacility = () => {
  const [creditFacility, setCreditFacility] = useState('yes');

  const handleCreditFacility = (val: string) => {
    setCreditFacility(val);
  };

  return (
    <>
      <CheckExistingLoanCredit
        title={'Existing Loan'}
        value={creditFacility}
        handleLoanCreditType={handleCreditFacility}
      />
      {creditFacility === 'yes' && (
        <>
          <p className="w-full mt-1">Balance Transfer Loans (If Any)</p>
          <ATags>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 rounded-lg border-[1.5px] border-stroke bg-transparent py-2.5 px-3 mt-3">
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
        </>
      )}
    </>
  );
};

const OtherCommitments = () => {
  const [otherCommitments, setOtherCommitments] = useState('yes');

  const handleOtherCommitments = (val: string) => {
    setOtherCommitments(val);
  };

  return (
    <>
      <CheckExistingLoanCredit
        title={'Existing Loan'}
        value={otherCommitments}
        handleLoanCreditType={handleOtherCommitments}
      />
      {otherCommitments === 'yes' && (
        <>
          <p className="w-full mt-1">Balance Transfer Loans (If Any)</p>
          <ATags>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 rounded-lg border-[1.5px] border-stroke bg-transparent py-2.5 px-3 mt-3">
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
                label={'Sum Assured/Maturity Value (Rs.)				'}
              />
            </div>
          </ATags>
        </>
      )}
    </>
  );
};

const existingLoanInfo = [
  {
    title: 'Existing Loan',
    component: <ExistingLoan />,
  },
  {
    title: 'Credit Facility',
    component: <CreditFacility />,
  },
  {
    title: 'Other Commitments',
    component: <OtherCommitments />,
  },
];

const ExistingLoanCredit = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      {existingLoanInfo.map((item, index) => {
        return (
          <Accordion open={open === index + 1}>
            <AccordionHeader onClick={() => handleOpen(index + 1)}>
              {item.title}
            </AccordionHeader>
            <AccordionBody>{item.component}</AccordionBody>
          </Accordion>
        );
      })}
    </>
  );
};

export default ExistingLoanCredit;
