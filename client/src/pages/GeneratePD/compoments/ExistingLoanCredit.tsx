import { useEffect, useState } from 'react';
import ASingleSelect from '../../../components-global/ASingleSelect';
import AInputField from '../../../components-global/AInputField';
import ATags, { AddTagButton } from '../../../components-global/ATags';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';
import ASection from '../../../components-global/ASection';
import { useSelector } from 'react-redux';
import { getOptions } from '../../../utils';
import { yesNoOptions } from '../constants';
import AGroupFields from '../../../components-global/AGroupFields';

const existingLoanFooter = [
  {
    label: 'Total Loan Amt',
    value: '0',
  },
  {
    label: 'Total EMI Amt',
    value: '0',
  },
  {
    label: 'Total Outstanding Amt',
    value: '0',
  },
];

const creditFacilityFooter = [
  {
    label: 'Total Loan Amt',
    value: '0',
  },
  {
    label: 'Total Limit',
    value: '0',
  },
  {
    label: 'Average Utilization',
    value: '0',
  },
];

const commitmentsFooter = [
  {
    label: 'Total Contribution',
    value: '0',
  },
  {
    label: 'Total Sum Assured/Maturity',
    value: '0',
  },
];

const balanceTransferInfo = {
  isOpen: true,
  data: [],
};

const existingLoanInfo = {
  isOpen: true,
  data: [],
};

const existingLoanEMIInfo = {
  isOpen: true,
  data: [],
};

const LoanInformation = () => {
  const { allClients } = useSelector((state: any) => state.clients);
  const [clientOptions, setClientOptions] = useState<any>([]);
  useEffect(() => {
    setClientOptions(getOptions(allClients, 'name', 'name'));
  }, [allClients]);
  return (
    <AGroupFields>
      <ASingleSelect
        name={'typeOfLoan'}
        label={'Type of Loan'}
        options={[{ label: 'India', value: 'india' }]}
      />
      <ASingleSelect
        name={'bankName'}
        label={'Bank Name'}
        options={clientOptions}
      />
      <AInputField
        type={'number'}
        name={'loanAmount'}
        label={'Loan Amount (Lakhs)'}
      />
      <AInputField type={'number'} name={'tenure'} label={'Tenure (Months)'} />
      <AInputField type={'number'} name={'emi'} label={'EMI'} />
      <AInputField type={'text'} name={'outstanding'} label={'Outstanding'} />
      <ASingleSelect
        name={'remark'}
        label={'Remark'}
        options={[{ label: 'India', value: 'india' }]}
      />
    </AGroupFields>
  );
};

const ExistingLoan = () => {
  const [isExistingLoan, setIsExistingLoan] = useState('yes');
  const [existingLoan, setExistingLoan] = useState<any>([]);
  const [existingLoanEMI, setExistingLoanEMI] = useState<any>([]);
  const [balanceTransfer, setBalanceTransfer] = useState<any>([]);

  const handleExistingLoan = (val: string) => {
    setIsExistingLoan(val);
  };

  const addBussinessLoan = (tags: any) => {
    tags.push({
      ...balanceTransferInfo,
      id: `app${tags.length + 1}`,
      title: `Balance Transfer ${tags.length + 1}`,
    });
    setBalanceTransfer([...tags]);
  };

  const addExistingLoan = (tags: any) => {
    tags.push({
      ...existingLoanInfo,
      id: `loan${tags.length + 1}`,
      title: `Loan ${tags.length + 1}`,
    });
    setExistingLoan([...tags]);
  };

  const addExistingLoanEMI = (tags: any) => {
    tags.push({
      ...existingLoanEMIInfo,
      id: `loanEmi${tags.length + 1}`,
      title: `Loan ${tags.length + 1}`,
    });
    setExistingLoanEMI([...tags]);
  };

  return (
    <>
      <ARadioButtonGroup
        value={isExistingLoan}
        title={'Existing Loan'}
        radioValues={yesNoOptions}
        handleChecked={handleExistingLoan}
      />
      {isExistingLoan === 'yes' && (
        <>
          <ASection
            footers={existingLoanFooter}
            title={'Balance Transfer Loans (If Any)'}
          >
            {balanceTransfer.length > 0 ? (
              <ATags
                tags={balanceTransfer}
                addTag={addBussinessLoan}
                setTags={setBalanceTransfer}
              >
                <LoanInformation />
              </ATags>
            ) : (
              <AddTagButton
                title={'Add Bussiness Loan'}
                addLoan={() => addBussinessLoan(balanceTransfer)}
              />
            )}
          </ASection>
          <ASection
            footers={existingLoanFooter}
            title={
              'Existing Loan- Loan which will be closed from Current Applied Loan Amt or which are to be closed within 12 months. (If Any)'
            }
          >
            {existingLoan.length > 0 ? (
              <ATags
                tags={existingLoan}
                addTag={addExistingLoan}
                setTags={setExistingLoan}
              >
                <LoanInformation />
              </ATags>
            ) : (
              <AddTagButton
                title={'Add Existing Loan'}
                addLoan={() => addExistingLoan(existingLoan)}
              />
            )}
          </ASection>
          <ASection
            footers={existingLoanFooter}
            title={
              'Existing Loan (These EMI will be added in FOIR Ratio calculation)'
            }
          >
            {existingLoanEMI.length > 0 ? (
              <ATags
                tags={existingLoanEMI}
                addTag={addExistingLoanEMI}
                setTags={setExistingLoanEMI}
              >
                <LoanInformation />
              </ATags>
            ) : (
              <AddTagButton
                title={'Add Existing Loan'}
                addLoan={() => addExistingLoanEMI(existingLoanEMI)}
              />
            )}
          </ASection>
        </>
      )}
    </>
  );
};

const ceditFacilityInfo = {
  isOpen: true,
  data: [],
};

const CreditFacility = () => {
  const [isCreditFacility, setIsCreditFacility] = useState('yes');
  const [creditFacility, setCreditFacility] = useState<any>([]);

  const handleCreditFacility = (val: string) => {
    setIsCreditFacility(val);
  };

  const addCreditFacility = (tags: any) => {
    tags.push({
      ...ceditFacilityInfo,
      id: `cred${tags.length + 1}`,
      title: `Credit Details ${tags.length + 1}`,
    });
    setCreditFacility([...tags]);
  };

  return (
    <>
      <ARadioButtonGroup
        value={isCreditFacility}
        title={'Credit Facility'}
        radioValues={yesNoOptions}
        handleChecked={handleCreditFacility}
      />
      {isCreditFacility === 'yes' && (
        <ASection
          footers={creditFacilityFooter}
          title={'Credit Facility Details'}
        >
          {creditFacility.length > 0 ? (
            <ATags
              tags={creditFacility}
              addTag={addCreditFacility}
              setTags={setCreditFacility}
            >
              <AGroupFields>
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
              </AGroupFields>
            </ATags>
          ) : (
            <AddTagButton
              title={'Add Credit Facility'}
              addLoan={() => addCreditFacility(creditFacility)}
            />
          )}
        </ASection>
      )}
    </>
  );
};

const commitmentsInfo = {
  isOpen: true,
  data: [],
};

const OtherCommitments = () => {
  const [isOtherCommitments, setIsOtherCommitments] = useState('yes');
  const [otherCommitments, setOtherCommitments] = useState<any>([]);

  const handleOtherCommitments = (val: string) => {
    setIsOtherCommitments(val);
  };
  
  const addOtherCommitments = (tags: any) => {
    tags.push({
      ...commitmentsInfo,
      id: `com${tags.length + 1}`,
      title: `Comitment Details ${tags.length + 1}`,
    });
    setOtherCommitments([...tags]);
  };


  return (
    <>
      <ARadioButtonGroup
        value={isOtherCommitments}
        title={'Other Commitments'}
        radioValues={yesNoOptions}
        handleChecked={handleOtherCommitments}
      />
      {isOtherCommitments === 'yes' && (
        <ASection
          footers={commitmentsFooter}
          title={'Other Commitments Details'}
        >
          {otherCommitments.length > 0 ? (
            <ATags
              tags={otherCommitments}
              addTag={addOtherCommitments}
              setTags={setOtherCommitments}
            >
              <AGroupFields col={3}>
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
              </AGroupFields>
            </ATags>
          ) : (
            <AddTagButton
              title={'Add Commitments'}
              addLoan={() => addOtherCommitments(otherCommitments)}
            />
          )}
        </ASection>
      )}
    </>
  );
};

const ExistingLoanCredit = ({ formik }: any) => {
  return (
    <div className="flex flex-col w-full">
      <ExistingLoan />
      <CreditFacility />
      <OtherCommitments />
    </div>
  );
};

export default ExistingLoanCredit;
