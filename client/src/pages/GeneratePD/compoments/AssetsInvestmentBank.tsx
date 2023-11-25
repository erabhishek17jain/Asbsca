import { useState } from 'react';
import AGroupFields from '../../../components-global/AGroupFields';
import AInputField from '../../../components-global/AInputField';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';
import ASection from '../../../components-global/ASection';
import ASingleSelect from '../../../components-global/ASingleSelect';
import ATags, { AddTagButton } from '../../../components-global/ATags';
import { yesNoOptions } from '../constants';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const businessAssetFooters = [
  {
    label: 'Total Market Value',
    value: '0',
  },
  {
    label: 'Total Rent P.M',
    value: '0',
  },
];

const personalAssetFooters = [
  {
    label: 'Total Market Value',
    value: '0',
  },
  {
    label: 'Total Rent P.M',
    value: '0',
  },
];

const investmentFooters = [
  {
    label: 'Total Contribution',
    value: '0',
  },
  {
    label: 'Total Market Value',
    value: '0',
  },
];

const bankAccountFooters = [
  {
    label: 'Total Balance on Day',
    value: '0',
  },
];

const businessAssetInfo = {
  isOpen: true,
  data: [],
};

const personalAssetInfo = {
  isOpen: true,
  data: [],
};

const investmentInfo = {
  isOpen: true,
  data: [],
};

const bankAccountInfo = {
  isOpen: true,
  data: [],
};

const AssetInformation = () => {
  return (
    <AGroupFields>
      <ASingleSelect
        name={'particularts'}
        label={'Particularts'}
        options={[{ label: 'India', value: 'india' }]}
      />
      <AInputField  name={'location'} label={'Location'} />
      <AInputField
        
        name={'purchaseYear'}
        label={'Purchase Year'}
      />
      <AInputField  name={'carpetArea'} label={'Carpet Area'} />
      <ASingleSelect
        name={'status'}
        label={'Status'}
        options={[{ label: 'India', value: 'india' }]}
      />
      <AInputField  name={'marketValue'} label={'Market Value'} />
      <AInputField  name={'remtPm'} label={'Rent P.M.'} />
    </AGroupFields>
  );
};

const AssetsInvestmentBank = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const [isBusinessAssets, setIsBusinessAssets] = useState('yes');
  const [businessAssets, setBusinessAssets] = useState<any>([]);

  const handleBusinessAssets = (val: string) => {
    setIsBusinessAssets(val);
  };

  const addBusinessAssets = (tags: any) => {
    tags.push({
      ...businessAssetInfo,
      id: `buss${tags.length + 1}`,
      title: `Business Asset ${tags.length + 1}`,
    });
    setBusinessAssets([...tags]);
  };

  const [isPersonalAssets, setIsPersonalAssets] = useState('yes');
  const [personalAssets, setPersonalAssets] = useState<any>([]);

  const handlePersonalAssets = (val: string) => {
    setIsPersonalAssets(val);
  };

  const addPersonalAssets = (tags: any) => {
    tags.push({
      ...personalAssetInfo,
      id: `pers${tags.length + 1}`,
      title: `Personal Asset ${tags.length + 1}`,
    });
    setPersonalAssets([...tags]);
  };

  const [isInvestments, setIsInvestments] = useState('yes');
  const [investments, setInvestments] = useState<any>([]);

  const handleInvestments = (val: string) => {
    setIsInvestments(val);
  };

  const addInvestments = (tags: any) => {
    tags.push({
      ...investmentInfo,
      id: `pers${tags.length + 1}`,
      title: `Personal Asset ${tags.length + 1}`,
    });
    setInvestments([...tags]);
  };

  const [isBankAccounts, setIsBankAccounts] = useState('yes');
  const [bankAccounts, setBankAccounts] = useState<any>([]);

  const handleBankAccounts = (val: string) => {
    setIsBankAccounts(val);
  };

  const addBankAccounts = (tags: any) => {
    tags.push({
      ...bankAccountInfo,
      id: `pers${tags.length + 1}`,
      title: `Personal Asset ${tags.length + 1}`,
    });
    setBankAccounts([...tags]);
  };

  const initialValues = {
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
      bankAccounts: [{ bankName: '', branch: '', type: '', balanceOnDay: '' }],
      totalBalance: '',
    },
  };

  const validationSchema = Yup.object().shape({});

  const validateFunction = async (values: any) => {
    console.log(values);
    const errors = {};
    return errors;
  };

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    setPayloads({ ...payloads, loanDetails: { ...values } });
    handleNext();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validate: validateFunction,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  return (
    <>
      <div className="absolute top-12 bottom-19 overflow-auto w-full">
        <div className="flex flex-col w-full">
          <ARadioButtonGroup
            value={isBusinessAssets}
            title={'Business Assets'}
            radioValues={yesNoOptions}
            handleChecked={handleBusinessAssets}
          />
          {isBusinessAssets === 'yes' && (
            <ASection
              title={'Business Asset Details'}
              footers={businessAssetFooters}
            >
              {businessAssets.length > 0 ? (
                <ATags
                  tags={businessAssets}
                  addTag={addBusinessAssets}
                  setTags={setBusinessAssets}
                >
                  <AssetInformation />
                </ATags>
              ) : (
                <AddTagButton
                  title={'Add Business Asset'}
                  addLoan={() => addBusinessAssets(businessAssets)}
                />
              )}
            </ASection>
          )}
          <ARadioButtonGroup
            value={isPersonalAssets}
            title={'Personal Assets'}
            radioValues={yesNoOptions}
            handleChecked={handlePersonalAssets}
          />
          {isPersonalAssets === 'yes' && (
            <ASection
              title={'Personal Asset Details'}
              footers={personalAssetFooters}
            >
              {personalAssets.length > 0 ? (
                <ATags
                  tags={personalAssets}
                  addTag={addPersonalAssets}
                  setTags={setPersonalAssets}
                >
                  <AssetInformation />
                </ATags>
              ) : (
                <AddTagButton
                  title={'Add Personal Asset'}
                  addLoan={() => addPersonalAssets(personalAssets)}
                />
              )}
            </ASection>
          )}
          <ARadioButtonGroup
            value={isInvestments}
            title={'Investments'}
            radioValues={yesNoOptions}
            handleChecked={handleInvestments}
          />
          {isInvestments === 'yes' && (
            <ASection title={'Investment Details'} footers={investmentFooters}>
              {investments.length > 0 ? (
                <ATags
                  tags={investments}
                  addTag={addInvestments}
                  setTags={setInvestments}
                >
                  <AGroupFields>
                    <ASingleSelect
                      name={'particularts'}
                      label={'Particularts'}
                      options={[{ label: 'India', value: 'india' }]}
                    />
                    <AInputField
                      
                      name={'contribution'}
                      label={'Contribution'}
                    />
                    <AInputField
                      
                      name={'marketValue'}
                      label={'Market Value'}
                    />
                  </AGroupFields>
                </ATags>
              ) : (
                <AddTagButton
                  title={'Add Investment'}
                  addLoan={() => addInvestments(investments)}
                />
              )}
            </ASection>
          )}
          <ARadioButtonGroup
            value={isBankAccounts}
            title={'Bank Account'}
            radioValues={yesNoOptions}
            handleChecked={handleBankAccounts}
          />
          {isBankAccounts === 'yes' && (
            <ASection
              title={'Bank Account Details'}
              footers={bankAccountFooters}
            >
              {bankAccounts.length > 0 ? (
                <ATags
                  tags={bankAccounts}
                  addTag={addBankAccounts}
                  setTags={setBankAccounts}
                >
                  <AGroupFields>
                    <ASingleSelect
                      name={'bankName'}
                      label={'Bank Name'}
                      options={[{ label: 'India', value: 'india' }]}
                    />
                    <AInputField
                      
                      name={'branch'}
                      label={'Branch'}
                    />
                    <ASingleSelect
                      name={'type'}
                      label={'Type'}
                      options={[{ label: 'India', value: 'india' }]}
                    />
                    <AInputField
                      
                      name={'balanceOnDay'}
                      label={'Balance On Day'}
                    />
                  </AGroupFields>
                </ATags>
              ) : (
                <AddTagButton
                  title={'Add Bank Account'}
                  addLoan={() => addBankAccounts(bankAccounts)}
                />
              )}
            </ASection>
          )}
        </div>
      </div>
      <AStepperPagination
        steps={steps}
        activeStep={activeStep}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </>
  );
};

export default AssetsInvestmentBank;
