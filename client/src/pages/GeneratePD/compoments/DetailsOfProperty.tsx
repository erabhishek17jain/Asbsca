import AInputField from '../../../components-global/AInputField';
import ASingleSelect from '../../../components-global/ASingleSelect';
import { useState } from 'react';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';
import ASection from '../../../components-global/ASection';
import AGroupFields from '../../../components-global/AGroupFields';
import ATags, { AddTagButton } from '../../../components-global/ATags';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const propertyLoanOptions = [
  { name: 'loanDetailsNotProvided', label: 'Loan Details Not Provided' },
  {
    name: 'propertyValueNotProvided',
    label: 'Property Vaue Not Provided',
  },
  { name: 'bothNotProvided', label: 'Both Not Provided' },
];

const loanFooter = [
  {
    label: 'Total Amt',
    value: '0',
  },
  {
    label: 'Total EMI',
    value: '0',
  },
];

const loanInfo = {
  isOpen: true,
  data: [],
};

const DetailsOfProperty = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const [loanPropertyEMI, setLoanPropertyEMI] = useState<string>('');
  const [loans, setLoans] = useState<any>([]);

  const handleLoanPropertyEMI = (val: string) => {
    setLoanPropertyEMI(val);
  };

  const addLoan = (tags: any) => {
    tags.push({
      ...loanInfo,
      id: `loan${tags.length + 1}`,
    });
    setLoans([...tags]);
  };

  const initialValues = {
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
        <div className="flex flex-col">
          <ASection title={'Property Details'}>
            <AGroupFields>
              <ASingleSelect
                name={'purchaseYear'}
                label={'Purchase Year'}
                options={[{ label: 'India', value: 'india' }]}
              />
              <AInputField
                
                name={'buildupArea'}
                label={'Build-up Area (Sq. Ft.)'}
              />
              <AInputField
                
                name={'carpetArea'}
                label={'Carpet Area (Sq. Ft.)'}
              />
              <ASingleSelect
                name={'occupiedBy'}
                label={'Occupied By'}
                options={[{ label: 'India', value: 'india' }]}
              />
              <AInputField
                
                name={'loanPropertyAddress'}
                label={'Loan Property Address'}
              />
              <AInputField
                
                name={'builderName'}
                label={'Builder Name'}
              />
            </AGroupFields>
          </ASection>
          <ARadioButtonGroup
            isReset={true}
            value={loanPropertyEMI}
            title={'Loan to Property'}
            radioValues={propertyLoanOptions}
            handleChecked={handleLoanPropertyEMI}
          />
          {(loanPropertyEMI === 'propertyValueNotProvided' ||
            loanPropertyEMI === '') && (
            <ASection title={'Loan Applied'} footers={loanFooter}>
              {loans.length > 0 ? (
                <ATags tags={loans} addTag={addLoan} setTags={setLoans}>
                  <AGroupFields>
                    <AInputField
                      
                      name={'amount'}
                      label={'Amount'}
                    />
                    <AInputField  name={'emi'} label={'EMI'} />
                    <AInputField  name={'roi'} label={'ROI'} />
                    <AInputField  name={'year'} label={'Year'} />
                  </AGroupFields>
                </ATags>
              ) : (
                <AddTagButton
                  title={'Add Loan'}
                  addLoan={() => addLoan(loans)}
                />
              )}
            </ASection>
          )}
          {(loanPropertyEMI === 'loanDetailsNotProvided' ||
            loanPropertyEMI === '') && (
            <ASection title={'Property Value'}>
              <AGroupFields>
                <AInputField
                  
                  name={'agreementValue'}
                  label={'Agreement Value'}
                />
                <AInputField
                  
                  name={'purchaseValue'}
                  label={'Purchase Value'}
                />
                <AInputField
                  
                  name={'marketValue'}
                  label={'Market Value'}
                />
                <div className="flex gap-3">
                  <AInputField
                    
                    name={'ocrPaid'}
                    label={'OCR Paid'}
                  />
                  <ASingleSelect name={'putPB'} label={'P/B'} options={[]} />
                </div>
                <AInputField
                  
                  name={'balanceOcr'}
                  label={'Balance OCR'}
                />
                <AInputField
                  
                  name={'sourceOcr'}
                  label={'Source OCR'}
                />
              </AGroupFields>
            </ASection>
          )}
          <AGroupFields col={2}>
            <AInputField
              
              name={'loanApplication'}
              label={'Loan as per application Form'}
            />
          </AGroupFields>
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

export default DetailsOfProperty;
