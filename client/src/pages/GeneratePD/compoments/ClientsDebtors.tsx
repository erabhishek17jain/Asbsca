import { useState } from 'react';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';
import AInputField from '../../../components-global/AInputField';
import ATags from '../../../components-global/ATags';
import ASection from '../../../components-global/ASection';
import AGroupFields from '../../../components-global/AGroupFields';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const clientsInfo = {
  id: 'trun1',
  isOpen: true,
  data: [],
};

const debators = [
  { title: 'Debtors more than 6 Months' },
  { title: 'Debtors less than 6 Months' },
];

const ClientsDebtors = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const [isClients, setIsClients] = useState('');
  const [isDebtors, setIsDebtors] = useState('');
  const [clientsDetails, setClientsDetails] = useState([{ ...clientsInfo }]);

  const handleClients = (val: string) => {
    setIsClients(val);
  };
  const handleDebtors = (val: string) => {
    setIsDebtors(val);
  };

  
  const initialValues = {
    loan: '',
    loanType: '',
    bankName: '',
  };

  const validationSchema = Yup.object().shape({
    loan: Yup.string().required('This field is required'),
    loanType: Yup.string().required('This field is required'),
    bankName: Yup.string().required('This field is required'),
  });

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
            isReset={true}
            value={isClients}
            title={'Clients'}
            handleChecked={handleClients}
            radioValues={[]}
          />
          {isClients == '' && (
            <ASection>
              <AGroupFields col={2}>
                <AInputField
                  type={'text'}
                  name={'noOfClients'}
                  label={'No of Clients/Daily Foot Fall'}
                />
              </AGroupFields>
              <p className="w-full pb-3">Major Clients</p>
              <ATags
                tags={clientsDetails}
                defaultTag={clientsDetails}
                setTags={setClientsDetails}
              >
                <AGroupFields col={2}>
                  <AInputField
                    type={'text'}
                    name={'clientName'}
                    label={'Name of the client'}
                  />
                  <AInputField
                    type={'text'}
                    name={'contactNo'}
                    label={'Contact No'}
                  />
                </AGroupFields>
              </ATags>
            </ASection>
          )}
          <ARadioButtonGroup
            isReset={true}
            value={isDebtors}
            title={'Debtors'}
            handleChecked={handleDebtors}
            radioValues={[]}
          />
          <ASection>
            <div className="flex flex-col w-full">
              {isDebtors == '' &&
                debators.map((item) => (
                  <AGroupFields col={2} title={item.title}>
                    <AInputField
                      type={'text'}
                      name={'amount'}
                      label={'Amount'}
                    />
                    <AInputField
                      type={'text'}
                      name={'reason'}
                      label={'Reason for Debtors more than 6 Months'}
                    />
                  </AGroupFields>
                ))}
              <AGroupFields col={3}>
                {isDebtors == '' && (
                  <>
                    <AInputField
                      type={'text'}
                      name={'totalDebtors'}
                      label={'Total Debtors'}
                    />
                    <AInputField
                      type={'text'}
                      name={'periodAllowedToClient'}
                      label={'Cr. Period allowed to Clients'}
                    />
                  </>
                )}
                <AInputField
                  type={'text'}
                  name={'whyIrregular'}
                  label={'Why Ir-Regular?'}
                />
              </AGroupFields>
            </div>
          </ASection>
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

export default ClientsDebtors;
